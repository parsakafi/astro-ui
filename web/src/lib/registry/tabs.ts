import {type ComponentMeta, t, common} from "./types";

export const tabs: ComponentMeta = {
    slug: "tabs",
    name: "Tabs",
    description: "WAI-ARIA tab switcher — line, pill, and card variants.",
    overview:
        "Tabs implements the WAI-ARIA tabs pattern: SSR renders the list with the initial tab pre-selected, panels hide via the hidden attribute, and a small inline script wires click + arrow-key navigation with automatic activation. Without JS everything stays visible and meaningful.",
    importPath: "astro-ui",
    exportName: "Tabs",
    category: "navigation",
    js: true,
    usage:
        `---\nimport { Tabs } from "astro-ui";\n---\n\n<Tabs id="settings" ariaLabel="Settings" defaultValue="billing"\n  items={[\n    { value: "account", label: "Account" },\n    { value: "billing", label: "Billing" },\n  ]}>\n  <div data-tab="account">Account panel.</div>\n  <div data-tab="billing">Billing panel.</div>\n</Tabs>`,
    features: [
        "WAI-ARIA tabs pattern: roving tabindex, automatic activation",
        "Arrow keys, Home/End navigation; RTL-aware",
        "3 variants: line (underline), pill, card (segmented)",
        "5 sizes, horizontal or vertical orientation",
        "SSR pre-selection; panels visible without JS",
        "Automatic tab/panel id + aria wiring",
    ],
    a11y: [
        "Full ARIA tabs pattern: `role=\"tablist\"` / `tab` / `tabpanel`",
        "`aria-selected`, `aria-controls`, and `aria-labelledby` wire the relationships",
        "Arrow keys move between tabs with roving `tabindex` (script)",
    ],
    demos: [
        {
            id: "variants",
            title: "Line variant",
            code: `<Tabs ariaLabel="Settings" defaultValue="billing"
  items={[{ value: "account", label: "Account" }, { value: "billing", label: "Billing" }]}>
  <div data-tab="account">Account panel.</div>
  <div data-tab="billing">Billing panel.</div>
</Tabs>`,
        },
        {
            id: "card-variant",
            title: "Card variant",
            code: `<Tabs variant="card" ariaLabel="View"
  items={[{ value: "preview", label: "Preview" }, { value: "code", label: "Code" }]}>
  <div data-tab="preview">…</div>
  <div data-tab="code">…</div>
</Tabs>`,
        },
        {
            id: "vertical",
            title: "Vertical",
            code: `<Tabs orientation="vertical" ariaLabel="Settings"
  items={[{ value: "general", label: "General" }, { value: "security", label: "Security" }]}>
  <div data-tab="general">…</div>
  <div data-tab="security">…</div>
</Tabs>`,
        },
    ],
    props: [
        t("items", "TabItem[]", "[]", "Tabs in display order: { value, label, disabled? }."),
        t("defaultValue", "string", "first enabled", "Initially selected tab."),
        t("variant", `"line" | "pill" | "card"`, `"line"`, "Visual style."),
        t("size", `"xs" | "sm" | "md" | "lg" | "xl"`, `"md"`, "Scale."),
        t("orientation", `"horizontal" | "vertical"`, `"horizontal"`, "Layout direction."),
        t("ariaLabel", "string", "—", "Accessible name for the tab list."),
        t("id", "string", "recommended", "Prefixes generated tab/panel ids."),
        ...common(false),
    ],
    slots: [
        {name: "default", description: "Panel elements, each carrying data-tab=\"<value>\"."},
    ],
    faq: [
        {
            q: "Does this this work without JS?",
            a: "The tab list and all panels render server-side; without JS every panel stays visible so content is never lost.",
        },
        {
            q: "Multiple groups on one page?",
            a: "Give each a unique id — generated tab/panel ids derive from it.",
        },
    ],
    since: "1.0.0",
    related: ["separator", "card", "button"],
};
