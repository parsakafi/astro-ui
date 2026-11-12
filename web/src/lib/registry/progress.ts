import {type ComponentMeta, t, common} from "./types";

export const progress: ComponentMeta = {
    slug: "progress",
    name: "Progress",
    description: "Determinate/indeterminate progress bar and circle.",
    overview:
        "Progress shows task completion as a bar or circle. Omit value for indeterminate. `stripes` overlays diagonal stripes on the bar fill (optionally animated), `stripedTrack` hatches the empty remainder, `segmented` renders discrete blocks, and `squared` separates fill and track with a gap. The circle uses an SVG ring with stroke-dashoffset math. `color=\"dynamic\"` turns the value itself into colour: the CSS `progress()` function maps `--aui-progress-percent` onto an error → success mix, and derives the width from the same variable, so one write moves both.",
    importPath: "@parsakafi/astro-ui",
    exportName: "Progress",
    category: "data-display",
    js: false,
    usage:
        `---\nimport { Progress } from "@parsakafi/astro-ui";\n---\n\n<Progress value={64} label="Uploading" showValue />\n<Progress variant="circle" value={80} showValue />`,
    features: [
        "Bar and circle variants",
        "Determinate (value) or indeterminate",
        "6 sizes, 9 colors",
        "color=\"dynamic\": hue follows the value (error → success) in pure CSS",
        "stripes: static or animated diagonal stripes on the bar fill",
        "stripedTrack / segmented / squared bar styles",
        "label + showValue text",
        "RTL: fill and label mirror via logical properties",
    ],
    a11y: [
        "`role=\"progressbar\"` with `aria-valuenow/min/max` announces completion",
        "`aria-label` names the task; visual bars are `aria-hidden`",
    ],
    demos: [
        {
            id: "bar",
            title: "Bar",
            code: `<Progress value={64} label="Uploading" showValue />
<Progress /> <!-- indeterminate -->`,
        },
        {
            id: "circle",
            title: "Circle",
            code: `<Progress variant="circle" value={60} showValue />
<Progress variant="circle" value={80} size="lg" showValue />`,
        },
        {
            id: "stripes",
            title: "Stripes",
            code: `<Progress value={82} stripes />
<Progress value={82} stripes="static" color="success" />`,
        },
        {
            id: "striped-track",
            title: "Striped track",
            code: `<Progress value={38} stripedTrack />
<Progress value={72} stripedTrack color="success" />`,
        },
        {
            id: "segmented",
            title: "Segmented",
            code: `<Progress value={60} segmented />
<Progress value={45} segmented={8} color="success" />`,
        },
        {
            id: "squared",
            title: "Squared",
            code: `<Progress value={40} squared />
<Progress value={90} squared color="success" />`,
        },
        {
            id: "dynamic",
            title: "Dynamic color",
            code: `<Progress id="upload" value={65} color="dynamic" label="Uploading" showValue />

<script>
  // One custom property drives both the width and the hue.
  const bar = document.getElementById("upload");
  bar.style.setProperty("--aui-progress-percent", "82");
  bar.setAttribute("aria-valuenow", "82");
</script>`,
        },
    ],
    props: [
        t("value", "number", "—", "0–100; omit for indeterminate."),
        t("variant", `"bar" | "circle"`, `"bar"`, "Shape."),
        t("size", `"xs" | "sm" | "md" | "lg" | "xl" | "2xl"`, `"md"`, "Scale."),
        t("color", `"primary" | "secondary" | "success" | "warning" | "info" | "muted" | "error" | "dynamic"`, `"primary"`, "Fill color; `dynamic` maps the value onto an error → success hue."),
        t("label", "string", "—", "Text label."),
        t("showValue", "boolean", "false", "Show the percentage."),
        t("stripes", `boolean | "static"`, "false", "Diagonal stripes on the bar fill; true animates them."),
        t("stripedTrack", "boolean", "false", "Hatch the empty remainder inside an outlined track."),
        t("segmented", `boolean | number`, "false", "Discrete blocks; a number sets the count."),
        t("squared", "boolean", "false", "Gap between fill and track."),
        t("width", "string", "—", "Bar track width (any CSS length); defaults to 100%."),
        ...common(),
    ],
    faq: [
        {
            q: "Is the value announced?",
            a: "Yes. The component is a role=\"progressbar\" with aria-valuenow/min/max, and it always has an accessible name: `label` or `ariaLabel` when provided, otherwise the default \"Progress\" so assistive tech still announces the value.",
        },
        {
            q: "How does color=\"dynamic\" work without JavaScript?",
            a: "The fill width and colour both read --aui-progress-percent through the CSS progress() function: width is progress() * 100% and the colour is a color-mix between --ui-error and --ui-success weighted by the same ratio. To animate it live, write --aui-progress-percent (and aria-valuenow) from your own script — the demo's slider does exactly that. Browsers without progress() fall back to the plain token fill.",
        },
    ],
    since: "0.2.0",
    related: ["spinner", "skeleton", "badge"],
};
