/**
 * Demo code-tab copy — every DemoTabs code panel carries a copy button
 * that snapshots the panel's rendered <code> text (no per-demo payload),
 * wired by a single delegated, singleton-guarded handler.
 */
import {readFileSync} from "node:fs";
import {describe, expect, it} from "vitest";

const src = readFileSync("src/components/docs/DemoTabs.astro", "utf8");

describe("DemoTabs code copy", () => {
  it("renders a copy button inside the code panel", () => {
    expect(src).toContain('class="docs-copy-btn" data-copy-code');
    expect(src).toContain('aria-label="Copy code"');
  });

  it("copies the panel code text with a singleton delegated handler", () => {
    expect(src).toMatch(/__auiDemoCodeCopy/);
    expect(src).toContain('querySelector("code")?.textContent');
    expect(src).toContain("navigator.clipboard?.writeText(code)");
  });

  it("anchors the button to the code panel", () => {
    const scss = readFileSync("src/styles/docs.scss", "utf8");
    const block = scss.slice(scss.indexOf(".docs-demo-code {"), scss.indexOf(".docs-demo-code {") + 300);
    expect(block).toMatch(/position:\s*relative/);
  });
});
