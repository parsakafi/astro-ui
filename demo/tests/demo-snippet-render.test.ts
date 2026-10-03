/**
 * Snippet render checks — for every registry demo id, the copy-paste
 * snippet must survive the same pipeline the docs site uses:
 *   1. gen-docs writes the demo ids into the content frontmatter
 *      (src/content/components/<slug>.md) — the docs page renders Demos
 *      from that list, so a snippet missing there never renders.
 *   2. Demos.astro highlights each snippet with Shiki ("astro" lang,
 *      github-light / github-dark-default). A snippet that fails to
 *      highlight (or is empty / not an Astro-ish snippet) breaks the
 *      docs render at build time — catch it here instead.
 */
import {readFileSync} from "node:fs";
import {codeToHtml} from "shiki";
import {describe, expect, it} from "vitest";
import {components} from "../src/lib/registry/index";

const CONTENT_DIR = "src/content/components";
const THEMES = {light: "github-light", dark: "github-dark-default"} as const;

const genDocsDemoIds = (slug: string): string[] => {
  // The usage frontmatter block embeds "---" fences (Astro snippet
  // headers), so split on whole lines to find the real closing fence.
  const src = readFileSync(`${CONTENT_DIR}/${slug}.md`, "utf8");
  const lines = src.split("\n");
  const end = lines.indexOf("---", 1);
  const fm = lines.slice(1, end).join("\n");
  const line = fm.split("\n").find((l) => l.startsWith("demoIds:")) ?? "";
  return [...line.matchAll(/"([a-z0-9-]+)"/g)].map((m) => m[1]);
};

describe("demo snippets render via gen-docs output", () => {
  for (const c of components) {
    it.each(c.demos.map((d) => d.id))(`${c.slug} › %s: snippet compiles a render check`, async (id) => {
      const demo = c.demos.find((d) => d.id === id)!;

      // 1. The id must be in the gen-docs frontmatter the docs page reads.
      expect(genDocsDemoIds(c.slug), `${c.slug}: demo id "${id}" missing from ${CONTENT_DIR}/${c.slug}.md demoIds (run gen-docs)`).toContain(id);

      // 2. The snippet must be non-empty (some, like toast, are pure JS).
      const code = demo.code.trim();
      expect(code.length, `${c.slug}/${id}: snippet is empty`).toBeGreaterThan(0);

      // 3. The snippet must highlight exactly as Demos.astro does — a
      //    syntax the astro grammar can't parse throws or yields no
      //    highlighted span.
      const html = await codeToHtml(code, {lang: "astro", themes: THEMES});
      expect(html, `${c.slug}/${id}: Shiki produced no output`).toMatch(/^<pre/);
      expect(html, `${c.slug}/${id}: Shiki produced no highlighted tokens`).toContain("<code>");
    });
  }
});

describe("gen-docs demoIds match registry exactly", () => {
  it.each(components.map((c) => c.slug))("%s: gen-docs demoIds === registry ids", (slug) => {
    const entry = components.find((c) => c.slug === slug)!;
    const regIds = entry.demos.map((d) => d.id);
    const docIds = genDocsDemoIds(slug);
    const missing = regIds.filter((id) => !docIds.includes(id));
    const extra = docIds.filter((id) => !regIds.includes(id));
    expect(missing, `${slug}: registry ids missing from gen-docs frontmatter (run gen-docs)`).toEqual([]);
    expect(extra, `${slug}: gen-docs frontmatter ids not in registry (stale gen-docs output)`).toEqual([]);
  });
});
