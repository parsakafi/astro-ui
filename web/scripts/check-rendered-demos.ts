// Runtime check: every component page must render at least one .docs-demo-block.
// Usage: cd demo && npx tsx scripts/check-rendered-demos.ts [baseUrl]
import { readdirSync } from "node:fs";

const base = process.argv[2] ?? "http://localhost:4321";
const dir = "src/content/components";
const slugs = readdirSync(dir)
  .filter((f) => f.endsWith(".md"))
  .map((f) => f.replace(/\.md$/, ""));

let bad = 0;
for (const slug of slugs) {
  const res = await fetch(`${base}/components/${slug}/`);
  const html = await res.text();
  const count = (html.match(/docs-demo-title/g) ?? []).length;
  if (res.status !== 200 || count === 0) {
    bad++;
    console.log(`FAIL ${slug}: status=${res.status} demoTitles=${count}`);
  }
}
console.log(`checked ${slugs.length} pages, failures: ${bad}`);
