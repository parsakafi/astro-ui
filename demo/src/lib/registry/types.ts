/**
 * Component registry — the single source of truth for the docs site.
 */

export interface PropRow {
    /** Prop name in kebab/camel as authored. */
    name: string;
    /** TypeScript-ish type string. */
    type: string;
    /** Default value or "—". */
    def: string;
    /** One-line description. */
    description: string;
}

export interface ComponentMeta {
    /** URL slug (lowercase). */
    slug: string;
    /** Display name. */
    name: string;
    /** One-sentence summary for cards. */
    description: string;
    /** Longer overview paragraph for the detail page hero. */
    overview: string;
    /** Import path, e.g. `astro-ui` (root) or `astro-ui/button`. */
    importPath: string;
    /** Named export when importing from the root package. */
    exportName: string;
    category: CategoryId;
    /** True when the component needs JS to function. */
    js: boolean;
    usage: string;
    /** Feature bullets shown on the detail page. */
    features: string[];
    /** Implemented accessibility notes shown in the Accessibility section (empty = purely presentational). */
    a11y?: string[];
    /** Live demo code snippets shown in the code tab (previews render from Demos.astro). */
    demos: DemoExample[];
    props: PropRow[];
    slots?: { name: string; description: string }[];
    faq: { q: string; a: string }[];
    /** Versions in which the component appeared (for the changelog tab). */
    since: string;
    new?: boolean;
    /** Components that pair well with this one (slugs). */
    related?: string[];
}

export interface DemoExample {
    id: string;
    title: string;
    /** Source code shown in the code tab. Previews are real components authored in Demos.astro. */
    code: string;
}

export type CategoryId =
    | "general"
    | "layout"
    | "navigation"
    | "forms"
    | "data-display"
    | "feedback"
    | "overlay";

export const categories: {
    id: CategoryId;
    name: string;
    description: string;
    /** Emoji glyph (no icon dependency in the demo). */
    icon: string;
}[] = [
    {id: "general", name: "General", description: "Foundational building blocks used across every surface.", icon: "◆"},
    {id: "layout", name: "Layout", description: "Structure and arrange content.", icon: "▦"},
    {id: "navigation", name: "Navigation", description: "Move between views and sections.", icon: "⇥"},
    {id: "forms", name: "Forms", description: "Inputs, controls, and selection — all native, all zero-JS.", icon: "✎"},
    {
        id: "data-display",
        name: "Data Display",
        description: "Present data clearly: tables, progress, placeholders.",
        icon: "▤"
    },
    {id: "feedback", name: "Feedback", description: "Communicate state: alerts, toasts, loading.", icon: "◔"},
    {id: "overlay", name: "Overlay", description: "Content layered above the page.", icon: "❐"},
];

export const t = (name: string, type: string, def: string, description: string): PropRow => ({
    name,
    type,
    def,
    description,
});

/** Shared ARIA/attr rows appended to most components. */
export const common = (aria = true): PropRow[] => [
    t("class", "string", "—", "Merged via cn(); Tailwind classes welcome."),
    t("id", "string", "—", "Element id."),
    ...(aria ? [t("ariaLabel", "string", "—", "Accessible name.")] : []),
];

