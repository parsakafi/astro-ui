import {type ComponentMeta, t, common} from "./types";

export const rating: ComponentMeta = {
    slug: "rating",
    name: "Rating",
    description: "Rating input on native radios — icon presets, emoji, and satisfaction scales, zero JS.",
    overview:
        "Rating is a fieldset of radio inputs styled as rating icons: arrow keys, form submission, and per-step labels (\"3 out of 5\") come from the platform. Pick an icon preset (star, heart, circle, square, bar, thumb) or emoji faces, supply custom SVG paths, tint each step with colorScale for satisfaction scales, or highlight only the selected step with single for NPS-style questions. readonly renders a fractional display-only value.",
    importPath: "astro-ui",
    exportName: "Rating",
    category: "forms",
    js: false,
    usage:
        `---\nimport { Rating } from "astro-ui";\n---\n\n<Rating name="score" value={4} />\n<Rating name="mood" value={4} icon="emoji" />\n<Rating\n  name="satisfaction"\n  colorScale\n  showLabels\n  labels={["Very bad", "Bad", "OK", "Good", "Excellent"]}\n/>\n<Rating value={3.5} readonly />`,
    features: [
        "Native radios: keyboard + form value",
        "Per-step screen-reader labels",
        "Icon presets + custom SVG paths",
        "Emoji sentiment faces",
        "Satisfaction scale with per-step colors",
        "NPS-style single highlight",
        "readonly fractional display",
    ],
    a11y: [
        "Native `<fieldset>` of radios — arrow keys, exact selection, and a form value with zero script",
        "Each step has a real label (\"3 out of 5\" or per-step `labels`) so screen readers announce values",
        "`readonly` renders `role=\"img\"` with an inclusive aria-label",
        "`colorScale`/emoji states remain announced through their radio labels",
    ],
    demos: [
        {
            id: "basic",
            title: "Interactive & readonly",
            code: `<Rating name="score" value={4} />\n<Rating value={3.5} readonly />\n<Rating value={2} readonly size="lg" variant="primary" />`,
        },
        {
            id: "sizes",
            title: "Sizes & variants",
            code: `<Rating name="s-sm" value={3} size="sm" />\n<Rating name="s-md" value={3} size="md" />\n<Rating name="s-lg" value={3} size="lg" />\n<Rating name="s-primary" value={3} variant="primary" size="lg" />`,
        },
        {
            id: "icons",
            title: "Icon presets & custom",
            code: `<Rating name="heart" value={4} icon="heart" />\n<Rating name="thumb" value={4} icon="thumb" />\n<Rating name="circle" value={3} icon="circle" />\n<Rating name="square" value={3} icon="square" />\n<Rating name="bar" value={2} icon="bar" />\n\n{/* Custom icon: 16×16 SVG path data */}\n<Rating\n  name="custom"\n  value={3}\n  iconPath="M8 1l2.1 4.3 4.7.7-3.4 3.3.8 4.7L8 11.8 3.8 14l.8-4.7L1.2 6l4.7-.7z"\n/>`,
        },
        {
            id: "emoji",
            title: "Emoji sentiment",
            code: `<Rating name="mood" value={4} icon="emoji" ariaLabel="How do you feel?" />\n<Rating value={2} icon="emoji" readonly />\n<Rating value={5} icon="emoji" readonly size="lg" />`,
        },
        {
            id: "scale",
            title: "Satisfaction scale",
            code: `<Rating\n  name="satisfaction"\n  value={2}\n  colorScale\n  showLabels\n  labels={["Very dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very satisfied"]}\n  ariaLabel="Overall satisfaction"\n/>\n<Rating value={4} readonly colorScale showLabels\n  labels={["Very bad", "Bad", "OK", "Good", "Excellent"]} />`,
        },
        {
            id: "nps",
            title: "Single highlight (NPS-style)",
            code: `<Rating\n  name="nps"\n  value={9}\n  max={10}\n  single\n  variant="primary"\n  showLabels\n  labels={["Not likely", "Extremely likely"]}\n  ariaLabel="How likely will you recommend us?"\n/>`,
        },
    ],
    props: [
        t("name", "string", "—", "Field name (required for interactive)."),
        t("value", "number", "0", "Initial value (fractional for readonly)."),
        t("max", "number", "5", "Step count."),
        t("icon", `"star" | "heart" | "circle" | "square" | "bar" | "thumb" | "emoji"`, `"star"`, "Icon preset; emoji renders sentiment faces."),
        t("iconPath", "string", "—", "Custom icon: 16×16 SVG path data (overrides icon)."),
        t("icons", "string[]", "—", "Per-step custom icons: 16×16 SVG path data, index 0 = step 1."),
        t("colorScale", "boolean", "false", "Tint each step red → green (satisfaction ramp)."),
        t("single", "boolean", "false", "Highlight only the selected step (NPS-style)."),
        t("labels", "string[]", "—", "Per-step labels: sr text + visible labels row."),
        t("showLabels", "boolean", "false", "Render the labels row under the scale."),
        t("readonly", "boolean", "false", "Display-only mode."),
        t("variant", `"primary" | "warning"`, `"warning"`, "Fill color (ignored per-step when colorScale)."),
        t("size", `"sm" | "md" | "lg"`, `"md"`, "Icon scale."),
        t("disabled", "boolean", "false", "Disable the input."),
        t("ariaLabel", "string", `"Rating"`, "Group name."),
        ...common(false),
    ],
    faq: [
        {
            q: "Why radios and not a slider?",
            a: "Ratings are discrete choices — radios give exact selection, per-step labels, and platform keyboard behavior with zero script.",
        },
        {
            q: "Star scale or emotion scale?",
            a: "Use stars for familiar magnitude judgments. Use colorScale with labels for satisfaction (CSAT) — color + wording anchor each step. Use single with icon=\"emoji\" for quick sentiment pulses where magnitude between options is meaningless.",
        },
        {
            q: "How do custom icons work?",
            a: "Pass iconPath (one icon for every step) or icons (one path per step) with SVG path data drawn in a 16×16 viewBox. Paths render as-is — keep them simple, filled shapes.",
        },
    ],
    since: "1.0.0",
    related: ["slider", "switch", "progress"],
};
