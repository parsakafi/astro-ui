---
slug: "select"
name: "Select"
description: >-
  Native select with custom chevron, placeholder, and validation state.
category: forms
importPath: "astro-ui"
exportName: "Select"
js: false
since: "0.1.0"
isNew: false
related: ["label", "input", "checkbox"]
features:
  - "Native <select> — full keyboard + platform pickers"
  - "Custom chevron (hidden when multiple)"
  - "placeholder option pattern"
  - "invalid / disabled / required states"
  - "5 sizes, 8 variants"
  - "Logical-property padding — RTL-ready"
a11y:
  - "Native `<select>` — popup, arrow keys, and announced options from the platform"
  - "`aria-invalid` + `aria-describedby` for validation"
usage: |-
  ---
  import { Select, Label } from "astro-ui";
  ---
  
  <Label for="fruit" required>Fruit</Label>
  <Select id="fruit" placeholder="Choose a fruit" required>
    <option value="apple">Apple</option>
    <option value="pear">Pear</option>
  </Select>
demoIds: ["basic", "states"]
props:
  - name: "name"
    type: "string"
    def: "—"
    description: "Form field name."
  - name: "placeholder"
    type: "string"
    def: "—"
    description: "Disabled placeholder option."
  - name: "required / disabled / invalid"
    type: "boolean"
    def: "false"
    description: "States."
  - name: "multiple"
    type: "boolean"
    def: "false"
    description: "Multi-select (native chrome, chevron hidden)."
  - name: "size"
    type: "\"xs\" | \"sm\" | \"md\" | \"lg\" | \"xl\""
    def: "\"md\""
    description: "Scale."
  - name: "variant"
    type: "\"inherit\" | \"primary\" | … | \"info\""
    def: "\"inherit\""
    description: "Border color."
  - name: "class"
    type: "string"
    def: "—"
    description: "Merged via cn(); Tailwind classes welcome."
  - name: "id"
    type: "string"
    def: "—"
    description: "Element id."
  - name: "ariaLabel"
    type: "string"
    def: "—"
    description: "Accessible name."
slots:
  - name: "default"
    description: "<option> / <optgroup> elements."
faq:
  - q: "Why not a custom listbox?"
    a: "Native selects keep keyboard nav, screen-reader semantics, and mobile pickers for free — that's the astro-ui philosophy: platform first."
---

Select wraps the native &lt;select&gt; so keyboard support and mobile pickers stay perfect — with token styling, a custom chevron, placeholder support, and options composed through the default slot.
