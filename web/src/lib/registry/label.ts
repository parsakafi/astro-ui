import {type ComponentMeta, t, common} from "./types";

export const label: ComponentMeta = {
    slug: "label",
    name: "Label",
    description: "Form label with required/disabled states and two sizes.",
    overview:
        "Label renders a semantic &lt;label&gt; tied to a control via for. Required adds a visual marker; disabled dims the text to match a disabled control.",
    importPath: "astro-ui",
    exportName: "Label",
    category: "forms",
    js: false,
    usage:
        `---\nimport { Label, Input } from "astro-ui";\n---\n\n<Label for="email" required>Email</Label>\n<Input id="email" type="email" />`,
    features: ["Native <label> association via for", "required marker", "disabled state matches disabled inputs", "2 sizes"],
    a11y: [
        "Native `<label>` association; `aria-required` support for required fields",
    ],
    demos: [
        {
            id: "basic",
            title: "Basic",
            code: `<Label for="email" required>Email</Label>
<Input id="email" type="email" />`,
        },
    ],
    props: [
        t("for", "string", "—", "Must match the control's id."),
        t("required", "boolean", "false", "Adds the required marker."),
        t("disabled", "boolean", "false", "Dimmed text state."),
        t("size", `"sm" | "md"`, `"md"`, "Text scale."),
        ...common(false),
    ],
    faq: [
        {
            q: "Why not just wrap the input?",
            a: "Wrapping works, but explicit for/id keeps the association when the control isn't a direct child (grids, portals) and is what this component enforces.",
        },
    ],
    since: "0.1.0",
    related: ["input", "select", "checkbox"],
};
