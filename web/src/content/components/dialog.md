---
slug: "dialog"
name: "Dialog"
description: >-
  Native <dialog> modal — platform focus trap, Esc, and backdrop.
category: overlay
importPath: "astro-ui"
exportName: "Dialog"
js: true
since: "0.1.0"
isNew: false
related: ["button", "alert", "card"]
features:
  - "Native <dialog>: focus trap + return, Esc, backdrop"
  - "title/description/footer slots with automatic aria wiring"
  - "Zero-JS close via method=\"dialog\" forms"
  - "6 sizes, 8 variants"
  - "Built-in close button (showClose)"
  - "Backdrop-dismiss recipe in the docs"
a11y:
  - "Native `<dialog>`: focus containment, Escape-to-close, and modal semantics from the platform"
  - "`aria-labelledby` / `aria-describedby` auto-wired to title and description slots"
  - "Decorative icons `aria-hidden`"
usage: |-
  ---
  import { Dialog, Button } from "astro-ui";
  ---
  
  <Button id="open">Open</Button>
  <Dialog id="prefs">
    <h2 slot="title">Preferences</h2>
    <p slot="description">Device-only settings.</p>
    <form method="dialog"><Button>Close</Button></form>
  </Dialog>
  <script>
    document.getElementById("open")?.addEventListener("click", () =>
      document.getElementById("prefs")?.showModal());
  </script>
demoIds: ["basic"]
props:
  - name: "size"
    type: "\"xs\" | \"sm\" | \"md\" | \"lg\" | \"xl\" | \"2xl\""
    def: "\"md\""
    description: "Width scale."
  - name: "id"
    type: "string"
    def: "recommended"
    description: "Enables automatic title/description aria wiring."
  - name: "showClose"
    type: "boolean"
    def: "true"
    description: "Native zero-JS close button."
  - name: "closeLabel"
    type: "string"
    def: "\"Close dialog\""
    description: "Accessible label for it."
  - name: "ariaLabel"
    type: "string"
    def: "—"
    description: "Explicit name (skips aria-labelledby)."
  - name: "variant"
    type: "\"inherit\" | \"primary\" | … | \"info\""
    def: "\"inherit\""
    description: "Accent variant."
  - name: "class"
    type: "string"
    def: "—"
    description: "Merged via cn()."
slots:
  - name: "title"
    description: "Dialog heading (wired to aria-labelledby)."
  - name: "description"
    description: "Subtitle (wired to aria-describedby)."
  - name: "default"
    description: "Body content."
  - name: "footer"
    description: "Action row."
faq:
  - q: "How do I close it without JS?"
    a: "A <form method=\"dialog\"> button inside the dialog closes natively. Esc and the × button also work with zero app code."
  - q: "Can clicking the backdrop close it?"
    a: "Yes — recipe: dialog.addEventListener('click', (e) => { if (e.target === dialog) dialog.close(); })."
---

Dialog is the first JS-required component — and deliberately so: it's a thin styled wrapper over native &lt;dialog&gt;, so modality, backdrop, focus containment, Escape, and focus return all come from the platform. The component ships zero JS; your app calls showModal().
