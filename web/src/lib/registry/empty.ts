import {type ComponentMeta, t, common} from "./types";

export const empty: ComponentMeta = {
    slug: "empty",
    name: "Empty",
    description: "Empty-state placeholder with media/title/description/footer slots.",
    overview:
        "Empty marks the 'no data' moment: an icon or illustration slot, a title, a description, and an action footer. Every part is optional — compose what the state needs.",
    importPath: "astro-ui",
    exportName: "Empty",
    category: "data-display",
    js: false,
    usage:
        `---\nimport { Empty, Button } from "astro-ui";\n---\n\n<Empty>\n  <span slot="media" aria-hidden="true">⌀</span>\n  <span slot="title">No results</span>\n  <span slot="description">Try adjusting your filters.</span>\n  <Button slot="footer" size="sm" variant="outline">Clear filters</Button>\n</Empty>`,
    features: [
        "Slot composition: media, title, description, footer",
        "3 sizes",
        "Centered, token-themed layout",
    ],
    a11y: [
        "`aria-label` support on the empty-state container",
        "Decorative media slot is `aria-hidden`",
    ],
    demos: [
        {
            id: "basic",
            title: "Basic",
            code: `<Empty>\n  <span slot="media" aria-hidden="true">⌀</span>\n  <span slot="title">No results</span>\n  <span slot="description">Try adjusting your filters.</span>\n  <Button slot="footer" size="sm" variant="outline">Clear filters</Button>\n</Empty>`,
        },
    ],
    props: [
        t("size", `"sm" | "md" | "lg"`, `"md"`, "Spacing/text scale."),
        t("ariaLabel", "string", "—", "Accessible name when context needs one."),
        ...common(false),
    ],
    slots: [
        {name: "media", description: "Icon or illustration above the text."},
        {name: "title", description: "State heading."},
        {name: "description", description: "Supporting text."},
        {name: "footer", description: "Action row (buttons)."},
    ],
    faq: [],
    since: "1.0.0",
    related: ["skeleton", "spinner", "card"],
};
