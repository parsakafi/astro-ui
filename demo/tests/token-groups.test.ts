/**
 * Token-group coverage — every light `:root` variable in tokens.css
 * must appear in exactly one playground group (src/lib/token-groups.ts),
 * so the styling playground never drifts behind the token file.
 */
import {readFileSync} from "node:fs";
import {describe, expect, it} from "vitest";
import {tokenGroups} from "../src/lib/token-groups";
import {astroUiPath} from "../src/lib/ui-path";

const tokensCss = readFileSync(astroUiPath("src/styles/tokens.css"), "utf8");
// First :root block only — later blocks are the dark overrides.
const light = tokensCss.slice(tokensCss.indexOf(":root"), tokensCss.indexOf("}"));
const rootVars = [...light.matchAll(/(--ui-[\w-]+)\s*:/g)].map((m) => m[1]);

describe("token groups cover tokens.css", () => {
  it("lists every light :root variable exactly once", () => {
    const grouped = tokenGroups.flatMap((g) => g.tokens);
    const missing = rootVars.filter((v) => !grouped.includes(v));
    const extra = grouped.filter((v) => !rootVars.includes(v));
    const dupes = grouped.filter((v, i) => grouped.indexOf(v) !== i);
    expect(missing, `tokens without a group: ${missing.join(", ")}`).toEqual([]);
    expect(extra, `grouped names missing from tokens.css: ${extra.join(", ")}`).toEqual([]);
    expect(dupes, `tokens in multiple groups: ${dupes.join(", ")}`).toEqual([]);
  });

  it("has no empty groups", () => {
    for (const g of tokenGroups) {
      expect(g.tokens.length, `group "${g.title}" is empty`).toBeGreaterThan(0);
    }
  });
});
