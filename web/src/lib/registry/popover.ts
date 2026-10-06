import {type ComponentMeta, t, common} from "./types";

export const popover: ComponentMeta = {
    slug: "popover",
    name: "Popover",
    description: "Click-triggered anchored panel for interactive content.",
    overview:
        "Popover is a click-triggered anchored layer for interactive content — the trigger slot renders a real &lt;button&gt; (aria-expanded + aria-controls) and the content slot renders in an anchored panel below (or above) it. The scoped script toggles the panel, closes on Escape and outside-pointer, moves focus into the panel on open, and returns focus to the trigger on close. Positioning is CSS-anchored relative to the trigger wrapper (same technique as Tooltip), so the panel never needs viewport math.",
    importPath: "astro-ui",
    exportName: "Popover",
    category: "overlay",
    js: true,
    usage:
        `---\nimport { Popover } from "astro-ui";\n---\n\n<Popover id="share">\n  <span slot="trigger">Share</span>\n  <span slot="content">Share via <a href="…">link</a></span>\n</Popover>`,
    features: [
        "Real <button> trigger with aria-expanded / aria-controls",
        "Focus moves into the panel on open, returns to the trigger on close",
        "Closes on Escape and outside-pointer",
        "top / bottom placement; CSS-anchored — no viewport math",
    ],
    a11y: [
        "`aria-expanded` + `aria-controls` wire trigger to panel",
        "Panel is `role=\"dialog\"`; Escape closes and focus returns to the trigger",
    ],
    demos: [
        {
            id: "basic",
            title: "Basic",
            code: `<Popover id="share">\n  <span slot="trigger">Share</span>\n  <span slot="content">Share via <a href="#">link</a></span>\n</Popover>`,
        },
        {
            id: "top",
            title: "Top placement",
            code: `<Popover id="embed" placement="top">\n  <span slot="trigger">Embed</span>\n  <span slot="content">Copy the embed code…</span>\n</Popover>`,
        },
    ],
    props: [
        t("placement", `"top" | "bottom"`, `"bottom"`, "Anchor the panel above the trigger when there is no room below."),
        t("open", "boolean", "false", "Open on first render (SSR)."),
        t("disabled", "boolean", "false", "Disables the trigger button."),
        t("triggerLabel", "string", "—", "Accessible name for the trigger (required when trigger text is absent)."),
        t("id", "string", "—", "Recommended: stable prefix for trigger/panel ids."),
        ...common(false),
    ],
    slots: [
        {name: "trigger", description: "Trigger button content."},
        {name: "content", description: "Anchored panel content (role=\"dialog\")."},
    ],
    faq: [
        {
            q: "Popover or HoverCard?",
            a: "Popover = click-triggered, dismissible, focus-managed — use for interactive content (forms, links). HoverCard = pointer/focus preview — use for passive rich previews.",
        },
    ],
    since: "1.0.0",
    related: ["hover-card", "tooltip", "dialog"],
};
