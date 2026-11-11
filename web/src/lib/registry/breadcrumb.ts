import {type ComponentMeta, t, common} from "./types";

export const breadcrumb: ComponentMeta = {
    slug: "breadcrumb",
    name: "Breadcrumb",
    description: "Semantic breadcrumb trail — CSS separators, icons, ellipsis, pill, composed items.",
    overview:
        "Breadcrumb renders a &lt;nav aria-label&gt; of links \u2014 a flat flex container, no list markup. The current page is a non-link span with aria-current=\"page\"; separators are drawn in CSS pseudo-elements. Pass `items` for data-driven trails (with optional icon and ellipsis fields) or omit items and author composed &lt;span&gt; children for badges, avatars, dropdown triggers, and buttons.",
    importPath: "astro-ui",
    exportName: "Breadcrumb",
    category: "navigation",
    js: false,
    usage:
        `---\nimport { Breadcrumb } from "astro-ui";\n---\n\n<Breadcrumb\n  ariaLabel="Breadcrumb"\n  items={[\n    { href: "/", label: "Home" },\n    { href: "/components/", label: "Components" },\n    { label: "Button" },\n  ]}\n/>`,
    features: [
        "Semantic nav structure, flat span items — no list markup",
        "aria-current=\"page\" on the current item",
        "Separators drawn in CSS: slash, chevron, double-chevron, dot, custom",
        "icon + ellipsis item fields for rich trails",
        "Composed slot mode for badges, avatars, dropdowns, buttons",
        "Pill style for frames, headers, and toolbars",
        "3 sizes; hidden items for responsive trimming",
    ],
    a11y: [
        "Wrapped in `<nav>` with an `aria-label` so it's a navigable landmark",
        "`aria-current=\"page\"` on the last item announces the current location",
        "Separators are CSS pseudo-elements — never read by screen readers",
    ],
    demos: [
        {
            id: "basic",
            title: "Basic",
            code: `<Breadcrumb\n  items={[\n    { href: "/", label: "Home" },\n    { href: "/components/", label: "Components" },\n    { label: "Button" },\n  ]}\n/>`,
        },
        {
            id: "chevron",
            title: "Chevron separator",
            code: `<Breadcrumb separator="chevron"\n  items={[\n    { href: "/", label: "Home" },\n    { label: "Docs" },\n  ]}\n/>`,
        },
        {
            id: "dropdown",
            title: "Breadcrumb with dropdown menu",
            code: `<Breadcrumb ariaLabel="Breadcrumb with collapsed path">\n  <span class="aui-breadcrumb__item">\n    <a class="aui-breadcrumb__link" href="/">Home</a>\n  </span>\n  <span class="aui-breadcrumb__item">\n    <Popover id="bc-menu" triggerLabel="Show hidden path segments">\n      <span slot="trigger">\n        <span class="aui-breadcrumb__ellipsis" aria-hidden="true">\u2026</span>\n      </span>\n      <span slot="content" class="docs-breadcrumb-menu">\n        <a href="#">Documentation</a>\n        <a href="#">Themes</a>\n        <a href="#">GitHub</a>\n      </span>\n    </Popover>\n  </span>\n  <span class="aui-breadcrumb__item">\n    <a class="aui-breadcrumb__link" href="#">Components</a>\n  </span>\n  <span class="aui-breadcrumb__item">\n    <span class="aui-breadcrumb__current" aria-current="page">Breadcrumb</span>\n  </span>\n</Breadcrumb>\n\n<style is:global>\n  /* Tighten the popover trigger to the breadcrumb line; style the panel links. */\n  .aui-breadcrumb .aui-popover__trigger { padding: 0.125rem 0.25rem; border-radius: var(--ui-radius-sm); }\n  .docs-breadcrumb-menu { display: grid; min-inline-size: 10rem; }\n  .docs-breadcrumb-menu a { padding: 0.25rem 0.5rem; color: var(--ui-foreground); font-size: var(--ui-text-sm); text-decoration: none; border-radius: var(--ui-radius-sm); }\n  .docs-breadcrumb-menu a:hover { background: var(--ui-muted); }\n</style>`,
        },
        {
            id: "slash",
            title: "Custom slash separator",
            code: `<Breadcrumb\n  separator="custom"\n  style="--aui-breadcrumb-separator: '//'"\n  items={[\n    { href: "/", label: "usr" },\n    { href: "#", label: "local" },\n    { label: "bin" },\n  ]}\n/>`,
        },
        {
            id: "ellipsis",
            title: "Ellipsis for long paths",
            code: `<Breadcrumb\n  items={[\n    { href: "/", label: "Home" },\n    { ellipsis: true, label: "More" },\n    { href: "#", label: "Components" },\n    { label: "Breadcrumb" },\n  ]}\n/>`,
        },
        {
            id: "icons",
            title: "Icons for each item",
            code: `<Breadcrumb separator="chevron"\n  items={[\n    { href: "/", label: "Home", icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/></svg>' },\n    { href: "#", label: "Library", icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>' },\n    { label: "Breadcrumb", icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M15 2v5h5"/></svg>' },\n  ]}\n/>`,
        },
        {
            id: "chevrons",
            title: "Double chevron separators",
            code: `<Breadcrumb separator="chevrons"\n  items={[\n    { href: "/", label: "Dashboard" },\n    { href: "#", label: "Resources" },\n    { label: "Documentation" },\n  ]}\n/>`,
        },
        {
            id: "pill-frame",
            title: "Pill-style breadcrumb inside frame",
            code: `<Breadcrumb\n  pill\n  separator="chevron"\n  items={[\n    { href: "/", label: "Home", icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/></svg>' },\n    { href: "#", label: "Products" },\n    { label: "Checkout" },\n  ]}\n/>`,
        },
        {
            id: "home-icon",
            title: "Home icon item",
            code: `<Breadcrumb\n  items={[\n    { href: "/", label: "Home", icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/></svg>' },\n    { href: "#", label: "Products" },\n    { label: "Checkout" },\n  ]}\n/>`,
        },
        {
            id: "badge-count",
            title: "Badge with count",
            code: `<Breadcrumb ariaLabel="Mailbox">\n  <span class="aui-breadcrumb__item">\n    <a class="aui-breadcrumb__link" href="#">\n      Inbox\n      <Badge variant="destructive" size="sm" ariaLabel="3 unread messages" style="min-inline-size: 1.25rem">3</Badge>\n    </a>\n  </span>\n  <span class="aui-breadcrumb__item">\n    <a class="aui-breadcrumb__link" href="#">Labels</a>\n  </span>\n  <span class="aui-breadcrumb__item">\n    <span class="aui-breadcrumb__current" aria-current="page">Important</span>\n  </span>\n</Breadcrumb>`,
        },
        {
            id: "buttons",
            title: "Button-style breadcrumb",
            code: `<Breadcrumb ariaLabel="Help center">\n  <span class="aui-breadcrumb__item">\n    <Button variant="outline" size="xs" shape="rounded" aria-label="Home">\n      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/></svg>\n    </Button>\n  </span>\n  <span class="aui-breadcrumb__item">\n    <a class="aui-breadcrumb__link" href="#">Help Center</a>\n  </span>\n  <span class="aui-breadcrumb__item">\n    <span class="aui-breadcrumb__current" aria-current="page">Getting Started</span>\n  </span>\n</Breadcrumb>`,
        },
        {
            id: "card",
            title: "Breadcrumb inside card",
            code: `<Card size="sm">\n  <Breadcrumb\n    separator="chevron"\n    items={[\n      { href: "/", label: "Home" },\n      { href: "#", label: "Products" },\n      { label: "Checkout" },\n    ]}\n  />\n</Card>`,
        },
    ],
    props: [
        t("items", "BreadcrumbItem[]", "[]", "Trail: { href?, label, hidden?, icon?, ellipsis? }. Last item without href = current page. Omit to author composed items in the default slot."),
        t("ariaLabel", "string", `"Breadcrumb"`, "Name for the nav landmark."),
        t("separator", `"slash" | "chevron" | "chevrons" | "dot" | "custom"`, `"slash"`, "Separator glyph (CSS-drawn); custom reads --aui-breadcrumb-separator."),
        t("pill", "boolean", "false", "Renders the trail in a muted pill."),
        t("size", `"sm" | "md" | "lg"`, `"md"`, "Text scale."),
        ...common(false),
    ],
    faq: [
        {
            q: "Why no separator markup?",
            a: "Separators are pseudo-elements, so screen readers announce only the real items — no repeated 'slash' noise.",
        },
        {
            q: "How do I add badges or avatars to items?",
            a: "Omit items and author the trail: <Breadcrumb><span class=\"aui-breadcrumb__item\">…</span></Breadcrumb>. Compose any astro-ui component inside the item spans; the same separator and typography styles apply.",
        },
        {
            q: "How do I collapse a long path?",
            a: "Set ellipsis: true on a middle item to render a presentational …, or compose a Popover trigger inside an item so users can open the hidden segments from the ellipsis.",
        },
    ],
    since: "0.1.0",
    related: ["pagination", "tabs", "link"],
};
