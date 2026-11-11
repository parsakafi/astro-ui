import {type ComponentMeta, t, common} from "./types";

export const button: ComponentMeta = {
    slug: "button",
    name: "Button",
    description: "Action trigger with variants, sizes, loading states, and anchor mode.",
    overview:
        "Button is the workhorse of the library: a zero-JS action trigger that renders a &lt;button&gt; — or an &lt;a&gt; when href is set — with eleven variants, eight theme colors, seven sizes, four loading-spinner styles, and native form participation. Extra attributes forward untouched.",
    importPath: "astro-ui",
    exportName: "Button",
    category: "general",
    js: false,
    usage:
        `---\nimport { Button } from "astro-ui";\n---\n\n<Button>Primary</Button>\n<Button variant="outline" href="/docs">Read docs</Button>\n<Button color="success">Approve</Button>\n<Button loading loadingIcon="dots">Saving…</Button>`,
    features: [
        "11 variants: primary, secondary, outline, ghost, error, link, solid, dashed, soft, plain, pure",
        "8 theme colors via `color`: primary, secondary, error, success, warning, info, carbon, accent",
        "7 sizes: xs, sm, md, lg, xl, 2xl, icon (icon requires ariaLabel)",
        "Loading state with 4 spinner styles (ring, dots, pulse, spin) and 3 positions",
        "Invalid state: error border + red focus ring + aria-invalid",
        "Anchor mode via href — links keep rel/target support",
        "Native form participation: form, formAction, formMethod='dialog'…",
        "shape (rounded/square/circle/pill) and shadow (sm/md/lg) controls",
        "leading / trailing icon slots",
        "TypeScript-typed, zero JS, token-themed",
    ],
    a11y: [
        "`aria-busy` announces the loading state; `aria-disabled` keeps disabled buttons focusable but inert",
        "`aria-invalid` styling hook for form validation states",
        "Loading spinner is `aria-hidden` with `:focus-visible` ring",
    ],
    demos: [
        {
            id: "basic",
            title: "Basic",
            code: `<Button>Primary</Button>`,
        },
        {
            id: "variant",
            title: "Variant",
            code: `<Button>Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="error">Error</Button>
<Button variant="link">Link</Button>
<Button variant="solid">Solid</Button>
<Button variant="dashed">Dashed</Button>
<Button variant="soft">Soft</Button>
<Button variant="plain">Plain</Button>
<Button variant="pure">Pure</Button>`,
        },
        {
            id: "color",
            title: "Color",
            code: `<Button color="success">Success</Button>
<Button color="warning">Warning</Button>
<Button color="info">Info</Button>
<Button color="accent">Accent</Button>
<Button variant="outline" color="error">Outline danger</Button>
<Button variant="soft" color="info">Soft info</Button>`,
        },
        {
            id: "size",
            title: "Size",
            code: `<Button size="xs">Extra small</Button>
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra large</Button>
<Button size="2xl">2XL</Button>
<Button size="icon" ariaLabel="Search">⌕</Button>`,
        },
        {
            id: "loading",
            title: "Loading",
            code: `<Button loading>Submitting</Button>
<Button loading loadingPosition="center" loadingText="Saving…">Save</Button>
<Button loading loadingIcon="dots">Dots</Button>
<Button loading loadingIcon="pulse">Pulse</Button>`,
        },
        {
            id: "invalid",
            title: "Invalid",
            code: `<Button invalid>Invalid state</Button>
<Button variant="outline" invalid>Invalid outline</Button>
<Button variant="ghost" invalid>Invalid ghost</Button>`,
        },
        {
            id: "shape-shadow",
            title: "Shape & shadow",
            code: `<Button variant="outline" shape="rounded">Round</Button>
<Button variant="outline" shape="circle" ariaLabel="Go">→</Button>
<Button variant="outline" shadow="md">Shadow md</Button>
<Button disabled>Disabled</Button>`,
        },
    ],
    props: [
        t(
            "variant",
            `"primary" | "secondary" | "outline" | "ghost" | "error" | "link" | "solid" | "dashed" | "soft" | "plain" | "pure"`,
            `"primary"`,
            "Visual style; primary/secondary/error are solid shorthands.",
        ),
        t(
            "color",
            `"primary" | "secondary" | "error" | "success" | "warning" | "info" | "carbon" | "accent"`,
            "—",
            "Theme color for solid/soft and tinted outline-style variants; re-resolves legacy solid shorthands when set.",
        ),
        t("size", `"xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "icon"`, `"md"`, "icon is a square target — set ariaLabel."),
        t("type", `"button" | "submit" | "reset"`, `"submit"`, "Native default so form-wrapped buttons submit (method=dialog works zero-JS). Pass button for standalone controls."),
        t("href", "string", "—", "Renders <a> instead of <button>."),
        t("disabled", "boolean", "false", "Native disabled (button) / aria-disabled (link)."),
        t("loading", "boolean", "false", "Disables + shows spinner + aria-busy."),
        t("invalid", "boolean", "false", "Error border + red focus ring + aria-invalid."),
        t("loadingPosition", `"start" | "center" | "end"`, `"start"`, "Spinner placement relative to content."),
        t("loadingText", "string", "—", "Replaces content when loadingPosition is center."),
        t("loadingIcon", `"ring" | "dots" | "pulse" | "spin"`, `"ring"`, "Spinner visual style."),
        t("shape", `"rounded" | "square" | "circle" | "pill"`, `"rounded"`, "Corner shape."),
        t("shadow", `"none" | "sm" | "md" | "lg"`, `"none"`, "Box-shadow token."),
        t("fitContent", "boolean", "false", "Fit content width instead of inline-flex."),
        t("name / value", "string", "—", "Native form participation, buttons only."),
        t("form / formAction / formMethod / …", "string", "—", "Form override attributes, buttons only."),
        t("rel / target", "string", "—", "Links only."),
        ...common(),
    ],
    slots: [
        {name: "default", description: "Button content (text, icons, etc.)."},
        {name: "leading", description: "Rendered before the default content."},
        {name: "trailing", description: "Rendered after the default content."},
    ],
    faq: [
        {
            q: "How do I handle clicks?",
            a: "Attach listeners app-side (the button ships zero JS): document.getElementById('save')?.addEventListener('click', …). Forms work with zero JS via type=\"submit\".",
        },
        {
            q: "When should I use loadingText?",
            a: "With loadingPosition=\"center\" the content is replaced entirely — loadingText provides the replacement label, e.g. \"Saving…\".",
        },
        {
            q: "Does href change semantics?",
            a: "Yes — the component renders a semantic <a> with link styling and forwards rel/target. Form attributes are ignored in anchor mode.",
        },
    ],
    since: "0.1.0",
    related: ["badge", "card", "dialog"],
};
