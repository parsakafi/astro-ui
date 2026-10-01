import {components} from "../src/lib/components";
import {readFileSync} from "node:fs";

const astro = readFileSync("src/components/docs/Demos.astro", "utf8");
const branches: Record<string, string[]> = {};
const re = /component\.slug === "([\w-]+)" &&/g;
let m: RegExpExecArray | null;
const positions: {slug: string; idx: number}[] = [];
while ((m = re.exec(astro))) positions.push({slug: m[1], idx: m.index});
positions.push({slug: "__END__", idx: astro.length});
for (let i = 0; i < positions.length - 1; i++) {
  const seg = astro.slice(positions[i].idx, positions[i + 1].idx);
  const ids = [...seg.matchAll(/id === "([\w-]+)"/g)].map((x) => x[1]);
  branches[positions[i].slug] = ids;
}

let bad = 0;
for (const c of components) {
  const regIds = c.demos.map((d) => d.id);
  const astroIds = branches[c.slug];
  if (!astroIds) {
    console.log(`NO BRANCH: ${c.slug} registry ids: ${regIds.join(",")}`);
    bad++;
    continue;
  }
  const missing = regIds.filter((id) => !astroIds.includes(id));
  const extra = astroIds.filter((id) => !regIds.includes(id));
  if (missing.length || extra.length) {
    console.log(
      `MISMATCH ${c.slug}: registry=[${regIds.join(",")}] branch=[${astroIds.join(",")}]` +
        (missing.length ? ` missing=${missing.join(",")}` : "") +
        (extra.length ? ` extra=${extra.join(",")}` : ""),
    );
    bad++;
  }
}
console.log(`total components: ${components.length}, problems: ${bad}`);
