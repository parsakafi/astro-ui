---
slug: "label"
name: "Label"
description: >-
  Form label with required/disabled states and two sizes.
category: forms
importPath: "astro-ui"
exportName: "Label"
js: false
since: "1.0.0"
isNew: false
related: ["input", "select", "checkbox"]
features:
  - "Native <label> association via for"
  - "required marker"
  - "disabled state matches disabled inputs"
  - "2 sizes"
a11y:
  - "Native `<label>` association; `aria-required` support for required fields"
usage: |-
  ---
  import { Label, Input } from "astro-ui";
  ---
  
  <Label for="email" required>Email</Label>
  <Input id="email" type="email" />
demoIds: ["basic"]
props:
  - name: "for"
    type: "string"
    def: "—"
    description: "Must match the control's id."
  - name: "required"
    type: "boolean"
    def: "false"
    description: "Adds the required marker."
  - name: "disabled"
    type: "boolean"
    def: "false"
    description: "Dimmed text state."
  - name: "size"
    type: "\"sm\" | \"md\""
    def: "\"md\""
    description: "Text scale."
  - name: "class"
    type: "string"
    def: "—"
    description: "Merged via cn(); Tailwind classes welcome."
  - name: "id"
    type: "string"
    def: "—"
    description: "Element id."
faq:
  - q: "Why not just wrap the input?"
    a: "Wrapping works, but explicit for/id keeps the association when the control isn't a direct child (grids, portals) and is what this component enforces."
---

Label renders a semantic &lt;label&gt; tied to a control via for. Required adds a visual marker; disabled dims the text to match a disabled control.
