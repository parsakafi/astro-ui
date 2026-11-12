import { describe, expect, it } from "vitest";
import { resolveLabels } from "../../src/utils/i18n";

const defaults = {
  previous: "Previous page",
  next: "Next page",
};

describe("resolveLabels", () => {
  it("returns the English defaults when no override is provided", () => {
    expect(resolveLabels(defaults)).toEqual(defaults);
  });

  it("overrides only the keys the consumer translated", () => {
    expect(resolveLabels(defaults, { next: "Seite weiter" })).toEqual({
      previous: "Previous page",
      next: "Seite weiter",
    });
  });

  it("ignores empty and undefined overrides", () => {
    expect(resolveLabels(defaults, { previous: "", next: undefined })).toEqual(
      defaults,
    );
  });

  it("does not mutate the defaults object", () => {
    resolveLabels(defaults, { previous: "Zurück" });
    expect(defaults.previous).toBe("Previous page");
  });
});
