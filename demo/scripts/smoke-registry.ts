// Smoke-test the split registry loads and is complete.
import {components, bySlug, categories} from "../src/lib/registry/index";

const slugs = components.map((c) => c.slug);
const dupes = slugs.filter((s, i) => slugs.indexOf(s) !== i);
console.log("components:", slugs.length, "| dupes:", dupes.length ? dupes.join(",") : "none");
console.log("bySlug(chart):", bySlug("chart")?.name);
console.log("bySlug(label):", bySlug("label")?.name, "| demos:", bySlug("label")?.demos.length);
console.log("bySlug(field):", bySlug("field")?.name, "| demos:", bySlug("field")?.demos.length);
console.log("categories:", categories.length);
