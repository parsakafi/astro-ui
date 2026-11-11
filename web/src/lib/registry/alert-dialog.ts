import {type ComponentMeta, t, common} from "./types";

export const alertDialog: ComponentMeta = {
    slug: "alert-dialog",
    name: "AlertDialog",
    description: "role=\"alertdialog\" modal that interrupts for a decision.",
    overview:
        "AlertDialog is a modal that interrupts for a decision — role=\"alertdialog\" tells assistive tech to announce the message immediately. Structure mirrors Dialog (native &lt;dialog&gt;, platform modality/focus containment, zero JS in the component) with an action-oriented footer: cancel buttons are plain &lt;form method=\"dialog\"&gt; submissions, so dismissal needs no JS. The dialog's returnValue receives the submitting button's value, so the app can tell which action dismissed it.",
    importPath: "astro-ui",
    exportName: "AlertDialog",
    category: "overlay",
    js: true,
    usage:
        `---\nimport { Button, AlertDialog } from "astro-ui";\n---\n\n<Button id="open-delete">Delete project</Button>\n<AlertDialog id="delete">\n  <h2 slot="title">Delete project?</h2>\n  <p slot="description">This cannot be undone.</p>\n  <Fragment slot="footer">\n    <form method="dialog"><Button variant="outline">Cancel</Button></form>\n    <form method="dialog">\n      <Button variant="destructive" value="confirm">Delete</Button>\n    </form>\n  </Fragment>\n</AlertDialog>\n\n<script>\n  document.getElementById("open-delete")?.addEventListener("click", () => {\n    document.getElementById("delete")?.showModal();\n  });\n</script>`,
    features: [
        "role=\"alertdialog\" — announced immediately by assistive tech",
        "Native <dialog> modality, focus containment, Escape-to-close",
        "Zero-JS dismissal via <form method=\"dialog\"> (returnValue tells you which action)",
        "xs / sm / md / lg panel sizes; auto title/description labelling",
    ],
    a11y: [
        "Native `<dialog>` with `role=\"alertdialog\"` — interruptive semantics announced as an alert",
        "`aria-labelledby` / `aria-describedby` auto-wired to the title and description slots",
        "Focus is contained while open; Escape closes via the platform",
    ],
    demos: [
        {
            id: "confirm",
            title: "Confirm a destructive action",
            code: `<Button id="open-delete" variant="destructive">Delete project</Button>\n<AlertDialog id="delete">\n  <h2 slot="title">Delete project?</h2>\n  <p slot="description">This cannot be undone.</p>\n  <Fragment slot="footer">\n    <form method="dialog"><Button variant="outline">Cancel</Button></form>\n    <form method="dialog"><Button variant="destructive" value="confirm">Delete</Button></form>\n  </Fragment>\n</AlertDialog>`,
        },
        {
            id: "sizes",
            title: "Sizes",
            code: `<Button id="open-xs">Open xs</Button>\n<AlertDialog id="xs" size="xs">\n  <h2 slot="title">Extra small</h2>\n  <p slot="description">20rem panel for short confirmations.</p>\n</AlertDialog>\n<Button id="open-lg">Open lg</Button>\n<AlertDialog id="lg" size="lg">\n  <h2 slot="title">Large</h2>\n  <p slot="description">32rem panel when the message needs room.</p>\n</AlertDialog>`,
        },
    ],
    props: [
        t("size", `"xs" | "sm" | "md" | "lg"`, `"sm"`, "Panel width scale."),
        t("id", "string", "—", "Required for automatic title/description labelling (and the trigger script)."),
        ...common(false),
    ],
    slots: [
        {name: "title", description: "Heading (auto-wired to aria-labelledby)."},
        {name: "description", description: "Supporting copy (auto-wired to aria-describedby)."},
        {name: "default", description: "Extra body content."},
        {name: "footer", description: "Action buttons — wrap each in <form method=\"dialog\"> for zero-JS close."},
    ],
    faq: [
        {
            q: "How do I know which button closed it?",
            a: "The dialog's returnValue receives the submitting button's value — listen for the close event and read dialog.returnValue === \"confirm\".",
        },
        {
            q: "Does the component ship JS?",
            a: "No — only the app-level trigger (showModal()) is yours; modality, focus containment, and Escape all come from native <dialog>.",
        },
    ],
    since: "0.1.0",
    related: ["dialog", "button", "alert"],
};
