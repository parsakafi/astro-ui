---
slug: "checkbox"
name: "Checkbox"
description: >-
  Native checkbox with custom visual, indeterminate state, and label.
category: forms
importPath: "astro-ui"
exportName: "Checkbox"
js: false
since: "1.0.0"
isNew: false
related: ["radio", "switch", "label"]
features:
  - "Native input + custom visual (real form value)"
  - "square / rounded indicator shapes"
  - "indeterminate state"
  - "5 sizes, 9 color variants"
  - "label prop or slot content"
  - "horizontal / vertical orientation"
a11y:
  - "Native `<input type=\"checkbox\">` — checked state, Space toggle, and form value from the platform"
  - "`aria-invalid` + `aria-describedby` connect validation and hint text"
  - "Decorative marks are `aria-hidden`; `:focus-visible` ring"
usage: |-
  ---
  import { Checkbox } from "astro-ui";
  ---

  <Checkbox name="news" checked>Email me news</Checkbox>
demoIds: ["basic", "variants"]
props:
  - name: "name / value"
    type: "string"
    def: "—"
    description: "Native form fields."
  - name: "checked"
    type: "boolean"
    def: "false"
    description: "Initial state (SSR-safe)."
  - name: "indeterminate"
    type: "boolean"
    def: "false"
    description: "Dash state."
  - name: "shape"
    type: "\"square\" | \"rounded\""
    def: "\"square\""
    description: "Indicator shape."
  - name: "orientation"
    type: "\"horizontal\" | \"vertical\""
    def: "\"horizontal\""
    description: "Label layout."
  - name: "label"
    type: "string"
    def: "—"
    description: "Text when no slot content."
  - name: "size"
    type: "\"xs\" | \"sm\" | \"md\" | \"lg\" | \"xl\""
    def: "\"md\""
    description: "Scale."
  - name: "variant"
    type: "\"primary\" | \"secondary\" | \"muted\" | \"destructive\" | \"success\" | \"warning\" | \"info\" | \"inherit\""
    def: "\"primary\""
    description: "Accent color."
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
faq:
  - q: "Does indeterminate submit a value?"
    a: "No — it's purely visual (like the platform). The form value follows the underlying checked state only."
---

Checkbox styles the native input inside a label wrapper — square or rounded indicator, indeterminate support, and full
native keyboard/announcement behavior.
