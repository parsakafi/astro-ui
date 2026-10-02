/**
 * Registry/demo consistency — catches the "edited one side, forgot the
 * other" class of bug that once left demo pages rendering empty Demos
 * sections. Fails when:
 *   - a registry slug has no demos/<slug>.astro (or an orphan demo file)
 *   - a registry demo id has no preview branch (or an orphan branch)
 *   - a slug has no generated content md (stale gen-docs)
 *   - a registry block id has no blocks/<id>.astro or block-code/<id>.ts
 */
import {readFileSync, readdirSync, existsSync} from "node:fs";
import {describe, expect, it} from "vitest";
import {components} from "../src/lib/registry/index";
import {blockCategories} from "../src/lib/blocks";
import {blockCode} from "../src/lib/block-code";

const slugs = components.map((c) => c.slug);
const DEMOS_DIR = "src/components/docs/demos";

const demoBranchIds = (slug: string): string[] => {
  const src = readFileSync(`${DEMOS_DIR}/${slug}.astro`, "utf8");
  return [...src.matchAll(/\{id === "([a-z0-9-]+)" && \(/g)].map((m) => m[1]);
};

const registryDemoIds = (slug: string): string[] => {
  const entry = components.find((c) => c.slug === slug)!;
  return entry.demos.map((d) => d.id);
};

describe("registry ↔ demo files", () => {
  it("has unique registry slugs", () => {
    const dupes = slugs.filter((s, i) => slugs.indexOf(s) !== i);
    expect(dupes, `duplicate registry slugs: ${dupes.join(", ")}`).toEqual([]);
  });

  it("has a demos/<slug>.astro file for every registry slug", () => {
    const missing = slugs.filter((s) => !existsSync(`${DEMOS_DIR}/${s}.astro`));
    expect(missing, `slugs without a demo file: ${missing.join(", ")}`).toEqual([]);
  });

  it("has no orphan demo files", () => {
    const files = readdirSync(DEMOS_DIR)
      .filter((f) => f.endsWith(".astro"))
      .map((f) => f.replace(/\.astro$/, ""));
    const orphans = files.filter((f) => !slugs.includes(f));
    expect(orphans, `demo files without a registry entry: ${orphans.join(", ")}`).toEqual([]);
  });
});

describe("registry demo ids ↔ preview branches", () => {
  it.each(slugs)("%s: demo ids match preview branches", (slug) => {
    const regIds = registryDemoIds(slug);
    const branchIds = demoBranchIds(slug);
    const missing = regIds.filter((id) => !branchIds.includes(id));
    const extra = branchIds.filter((id) => !regIds.includes(id));
    expect(missing, `${slug}: registry ids without a preview branch`).toEqual([]);
    expect(extra, `${slug}: preview branches without a registry id`).toEqual([]);
  });
});

describe("registry ↔ generated docs content", () => {
  const CONTENT_DIR = "src/content/components";
  it("has a content md for every registry slug (run gen-docs)", () => {
    const missing = slugs.filter((s) => !existsSync(`${CONTENT_DIR}/${s}.md`));
    expect(missing, `slugs without content md (stale gen-docs): ${missing.join(", ")}`).toEqual([]);
  });

  it("has no stale content md", () => {
    const mds = readdirSync(CONTENT_DIR)
      .filter((f) => f.endsWith(".md"))
      .map((f) => f.replace(/\.md$/, ""));
    const stale = mds.filter((m) => !slugs.includes(m));
    expect(stale, `content md without a registry entry: ${stale.join(", ")}`).toEqual([]);
  });
});

describe("blocks registry ↔ block files", () => {
  const leafBlocks = blockCategories.flatMap((c) => c.blocks.map((b) => b.id));

  it("has unique block ids", () => {
    const dupes = leafBlocks.filter((s, i) => leafBlocks.indexOf(s) !== i);
    expect(dupes, `duplicate block ids: ${dupes.join(", ")}`).toEqual([]);
  });

  it("has a blocks/<id>.astro component for every block", () => {
    const missing = leafBlocks.filter((id) => !existsSync(`src/components/docs/blocks/${id}.astro`));
    expect(missing, `blocks without a component: ${missing.join(", ")}`).toEqual([]);
  });

  it("has a block-code snippet for every block", () => {
    const missing = leafBlocks.filter((id) => !(id in blockCode));
    expect(missing, `blocks without copy-paste code: ${missing.join(", ")}`).toEqual([]);
  });

  it("has no orphan block components or snippets", () => {
    const orphanComponents = readdirSync("src/components/docs/blocks")
      .filter((f) => f.endsWith(".astro"))
      .map((f) => f.replace(/\.astro$/, ""))
      .filter((id) => !leafBlocks.includes(id));
    const orphanSnippets = Object.keys(blockCode).filter((id) => !leafBlocks.includes(id));
    expect(orphanComponents, "block components without a registry id").toEqual([]);
    expect(orphanSnippets, "block-code snippets without a registry id").toEqual([]);
  });
});
