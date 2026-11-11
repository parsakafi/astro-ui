---
slug: "alert-dialog"
name: "AlertDialog"
description: >-
  role=alertdialog modal that interrupts for a decision.
category: overlay
importPath: "astro-ui"
exportName: "AlertDialog"
js: true
since: "0.1.0"
isNew: false
related: ["dialog", "button", "alert"]
features:
  - "role=\"alertdialog\" — announced immediately by assistive tech"
  - "Native <dialog> modality, focus containment, Escape-to-close"
  - "Zero-JS dismissal via <form method=\"dialog\"> (returnValue tells you which action)"
  - "xs / sm / md / lg panel sizes; auto title/description labelling"
a11y:
  - "Native `<dialog>` with `role=\"alertdialog\"` — interruptive semantics announced as an alert"
  - "`aria-labelledby` / `aria-describedby` auto-wired to the title and description slots"
  - "Focus is contained while open; Escape closes via the platform"
usage: |-
  ---
  import { Button, AlertDialog } from "astro-ui";
  ---
  
  <Button id="open-delete">Delete project</Button>
  <AlertDialog id="delete">
    <h2 slot="title">Delete project?</h2>
    <p slot="description">This cannot be undone.</p>
    <Fragment slot="footer">
      <form method="dialog"><Button variant="outline">Cancel</Button></form>
      <form method="dialog">
        <Button variant="error" value="confirm">Delete</Button>
      </form>
    </Fragment>
  </AlertDialog>
  
  <script>
    document.getElementById("open-delete")?.addEventListener("click", () => {
      document.getElementById("delete")?.showModal();
    });
  </script>
demoIds: ["confirm", "sizes"]
props:
  - name: "size"
    type: "\"xs\" | \"sm\" | \"md\" | \"lg\""
    def: "\"sm\""
    description: "Panel width scale."
  - name: "id"
    type: "string"
    def: "—"
    description: "Required for automatic title/description labelling (and the trigger script)."
  - name: "class"
    type: "string"
    def: "—"
    description: "Merged via cn(); Tailwind classes welcome."
  - name: "id"
    type: "string"
    def: "—"
    description: "Element id."
slots:
  - name: "title"
    description: "Heading (auto-wired to aria-labelledby)."
  - name: "description"
    description: "Supporting copy (auto-wired to aria-describedby)."
  - name: "default"
    description: "Extra body content."
  - name: "footer"
    description: "Action buttons — wrap each in <form method=\"dialog\"> for zero-JS close."
faq:
  - q: "How do I know which button closed it?"
    a: "The dialog's returnValue receives the submitting button's value — listen for the close event and read dialog.returnValue === \"confirm\"."
  - q: "Does the component ship JS?"
    a: "No — only the app-level trigger (showModal()) is yours; modality, focus containment, and Escape all come from native <dialog>."
---

AlertDialog is a modal that interrupts for a decision — role="alertdialog" tells assistive tech to announce the message immediately. Structure mirrors Dialog (native &lt;dialog&gt;, platform modality/focus containment, zero JS in the component) with an action-oriented footer: cancel buttons are plain &lt;form method="dialog"&gt; submissions, so dismissal needs no JS. The dialog's returnValue receives the submitting button's value, so the app can tell which action dismissed it.
