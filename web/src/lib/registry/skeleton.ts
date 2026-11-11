import {type ComponentMeta, t} from "./types";

export const skeleton: ComponentMeta = {
    slug: "skeleton",
    name: "Skeleton",
    description: "Pulsing placeholder blocks for loading layouts.",
    overview:
        "Skeleton reserves layout space with a pulsing neutral block while content loads — text lines, circles, rectangles — so the final content swaps in without reflow.",
    importPath: "@parsakafi/astro-ui",
    exportName: "Skeleton",
    category: "feedback",
    js: false,
    usage:
        `---
import { Skeleton } from "@parsakafi/astro-ui";
---

<Skeleton style="width:100%;height:1rem" />
<Skeleton variant="circle" style="width:3rem;height:3rem" />`,
    features: [
        "Variants: text, circle, rectangle",
        "Pulse animation with reduced-motion off switch",
        "Static mode via animated=false",
        "Size entirely consumer-driven (width/height styles)"
    ],
    a11y: [
        "aria-hidden by default — pair with an aria-busy container or sr-only status",
        "Animation removed under prefers-reduced-motion"
    ],
    demos: [
        {
            id: "basic",
            title: "Basic",
            code: `<Skeleton variant="text" width="60%" />\n<Skeleton variant="text" width="90%" />\n<Skeleton variant="circle" width="3rem" height="3rem" />`,
        },
        {
            id: "card",
            title: "Card layout",
            code: `<div style="display:grid;gap:0.75rem">\n  <Skeleton height="8rem" />\n  <Skeleton variant="text" width="80%" />\n</div>`,
        },
        {
            id: "compose",
            title: "Compose a layout",
            code: `<div style="display:flex;gap:1rem;align-items:flex-start">\n  <Skeleton variant="circle" />\n  <div style="flex:1;display:grid;gap:0.5rem">\n    <Skeleton variant="text" width="40%" />\n    <Skeleton variant="text" />\n    <Skeleton variant="rect" height="4rem" />\n  </div>\n</div>`,
        },
    ],
    props: [
        t("variant", "\"text\" | \"rect\" | \"circle\"", "\"rect\"", "Placeholder shape."),
        t("width / height", "string", "—", "Explicit box dimensions (any CSS length)."),
        t("size", "\"xs\" | \"sm\" | \"md\" | \"lg\" | \"xl\" | \"2xl\"", "\"md\"", "Preset scale."),
        t("animated", "boolean", "true", "Pulse animation; false for a static block."),
        t("class", "string", "—", "Merged via cn(); Tailwind classes welcome."),
        t("id", "string", "—", "Element id."),
    ],
    slots: [],
    faq: [
        {
            q: "How do I announce loading?",
            a: "Skeletons are aria-hidden decoration. Put aria-busy=true on the loading region and swap it out when content arrives.",
        },
    ],
    since: "0.1.0",
    related: ["spinner", "avatar", "progress"],
};
