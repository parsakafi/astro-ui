import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

/**
 * Dependency-free WCAG 2.1 contrast guard for the design tokens.
 *
 * This test intentionally parses `src/styles/tokens.css` (the single
 * source of truth) instead of duplicating hex values, so a token change
 * that drops a pair below AA fails here before it ships.
 *
 * The 0.1.0 tokens failed this suite on primary-hover, success, info and
 * warning (white text), and had no `-text` tokens for colored text on
 * neutral surfaces.
 */

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const css = readFileSync(join(root, "src", "styles", "tokens.css"), "utf8")
  // Comments can contain braces and `--ui-*:` examples - drop them first.
  .replace(/\/\*[\s\S]*?\*\//g, "");

type Theme = Record<string, string>;

function blockFor(selector: string): string {
  const start = css.indexOf(selector);
  if (start === -1) throw new Error(`selector not found: ${selector}`);
  const open = css.indexOf("{", start);
  let depth = 0;
  for (let i = open; i < css.length; i++) {
    if (css[i] === "{") depth++;
    else if (css[i] === "}") {
      depth--;
      if (depth === 0) return css.slice(open + 1, i);
    }
  }
  throw new Error(`unbalanced block for: ${selector}`);
}

function themeFrom(selector: string): Theme {
  const theme: Theme = {};
  for (const match of blockFor(selector).matchAll(
    /(--ui-[\w-]+)\s*:\s*([^;]+);/g,
  )) {
    theme[match[1]] = match[2].trim();
  }
  return theme;
}

const light = themeFrom(":root");
const dark = themeFrom('[data-theme="dark"]');

function resolve(value: string, theme: Theme): string | null {
  const ref = value.match(/^var\((--ui-[\w-]+)\)$/);
  if (ref) return resolve(theme[ref[1]] ?? "", theme);
  if (/^#[0-9a-f]{3,8}$/i.test(value)) return value;
  return null;
}

function token(name: string, theme: Theme): string {
  const value = theme[name];
  if (!value) throw new Error(`undefined token: ${name}`);
  const resolved = resolve(value, theme);
  if (!resolved) throw new Error(`non-color token: ${name} = ${value}`);
  return resolved;
}

function rgb(hex: string): [number, number, number] {
  let h = hex.replace("#", "");
  if (h.length === 3) {
    h = h
      .split("")
      .map((c) => c + c)
      .join("");
  }
  return [
    Number.parseInt(h.slice(0, 2), 16),
    Number.parseInt(h.slice(2, 4), 16),
    Number.parseInt(h.slice(4, 6), 16),
  ];
}

function luminance(hex: string): number {
  const [r, g, b] = rgb(hex).map((channel) => {
    const c = channel / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function contrast(a: string, b: string): number {
  const la = luminance(a);
  const lb = luminance(b);
  return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05);
}

/** Resolve `color-mix(in srgb, <fg> <pct>%, <bg>)` like a browser would. */
function mixSrgb(
  foreground: string,
  background: string,
  weight: number,
): string {
  const fg = rgb(foreground);
  const bg = rgb(background);
  const channels = fg.map((channel, i) =>
    Math.round(channel * weight + bg[i] * (1 - weight)),
  );
  return `#${channels.map((c) => c.toString(16).padStart(2, "0")).join("")}`;
}

function assertAA(
  theme: Theme,
  name: string,
  foreground: string,
  background: string,
  minimum = 4.5,
): void {
  const backgroundValue = background.startsWith("--ui-")
    ? token(background, theme)
    : (resolve(background, theme) ?? background);
  const ratio = contrast(token(foreground, theme), backgroundValue);
  expect(
    ratio,
    `${name}: ${foreground} on ${background} is ${ratio.toFixed(2)}:1 (needs ${minimum}:1)`,
  ).toBeGreaterThanOrEqual(minimum);
}

const COLOR_FAMILIES = ["success", "warning", "error", "info"] as const;

describe.each([
  ["light", light],
  ["dark", dark],
] as const)("%s theme contrast (WCAG AA)", (_label, theme) => {
  it("body text and muted text reach 4.5:1", () => {
    assertAA(theme, "foreground", "--ui-foreground", "--ui-background");
    assertAA(
      theme,
      "muted foreground",
      "--ui-muted-foreground",
      "--ui-background",
    );
    assertAA(
      theme,
      "muted foreground on muted",
      "--ui-muted-foreground",
      "--ui-muted",
    );
  });

  it("solid brand and status fills reach 4.5:1 with their foreground", () => {
    assertAA(theme, "primary", "--ui-primary", "--ui-primary-foreground");
    assertAA(
      theme,
      "primary hover",
      "--ui-primary-hover",
      "--ui-primary-foreground",
    );
    for (const family of COLOR_FAMILIES) {
      assertAA(theme, family, `--ui-${family}`, `--ui-${family}-foreground`);
    }
  });

  it("dedicated -text tokens reach 4.5:1 on the neutral background", () => {
    assertAA(theme, "primary text", "--ui-primary-text", "--ui-background");
    for (const family of COLOR_FAMILIES) {
      assertAA(
        theme,
        `${family} text`,
        `--ui-${family}-text`,
        "--ui-background",
      );
    }
  });

  it("dedicated -text tokens reach 4.5:1 on their muted surface", () => {
    for (const family of COLOR_FAMILIES) {
      assertAA(
        theme,
        `${family} text on muted`,
        `--ui-${family}-text`,
        `--ui-${family}-muted`,
      );
    }
  });

  it("soft brand text reaches 4.5:1 on its resolved 12% tint", () => {
    // Text tokens (not fill tokens) are used on tinted neutral surfaces:
    // a fill token dark enough for white text cannot also be light enough
    // for text on a 12% tint of itself (mathematically impossible).
    const tint = mixSrgb(
      token("--ui-primary", theme),
      token("--ui-background", theme),
      0.12,
    );
    const ratio = contrast(token("--ui-primary-text", theme), tint);
    expect(
      ratio,
      `primary text on soft tint ${tint} is ${ratio.toFixed(2)}:1`,
    ).toBeGreaterThanOrEqual(4.5);
  });
});

describe("dark theme is duplicated consistently", () => {
  it("system preference block mirrors the explicit dark theme", () => {
    const system = blockFor(':root:not([data-theme="light"])');
    for (const match of system.matchAll(/(--ui-[\w-]+)\s*:\s*([^;]+);/g)) {
      const [, name, value] = match;
      // Only assert tokens the system block redeclares.
      expect(dark[name], name).toBe(value.trim());
    }
  });
});
