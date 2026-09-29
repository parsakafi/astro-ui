import {readFileSync} from "node:fs";
import {dirname, join} from "node:path";
import {fileURLToPath} from "node:url";
import {describe, expect, it} from "vitest";

const root = join(dirname(fileURLToPath(import.meta.url)), "..", "..");
const tokens = readFileSync(join(root, "src", "styles", "tokens.css"), "utf8");

const REQUIRED_TOKENS = [
  "--ui-primary",
  "--ui-secondary",
  "--ui-background",
  "--ui-foreground",
  "--ui-muted",
  "--ui-muted-foreground",
  "--ui-border",
  "--ui-input",
  "--ui-ring",
  "--ui-success",
  "--ui-warning",
  "--ui-error",
  "--ui-info",
  "--ui-font-sans",
  "--ui-radius-none",
  "--ui-radius-sm",
  "--ui-radius-md",
  "--ui-radius-lg",
  "--ui-radius-xl",
  "--ui-radius-full",
  "--ui-shadow-sm",
  "--ui-shadow-md",
  "--ui-shadow-lg",
  "--ui-shadow-xl",
  "--ui-transition-fast",
  "--ui-z-dialog",
  "--ui-focus-ring-width",
];

describe("design tokens", () => {
  for (const token of REQUIRED_TOKENS) {
    it(`defines ${token}`, () => {
      expect(tokens).toContain(`${token}:`);
    });
  }

  it("supports explicit dark theme via [data-theme=dark]", () => {
    expect(tokens).toContain('[data-theme="dark"]');
  });

  it("supports system theme via prefers-color-scheme", () => {
    expect(tokens).toContain("prefers-color-scheme: dark");
  });

  it("declares color-scheme for native form controls", () => {
    expect(tokens).toContain("color-scheme");
  });
});
