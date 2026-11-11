import {type ComponentMeta, t, common} from "./types";

export const progress: ComponentMeta = {
    slug: "progress",
    name: "Progress",
    description: "Determinate/indeterminate progress bar and circle.",
    overview:
        "Progress shows task completion as a bar or circle. Omit value for indeterminate. `stripes` overlays diagonal stripes on the bar fill (optionally animated), `stripedTrack` hatches the empty remainder, `segmented` renders discrete blocks, and `squared` separates fill and track with a gap. The circle uses an SVG ring with stroke-dashoffset math.",
    importPath: "@parsakafi/astro-ui",
    exportName: "Progress",
    category: "data-display",
    js: false,
    usage:
        `---\nimport { Progress } from "@parsakafi/astro-ui";\n---\n\n<Progress value={64} label="Uploading" showValue />\n<Progress variant="circle" value={80} showValue />`,
    features: [
        "Bar and circle variants",
        "Determinate (value) or indeterminate",
        "6 sizes, 8 colors",
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
    ],
    props: [
        t("value", "number", "—", "0–100; omit for indeterminate."),
        t("variant", `"bar" | "circle"`, `"bar"`, "Shape."),
        t("size", `"xs" | "sm" | "md" | "lg" | "xl" | "2xl"`, `"md"`, "Scale."),
        t("color", `"primary" | "secondary" | "success" | "warning" | "info" | "muted" | "error"`, `"primary"`, "Fill color."),
        t("label", "string", "—", "Text label."),
        t("showValue", "boolean", "false", "Show the percentage."),
        t("stripes", `boolean | "static"`, "false", "Diagonal stripes on the bar fill; true animates them."),
        t("stripedTrack", "boolean", "false", "Hatch the empty remainder inside an outlined track."),
        t("segmented", `boolean | number`, "false", "Discrete blocks; a number sets the count."),
        t("squared", "boolean", "false", "Gap between fill and track."),
        ...common(),
    ],
    faq: [
        {
            q: "Is the value announced?",
            a: "When label is set the component exposes a role=\"progressbar\" with aria-valuenow. Without label, treat it as decorative.",
        },
    ],
    since: "0.1.0",
    related: ["spinner", "skeleton", "badge"],
};
