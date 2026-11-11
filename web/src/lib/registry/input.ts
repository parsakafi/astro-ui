import {type ComponentMeta, t, common} from "./types";

export const input: ComponentMeta = {
    slug: "input",
    name: "Input",
    description: "Every native input type with token styling and validation states.",
    overview:
        "Input covers all 16 native types — text, email, password, date, color, range, file and friends — with token styling, size/variant control, and invalid state for server-driven validation. Numeric/date bounds forward via rest attributes.",
    importPath: "astro-ui",
    exportName: "Input",
    category: "forms",
    js: false,
    usage:
        `---\nimport { Input, Label } from "astro-ui";\n---\n\n<Label for="email" required>Email</Label>\n<Input id="email" name="email" type="email" placeholder="ada@example.com" />`,
    features: [
        "All 16 native input types, fully typed",
        "8 border variants incl. success/error",
        "5 sizes",
        "invalid state for server-side validation display",
        "min/max/step/accept forward via rest",
        "Zero JS — forms submit natively",
    ],
    a11y: [
        "Native input semantics; hint/error text connected via `aria-describedby`",
        "`aria-invalid` for validation state",
    ],
    demos: [
        {
            id: "types",
            title: "Common types",
            code: `<Input type="text" placeholder="Plain text" />
<Input type="email" placeholder="ada@example.com" />
<Input type="password" value="s3cret" />
<Input type="date" />`,
        },
        {
            id: "states",
            title: "States",
            code: `<Input invalid ariaDescribedby="err" />
<p id="err">Username is taken.</p>
<Input disabled value="Cannot edit" />`,
        },
        {
            id: "sizes",
            title: "Sizes",
            code: `<Input size="sm" placeholder="sm" />
<Input size="md" placeholder="md" />
<Input size="lg" placeholder="lg" />`,
        },
    ],
    props: [
        t("type", "all 16 native types", `"text"`, "Fully typed union."),
        t("name / value / placeholder", "string", "—", "Native attributes."),
        t("min / max / step", "string | number", "—", "Numeric/date bounds (native)."),
        t("minlength / maxlength", "number", "—", "Length bounds."),
        t("invalid", "boolean", "false", "Error border + aria-invalid."),
        t("size", `"xs" | "sm" | "md" | "lg" | "xl"`, `"md"`, "Control scale."),
        t("variant", `"inherit" | "primary" | "secondary" | "muted" | "error" | "success" | "warning" | "info"`, `"primary"`, "Border color."),
        ...common(),
    ],
    faq: [
        {
            q: "How is validation shown?",
            a: "Server/form-driven: set invalid and point ariaDescribedby at the message element. No client JS ships or runs.",
        },
    ],
    since: "0.1.0",
    related: ["label", "textarea", "select"],
};
