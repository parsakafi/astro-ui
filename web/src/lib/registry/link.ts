import {type ComponentMeta, t, common} from "./types";

export const link: ComponentMeta = {
    slug: "link",
    name: "Link",
    description: "Semantic anchor with external/rel smarts, icons, colors, and a disabled state.",
    overview:
        "Link renders a styled &lt;a&gt; with smart defaults: external or target=\"_blank\" links automatically get rel=\"noopener noreferrer\" (opt out with noRel or a custom rel). Disabled links drop their href and mute out. Icons are currentColor CSS masks — no JS, no icon dependency. Navigation hints like prefetch, replace, and viewTransition only render data-* attributes for your router or islands to adopt.",
    importPath: "astro-ui",
    exportName: "Link",
    category: "general",
    js: false,
    usage:
        `---\nimport { Link } from "astro-ui";\n---\n\n<Link href="https://astro.build" external icon="external">Astro</Link>`,
    features: [
        "Auto rel=\"noopener noreferrer\" for external/_blank",
        "7 colors, 3 sizes, optional underline",
        "arrow / chevron / external / download icons",
        "Disabled & loading states",
        "data-* navigation hooks — zero JS",
    ],
    a11y: [
        "Native anchor semantics; external links announce their target via `aria-label`",
        "`aria-current` for the active page; `aria-disabled` for disabled links",
        "`:focus-visible` ring",
    ],
    demos: [
        {
            id: "basic",
            title: "Basic",
            code: `<Link href="#">Default link</Link>\n<Link href="#" underline={false}>No underline</Link>`,
        },
        {
            id: "external",
            title: "External & icons",
            code: `<Link href="https://astro.build" external icon="external">Astro docs</Link>\n<Link href="#" icon="arrow">Next step</Link>`,
        },
        {
            id: "colors",
            title: "Colors & sizes",
            code: `<Link href="#" color="muted">Muted</Link>\n<Link href="#" color="destructive">Delete account</Link>\n<Link href="#" size="lg">Large</Link>`,
        },
        {
            id: "disabled",
            title: "Disabled / loading",
            code: `<Link disabled>Unavailable</Link>\n<Link loading loadingText="Opening…">Docs</Link>`,
        },
    ],
    props: [
        t("href", "string", "—", "Link URL. Omitted for non-interactive links."),
        t("external", "boolean", "false", "Marks the link external; defaults rel to \"noopener noreferrer\"."),
        t("target", "string", "—", "Browsing-context target (e.g. \"_blank\"). Implies the external rel default."),
        t("rel / noRel", "string / boolean", "—", "Custom rel, or omit rel entirely."),
        t("icon", `"arrow" | "chevron" | "external" | "download"`, "—", "CurrentColor icon before the text."),
        t("iconOnly", "boolean", "false", "Icon-only mode (provide ariaLabel)."),
        t("size", `"sm" | "md" | "lg"`, `"md"`, "Text scale."),
        t("underline", "boolean", "true", "Text underline."),
        t("color", `"primary" | "secondary" | "muted" | "destructive" | "success" | "warning" | "inherit"`, `"primary"`, "Text color."),
        t("block", "boolean", "false", "Fill the parent's inline width."),
        t("disabled", "boolean", "false", "Non-interactive: drops href and mutes."),
        t("loading", "boolean", "false", "Pending state; swaps content for loadingText."),
        t("loadingText", "string", "—", "Content while loading (falls back to the slot)."),
        t("ariaCurrent", `"page" | "step" | "location" | "date" | "true" | "false"`, "—", "aria-current marker."),
        t("download / hreflang / ping / referrerPolicy", "—", "—", "Forwarded verbatim to the anchor."),
        t("prefetch / prefetchOn / noPrefetch", "boolean / string / boolean", "—", "Render data-* hints for your router; no JS shipped."),
        t("replace / viewTransition", "boolean", "false", "More data-* navigation hints (replaceState, View Transitions)."),
        ...common(),
    ],
    slots: [
        {name: "default", description: "Link text or custom content."},
    ],
    faq: [
        {
            q: "Do prefetch, replace, or viewTransition do anything by themselves?",
            a: "No — deliberately. They render data-* attributes so a router, an Astro island, or a small script can adopt them. The component itself ships zero JavaScript.",
        },
    ],
    since: "0.1.0",
    related: ["button", "breadcrumb", "pagination"],
};
