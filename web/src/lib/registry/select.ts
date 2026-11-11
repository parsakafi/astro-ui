import {type ComponentMeta, t, common} from "./types";

export const select: ComponentMeta = {
    slug: "select",
    name: "Select",
    description: "Native select with custom chevron, placeholder, and validation state.",
    overview:
        "Select wraps the native &lt;select&gt; so keyboard support and mobile pickers stay perfect — with token styling, a custom chevron, placeholder support, and options composed through the default slot.",
    importPath: "@parsakafi/astro-ui",
    exportName: "Select",
    category: "forms",
    js: false,
    usage:
        `---\nimport { Select, Label } from "@parsakafi/astro-ui";\n---\n\n<Label for="fruit" required>Fruit</Label>\n<Select id="fruit" placeholder="Choose a fruit" required>\n  <option value="apple">Apple</option>\n  <option value="pear">Pear</option>\n</Select>`,
    features: [
        "Native <select> — full keyboard + platform pickers",
        "Custom chevron (hidden when multiple)",
        "placeholder option pattern",
        "invalid / disabled / required states",
        "5 sizes, 8 variants",
        "Logical-property padding — RTL-ready",
    ],
    a11y: [
        "Native `<select>` — popup, arrow keys, and announced options from the platform",
        "`aria-invalid` + `aria-describedby` for validation",
    ],
    demos: [
        {
            id: "basic",
            title: "Basic",
            code: `<Select placeholder="Choose a fruit">
  <option value="apple">Apple</option>
  <option value="pear">Pear</option>
</Select>`,
        },
        {
            id: "states",
            title: "States & sizes",
            code: `<Select invalid><option>…</option></Select>
<Select disabled><option>…</option></Select>
<Select size="lg"><option>…</option></Select>`,
        },
    ],
    props: [
        t("name", "string", "—", "Form field name."),
        t("placeholder", "string", "—", "Disabled placeholder option."),
        t("required / disabled / invalid", "boolean", "false", "States."),
        t("multiple", "boolean", "false", "Multi-select (native chrome, chevron hidden)."),
        t("size", `"xs" | "sm" | "md" | "lg" | "xl"`, `"md"`, "Scale."),
        t("variant", `"inherit" | "primary" | … | "info"`, `"inherit"`, "Border color."),
        ...common(),
    ],
    slots: [{name: "default", description: "<option> / <optgroup> elements."}],
    faq: [
        {
            q: "Why not a custom listbox?",
            a: "Native selects keep keyboard nav, screen-reader semantics, and mobile pickers for free — that's the astro-ui philosophy: platform first.",
        },
    ],
    since: "0.1.0",
    related: ["label", "input", "checkbox"],
};
