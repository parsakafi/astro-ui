---
slug: "textarea"
name: "Textarea"
description: >-
  Multi-line input with counters, clear button, and resize control.
category: forms
importPath: "astro-ui"
exportName: "Textarea"
js: true
since: "1.0.0"
isNew: false
related: ["input", "label", "button"]
features:
  - "Input-matching variants and sizes"
  - "showCount / counter character displays"
  - "clearable — clear button appears while typing"
  - "minRows / maxRows auto-grow"
  - "resize control (none/vertical/horizontal/both)"
a11y:
  - "Native textarea semantics; hint/error text via `aria-describedby`"
  - "`aria-invalid` for validation state"
usage: |-
  ---
  import { Textarea, Label } from "astro-ui";
  ---

  <Label for="bio">Bio</Label>
  <Textarea id="bio" rows={4} maxlength={280} showCount clearable />
demoIds: ["basic", "grow", "resize"]
props:
  - name: "rows"
    type: "number"
    def: "4"
    description: "Visible rows."
  - name: "maxlength / minlength"
    type: "number"
    def: "—"
    description: "Length bounds."
  - name: "showCount / counter"
    type: "boolean"
    def: "false"
    description: "Character-count readout (aliases)."
  - name: "clearable"
    type: "boolean"
    def: "false"
    description: "Clear button, visible with text."
  - name: "minRows / maxRows"
    type: "number"
    def: "—"
    description: "Auto-grow bounds; sets resize to none."
  - name: "resize"
    type: "\"none\" | \"vertical\" | \"horizontal\" | \"both\""
    def: "\"vertical\""
    description: "Resize axis."
  - name: "invalid"
    type: "boolean"
    def: "false"
    description: "Validation state."
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
faq:
  - q: "showCount vs counter?"
    a: "They are aliases — either renders the count readout (\"n / maxlength\" when a cap is set). Pick the name that reads best in your markup."
---

Textarea mirrors Input's states and adds multi-line niceties: character counter, optional clear button, auto-grow
bounds, and resize control. The core control is zero-JS; the extras are progressive enhancements — a tiny scoped script
wires them and they degrade gracefully without it.
