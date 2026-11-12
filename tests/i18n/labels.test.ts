import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

/**
 * The interactive/message-bearing components expose a partial `labels`
 * object (Chart uses `uiLabels` because `labels` is its data prop) and
 * merge it through `resolveLabels`, so a consumer can translate one
 * control without restating the rest.
 */
const root = join(dirname(fileURLToPath(import.meta.url)), "..", "..");
const components = [
  ["navigation/Pagination.astro", "labels"],
  ["general/Carousel.astro", "labels"],
  ["forms/DatePicker.astro", "labels"],
  ["forms/Autocomplete.astro", "labels"],
  ["forms/Combobox.astro", "labels"],
  ["forms/Textarea.astro", "labels"],
  ["overlay/Lightbox.astro", "labels"],
  ["data-display/Chart.astro", "uiLabels"],
] as const;

describe("localizable labels", () => {
  for (const [file, prop] of components) {
    it(`${file} exposes ${prop} and merges it over defaults`, () => {
      const source = readFileSync(
        join(root, "src", "components", file),
        "utf8",
      );
      expect(source).toMatch(new RegExp(`${prop}\\?: \\{`));
      expect(source).toContain("resolveLabels(");
      expect(source).toContain('from "../../utils/i18n"');
    });
  }

  it("Chart renders fallback-table headers through uiLabels", () => {
    const source = readFileSync(
      join(root, "src", "components", "data-display", "Chart.astro"),
      "utf8",
    );
    for (const key of ["category", "median", "bin", "measure", "target"]) {
      expect(source).toContain(`uiText.${key}`);
    }
  });

  it("DatePicker types the Today/Clear labels it already renders", () => {
    const source = readFileSync(
      join(root, "src", "components", "forms", "DatePicker.astro"),
      "utf8",
    );
    expect(source).toMatch(/today\?: string;/);
    expect(source).toMatch(/clear\?: string;/);
  });
});
