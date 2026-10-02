// Cross-check registry demo ids against the per-component demo files.
// Each demos/<slug>.astro gates preview blocks with {id === "..." && ...
// Run: cd demo && npx tsx scripts/audit-demo-ids.ts
import {readFileSync, readdirSync, existsSync} from "node:fs";

const registry = readFileSync("src/lib/registry/entries.ts", "utf8");
const slugs = [...registry.matchAll(/from "\.\/([a-z0-9-]+)";/g)].map((m) => m[1]);

let problems = 0;
for (const slug of slugs) {
  const file = `src/components/docs/demos/${slug}.astro`;
  if (!existsSync(file)) {
    console.log(`NO DEMO FILE: ${slug}`);
    problems++;
    continue;
  }
  const demo = readFileSync(file, "utf8");
  const branchIds = [...demo.matchAll(/\{id === "([a-z0-9-]+)" && \(/g)].map((m) => m[1]);
  const regSrc = readFileSync(`src/lib/registry/${slug}.ts`, "utf8");
  const regIds = [...regSrc.matchAll(/\n\s+id: "([a-z0-9-]+)",/g)].map((m) => m[1]);
  const missing = regIds.filter((id) => !branchIds.includes(id));
  const extra = branchIds.filter((id) => !regIds.includes(id));
  if (missing.length || extra.length) {
    problems++;
    if (missing.length) console.log(`NO BRANCH: ${slug} registry ids: ${missing.join(",")}`);
    if (extra.length) console.log(`EXTRA BRANCH: ${slug} ids: ${extra.join(",")}`);
  }
}
console.log(`total components: ${slugs.length}, problems: ${problems}`);
