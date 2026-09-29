---
slug: "switch"
name: "Switch"
description: >-
  On/off toggle built on a native checkbox with role=switch.
category: forms
importPath: "astro-ui"
exportName: "Switch"
js: false
since: "1.0.0"
isNew: false
related: ["checkbox", "radio", "label"]
features:
  - "role=\"switch\" with On/Off announcements"
  - "rounded (default) or square track"
  - "5 sizes, 9 color variants"
  - "label prop or slot content"
  - "invalid support with describedby"
a11y:
  - "`role=\"switch\"` on a native checkbox — announces on/off state"
  - "Space toggles; `aria-invalid` + `aria-describedby` for validation"
usage: |-
  ---
  import { Switch } from "astro-ui";
  ---

  <Switch name="wifi" checked>Wi-Fi</Switch>
demoIds: ["basic", "shapes"]
props:
  - name: "name / value"
    type: "string"
    def: "—"
    description: "Native form fields."
  - name: "checked"
    type: "boolean"
    def: "false"
    description: "Initial state."
  - name: "shape"
    type: "\"rounded\" | \"square\""
    def: "\"rounded\""
    description: "Track shape."
  - name: "label"
    type: "string"
    def: "—"
    description: "Text after the thumb when no slot."
  - name: "size"
    type: "\"xs\" | \"sm\" | \"md\" | \"lg\" | \"xl\""
    def: "\"md\""
    description: "Scale."
  - name: "variant"
    type: "\"primary\" | … | \"inherit\""
    def: "\"primary\""
    description: "Track accent color."
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
  - q: "Switch or Checkbox?"
    a: "Switch = immediate effect (settings toggle). Checkbox = submit-time selection. They're built on the same native input, so either submits identically."
---

Switch is an on/off toggle built on a native checkbox carrying role="switch" — screen readers announce On/Off, Tab and
Space work natively, and the form value is a real checkbox value.
