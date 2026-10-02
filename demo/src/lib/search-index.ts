/**
 * Search index — every searchable destination on the site.
 *
 * Consumed by the SearchPalette command menu (⌘K). Groups mirror the
 * nav: Pages, Docs, Components (from the registry), Blocks (from the
 * blocks registry).
 */
import {components} from "./components";
import {allBlocks, blockHref} from "./blocks";
import {SITE} from "./site";

export interface SearchEntry {
    /** Display title. */
    title: string;
    /** Secondary line (description or section hint). */
    hint: string;
    /** Destination href. */
    href: string;
    /** Palette group id. */
    group: "Pages" | "Docs" | "Components" | "Blocks";
    /** Extra match terms beyond title/hint. */
    keywords?: string;
}

const pages: SearchEntry[] = [
    {title: "Home", hint: "astro-ui overview", href: "/", group: "Pages", keywords: "start landing"},
    {
        title: "Components",
        hint: "Full catalog by category",
        href: "/components/",
        group: "Pages",
        keywords: "browse all catalog"
    },
    {
        title: "Blocks",
        hint: "Composed sections: auth, pricing, stats…",
        href: "/blocks/",
        group: "Pages",
        keywords: "composed sections templates"
    },
    {
        title: "Releases",
        hint: "What shipped, by version",
        href: "/docs/releases/",
        group: "Docs",
        keywords: "changelog versions notes release"
    },
    {
        title: "Roadmap",
        hint: "Shipped, in progress, planned",
        href: "/docs/roadmap/",
        group: "Docs",
        keywords: "plans future status"
    },
];

const docsPages: SearchEntry[] = [
    {title: "Documentation", hint: "Guides hub", href: "/docs/", group: "Docs", keywords: "learn overview"},
    {
        title: "Get started",
        hint: "Install and first component",
        href: "/docs/get-started/",
        group: "Docs",
        keywords: "install setup npm begin"
    },
    {
        title: "Styling",
        hint: "Tokens and theming model",
        href: "/docs/styling/",
        group: "Docs",
        keywords: "theme tokens css variables customize"
    },
    {
        title: "Token playground",
        hint: "Edit tokens live, copy the CSS",
        href: "/docs/styling/#playground",
        group: "Docs",
        keywords: "playground editor customize colors palette theme"
    },
    {
        title: "RTL support",
        hint: "Logical properties, mirroring",
        href: "/docs/rtl/",
        group: "Docs",
        keywords: "right-to-left arabic hebrew direction"
    },
    {
        title: "Changelog",
        hint: "Release history",
        href: "/docs/changelog/",
        group: "Docs",
        keywords: "versions releases notes"
    },
];

const componentEntries: SearchEntry[] = components.map((c) => ({
    title: c.name,
    hint: c.description,
    href: `/components/${c.slug}/`,
    group: "Components",
    keywords: `${c.slug} ${c.category} ${c.js ? "javascript" : "zero-js"} ${c.exportName}`,
}));

const blockEntries: SearchEntry[] = allBlocks.map((b) => ({
    title: b.title,
    hint: `${b.category} — ${b.description}`,
    href: blockHref(b),
    group: "Blocks",
    keywords: `${b.categoryId} ${b.recipe} block`,
}));

export const searchEntries: SearchEntry[] = [
    ...pages,
    ...docsPages,
    ...componentEntries,
    ...blockEntries,
];

export const GROUP_ORDER: SearchEntry["group"][] = ["Pages", "Docs", "Components", "Blocks"];

/** Case-insensitive multi-term match across title/hint/keywords. */
export function filterEntries(query: string, entries: SearchEntry[] = searchEntries): SearchEntry[] {
    const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
    if (terms.length === 0) return entries;
    return entries.filter((entry) => {
        const haystack = `${entry.title} ${entry.hint} ${entry.keywords ?? ""}`.toLowerCase();
        return terms.every((term) => haystack.includes(term));
    });
}

/** Max length hint for placeholders elsewhere. */
export const SEARCH_HINT = `Search ${SITE.name}`;
