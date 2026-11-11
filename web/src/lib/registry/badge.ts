import {type ComponentMeta, t, common} from "./types";

export const badge: ComponentMeta = {
    slug: "badge",
    name: "Badge",
    description: "Status/count label — inline or overlay bubble with icon, dot, avatar, and dismiss.",
    overview:
        "Badge is a zero-JS status and count label. Inline it next to text, or use it as an overlay bubble pinned to another element's corner with content + position. Inline badges compose: an icon slot (or any image, e.g. a flag) sized via --aui-badge-icon, a variant-tinted status dot, optically aligned avatars, and a labeled dismiss button. Counts stay real text so screen readers announce them.",
    importPath: "@parsakafi/astro-ui",
    exportName: "Badge",
    category: "data-display",
    js: false,
    usage:
        `---\nimport { Badge } from "@parsakafi/astro-ui";\n---\n\n<Badge variant="success">Active</Badge>\n<Badge content="3" position="top-right" variant="error" ariaLabel="3 notifications" />\n  Inbox`,
    features: [
        "11 variants incl. soft, muted, error",
        "5 sizes: xs → 2xl",
        "Overlay bubble mode with 4 corner positions",
        "Icon slot, status dot, avatar alignment, dismiss button",
        "content prop for counts (keeps text announcement)",
        "Logical-property positioning — mirrors in RTL",
    ],
    a11y: [
        "Status changes announced via `aria-label` on status badges",
        "Purely presentational by default — no extra semantics to announce",
    ],
    demos: [
        {
            id: "variants",
            title: "Variants",
            code: `<Badge>Primary</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="success">Active</Badge>
<Badge variant="warning">Pending</Badge>
<Badge variant="error">Failed</Badge>
<Badge variant="info">New</Badge>`,
        },
        {
            id: "sizes",
            title: "Sizes",
            code: `<Badge size="sm">sm</Badge>
<Badge size="md">md</Badge>
<Badge size="lg">lg</Badge>
<Badge size="xl">xl</Badge>`,
        },
        {
            id: "icon",
            title: "Badge with icon",
            code: `<Badge variant="outline" size="lg">
  <svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
<path d="M20 6L9 17l-5-5" />
  </svg>
  Verified
</Badge>
<Badge variant="soft" size="lg">
  <svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
<circle cx="12" cy="12" r="10" />
<path d="M12 8v4M12 16h.01" />
  </svg>
  Action required
</Badge>`,
        },
        {
            id: "dot",
            title: "Badge with status dot",
            code: `<Badge variant="success" dot>Operational</Badge>
<Badge variant="warning" dot>Degraded</Badge>
<Badge variant="error" dot>Outage</Badge>`,
        },
        {
            id: "avatar",
            title: "Badge with avatar",
            code: `<Badge variant="outline" size="xl">
  <Avatar name="Ada Lovelace" size="xs" />
  Ada
</Badge>
<Badge variant="muted" size="xl">
  <Avatar name="Grace Hopper" size="xs" status="online" />
  Grace
</Badge>`,
        },
        {
            id: "flag",
            title: "Badge with flag image",
            code: `<Badge variant="outline" size="lg" style="--aui-badge-icon: 1rem">
  <img slot="icon" src="/flags/us.svg" alt="" width="16" height="16" style="border-radius: 2px" />
  United States
</Badge>
<Badge variant="outline" size="lg" style="--aui-badge-icon: 1rem">
  <img slot="icon" src="/flags/de.svg" alt="" width="16" height="16" style="border-radius: 2px" />
  Germany
</Badge>`,
        },
        {
            id: "dismiss",
            title: "Badge with dismiss button",
            code: `<Badge variant="outline" size="lg" closable>Design</Badge>
<Badge variant="outline" size="lg" closable closeLabel="Remove Research filter">Research</Badge>
<Badge variant="soft" size="lg" closable>Docs</Badge>`,
        },
        {
            id: "overlay",
            title: "Overlay bubble",
            code: `<span class="relative inline-block">
  <Badge position="top-right" content="3" variant="error" ariaLabel="3 items" />
  Inbox
</span>`,
        },
    ],
    props: [
        t("variant", `"primary" | "secondary" | "outline" | "ghost" | "soft" | "success" | "warning" | "info" | "muted" | "error"`, `"primary"`, "Color scheme."),
        t("size", `"sm" | "md" | "lg" | "xl" | "2xl"`, `"md"`, "Font/padding scale."),
        t("content", "string", "—", "Count/content when no default slot is provided."),
        t("position", `"top-right" | "top-left" | "bottom-right" | "bottom-left"`, "—", "Overlay bubble corner (logical start/end — mirrors in RTL)."),
        t("contentProps", "Record<string, any>", "{}", "Forwarded to the bubble element."),
        t("dot", "boolean", "false", "Leading status dot tinted by the variant (inline mode)."),
        t("closable", "boolean", "false", "Renders an accessible dismiss button (inline mode)."),
        t("closeLabel", "string", "\"Dismiss\"", "Accessible label for the dismiss button."),
        ...common(),
    ],
    faq: [
        {
            q: "How do screen readers handle counts?",
            a: "The count is real text inside the badge. Add ariaLabel for context, e.g. ariaLabel=\"3 unread messages\".",
        },
        {
            q: "Does the dismiss button remove the badge?",
            a: "No — Badge ships zero JS. The button is real, focusable, and labeled via closeLabel; wire the removal with a small script or a form action on your side.",
        },
        {
            q: "How do I put an image or flag inside a badge?",
            a: "Anything in the icon slot is boxed at --aui-badge-icon (default 0.875em) and scales with the badge. Set the variable inline, e.g. style=\"--aui-badge-icon: 1rem\", for a 16px flag.",
        },
    ],
    since: "0.1.0",
    related: ["button", "avatar", "card"],
};
