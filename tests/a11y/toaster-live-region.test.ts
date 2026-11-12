import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

/**
 * Toaster renders six fixed stacks (one per screen corner). Only one of
 * them may be an `aria-live` region at a time, otherwise a screen reader
 * announces the same toast once per stack.
 */
const root = join(dirname(fileURLToPath(import.meta.url)), "..", "..");
const source = readFileSync(
  join(root, "src", "components", "feedback", "Toaster.astro"),
  "utf8",
);

describe("Toaster live regions", () => {
  it("starts with no live regions in the server-rendered markup", () => {
    expect(source).not.toMatch(/aria-live="polite"/);
  });

  it("sets aria-live on the routed stack and removes it from the rest", () => {
    expect(source).toContain("var livePosition = 'bottom-right'");
    expect(source).toContain("stack.list.setAttribute('aria-live', 'polite')");
    expect(source).toContain("stack.list.removeAttribute('aria-live')");
  });

  it("routes the live region to the position that received the toast", () => {
    expect(
      source.match(/setLiveStack\(t\.position \|\| 'bottom-right'\)/g),
    ).toHaveLength(2);
  });
});
