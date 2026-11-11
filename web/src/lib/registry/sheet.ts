import {type ComponentMeta, t, common} from "./types";

export const sheet: ComponentMeta = {
    slug: "sheet",
    name: "Sheet",
    description: "Dialog panel that slides in from a screen edge.",
    overview:
        "Sheet is a dialog panel that slides in from a screen edge — built on the same native &lt;dialog&gt; foundation as Dialog: modality, ::backdrop, Escape-to-close, and focus containment come from the platform and the component ships zero JS. Closing needs no JS: any &lt;form method=\"dialog\"&gt; button, the optional built-in close button, or Escape dismisses natively. When id is set, the title slot gets {id}-title and the sheet points aria-labelledby at it.",
    importPath: "@parsakafi/astro-ui",
    exportName: "Sheet",
    category: "overlay",
    js: true,
    usage:
        `---\nimport { Button, Sheet } from "@parsakafi/astro-ui";\n---\n\n<Button id="open-menu">Menu</Button>\n<Sheet id="menu" side="left">\n  <h2 slot="title">Menu</h2>\n  <p>Sheet body…</p>\n</Sheet>\n\n<script>\n  document.getElementById("open-menu")?.addEventListener("click", () => {\n    document.getElementById("menu")?.showModal();\n  });\n</script>`,
    features: [
        "Slides from any edge: left / right / top / bottom",
        "Native <dialog> modality, backdrop, Escape — zero JS in the component",
        "Backdrop-click dismiss (opt-out with closeOnBackdrop={false})",
        "Built-in zero-JS close button (showClose, closeLabel)",
        "sm / md / lg / xl panel sizes (width for sides, height for top/bottom)",
    ],
    a11y: [
        "Native `<dialog>`: focus containment, Escape, and modality from the platform",
        "`aria-labelledby` auto-wired to the title slot (`{id}-title`); `aria-label` alternative",
        "Built-in close button is a real button with `closeLabel`",
    ],
    demos: [
        {
            id: "basic",
            title: "Slide-in panel",
            code: `<Button id="open-sheet">Open sheet</Button>\n<Sheet id="sheet">\n  <h2 slot="title">Sheet title</h2>\n  <p>Sheet body…</p>\n</Sheet>`,
        },
        {
            id: "sides",
            title: "From any edge",
            code: `<Button id="open-left">Left</Button>\n<Sheet id="left" side="left"><h2 slot="title">Left</h2></Sheet>\n<Button id="open-top">Top</Button>\n<Sheet id="top" side="top"><h2 slot="title">Top</h2></Sheet>\n<!-- sides: left | right | top | bottom -->`,
        },
        {
            id: "backdrop",
            title: "Backdrop dismiss",
            code: `{/* Default: click the dark layer to close (Escape too) */}\n<Button id="open-sheet">Open sheet</Button>\n<Sheet id="sheet">…</Sheet>\n\n{/* Opt out: force an explicit close action */}\n<Sheet id="critical" closeOnBackdrop={false}\n  ariaLabel="Critical settings">…</Sheet>`,
        },
    ],
    props: [
        t("side", `"left" | "right" | "top" | "bottom"`, `"right"`, "Which screen edge the panel slides in from."),
        t("size", `"sm" | "md" | "lg" | "xl"`, `"md"`, "Panel scale (width for left/right, height for top/bottom)."),
        t("id", "string", "—", "Required for automatic title labelling (and the trigger script)."),
        t("showClose", "boolean", "true", "Render the native (zero-JS) close button."),
        t("closeLabel", "string", `"Close sheet"`, "Accessible label for the built-in close button."),
        t("closeOnBackdrop", "boolean", "true", "Close when the dark backdrop layer is clicked."),
        ...common(false),
    ],
    slots: [
        {name: "title", description: "Heading (auto-wired to aria-labelledby)."},
        {name: "default", description: "Panel body content."},
    ],
    faq: [
        {
            q: "How do I open it?",
            a: "One line: document.getElementById(\"open-menu\") triggers showModal() on the sheet with a matching id — same trigger recipe as Dialog.",
        },
        {
            q: "Does clicking the dark backdrop close it?",
            a: "Yes by default. Set closeOnBackdrop={false} for flows where an accidental dismiss would lose work — the user then closes via the × button, a <form method=\"dialog\"> action, or Escape.",
        },
        {
            q: "Can the panel overflow the screen?",
            a: "No — left/right panels are width: min(100%, 100vw) and top/bottom panels cap at max-height: 85vh; the size prop just tunes the base scale.",
        },
    ],
    since: "0.1.0",
    related: ["dialog", "alert-dialog", "drawer"],
};
