import {type ComponentMeta, t} from "./types";

export const separator: ComponentMeta = {
    slug: "separator",
    name: "Separator",
    description: "Horizontal/vertical divider with solid, dashed, and dotted styles.",
    overview:
        "Separator renders a themed rule between sections — semantic hr (or a decorated span when purely visual), with orientation, style, and label support.",
    importPath: "astro-ui",
    exportName: "Separator",
    category: "layout",
    js: false,
    usage:
        `---
import { Separator } from "astro-ui";
---

<Separator />
<Separator orientation="vertical" style="height:2rem" />
<Separator label="or" />`,
    features: [
        "Horizontal / vertical orientation",
        "solid / dashed / dotted styles",
        "Optional centered label (\"or\", section names)",
        "Semantic hr or decorative span"
    ],
    a11y: [
        "Renders semantic <hr> by default (separator role implicit)",
        "decorative prop downgrades to aria-hidden span when the rule is purely visual",
        "Optional label is read by screen readers (\"or\" between form actions)"
    ],
    demos: [
        {
            id: "both",
            title: "Horizontal & vertical",
            code: `<p>Above the rule.</p>\n<Separator />\n<p>Below the rule.</p>`,
        },
        {
            id: "variants",
            title: "Line variants",
            code: `<Separator />\n<Separator variant="dashed" />\n<Separator variant="dotted" />\n<Separator variant="double" />\n<Separator variant="gradient" />\n<Separator variant="faded" />`,
        },
        {
            id: "vertical-variants",
            title: "Vertical variants",
            code: `<span>Before</span>\n<Separator orientation="vertical" variant="dashed" />\n<span>After</span>\n<Separator orientation="vertical" variant="double" />\n<span>End</span>`,
        },
        {
            id: "labeled",
            title: "Labeled divider",
            code: `<Separator variant="labeled">or continue with</Separator>`,
        },
    ],
    props: [
        t("orientation", "\"horizontal\" | \"vertical\"", "\"horizontal\"", "Rule direction."),
        t("variant", "\"solid\" | \"dashed\" | \"dotted\" | \"double\" | \"gradient\" | \"faded\" | \"labeled\"", "\"solid\"", "Line treatment; labeled centers slot content between two lines (horizontal only)."),
        t("label", "string", "—", "Accessible name when the separator delimits labelled regions."),
        t("class", "string", "—", "Merged via cn(); Tailwind classes welcome."),
        t("id", "string", "—", "Element id."),
    ],
    slots: [
        {name: "default", description: "Label content (overrides the label prop)."},
    ],
    faq: [
        {
            q: "hr or span?",
            a: "Semantic <hr> by default — it announces a thematic break. Pass decorative when the rule is purely visual spacing.",
        },
    ],
    since: "0.1.0",
    related: ["card", "scroll-area", "aspect-ratio"],
};
