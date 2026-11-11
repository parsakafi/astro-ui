import {type ComponentMeta, t} from "./types";

export const spinner: ComponentMeta = {
    slug: "spinner",
    name: "Spinner",
    description: "Loading indicator in 4 animation styles and 6 sizes.",
    overview:
        "Spinner communicates in-flight work with pure CSS animation — ring, dots, bars, and pulse styles at six sizes. Color follows the text color; wrap it in a button or surface and it inherits.",
    importPath: "astro-ui",
    exportName: "Spinner",
    category: "feedback",
    js: false,
    usage:
        `---
import { Spinner } from "astro-ui";
---

<Spinner />
<Spinner variant="dots" size="lg" />`,
    features: [
        "4 variants: ring (default), dots, bars, pulse",
        "6 sizes from xs to 2xl",
        "Pure CSS animation — zero JS",
        "Respects prefers-reduced-motion"
    ],
    a11y: [
        "role=status with a visually hidden Loading label by default",
        "aria-label override for specific contexts (Saving, Uploading…)",
        "Animation disabled under prefers-reduced-motion (static glyph)"
    ],
    demos: [
        {
            id: "styles",
            title: "Styles",
            code: `<Spinner label="Ring" />\n<Spinner icon="dots" label="Dots" />\n<Spinner icon="pulse" label="Pulse" />\n<Spinner icon="spin" label="Spin" />`,
        },
        {
            id: "sizes-colors",
            title: "Sizes & colors",
            code: `<Spinner size="xs" label="xs" />\n<Spinner size="sm" label="sm" />\n<Spinner size="lg" label="lg" />\n<Spinner variant="success" label="Success" />\n<Spinner variant="warning" label="Warning" />`,
        },
    ],
    props: [
        t("icon", "\"ring\" | \"dots\" | \"pulse\" | \"spin\"", "\"ring\"", "Visual style of the spinner."),
        t("variant", "\"inherit\" | \"primary\" | … | \"accent\"", "\"inherit\"", "Glyph color."),
        t("size", "\"xs\" | \"sm\" | \"md\" | \"lg\" | \"xl\" | \"2xl\"", "\"md\"", "Glyph size."),
        t("label", "string", "—", "Accessible status label."),
        t("class", "string", "—", "Merged via cn(); Tailwind classes welcome."),
        t("id", "string", "—", "Element id."),
    ],
    slots: [],
    faq: [
        {
            q: "Ring vs Button loading?",
            a: "Button has built-in loading that swaps its label for a spinner. Use standalone Spinner for page regions and inline waits.",
        },
    ],
    since: "0.1.0",
    related: ["skeleton", "progress", "button"],
};
