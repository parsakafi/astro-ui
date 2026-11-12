import { readdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

/**
 * Every component that exposes the `ariaLabel` convenience prop must
 * resolve it through `resolveAriaLabel`, so a native `aria-label`
 * attribute passed by the consumer always wins.
 */
const root = join(dirname(fileURLToPath(import.meta.url)), "..", "..");
const componentsDir = join(root, "src", "components");

const files: string[] = [];
const walk = (dir: string) => {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) walk(path);
    else if (entry.name.endsWith(".astro")) files.push(path);
  }
};
walk(componentsDir);

describe("aria-label consistency", () => {
  it("resolves ariaLabel through the shared helper wherever it is exposed", () => {
    const offenders: string[] = [];
    for (const file of files) {
      const source = readFileSync(file, "utf8");
      if (!/ariaLabel\??:/.test(source)) continue;
      if (!source.includes("resolveAriaLabel")) offenders.push(file);
    }
    expect(
      offenders,
      `components exposing ariaLabel must import resolveAriaLabel: ${offenders.join(", ")}`,
    ).toEqual([]);
  });

  it("Progress always exposes an accessible name", () => {
    const source = readFileSync(
      join(componentsDir, "data-display", "Progress.astro"),
      "utf8",
    );
    const labelled = source.match(
      /aria-label=\{resolveAriaLabel\(Astro\.props, ariaLabel \?\? label \?\? "Progress"\)\}/g,
    );
    expect(labelled).toHaveLength(2);
  });

  it("Avatar keeps its generated name when no explicit alt is supplied", () => {
    const source = readFileSync(
      join(componentsDir, "data-display", "Avatar.astro"),
      "utf8",
    );
    // alt === "" means the consumer asked for a decorative image.
    expect(source).toContain(
      'ariaLabel ?? (alt === "" ? undefined : resolvedAlt)',
    );
  });

  it("Badge only names elements through a role that permits aria-label", () => {
    const source = readFileSync(
      join(componentsDir, "data-display", "Badge.astro"),
      "utf8",
    );
    expect(
      source.match(/role=\{resolvedAriaLabel \? "img" : undefined\}/g),
    ).toHaveLength(2);
  });

  it("Combobox falls back to its value or placeholder for a name", () => {
    const source = readFileSync(
      join(componentsDir, "forms", "Combobox.astro"),
      "utf8",
    );
    expect(source).toContain("ariaLabel ?? initial?.label ?? placeholder");
  });

  it("Command points aria-activedescendant at real option ids", () => {
    const source = readFileSync(
      join(componentsDir, "general", "Command.astro"),
      "utf8",
    );
    expect(source).toMatch(/id=\{`\$\{uid\}-option-\$\{gi\}-\$\{ii\}`\}/);
    expect(source).toContain(
      'input.setAttribute("aria-activedescendant", current.id)',
    );
  });

  it("Checkbox applies the native indeterminate state", () => {
    const source = readFileSync(
      join(componentsDir, "forms", "Checkbox.astro"),
      "utf8",
    );
    expect(source).toContain(
      "data-indeterminate={isIndeterminate || undefined}",
    );
    expect(source).toContain(".indeterminate = true");
  });
});
