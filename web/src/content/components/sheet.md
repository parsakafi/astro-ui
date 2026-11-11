---
slug: "sheet"
name: "Sheet"
description: >-
  Dialog panel that slides in from a screen edge.
category: overlay
importPath: "@parsakafi/astro-ui"
exportName: "Sheet"
js: true
since: "0.1.0"
isNew: false
related: ["dialog", "alert-dialog", "drawer"]
features:
  - "Slides from any edge: left / right / top / bottom"
  - "Native <dialog> modality, backdrop, Escape — zero JS in the component"
  - "Backdrop-click dismiss (opt-out with closeOnBackdrop={false})"
  - "Built-in zero-JS close button (showClose, closeLabel)"
  - "sm / md / lg / xl panel sizes (width for sides, height for top/bottom)"
a11y:
  - "Native `<dialog>`: focus containment, Escape, and modality from the platform"
  - "`aria-labelledby` auto-wired to the title slot (`{id}-title`); `aria-label` alternative"
  - "Built-in close button is a real button with `closeLabel`"
usage: |-
  ---
  import { Button, Sheet } from "@parsakafi/astro-ui";
  ---
  
  <Button id="open-menu">Menu</Button>
  <Sheet id="menu" side="left">
    <h2 slot="title">Menu</h2>
    <p>Sheet body…</p>
  </Sheet>
  
  <script>
    document.getElementById("open-menu")?.addEventListener("click", () => {
      document.getElementById("menu")?.showModal();
    });
  </script>
demoIds: ["basic", "sides", "backdrop"]
props:
  - name: "side"
    type: "\"left\" | \"right\" | \"top\" | \"bottom\""
    def: "\"right\""
    description: "Which screen edge the panel slides in from."
  - name: "size"
    type: "\"sm\" | \"md\" | \"lg\" | \"xl\""
    def: "\"md\""
    description: "Panel scale (width for left/right, height for top/bottom)."
  - name: "id"
    type: "string"
    def: "—"
    description: "Required for automatic title labelling (and the trigger script)."
  - name: "showClose"
    type: "boolean"
    def: "true"
    description: "Render the native (zero-JS) close button."
  - name: "closeLabel"
    type: "string"
    def: "\"Close sheet\""
    description: "Accessible label for the built-in close button."
  - name: "closeOnBackdrop"
    type: "boolean"
    def: "true"
    description: "Close when the dark backdrop layer is clicked."
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
  - name: "default"
    description: "Panel body content."
faq:
  - q: "How do I open it?"
    a: "One line: document.getElementById(\"open-menu\") triggers showModal() on the sheet with a matching id — same trigger recipe as Dialog."
  - q: "Does clicking the dark backdrop close it?"
    a: "Yes by default. Set closeOnBackdrop={false} for flows where an accidental dismiss would lose work — the user then closes via the × button, a <form method=\"dialog\"> action, or Escape."
  - q: "Can the panel overflow the screen?"
    a: "No — left/right panels are width: min(100%, 100vw) and top/bottom panels cap at max-height: 85vh; the size prop just tunes the base scale."
---

Sheet is a dialog panel that slides in from a screen edge — built on the same native &lt;dialog&gt; foundation as Dialog: modality, ::backdrop, Escape-to-close, and focus containment come from the platform and the component ships zero JS. Closing needs no JS: any &lt;form method="dialog"&gt; button, the optional built-in close button, or Escape dismisses natively. When id is set, the title slot gets {id}-title and the sheet points aria-labelledby at it.
