---
slug: "toggle-group"
name: "ToggleGroup"
description: >-
  Connected row of Toggles — segmented control styling.
category: forms
importPath: "astro-ui"
exportName: "ToggleGroup"
js: false
since: "0.1.0"
isNew: false
related: ["toggle", "button-group", "segmented-control"]
features:
  - "Joins Toggle children into one segmented control"
  - "horizontal / vertical orientation"
  - "role=\"group\" + aria-label — groups of toggles need an accessible name"
  - "State stays per-toggle; single-selection is an app-side one-liner"
a11y:
  - "`role=\"group\"` names the set; buttons carry `aria-pressed`"
  - "Roving `:focus-visible` ring"
usage: |-
  ---
  import { ToggleGroup, Toggle } from "astro-ui";
  ---
  
  <ToggleGroup ariaLabel="Text align">
    <Toggle ariaLabel="Left">Left</Toggle>
    <Toggle ariaLabel="Center">Center</Toggle>
    <Toggle ariaLabel="Right">Right</Toggle>
  </ToggleGroup>
demoIds: ["horizontal", "vertical"]
props:
  - name: "orientation"
    type: "\"horizontal\" | \"vertical\""
    def: "\"horizontal\""
    description: "Stack direction of the connected group."
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
  - q: "How do I enforce single-selection?"
    a: "On click, set aria-pressed=false (and drop aui-toggle--pressed) on every sibling — same one-line script pattern as Toggle; the group itself stays zero-JS."
---

ToggleGroup wraps any number of Toggle children and stitches their borders into one segmented control, mirroring the ButtonGroup composition. Radius and negative-margin stitching reach slotted children through :global(). State stays per-toggle (aria-pressed on each child); whether the group enforces single-selection is the consumer's choice — a one-line app script, same recipe as Toggle.
