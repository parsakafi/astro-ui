import {type ComponentMeta, t, common} from "./types";

export const checkbox: ComponentMeta = {
    slug: "checkbox",
    name: "Checkbox",
    description: "Native checkbox with custom visual, indeterminate state, and label.",
    overview:
        "Checkbox styles the native input inside a label wrapper — square or rounded indicator, indeterminate support, and full native keyboard/announcement behavior.",
    importPath: "astro-ui",
    exportName: "Checkbox",
    category: "forms",
    js: false,
    usage:
        `---\nimport { Checkbox } from "astro-ui";\n---\n\n<Checkbox name="news" checked>Email me news</Checkbox>`,
    features: [
        "Native input + custom visual (real form value)",
        "square / rounded indicator shapes",
        "indeterminate state",
        "5 sizes, 9 color variants",
        "label prop or slot content",
        "horizontal / vertical orientation",
    ],
    a11y: [
        "Native `<input type=\"checkbox\">` — checked state, Space toggle, and form value from the platform",
        "`aria-invalid` + `aria-describedby` connect validation and hint text",
        "Decorative marks are `aria-hidden`; `:focus-visible` ring",
    ],
    demos: [
        {
            id: "basic",
            title: "Basic",
            code: `<Checkbox name="news" checked>Email me news</Checkbox>
<Checkbox name="sms" disabled>SMS (unavailable)</Checkbox>
<Checkbox name="promo" indeterminate label="Promo" />`,
        },
        {
            id: "variants",
            title: "Variants & shapes",
            code: `<Checkbox shape="rounded" checked label="Rounded" />
<Checkbox variant="success" checked label="Success" />`,
        },
    ],
    props: [
        t("name / value", "string", "—", "Native form fields."),
        t("checked", "boolean", "false", "Initial state (SSR-safe)."),
        t("indeterminate", "boolean", "false", "Dash state."),
        t("shape", `"square" | "rounded"`, `"square"`, "Indicator shape."),
        t("orientation", `"horizontal" | "vertical"`, `"horizontal"`, "Label layout."),
        t("label", "string", "—", "Text when no slot content."),
        t("size", `"xs" | "sm" | "md" | "lg" | "xl"`, `"md"`, "Scale."),
        t("variant", `"primary" | "secondary" | "muted" | "destructive" | "success" | "warning" | "info" | "inherit"`, `"primary"`, "Accent color."),
        ...common(),
    ],
    faq: [
        {
            q: "Does indeterminate submit a value?",
            a: "No — it's purely visual (like the platform). The form value follows the underlying checked state only.",
        },
    ],
    since: "1.0.0",
    related: ["radio", "switch", "label"],
};
