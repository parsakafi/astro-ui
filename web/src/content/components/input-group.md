---
slug: "input-group"
name: "Input Group"
description: >-
  Input with attached addons — icons, text prefixes, and buttons around the control.
category: forms
importPath: "astro-ui"
exportName: "InputGroup"
js: false
since: "0.1.0"
isNew: false
related: ["input", "textarea", "button", "label"]
features:
  - "Named start/end addon slots plus any control in the default slot"
  - "Wrapper owns border + focus ring via :focus-within — zero JS"
  - "Five sizes matching Input; addons scale with the size"
  - "invalid / disabled state hooks mirroring Input"
  - "multiline mode for Textarea controls"
  - "Addons accept any markup: icons, text, Button, Kbd, Tag"
a11y:
  - "Native input semantics are untouched — label the control with Label + id as usual"
  - "Decorative addon icons should be aria-hidden; addon text stays readable to screen readers"
  - "Focus ring uses :focus-within so keyboard focus is always visible"
usage: |-
  ---
  import { InputGroup, Input } from "astro-ui";
  ---
  
  <InputGroup>
    <svg slot="start" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
    <Input name="search" placeholder="Search…" />
  </InputGroup>
demoIds: ["basic", "prefix", "multiline", "sizes", "states"]
props:
  - name: "size"
    type: "\"xs\" | \"sm\" | \"md\" | \"lg\" | \"xl\""
    def: "\"md\""
    description: "Group height; mirrors Input sizes."
  - name: "invalid"
    type: "boolean"
    def: "false"
    description: "Destructive border on the wrapper."
  - name: "disabled"
    type: "boolean"
    def: "false"
    description: "Dim + mute the whole group."
  - name: "multiline"
    type: "boolean"
    def: "false"
    description: "Auto height for a Textarea control."
  - name: "slot start / slot end"
    type: "Astro slots"
    def: "—"
    description: "Addon markup on each edge."
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
  - q: "How is this different from just an Input?"
    a: "InputGroup joins extra markup to the control so the border and focus ring wrap everything — an icon, a currency prefix, a submit button — without you hand-tuning borders or focus styles. The control itself stays a plain Input."
  - q: "Does it work without JavaScript?"
    a: "Fully. Addons are static markup and focus styling is CSS :focus-within — nothing ships or runs client-side."
---

InputGroup composes a text control with addons on either side: a leading icon, an `https://` prefix, a trailing button, or anything else you slot in. The wrapper owns the border, focus ring, and height (mirroring Input sizes) while the inner control renders bare — focus styling is CSS :focus-within, so no JavaScript ships. Works with Input and Textarea alike; use multiline for a Textarea so addons stretch the full height.
