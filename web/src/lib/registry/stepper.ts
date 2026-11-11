import {type ComponentMeta, t, common} from "./types";

export const stepper: ComponentMeta = {
    slug: "stepper",
    name: "Stepper",
    description: "Ordered progress indicator with complete/current/upcoming states.",
    overview:
        "Stepper visualizes multi-step progress as a semantic &lt;ol&gt;: numbered markers, ✓ for completed steps, and optional links per step. Connectors are CSS pseudo-elements; states are data-attributes.",
    importPath: "astro-ui",
    exportName: "Stepper",
    category: "navigation",
    js: false,
    usage:
        `---\nimport { Stepper } from "astro-ui";\n---\n\n<Stepper\n  ariaLabel="Checkout progress"\n  items={[\n    { label: "Cart", complete: true },\n    { label: "Shipping", current: true, description: "Address & delivery" },\n    { label: "Payment" },\n  ]}\n/>`,
    features: [
        "Semantic ol with aria-current=\"step\"",
        "complete/current/upcoming/disabled states",
        "Horizontal + vertical orientations",
        "Optional per-step links",
        "Dots or line connectors",
    ],
    a11y: [
        "Semantic `<ol>` — steps announced in order",
        "`aria-current=\"step\"` marks the active step; complete steps render a checkmark",
        "Per-step links remain real anchors",
    ],
    demos: [
        {
            id: "basic",
            title: "Basic",
            code: `<Stepper\n  items={[\n    { label: "Cart", complete: true },\n    { label: "Shipping", current: true, description: "Address & delivery" },\n    { label: "Payment" },\n  ]}\n/>`,
        },
        {
            id: "vertical",
            title: "Vertical",
            code: `<Stepper orientation="vertical"\n  items={[\n    { label: "Account", complete: true },\n    { label: "Profile", current: true },\n    { label: "Done" },\n  ]}\n/>`,
        },
    ],
    props: [
        t("items", "StepperItem[]", "[]", "Steps: { label, description?, complete?, current?, disabled?, href? }."),
        t("orientation", `"horizontal" | "vertical"`, `"horizontal"`, "Layout."),
        t("variant", `"line" | "dots"`, `"line"`, "Connector style."),
        t("size", `"sm" | "md" | "lg"`, `"md"`, "Scale."),
        t("ariaLabel", "string", `"Progress"`, "Group name."),
        ...common(false),
    ],
    faq: [],
    since: "0.1.0",
    related: ["pagination", "breadcrumb", "progress"],
};
