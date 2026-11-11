import {type ComponentMeta, t, common} from "./types";

export const beforeAfter: ComponentMeta = {
    slug: "before-after",
    name: "BeforeAfter",
    description: "Draggable image comparison — two images, one split, native range control.",
    overview:
        "BeforeAfter stacks two images in one frame and clips the \u201cbefore\u201d layer at the split position, revealing the \u201cafter\u201d layer underneath. The split is driven by a real `<input type=\"range\">` stretched across the frame, so pointer drag, touch, and keyboard (Arrow keys, Home, End, Page Up/Down) work natively \u2014 the scoped script only mirrors the input value into a CSS custom property. `value` sets the initial position, `aspectRatio` shapes the frame, and `labels` adds Before/After chips. Clipping uses logical properties plus `:dir()` so the reveal starts on the reading side in RTL. Every move emits a bubbling `before-after:change` event with `detail.value` (0\u2013100).",
    importPath: "@parsakafi/astro-ui",
    exportName: "BeforeAfter",
    category: "data-display",
    js: true,
    usage:
        `---\nimport { BeforeAfter } from "@parsakafi/astro-ui";\n---\n\n<BeforeAfter\n  before={{ src: "/before.jpg", alt: "Empty room" }}\n  after={{ src: "/after.jpg", alt: "Furnished room" }}\n/>`,
    features: [
        "Native range input drives the split \u2014 pointer, touch, and keyboard all work",
        "Independent src + alt for each image",
        "Initial split via value (0\u2013100)",
        "Any CSS aspect-ratio for the frame",
        "Optional Before/After chips (labels)",
        "RTL-aware reveal via logical properties and :dir()",
        "before-after:change event carries the current percentage",
        "Token-driven line, handle, shadow, and focus ring",
    ],
    a11y: [
        "Root is role=group named by `ariaLabel`",
        "The split control is a native input[type=range], so screen readers announce a percentage and keyboard stepping works",
        "`aria-valuetext` mirrors the current position",
        "The decorative divider and handle are aria-hidden; both images keep their alt text",
        "Focus is shown on the handle with `:focus-visible` and the shared ring tokens",
    ],
    demos: [
        {
            id: "basic",
            title: "Basic",
            code: `<BeforeAfter\n  before={{ src: "/demo/before-after/before.svg", alt: "Overcast mountain lake" }}\n  after={{ src: "/demo/before-after/after.svg", alt: "Sunny mountain lake" }}\n/>`,
        },
        {
            id: "labels",
            title: "With labels",
            code: `<BeforeAfter\n  labels\n  value={35}\n  before={{ src: "/demo/before-after/before.svg", alt: "Overcast mountain lake" }}\n  after={{ src: "/demo/before-after/after.svg", alt: "Sunny mountain lake" }}\n/>`,
        },
        {
            id: "portrait",
            title: "Custom ratio and start position",
            code: `<BeforeAfter\n  aspectRatio="4 / 3"\n  value={70}\n  before={{ src: "/demo/before-after/before.svg", alt: "Overcast mountain lake" }}\n  after={{ src: "/demo/before-after/after.svg", alt: "Sunny mountain lake" }}\n/>`,
        },
        {
            id: "cinematic",
            title: "Cinematic crop",
            code: `<BeforeAfter\n  aspectRatio="21 / 9"\n  labels\n  beforeLabel="Draft"\n  afterLabel="Final"\n  ariaLabel="Draft versus final render"\n  before={{ src: "/demo/before-after/before.svg", alt: "Draft render" }}\n  after={{ src: "/demo/before-after/after.svg", alt: "Final render" }}\n/>`,
        },
    ],
    props: [
        t("before", "{ src: string; alt: string }", "\u2014", "Image revealed on the start side of the split."),
        t("after", "{ src: string; alt: string }", "\u2014", "Image revealed on the end side of the split."),
        t("value", "number", "50", "Initial split position, 0\u2013100."),
        t("aspectRatio", "string", `"16 / 9"`, "Frame aspect ratio (any CSS aspect-ratio value)."),
        t("ariaLabel", "string", `"Before and after comparison"`, "Accessible name for the comparison region."),
        t("rangeLabel", "string", `"Comparison position"`, "Accessible name for the range control."),
        t("labels", "boolean", "false", "Show Before/After chips over the images."),
        t("beforeLabel", "string", `"Before"`, "Text of the start-side chip."),
        t("afterLabel", "string", `"After"`, "Text of the end-side chip."),
        ...common(),
    ],
    faq: [
        {
            q: "Why a range input instead of a custom drag handler?",
            a: "The browser already ships the interaction: pointer capture, touch, keyboard stepping, Home/End, and screen-reader value announcements. The component only maps the input value to a clip position, so there is no drag math to get wrong.",
        },
        {
            q: "How do I react when the split moves?",
            a: "Listen for before-after:change on the root (it bubbles) and read event.detail.value, or listen for the native input event on the range inside. The event fires on every movement, including keyboard changes.",
        },
        {
            q: "Does it work without JavaScript?",
            a: "The initial split renders at value and both images are present, but dragging needs the scoped script. Treat it as a JavaScript-required component and provide a static image pair as the no-JS fallback.",
        },
    ],
    since: "0.1.0",
    new: true,
    related: ["aspect-ratio", "carousel", "card"],
};
