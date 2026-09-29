import {describe, expect, it} from "vitest";
import {cn} from "../../src/utils/cn";

describe("cn", () => {
  it("joins truthy strings", () => {
    expect(cn("a", "b", "c")).toBe("a b c");
  });

  it("skips falsy values", () => {
    expect(cn("a", false, null, undefined, "", "b")).toBe("a b");
  });

  it("supports conditional maps", () => {
    expect(cn("base", {active: true, hidden: false, shown: undefined})).toBe(
      "base active",
    );
  });

  it("merges component classes with consumer overrides", () => {
    expect(cn("aui-btn", "aui-btn--primary", "w-full md:w-auto")).toBe(
      "aui-btn aui-btn--primary w-full md:w-auto",
    );
  });

  it("returns empty string for no input", () => {
    expect(cn()).toBe("");
  });
});
