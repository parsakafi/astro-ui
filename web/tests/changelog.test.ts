/**
 * Changelog parser — the release history page and the per-component
 * changelog tabs read CHANGELOG.md directly, so hard-wrapped bullets must
 * arrive as one string instead of being cut at the first source line.
 */
import {describe, expect, it} from "vitest";
import {forComponent, parseChangelog, renderBullet} from "../src/lib/changelog";

const markdown = `# Changelog

## [Unreleased]

## [0.3.0] - 2026-11-18

Short summary that is not a section.

### Added

- A first bullet that wraps
  onto a second line.

- A second bullet mentioning \`Slider\`.

### Fixed

- A fixed bullet with \`<select>\` and **bold**.
`;

describe("parseChangelog", () => {
  it("keeps version, date, sections, and wrapped bullet text", () => {
    const [unreleased, release] = parseChangelog(markdown);

    expect(unreleased.version).toBe("Unreleased");
    expect(Object.keys(unreleased.sections)).toEqual([]);
    expect(release).toMatchObject({version: "0.3.0", date: "2026-11-18"});
    expect(release.sections.added).toEqual([
      "A first bullet that wraps onto a second line.",
      "A second bullet mentioning `Slider`.",
    ]);
    expect(release.sections.fixed).toEqual([
      "A fixed bullet with `<select>` and **bold**.",
    ]);
  });

  it("filters entries by component name across the joined text", () => {
    const entries = forComponent(parseChangelog(markdown), "Slider");

    expect(entries).toHaveLength(1);
    expect(entries[0].version).toBe("0.3.0");
    expect(entries[0].sections).toEqual({
      added: ["A second bullet mentioning `Slider`."],
    });
  });
});

describe("renderBullet", () => {
  it("escapes raw HTML and restores code and bold", () => {
    expect(renderBullet("uses `<select>` and **bold**")).toBe(
      "uses <code>&lt;select&gt;</code> and <strong>bold</strong>",
    );
  });
});
