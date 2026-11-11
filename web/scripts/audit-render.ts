/**
 * Contract audit: every component page must render exactly the registry
 * demos, in registry order. Guards the content-collection ↔ registry
 * wiring (demoIds frontmatter gates + orders; Demos.astro renders).
 *
 * Also verifies the toast wiring script (bundled from Demos.astro) is
 * referenced exactly once on /components/toast/.
 *
 * Run against a fresh production build:
 *   npm run build && npm run audit:render
 */
import {readFileSync, existsSync} from "node:fs";
import {components} from "../src/lib/components";

const decode = (s: string) =>
    s
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'");

let bad = 0;
for (const c of components) {
    const file = `dist/components/${c.slug}/index.html`;
    if (!existsSync(file)) {
        console.log(`${c.slug}: PAGE MISSING`);
        bad++;
        continue;
    }
    const html = readFileSync(file, "utf8");
    // Astro adds scoped-style attributes (data-astro-cid-…) to demo files that ship a
    // <style> block, so the opening tag cannot be matched exactly.
    const titles = [...html.matchAll(/<h3 class="docs-demo-title"[^>]*>([^<]+)</g)].map((m) =>
        decode(m[1]),
    );
    const want = c.demos.map((d) => d.title);
    if (titles.length !== want.length || titles.some((t, i) => t !== want[i])) {
        console.log(`${c.slug}: got [${titles.join(" | ")}] want [${want.join(" | ")}]`);
        bad++;
    }
}
const toast = readFileSync("dist/components/toast/index.html", "utf8");
const wires = (toast.match(/Demos\.astro_astro_type_script[^"]*\.js/g) ?? []).length;
if (wires !== 1) {
    console.log(`toast wiring script tags: ${wires} (want 1)`);
    bad++;
}
console.log(
    bad === 0
        ? `OK: ${components.length} component pages render registry demos in order`
        : `${bad} issue(s)`,
);
process.exit(bad === 0 ? 0 : 1);
