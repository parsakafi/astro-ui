import {type ComponentMeta, t} from "./types";

export const aspectRatio: ComponentMeta = {
    slug: "aspect-ratio",
    name: "AspectRatio",
    description: "Reserves a fixed width/height ratio for media — no layout shift.",
    overview:
        "AspectRatio wraps a single child (img, video, iframe, or div) in a box with a fixed CSS aspect-ratio and stretches the child to fill it. Drop media in and it covers the box without layout shift — object-fit stays in your hands.",
    importPath: "astro-ui",
    exportName: "AspectRatio",
    category: "layout",
    js: false,
    usage:
        `---
import { AspectRatio } from "astro-ui";
---

<AspectRatio ratio="16 / 9">
  <img src="hero.jpg" alt="Hero" class="object-cover" />
</AspectRatio>`,
    features: [
        "CSS aspect-ratio — number (1.78) or string (\"16 / 9\")",
        "Child stretches to fill; object-fit stays consumer-controlled",
        "Overflow hidden — no media bleeding past the box",
        "Zero JS, no layout shift"
    ],
    a11y: [
        "Purely presentational wrapper — media keeps its own alt text",
        "No role or label of its own; nothing extra for assistive tech"
    ],
    demos: [
        {
            id: "ratios",
            title: "Common ratios",
            code: `<AspectRatio ratio="16 / 9">\n  <img src="…" alt="" class="object-cover" />\n</AspectRatio>\n<AspectRatio ratio="4 / 3">…</AspectRatio>\n<AspectRatio ratio={1}>…</AspectRatio>`,
        },
        {
            id: "widescreen",
            title: "Widescreen",
            code: `<AspectRatio ratio="21 / 9">…</AspectRatio>\n<AspectRatio ratio="16 / 10">…</AspectRatio>`,
        },
        {
            id: "portrait",
            title: "Portrait",
            code: `<AspectRatio ratio="9 / 16">…</AspectRatio>\n<AspectRatio ratio="4 / 5">…</AspectRatio>`,
        },
        {
            id: "photo",
            title: "Photo",
            code: `<AspectRatio ratio="3 / 2">…</AspectRatio>\n<AspectRatio ratio={1}>…</AspectRatio>`,
        },
    ],
    props: [
        t("ratio", "number | string", "1", "CSS aspect-ratio value: number (1.78) or string (\"16 / 9\")."),
        t("class", "string", "—", "Merged via cn(); Tailwind classes welcome."),
        t("id", "string", "—", "Element id."),
    ],
    slots: [
        {name: "default", description: "Media stretched to fill the box."},
    ],
    faq: [
        {
            q: "Why doesn't my image fill the box?",
            a: "The child is stretched to 100%×100% — add object-cover (or object-contain) on the img so it fills without distortion.",
        },
    ],
    since: "1.0.0",
    related: ["card", "avatar", "scroll-area"],
};
