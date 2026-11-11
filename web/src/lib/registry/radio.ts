import {type ComponentMeta, t, common} from "./types";

export const radio: ComponentMeta = {
    slug: "radio",
    name: "Radio",
    description: "Native radio button with custom circle — group via shared name.",
    overview:
        "Radio mirrors Checkbox with a circle-and-dot indicator. Group behavior comes from the native shared name attribute — zero JS, perfect announcements.",
    importPath: "astro-ui",
    exportName: "Radio",
    category: "forms",
    js: false,
    usage:
        `---\nimport { Radio } from "astro-ui";\n---\n\n<Radio name="plan" value="free" checked>Free</Radio>\n<Radio name="plan" value="pro">Pro</Radio>`,
    features: ["Native group behavior via shared name", "Circle + dot visual", "5 sizes, 9 color variants", "Disabled/invalid states"],
    a11y: [
        "Native `<fieldset>` + `<legend>` name the group; `<input type=\"radio\">` handles selection",
        "Arrow keys move between options (platform behavior)",
        "`aria-invalid` + `aria-describedby` for validation",
    ],
    demos: [
        {
            id: "group",
            title: "Group",
            code: `<Radio name="plan" value="free" checked>Free</Radio>
<Radio name="plan" value="pro">Pro</Radio>
<Radio name="plan" value="ent" disabled>Enterprise</Radio>`,
        },
    ],
    props: [
        t("name / value", "string", "—", "Native group + value."),
        t("checked", "boolean", "false", "Initial selection."),
        t("disabled / invalid / required", "boolean", "false", "States."),
        t("size", `"xs" | "sm" | "md" | "lg" | "xl"`, `"md"`, "Scale."),
        t("variant", `"primary" | … | "inherit"`, `"primary"`, "Accent color."),
        ...common(),
    ],
    faq: [
        {
            q: "How do groups work?",
            a: "Exactly like HTML: same name across Radios forms the group. The browser handles mutual exclusion and arrow-key navigation.",
        },
    ],
    since: "0.1.0",
    related: ["checkbox", "switch", "label"],
};
