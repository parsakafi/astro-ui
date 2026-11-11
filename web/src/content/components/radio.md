---
slug: "radio"
name: "Radio"
description: >-
  Native radio button with custom circle — group via shared name.
category: forms
importPath: "@parsakafi/astro-ui"
exportName: "Radio"
js: false
since: "0.1.0"
isNew: false
related: ["checkbox", "switch", "label"]
features:
  - "Native group behavior via shared name"
  - "Circle + dot visual"
  - "5 sizes, 9 color variants"
  - "Disabled/invalid states"
a11y:
  - "Native `<fieldset>` + `<legend>` name the group; `<input type=\"radio\">` handles selection"
  - "Arrow keys move between options (platform behavior)"
  - "`aria-invalid` + `aria-describedby` for validation"
usage: |-
  ---
  import { Radio } from "@parsakafi/astro-ui";
  ---
  
  <Radio name="plan" value="free" checked>Free</Radio>
  <Radio name="plan" value="pro">Pro</Radio>
demoIds: ["group"]
props:
  - name: "name / value"
    type: "string"
    def: "—"
    description: "Native group + value."
  - name: "checked"
    type: "boolean"
    def: "false"
    description: "Initial selection."
  - name: "disabled / invalid / required"
    type: "boolean"
    def: "false"
    description: "States."
  - name: "size"
    type: "\"xs\" | \"sm\" | \"md\" | \"lg\" | \"xl\""
    def: "\"md\""
    description: "Scale."
  - name: "variant"
    type: "\"primary\" | … | \"inherit\""
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
  - q: "How do groups work?"
    a: "Exactly like HTML: same name across Radios forms the group. The browser handles mutual exclusion and arrow-key navigation."
---

Radio mirrors Checkbox with a circle-and-dot indicator. Group behavior comes from the native shared name attribute — zero JS, perfect announcements.
