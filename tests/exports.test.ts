import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

/**
 * Export parity guard.
 *
 * `index.ts` is the barrel; `package.json#exports` is the subpath
 * surface bundlers actually resolve. Before 0.2.0 `Progress` was in the
 * barrel but `./progress` was missing from the export map, so the
 * subpath import failed at build time. Keep the two lists in lockstep.
 */

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const indexSource = readFileSync(join(root, "index.ts"), "utf8");
const pkg = JSON.parse(readFileSync(join(root, "package.json"), "utf8")) as {
  name: string;
  exports: Record<string, string>;
};

interface ComponentExport {
  name: string;
  target: string;
  kebab: string;
}

const componentExports: ComponentExport[] = [
  ...indexSource.matchAll(
    /export \{ default as ([A-Za-z0-9_]+) \} from "([^"]+)";/g,
  ),
].map((match) => ({
  name: match[1],
  target: match[2],
  kebab: match[1].replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
}));

// Export-map entries that intentionally have no barrel component counterpart.
const NON_COMPONENT_SUBPATHS = new Set([
  ".",
  "./toast",
  "./utils",
  "./tokens.css",
  "./base.css",
  "./toast.css",
]);

describe("package export parity", () => {
  it("finds the barrel exports", () => {
    expect(componentExports.length).toBeGreaterThan(60);
  });

  it("exports every barrel component at its kebab-case subpath", () => {
    const missing = componentExports
      .filter(({ kebab }) => !pkg.exports[`./${kebab}`])
      .map(({ name, kebab }) => `${name} (./${kebab})`);
    expect(
      missing,
      `add these to package.json#exports: ${missing.join(", ")}`,
    ).toEqual([]);
  });

  it("points every component subpath at an existing file", () => {
    for (const { name, target, kebab } of componentExports) {
      expect(pkg.exports[`./${kebab}`], `${name} export target`).toBe(target);
      expect(existsSync(join(root, target)), `${target} exists`).toBe(true);
    }
  });

  it("has no orphan component subpaths", () => {
    const targets = new Set(componentExports.map(({ target }) => target));
    const orphans = Object.entries(pkg.exports)
      .filter(
        ([subpath, target]) =>
          !NON_COMPONENT_SUBPATHS.has(subpath) &&
          !subpath.endsWith(".css") &&
          !targets.has(target),
      )
      .map(([subpath]) => subpath);
    expect(
      orphans,
      `export subpaths with no barrel export: ${orphans}`,
    ).toEqual([]);
  });

  it("resolves the ./progress subpath through the package export map", () => {
    // Node self-references the package through package.json#exports, so
    // this exercises the exact key a consuming bundler resolves.
    const resolved = import.meta.resolve(`${pkg.name}/progress`);
    expect(resolved).toContain("Progress.astro");
  });

  it("resolves a sample of other component subpaths", () => {
    for (const subpath of ["button", "table", "toast", "utils"]) {
      expect(
        () => import.meta.resolve(`${pkg.name}/${subpath}`),
        subpath,
      ).not.toThrow();
    }
  });
});
