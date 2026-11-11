import {type ComponentMeta, t, common} from "./types";

export const banner: ComponentMeta = {
    slug: "banner",
    name: "Banner",
    description: "Full-width announcement strip with icon, actions, and dismissal hook.",
    overview:
        "Banner is the page-level sibling of Alert: a strip that spans its container instead of sitting inside a card. Use it for release notes, trial notices, or maintenance windows that belong above the content. It renders as a named `region` landmark by default, so the announcement is reachable from a screen reader's landmark list; pass `role=\"none\"` when several banners stack on one page.",
    importPath: "@parsakafi/astro-ui",
    exportName: "Banner",
    category: "feedback",
    js: false,
    usage:
        `---\nimport { Banner, Button } from "@parsakafi/astro-ui";\n---\n\n<Banner variant="info" closable>\n  <span slot="icon" aria-hidden="true">✦</span>\n  <strong>v2.5 is out.</strong> Timeline and Banner have landed.\n  <Button slot="actions" size="sm" variant="outline">Read the notes</Button>\n</Banner>`,
    features: [
        "6 variants: primary, info, success, warning, error, neutral",
        "Slots for icon, title, message, and an action row",
        "Optional sticky placement for top-of-page announcements",
        "Responsive: actions wrap under the message on narrow screens",
        "Closable affordance with a `data-banner-close` hook — zero JS",
    ],
    a11y: [
        "`role=\"region\"` with a default `aria-label` of \"Announcement\"",
        "`role=\"alert\"` / `role=\"status\"` available for live announcements",
        "The icon slot is `aria-hidden` — decorative only",
        "Close button carries a real `aria-label` (configurable via `closeLabel`)",
        "Focus ring uses currentColor so it stays visible on every variant",
    ],
    demos: [
        {
            id: "release",
            title: "Release announcement",
            code: `<Banner variant="info">\n  <span slot="icon" aria-hidden="true">✦</span>\n  <strong>v2.5 is out.</strong> Timeline, Banner, and Menu are here.\n  <Button slot="actions" size="sm" variant="outline">Read the notes</Button>\n</Banner>`,
        },
        {
            id: "dismissible",
            title: "Dismissible trial notice",
            code: `<Banner variant="primary" closable>\n  <strong>14 days left in your trial.</strong> Add a payment method to keep your projects online.\n  <Button slot="actions" size="sm" variant="secondary">Choose a plan</Button>\n</Banner>`,
        },
        {
            id: "sticky",
            title: "Sticky maintenance strip",
            code: `<Banner variant="warning" sticky closable closeLabel="Dismiss maintenance notice">\n  <span slot="icon" aria-hidden="true">⏳</span>\n  Scheduled maintenance on Oct 24, 02:00–04:00 UTC. Deploys will queue.\n</Banner>`,
        },
        {
            id: "neutral",
            title: "Neutral sub-header note",
            code: `<Banner variant="neutral" role="none">\n  <span slot="icon" aria-hidden="true">ℹ</span>\n  You are viewing the staging environment. Changes are not public.\n</Banner>`,
        },
    ],
    props: [
        t(
            "variant",
            `"primary" | "info" | "success" | "warning" | "error" | "neutral"`,
            `"primary"`,
            "Color treatment of the strip.",
        ),
        t("sticky", "boolean", "false", "Stick to the top of the scroll container."),
        t("closable", "boolean", "false", "Render a close button with a data hook."),
        t("closeLabel", "string", `"Dismiss announcement"`, "Accessible name for the close button."),
        t("role", `"region" | "status" | "alert" | "none"`, `"region"`, "Landmark role; \"none\" drops it."),
        ...common(true),
    ],
    slots: [
        {name: "icon", description: "Leading glyph (rendered aria-hidden)."},
        {name: "title", description: "Optional bold first line."},
        {name: "(default)", description: "The message itself."},
        {name: "actions", description: "Buttons or links on the trailing edge."},
    ],
    faq: [
        {
            q: "How do I dismiss a banner?",
            a: "Listen for a click on `[data-banner-close]` and hide the element yourself — that keeps persistence (cookie, localStorage, server flag) in your hands. The Dismissible demo does exactly this with one delegated listener.",
        },
        {
            q: "Banner or Alert?",
            a: "Alert is a boxed message inside content. Banner spans its container and usually sits above the page, at the top of the layout.",
        },
    ],
    since: "0.1.0",
    new: true,
    related: ["alert", "toast", "timeline"],
};
