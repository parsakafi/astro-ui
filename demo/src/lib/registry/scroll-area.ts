import {type ComponentMeta, t} from "./types";

export const scrollArea: ComponentMeta = {
    slug: "scroll-area",
    name: "ScrollArea",
    description: "Token-themed scrollable region with styled scrollbar.",
    overview:
        "ScrollArea wraps any content in a fixed-size region with a custom-styled, token-themed scrollbar — consistent across platforms where the native scrollbar clashes with the design.",
    importPath: "astro-ui",
    exportName: "ScrollArea",
    category: "layout",
    js: false,
    usage:
        `---
import { ScrollArea } from "astro-ui";
---

<ScrollArea height="12rem">
  {longList.map((item) => <p>{item}</p>)}
</ScrollArea>`,
    features: [
        "Custom scrollbar themed from tokens",
        "height / maxHeight control",
        "Horizontal and vertical overflow",
        "Keyboard scrollable (native overflow region semantics)"
    ],
    a11y: [
        "Native scrolling region — keyboard scroll works out of the box",
        "Optionally add tabindex=0 + aria-label via props for focusable regions"
    ],
    demos: [
        {
            id: "vertical",
            title: "Vertical",
            code: `<ScrollArea class="h-40 w-full">\n  <div style="display:grid;gap:0.5rem">\n    <p>Row one</p>\n    <p>Row two</p>\n    <p>Row three</p>\n  </div>\n</ScrollArea>`,
        },
        {
            id: "horizontal",
            title: "Horizontal",
            code: `<ScrollArea orientation="horizontal" class="w-full">\n  <div style="width:max-content;display:flex;gap:0.5rem">\n    <Tag>Jan</Tag>\n    <Tag>Feb</Tag>\n    <Tag>Mar</Tag>\n  </div>\n</ScrollArea>`,
        },
    ],
    props: [
        t("orientation", "\"vertical\" | \"horizontal\" | \"both\"", "\"vertical\"", "Which axes may scroll."),
        t("class", "string", "—", "Size the region here (e.g. h-40 w-full); merged via cn()."),
        t("id", "string", "—", "Element id."),
    ],
    slots: [
        {name: "default", description: "Scrollable content."},
    ],
    faq: [
        {
            q: "Native or custom scrolling?",
            a: "Native overflow with themed scrollbar styles — no JS scroll simulation, so momentum, keyboard, and touch behaviors all stay native.",
        },
    ],
    since: "1.0.0",
    related: ["separator", "card", "table"],
};
