import {type ComponentMeta, t, common} from "./types";

export const toggleGroup: ComponentMeta = {
    slug: "toggle-group",
    name: "ToggleGroup",
    description: "Connected row of Toggles — segmented control styling.",
    overview:
        "ToggleGroup wraps any number of Toggle children and stitches their borders into one segmented control, mirroring the ButtonGroup composition. Radius and negative-margin stitching reach slotted children through :global(). State stays per-toggle (aria-pressed on each child); whether the group enforces single-selection is the consumer's choice — a one-line app script, same recipe as Toggle.",
    importPath: "astro-ui",
    exportName: "ToggleGroup",
    category: "forms",
    js: false,
    usage:
        `---\nimport { ToggleGroup, Toggle } from "astro-ui";\n---\n\n<ToggleGroup ariaLabel="Text align">\n  <Toggle ariaLabel="Left">Left</Toggle>\n  <Toggle ariaLabel="Center">Center</Toggle>\n  <Toggle ariaLabel="Right">Right</Toggle>\n</ToggleGroup>`,
    features: [
        "Joins Toggle children into one segmented control",
        "horizontal / vertical orientation",
        "role=\"group\" + aria-label — groups of toggles need an accessible name",
        "State stays per-toggle; single-selection is an app-side one-liner",
    ],
    a11y: [
        "`role=\"group\"` names the set; buttons carry `aria-pressed`",
        "Roving `:focus-visible` ring",
    ],
    demos: [
        {
            id: "horizontal",
            title: "Horizontal",
            code: `<ToggleGroup ariaLabel="Text align">\n  <Toggle ariaLabel="Left">Left</Toggle>\n  <Toggle ariaLabel="Center" pressed>Center</Toggle>\n  <Toggle ariaLabel="Right">Right</Toggle>\n</ToggleGroup>`,
        },
        {
            id: "vertical",
            title: "Vertical",
            code: `<ToggleGroup orientation="vertical" ariaLabel="View">\n  <Toggle ariaLabel="List">List</Toggle>\n  <Toggle ariaLabel="Grid" pressed>Grid</Toggle>\n</ToggleGroup>`,
        },
    ],
    props: [
        t("orientation", `"horizontal" | "vertical"`, `"horizontal"`, "Stack direction of the connected group."),
        ...common(true),
    ],
    faq: [
        {
            q: "How do I enforce single-selection?",
            a: "On click, set aria-pressed=false (and drop aui-toggle--pressed) on every sibling — same one-line script pattern as Toggle; the group itself stays zero-JS.",
        },
    ],
    since: "1.0.0",
    related: ["toggle", "button-group", "segmented-control"],
};
