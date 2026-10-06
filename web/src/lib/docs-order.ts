/**
 * Docs navigation order — single source of truth shared by the sidebar
 * tree and the component page prev/next pager, so the two always agree:
 * categories in display order, entries within each category in content
 * collection order (exactly what DocsSidebar renders).
 */
import {getCollection} from "astro:content";
import {categories} from "./components";

/** Component entries in sidebar order. */
export async function docsComponentOrder() {
    const entries = await getCollection("components");
    return categories.flatMap((category) =>
        entries.filter((entry) => entry.data.category === category.id),
    );
}
