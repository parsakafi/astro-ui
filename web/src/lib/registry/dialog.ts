import {type ComponentMeta, t} from "./types";

export const dialog: ComponentMeta = {
    slug: "dialog",
    name: "Dialog",
    description: "Native <dialog> modal — platform focus trap, Esc, and backdrop.",
    overview:
        "Dialog is the first JS-required component — and deliberately so: it's a thin styled wrapper over native &lt;dialog&gt;, so modality, backdrop, focus containment, Escape, and focus return all come from the platform. The component ships zero JS; your app calls showModal().",
    importPath: "@parsakafi/astro-ui",
    exportName: "Dialog",
    category: "overlay",
    js: true,
    usage:
        `---\nimport { Dialog, Button } from "@parsakafi/astro-ui";\n---\n\n<Button id="open">Open</Button>\n<Dialog id="prefs">\n  <h2 slot="title">Preferences</h2>\n  <p slot="description">Device-only settings.</p>\n  <form method="dialog"><Button type="submit">Close</Button></form>\n</Dialog>\n<script>\n  document.getElementById("open")?.addEventListener("click", () =>\n    document.getElementById("prefs")?.showModal());\n</script>`,
    features: [
        "Native <dialog>: focus trap + return, Esc, backdrop",
        "title/description/footer slots with automatic aria wiring",
        "Zero-JS close via method=\"dialog\" forms",
        "6 sizes, 8 variants",
        "Built-in close button (showClose)",
        "Backdrop-dismiss recipe in the docs",
    ],
    a11y: [
        "Native `<dialog>`: focus containment, Escape-to-close, and modal semantics from the platform",
        "`aria-labelledby` / `aria-describedby` auto-wired to title and description slots",
        "Decorative icons `aria-hidden`",
    ],
    demos: [
        {
            id: "basic",
            title: "Basic modal",
            code: `<Button id="open">Open preferences</Button>
<Dialog id="prefs">
  <h2 slot="title">Preferences</h2>
  <p slot="description">These settings apply to this device only.</p>
  <div slot="footer">
<form method="dialog"><Button type="submit">Close</Button></form>
  </div>
</Dialog>
<script>
  document.getElementById("open")?.addEventListener("click", () =>
document.getElementById("prefs")?.showModal());
</script>`,
        },
    ],
    props: [
        t("size", `"xs" | "sm" | "md" | "lg" | "xl" | "2xl"`, `"md"`, "Width scale."),
        t("id", "string", "recommended", "Enables automatic title/description aria wiring."),
        t("showClose", "boolean", "true", "Native zero-JS close button."),
        t("closeLabel", "string", `"Close dialog"`, "Accessible label for it."),
        t("ariaLabel", "string", "—", "Explicit name (skips aria-labelledby)."),
        t("variant", `"inherit" | "primary" | … | "info"`, `"inherit"`, "Accent variant."),
        t("class", "string", "—", "Merged via cn()."),
    ],
    slots: [
        {name: "title", description: "Dialog heading (wired to aria-labelledby)."},
        {name: "description", description: "Subtitle (wired to aria-describedby)."},
        {name: "default", description: "Body content."},
        {name: "footer", description: "Action row."},
    ],
    faq: [
        {
            q: "How do I close it without JS?",
            a: "A <form method=\"dialog\"> button with type=\"submit\" inside the dialog closes natively. Esc and the × button also work with zero app code.",
        },
        {
            q: "Can clicking the backdrop close it?",
            a: "Yes — recipe: dialog.addEventListener('click', (e) => { if (e.target === dialog) dialog.close(); }).",
        },
    ],
    since: "0.1.0",
    related: ["button", "alert", "card"],
};
