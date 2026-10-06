/**
 * One-shot generator: components collection markdown files from the TS registry.
 * Run: npx tsx scripts/gen-docs.ts
 *
 * Splits content between frontmatter (structured data the schema
 * validates) and the Markdown body (prose — overview paragraphs + FAQ).
 * The [slug].astro page renders the body via the collection's Content,
 * so overview/FAQ stay authorable as plain Markdown.
 */
import {writeFileSync, mkdirSync} from "node:fs";
import {components} from "../src/lib/components";

const esc = (s: string) => String(s).replace(/\\/g, "\\\\").replace(/"/g, '\\"');
/** Block-scalar frontmatter value (handles quotes/backticks/newlines safely). */
const block = (s: string) => `|-\n${s.trim().split("\n").map((l) => `  ${l}`).join("\n")}`;

mkdirSync("src/content/components", {recursive: true});
let n = 0;
for (const c of components) {
    const fm: string[] = [];
    fm.push("---");
    fm.push(`slug: "${c.slug}"`);
    fm.push(`name: "${c.name}"`);
    fm.push("description: >-");
    fm.push(`  ${c.description.replace(/"/g, "")}`);
    fm.push(`category: ${c.category}`);
    fm.push(`importPath: "${c.importPath}"`);
    fm.push(`exportName: "${esc(c.exportName)}"`);
    fm.push(`js: ${c.js ? "true" : "false"}`);
    fm.push(`since: "${c.since}"`);
    fm.push(`isNew: ${c.new ? "true" : "false"}`);
    fm.push(`related: [${(c.related ?? []).map((r) => `"${r}"`).join(", ")}]`);
    fm.push("features:");
    for (const f of c.features ?? []) fm.push(`  - "${esc(f)}"`);
    if ((c.a11y?.length ?? 0) > 0) {
        fm.push("a11y:");
        for (const f of c.a11y ?? []) fm.push(`  - "${esc(f)}"`);
    }
    fm.push(`usage: ${block(c.usage)}`);
    fm.push(`demoIds: [${(c.demos ?? []).map((d) => `"${d.id}"`).join(", ")}]`);
    fm.push("props:");
    for (const p of c.props ?? []) {
        fm.push(`  - name: "${esc(p.name)}"`);
        fm.push(`    type: "${esc(p.type)}"`);
        fm.push(`    def: "${esc(p.def)}"`);
        fm.push(`    description: "${esc(p.description)}"`);
    }
    if ((c.slots?.length ?? 0) > 0) {
        fm.push("slots:");
        for (const s of c.slots ?? []) {
            fm.push(`  - name: "${s.name}"`);
            fm.push(`    description: "${esc(s.description)}"`);
        }
    }
    if ((c.faq?.length ?? 0) > 0) {
        fm.push("faq:");
        for (const f of c.faq ?? []) {
            fm.push(`  - q: "${esc(f.q)}"`);
            fm.push(`    a: "${esc(f.a)}"`);
        }
    }
    fm.push("---");
    fm.push("");
    // Prose body: overview paragraphs (authorable markdown, no H1 — the
    // page supplies its own heading). Rendered via the collection's Content.
    fm.push(c.overview);
    fm.push("");
    writeFileSync(`src/content/components/${c.slug}.md`, fm.join("\n"));
    n++;
}
console.log("wrote", n, "docs files");
