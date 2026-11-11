import {type ComponentMeta, t, common} from "./types";

export const stickySurface: ComponentMeta = {
    slug: "sticky-surface",
    name: "Sticky Surface",
    description: "Sticky-positioned region with scroll-based line, elevation, and glass effects.",
    overview:
        "StickySurface sticks to the viewport (or nearest scrolling ancestor) at a threshold with pure CSS. While stuck, it can grow a border line, an elevation shadow, and a frosted-glass wash — and observeStuck exposes the same moment as an is-stuck class for your own selectors. State is detected with an IntersectionObserver sentinel, so the only JavaScript is the tiny observer script.",
    importPath: "astro-ui",
    exportName: "StickySurface",
    category: "layout",
    js: true,
    usage:
        `---\nimport { StickySurface } from "astro-ui";\n---\n\n<StickySurface effects={["line", "elevate"]} threshold="0px">\n  <strong>Toolbar</strong>\n</StickySurface>`,
    features: [
        "Pure-CSS sticking (position: sticky) — works with zero JS",
        "Scroll effects while stuck: line, elevate, backdrop glass",
        "observeStuck adds an is-stuck hook class for custom CSS",
        "Token-driven surface, border, shadow, and z-index",
        "Semantic wrapper via the as prop (div, header, nav, section)",
    ],
    a11y: [
        "No ARIA of its own — semantics come from the as tag",
        "Stuck state is visual only: content never hides, moves, or reflows",
    ],
    demos: [
        {
            id: "toolbar",
            title: "Toolbar",
            code: `<StickySurface effects={["line", "elevate"]} threshold="0px">\n  <strong>Toolbar</strong>\n</StickySurface>\n<!-- scroll the box: a border line and shadow grow while stuck -->`,
        },
        {
            id: "glass",
            title: "Glass header",
            code: `<StickySurface as="header" effects={["backdrop"]} threshold="8px">\n  <strong>Glass header</strong>\n</StickySurface>\n<!-- frosted-glass wash fades in over scrolled content while stuck -->`,
        },
        {
            id: "stuck-hook",
            title: "Stuck-state hook",
            code: `<StickySurface id="toolbar" observeStuck threshold="0px">\n  <strong>Toolbar</strong>\n</StickySurface>\n<p id="status">Not stuck</p>\n\n<script>\n  const surface = document.getElementById("toolbar");\n  const status = document.getElementById("status");\n  if (surface && status) {\n    new MutationObserver(() => {\n      status.textContent = surface.classList.contains("is-stuck") ? "Stuck" : "Not stuck";\n    }).observe(surface, {attributes: true, attributeFilter: ["class"]});\n  }\n</script>\n<!-- observeStuck only adds the is-stuck class — react to it however you like -->`,
        },
    ],
    props: [
        t("as", '"div" | "header" | "nav" | "section"', '"div"', "Semantic wrapper element."),
        t("threshold", "string", '"16px"', "Sticky offset from the viewport/scrollport edge — and the line where stuck styles kick in. Any CSS length."),
        t("effects", 'Array<"line" | "elevate" | "backdrop">', "[]", "Scroll effects applied while stuck: border line, elevation shadow, frosted-glass wash."),
        t("observeStuck", "boolean", "false", "Adds is-stuck while stuck without visual effects — a hook for your own selectors."),
        ...common(false),
    ],
    slots: [
        {name: "default", description: "Sticky region content."},
    ],
    faq: [
        {
            q: "Does it work without JavaScript?",
            a: "Sticking itself is pure CSS position: sticky and works with zero JS. The stuck-state effects and the is-stuck hook need the tiny IntersectionObserver script the component ships.",
        },
        {
            q: "Which z-index does it use?",
            a: "--ui-z-dropdown, shared with dropdown menus — the surface stays above scrolled page content but below dialogs, popovers, and toasts.",
        },
    ],
    since: "0.1.0",
    related: ["card", "tabs"],
};
