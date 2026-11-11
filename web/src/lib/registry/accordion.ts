import {type ComponentMeta, t, common} from "./types";

export const accordion: ComponentMeta = {
    slug: "accordion",
    name: "Accordion",
    description: "Collapsible sections built on native details/summary — zero JS.",
    overview:
        "Accordion provides collapsible content sections on native &lt;details&gt;/&lt;summary&gt;: expand/collapse, keyboard (Space/Enter), and announcements come from the platform. A bordered variant and chevron indicator round out the presentation.",
    importPath: "astro-ui",
    exportName: "Accordion",
    category: "layout",
    js: false,
    usage:
        `---\nimport { Accordion } from "astro-ui";\n---\n\n<Accordion\n  id="faq"\n  items={[\n    { value: "q1", title: "What is astro-ui?", content: "A zero-JS Astro component library." },\n    { value: "q2", title: "Does it need JavaScript?", content: "Not for the accordion — it's native details." },\n  ]}\n/>`,
    features: [
        "Native <details>/<summary> — keyboard and AT for free",
        "single mode via the native name attribute (Chrome 120+)",
        "3 variants: default, bordered, ghost",
        "Chevron indicator with rotation",
        "Optional height animation via `animated` (pure CSS, graceful fallback)",
        "SSR-controlled open panels via item.open",
    ],
    a11y: [
        "Native `<details>`/`<summary>` — expand/collapse state, Space/Enter activation, and screen-reader announcements come from the platform",
        "Disabled summaries are skipped by keyboard and assistive tech",
        "Focus-visible ring on summaries via `:focus-visible`",
    ],
    demos: [
        {
            id: "basic",
            title: "Basic",
            code: `<Accordion\n  items={[\n    { value: "q1", title: "What is astro-ui?", content: "A zero-JS Astro component library." },\n    { value: "q2", title: "Does it need JS?", content: "Not for this." },\n  ]}\n/>`,
        },
        {
            id: "bordered",
            title: "Bordered & pre-opened",
            code: `<Accordion variant="bordered"\n  items={[\n    { value: "a", title: "Opened", content: "This panel starts open.", open: true },\n    { value: "b", title: "Closed", content: "Click to expand." },\n  ]}\n/>`,
        },
        {
            id: "animated",
            title: "Animated expand",
            code: `<Accordion animated\n  items={[\n    { value: "a", title: "Smooth height", content: "The panel animates open and closed instead of snapping." },\n    { value: "b", title: "Still zero JS", content: "Pure CSS: ::details-content + interpolate-size. Unsupported browsers snap instantly." },\n  ]}\n/>`,
        },
    ],
    props: [
        t("items", "AccordionItem[]", "[]", "Sections: { value, title, content, open?, disabled? }."),
        t("single", "boolean", "false", "One-open-at-a-time via native name attribute."),
        t("animated", "boolean", "false", "Smooth expand/collapse height animation (CSS-only)."),
        t("variant", `"default" | "bordered" | "ghost"`, `"default"`, "Visual style."),
        t("size", `"sm" | "md" | "lg"`, `"md"`, "Text/padding scale."),
        t("indicator", "boolean", "true", "Rotating chevron."),
        t("ariaLabel", "string", "—", "Accessible name for the group."),
        ...common(false),
    ],
    faq: [
        {
            q: "How does single mode work without JS?",
            a: "Native <details name=\"group\"> exclusivity (Chrome 120+). Elsewhere panels toggle independently — behavior degrades gracefully.",
        },
        {
            q: "Can content be arbitrary markup?",
            a: "Use the item.content string for text, or compose the component differently — the items API keeps SSR output fully static.",
        },
        {
            q: "How does the animation work?",
            a: "`animated` animates the native ::details-content pseudo between block-size 0 and auto (interpolate-size: allow-keywords). Browsers without support ignore it and snap instantly — never broken.",
        },
    ],
    since: "0.1.0",
    related: ["separator", "card", "tabs"],
};
