import {type ComponentMeta, t, common} from "./types";

export const pagination: ComponentMeta = {
    slug: "pagination",
    name: "Pagination",
    description: "Zero-JS linked page navigation with truncation ellipsis.",
    overview:
        "Pagination renders fully server-rendered page links — every page is a real &lt;a&gt;, so it works without JS and is crawlable. Pages outside the sibling window collapse into ellipsis; prev/next disable at the ends.",
    importPath: "@parsakafi/astro-ui",
    exportName: "Pagination",
    category: "navigation",
    js: false,
    usage:
        `---\nimport { Pagination } from "@parsakafi/astro-ui";\n---\n\n<Pagination\n  page={2}\n  total={9}\n  pageHref={(p) => \`/blog?page=\${p}\`}\n/>`,
    features: [
        "Real links — crawlable, zero JS",
        "Ellipsis truncation with siblingCount control",
        "prev/next with end-disabling",
        "compact arrows-only mode",
        "2 variants, 3 sizes",
    ],
    a11y: [
        "Wrapped in `<nav aria-label>` as a navigable landmark",
        "Real `<a>` links — crawlable and keyboard-operable without JS",
        "`aria-current=\"page\"` announces the current page; page arrows are labeled buttons with `aria-hidden` glyphs",
    ],
    demos: [
        {
            id: "basic",
            title: "Basic",
            code: `<Pagination\n  page={4}\n  total={12}\n  pageHref={(p) => \`?page=\${p}\`}\n/>`,
        },
        {
            id: "compact",
            title: "Compact",
            code: `<Pagination compact page={2} total={5} pageHref={(p) => \`?p=\${p}\`} />`,
        },
    ],
    props: [
        t("page", "number", "required", "1-based current page."),
        t("total", "number", "required", "Total pages."),
        t("pageHref", "(page: number) => string", "required", "URL builder per page."),
        t("siblingCount", "number", "1", "Pages shown each side before truncation."),
        t("showPrevNext", "boolean", "true", "Prev/next controls."),
        t("compact", "boolean", "false", "Arrows-only mode."),
        t("variant", `"outline" | "ghost"`, `"outline"`, "Control style."),
        t("size", `"sm" | "md" | "lg"`, `"md"`, "Scale."),
        ...common(false),
    ],
    faq: [
        {
            q: "Why links instead of buttons?",
            a: "Pagination navigates — real anchors keep it functional without JS, shareable, and indexable. SPA-style paging can layer on top app-side.",
        },
    ],
    since: "0.1.0",
    related: ["breadcrumb", "button", "tabs"],
};
