import {type ComponentMeta, t, common} from "./types";

export const hoverCard: ComponentMeta = {
    slug: "hover-card",
    name: "HoverCard",
    description: "Rich preview card on hover and keyboard focus — CSS-only.",
    overview:
        "HoverCard is the CSS-only sibling of Popover: content that appears after a short delay when the user hovers or focuses the trigger. Unlike Tooltip the card stays interactive (links inside work) and carries an aria-label so assistive tech can announce it. Because it is pointer-driven, never put essential information only in a HoverCard — the trigger itself must carry the primary content.",
    importPath: "astro-ui",
    exportName: "HoverCard",
    category: "overlay",
    js: false,
    usage:
        `---\nimport { HoverCard } from "astro-ui";\n---\n\n<HoverCard ariaLabel="Profile preview">\n  <a href="/users/ada">@ada</a>\n  <div slot="content">\n    <strong>Ada Lovelace</strong>\n    <p>Notes on the Analytical Engine.</p>\n  </div>\n</HoverCard>`,
    features: [
        "Zero JS — pure CSS :hover / :focus-within with an open delay",
        "Interactive content: links inside the card work",
        "top / bottom placement; symmetric show/hide delay (no flicker)",
        "role=\"note\" + aria-label announced on focus",
    ],
    a11y: [
        "Hover content is a `role=\"note\"` region",
        "Triggerable from keyboard focus, not only pointer hover",
    ],
    demos: [
        {
            id: "basic",
            title: "Basic",
            code: `<HoverCard ariaLabel="Profile preview">\n  <a href="#">@ada</a>\n  <div slot="content"><strong>Ada Lovelace</strong><p>Preview copy…</p></div>\n</HoverCard>`,
        },
        {
            id: "top",
            title: "Top placement",
            code: `<HoverCard placement="top" ariaLabel="Profile preview">\n  <a href="#">@ada</a>\n  <div slot="content"><strong>Ada Lovelace</strong><p>Preview copy…</p></div>\n</HoverCard>`,
        },
    ],
    props: [
        t("placement", `"top" | "bottom"`, `"bottom"`, "Placement of the card relative to the trigger."),
        ...common(true),
    ],
    slots: [
        {name: "default", description: "The trigger content (focusable)."},
        {name: "content", description: "The preview card."},
    ],
    faq: [
        {
            q: "Can I put essential info in it?",
            a: "No — it's pointer-driven and dismissible. The trigger must carry the primary content; the card is an enhancement (same rule as Tooltip).",
        },
    ],
    since: "1.0.0",
    related: ["popover", "tooltip", "card"],
};
