import { describe, expect, it } from "vitest";
import { resolveAriaLabel } from "../../src/utils/a11y";

describe("resolveAriaLabel", () => {
  it("prefers the native aria-label attribute", () => {
    expect(
      resolveAriaLabel({ "aria-label": "Native", ariaLabel: "Alias" }),
    ).toBe("Native");
  });

  it("falls back to the camelCase alias", () => {
    expect(resolveAriaLabel({ ariaLabel: "Alias" })).toBe("Alias");
  });

  it("uses the component default when neither is set", () => {
    expect(resolveAriaLabel({}, "Announcement")).toBe("Announcement");
  });

  it("ignores empty strings so a blank attribute cannot erase a default", () => {
    expect(
      resolveAriaLabel({ "aria-label": "", ariaLabel: "" }, "Dismiss"),
    ).toBe("Dismiss");
  });
});
