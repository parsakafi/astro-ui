import {type ComponentMeta, t, common} from "./types";

export const textarea: ComponentMeta = {
    slug: "textarea",
    name: "Textarea",
    description: "Multi-line input with counters, clear button, and resize control.",
    overview:
        "Textarea mirrors Input's states and adds multi-line niceties: character counter, optional clear button, auto-grow bounds, and resize control. The core control is zero-JS; the extras are progressive enhancements — a tiny scoped script wires them and they degrade gracefully without it.",
    importPath: "@parsakafi/astro-ui",
    exportName: "Textarea",
    category: "forms",
    js: true,
    usage:
        `---\nimport { Textarea, Label } from "@parsakafi/astro-ui";\n---\n\n<Label for="bio">Bio</Label>\n<Textarea id="bio" rows={4} maxlength={280} showCount clearable />`,
    features: [
        "Input-matching variants and sizes",
        "showCount / counter character displays",
        "clearable — clear button appears while typing",
        "minRows / maxRows auto-grow",
        "resize control (none/vertical/horizontal/both)",
    ],
    a11y: [
        "Native textarea semantics; hint/error text via `aria-describedby`",
        "`aria-invalid` for validation state",
    ],
    demos: [
        {
            id: "basic",
            title: "Basic + counter + clear",
            code: `<Textarea rows={4} maxlength={280} showCount clearable placeholder="Tell us about yourself" />`,
        },
        {
            id: "grow",
            title: "Auto-grow",
            code: `<Textarea minRows={2} maxRows={5} placeholder="Grows with input" />`,
        },
        {
            id: "resize",
            title: "Resize",
            code: `<Textarea resize="vertical" rows={2} />`,
        },
    ],
    props: [
        t("rows", "number", "4", "Visible rows."),
        t("maxlength / minlength", "number", "—", "Length bounds."),
        t("showCount / counter", "boolean", "false", "Character-count readout (aliases)."),
        t("clearable", "boolean", "false", "Clear button, visible with text."),
        t("minRows / maxRows", "number", "—", "Auto-grow bounds; sets resize to none."),
        t("resize", `"none" | "vertical" | "horizontal" | "both"`, `"vertical"`, "Resize axis."),
        t("invalid", "boolean", "false", "Validation state."),
        t("size", `"xs" | "sm" | "md" | "lg" | "xl"`, `"md"`, "Scale."),
        t("variant", `"inherit" | "primary" | … | "info"`, `"inherit"`, "Border color."),
        ...common(),
    ],
    faq: [
        {
            q: "showCount vs counter?",
            a: "They are aliases — either renders the count readout (\"n / maxlength\" when a cap is set). Pick the name that reads best in your markup.",
        },
    ],
    since: "0.1.0",
    related: ["input", "label", "button"],
};
