/**
 * Resolve a file inside the astro-ui package, wherever the docs site
 * (web/) runs from: as a workspace (package root one level up) or
 * standalone (the classic node_modules link). Prefers the link; falls
 * back to the workspace root whose package.json is named astro-ui.
 */
import {readFileSync} from "node:fs";
import {join, resolve} from "node:path";

export const astroUiPath = (...segs: string[]): string => {
  const candidates = [resolve(process.cwd(), "node_modules/astro-ui"), resolve(process.cwd(), "..")];
  const root = candidates.find((dir) => {
    try {
      return JSON.parse(readFileSync(join(dir, "package.json"), "utf8")).name === "astro-ui";
    } catch {
      return false;
    }
  });
  if (!root) throw new Error("astro-ui package not found via node_modules link or workspace root");
  return resolve(root, ...segs);
};
