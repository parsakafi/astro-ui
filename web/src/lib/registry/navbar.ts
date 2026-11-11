import {type ComponentMeta, t, common} from "./types";

export const navbar: ComponentMeta = {
    slug: "navbar",
    name: "Navbar",
    description: "Top app bar with brand, nav links, actions, and a zero-JS mobile menu.",
    overview:
        "Navbar is the top-level app bar: a `<header>` with a brand slot, a `<nav>` landmark for the desktop links, an actions slot for the right edge, and a `<details>` disclosure that replaces the links under 48rem. Because the mobile menu is a native disclosure, it works with zero JavaScript, before hydration, and through back/forward cache restores.",
    importPath: "@parsakafi/astro-ui",
    exportName: "Navbar",
    category: "navigation",
    js: false,
    usage:
        `---\nimport { Navbar, Button } from "@parsakafi/astro-ui";\n---\n\n<Navbar sticky ariaLabel="Main">\n  <a slot="brand" href="/">Acme</a>\n  <a href="/docs" aria-current="page">Docs</a>\n  <a href="/pricing">Pricing</a>\n  <Button slot="actions" size="sm">Sign in</Button>\n  <Fragment slot="mobile">\n    <a href="/docs">Docs</a>\n    <a href="/pricing">Pricing</a>\n  </Fragment>\n</Navbar>`,
    features: [
        "3 surfaces: bordered, elevated, transparent",
        "Optional sticky placement",
        "Brand, actions, and mobile slots",
        "Native `<details>` mobile menu — zero JS, no focus trap",
        "Links get hover/current styling automatically (`aria-current`)",
        "Full-width bar with a centered 80rem content rail",
    ],
    a11y: [
        "Renders a `<header>` with a `<nav aria-label>` landmark",
        "Desktop links are plain `<a>` elements; mark the current one with `aria-current=\"page\"`",
        "Mobile disclosure is a real `<summary>` — keyboard-operable with no script",
        "Summary carries an `aria-label` (default \"Menu\") because the glyph is decorative",
    ],
    demos: [
        {
            id: "app",
            title: "App bar with actions",
            code: `<Navbar ariaLabel="Main">\n  <a slot="brand" href="/">Acme</a>\n  <a href="/docs" aria-current="page">Docs</a>\n  <a href="/pricing">Pricing</a>\n  <a href="/changelog">Changelog</a>\n  <Button slot="actions" size="sm">Sign in</Button>\n  <Fragment slot="mobile">\n    <a href="/docs">Docs</a>\n    <a href="/pricing">Pricing</a>\n    <a href="/changelog">Changelog</a>\n  </Fragment>\n</Navbar>`,
        },
        {
            id: "elevated",
            title: "Sticky, elevated",
            code: `<Navbar variant="elevated" sticky ariaLabel="Workspace">\n  <a slot="brand" href="/">Astro UI</a>\n  <a href="/components" aria-current="page">Components</a>\n  <a href="/blocks">Blocks</a>\n  <Badge slot="actions" variant="success" size="sm">All systems normal</Badge>\n</Navbar>`,
        },
        {
            id: "transparent",
            title: "Transparent over a hero",
            code: `<div class="hero">\n  <Navbar variant="transparent" ariaLabel="Marketing">\n    <a slot="brand" href="/">Astro UI</a>\n    <a href="/docs">Docs</a>\n    <a href="/blocks">Blocks</a>\n    <Button slot="actions" size="sm" variant="secondary">Get started</Button>\n  </Navbar>\n</div>`,
        },
    ],
    props: [
        t("variant", `"bordered" | "elevated" | "transparent"`, `"bordered"`, "Surface treatment."),
        t("sticky", "boolean", "false", "Stick to the top of the scroll container."),
        t("ariaLabel", "string", `"Main"`, "Accessible name for the navigation landmark."),
        t("mobileLabel", "string", `"Menu"`, "Accessible name for the mobile disclosure."),
        ...common(true),
    ],
    slots: [
        {name: "brand", description: "Logo or product name on the leading edge."},
        {name: "(default)", description: "Desktop navigation links."},
        {name: "actions", description: "Trailing buttons or status."},
        {name: "mobile", description: "Links shown inside the mobile disclosure."},
    ],
    faq: [
        {
            q: "Why do I author links twice (default and mobile)?",
            a: "The mobile menu is a native `<details>` that hides the desktop nav below 48rem. Duplicating the links keeps that zero-JS; if you would rather render once, use the Sidebar + Sheet recipe for a drawer instead.",
        },
        {
            q: "How do I add a mega menu?",
            a: "Put a `<details>` inside a nav item, or compose Menu (JS) for hover-intent behavior. Navbar deliberately ships no mega-menu logic — it only owns the bar.",
        },
        {
            q: "How do I mark the current page?",
            a: "Add `aria-current=\"page\"` to that link. Navbar styles it and screen readers announce it; no extra prop needed.",
        },
    ],
    since: "0.1.0",
    new: true,
    related: ["sidebar", "menu", "sheet"],
};
