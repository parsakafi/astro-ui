import {type ComponentMeta, t, common} from "./types";

export const slider: ComponentMeta = {
    slug: "slider",
    name: "Slider",
    description: "Native range input themed with tokens — drag, keys, form value.",
    overview:
        "Slider wraps &lt;input type=\"range\"&gt; with token styling: the platform owns dragging, arrow keys, Home/End, and form submission. Three presentations share one API — horizontal, vertical (min at the bottom), and a radial dial — plus a two-thumb range mode. Optional tick marks, a value readout, and a tooltip bubble that rides the thumb complete it. The track fills from the minimum and mirrors in RTL.",
    importPath: "astro-ui",
    exportName: "Slider",
    category: "forms",
    js: false,
    usage:
        `---\nimport { Slider } from "astro-ui";\n---\n\n<Slider name="volume" label="Volume" value={70} showValue />\n<Slider name="temp" min={16} max={30} marks={["Cold", "Warm", "Hot"]} />`,
    features: [
        "Native range input — platform drag, keys, form value",
        "Horizontal + vertical orientations",
        "Range mode: two thumbs, filled span",
        "Radial dial mode (SVG arc, pointer drag)",
        "Marks/ticks row + value readout",
        "Thumb tooltip bubble (opt-in script, RTL-aware)",
        "5 color variants, 3 sizes",
    ],
    a11y: [
        "Native `<input type=\"range\">` — dragging, arrow keys, Home/End, and form value from the platform",
        "`aria-label`/`aria-labelledby` names the control",
        "Tooltip bubble is an `<output for>` — value changes are announced, and it's pointer-events: none",
    ],
    demos: [
        {
            id: "basic",
            title: "Basic",
            code: `<Slider name="volume" label="Volume" value={70} showValue />\n<Slider name="temp" label="Temperature" value={22} min={16} max={30} marks={["Cold", "Warm", "Hot"]} />\n<Slider name="disabled" label="Disabled" value={40} disabled />`,
        },
        {
            id: "tooltip",
            title: "Thumb tooltip",
            code: `{/* Bubble appears on hover, drag, and keyboard focus */}\n<Slider name="brightness" label="Brightness" value={65} tooltip />\n\n{/* Tooltip + live readout in the header */}\n<Slider name="temp" label="Temperature" value={22} min={16} max={30}\n  tooltip showValue />\n\n{/* Works with marks and non-zero minimums too */}\n<Slider name="zoom" label="Zoom" value={110} min={50} max={200} step={10}\n  tooltip marks={["50%", "125%", "200%"]} />`,
        },
        {
            id: "range",
            title: "Range",
            code: `{/* Two thumbs bound a filled span; keyboard works on each */}
<Slider name="price" label="Price range" range value={25} valueEnd={75}
  showValue tooltip />

{/* Range with marks */}
<Slider name="budget" range value={20} valueEnd={60}
  marks={["0", "50", "100"]} />`,
        },
        {
            id: "vertical",
            title: "Vertical",
            code: `{/* min at the bottom; height controls the track length */}
<Slider name="level" label="Level" orientation="vertical" value={70}
  showValue />

{/* Vertical range */}
<Slider name="band" orientation="vertical" range value={30} valueEnd={70} />`,
        },
        {
            id: "radial",
            title: "Radial",
            code: `{/* SVG dial: drag the ring or use arrow keys; 12 o'clock = min */}
<Slider name="opacity" label="Opacity" radial value={33} showValue />

{/* Radial range */}
<Slider name="window" radial range value={10} valueEnd={70} showValue />`,
        },
    ],
    props: [
        t("name", "string", "—", "Field name. Range end submits as `nameEnd` (default `${name}-end`)."),
        t("value", "number", "50", "Initial value (range start)."),
        t("valueEnd", "number", "—", "Range end (range mode)."),
        t("min / max", "number", "0 / 100", "Bounds."),
        t("step", "number", "1", "Increment."),
        t("orientation", `"horizontal" | "vertical"`, `"horizontal"`, "Track direction; vertical keeps min at the bottom."),
        t("range", "boolean", "false", "Two thumbs bounding a filled span."),
        t("radial", "boolean", "false", "SVG dial presentation (supports range)."),
        t("height", "string", `"10rem"`, "Track length in vertical orientation."),
        t("marks", "string[]", "—", "Tick labels under the track."),
        t("showValue", "boolean", "false", "Value readout."),
        t("tooltip", "boolean", "false", "Value bubble above the thumb (hover/drag/focus)."),
        t("ariaStartLabel", "string", "—", "Accessible name for the start thumb (range)."),
        t("ariaEndLabel", "string", "—", "Accessible name for the end thumb (range)."),
        t("label", "string", "—", "Label above the track."),
        t("variant", `"primary" | "success" | "warning" | "error" | "info"`, `"primary"`, "Accent color."),
        t("size", `"sm" | "md" | "lg"`, `"md"`, "Scale."),
        t("disabled", "boolean", "false", "Disabled state."),
        ...common(false),
    ],
    faq: [],
    since: "1.0.0",
    related: ["rating", "progress", "input"],
};
