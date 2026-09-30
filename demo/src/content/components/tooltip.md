---
slug: "tooltip"
name: "Tooltip"
description: >-
  CSS-only hover/focus tooltip on a trigger wrapper.
category: overlay
importPath: "astro-ui"
exportName: "Tooltip"
js: false
since: "1.0.0"
isNew: false
related: ["dialog", "kbd", "button"]
features:
  - "Pure CSS :hover/:focus-visible"
  - "top/bottom placement with arrow"
  - "dark/light bubble variants"
  - "Respects prefers-reduced-transparency"
a11y:
  - "`role=\"tooltip\"` with `aria-label` on the trigger — the tip is announced on focus"
  - "Revealed on keyboard `:focus-visible`, not only hover; content `aria-hidden` from the trigger's name"
usage: |-
  ---
  import { Tooltip, Button } from "astro-ui";
  ---
  
  <Tooltip ariaLabel="Delete item">
    <Button size="icon" variant="destructive" ariaLabel="Delete">␡</Button>
    <span slot="content">Delete this item permanently</span>
  </Tooltip>
demoIds: ["basic"]
props:
  - name: "placement"
    type: "\"top\" | \"bottom\""
    def: "\"top\""
    description: "Bubble side."
  - name: "variant"
    type: "\"dark\" | \"light\""
    def: "\"dark\""
    description: "Bubble style."
  - name: "size"
    type: "\"sm\" | \"md\""
    def: "\"sm\""
    description: "Bubble text scale."
  - name: "ariaLabel"
    type: "string"
    def: "—"
    description: "Accessible name for the trigger."
  - name: "class"
    type: "string"
    def: "—"
    description: "Merged via cn(); Tailwind classes welcome."
  - name: "id"
    type: "string"
    def: "—"
    description: "Element id."
slots:
  - name: "default"
    description: "The trigger element."
  - name: "content"
    description: "Bubble content."
faq:
  - q: "Touch devices?"
    a: "CSS-only tooltips don't trigger on tap by design — never put essential info in one; show it inline instead."
---

Tooltip wraps a trigger and reveals a bubble on :hover and :focus-visible — pure CSS, no script. The bubble is aria-hidden; name the trigger with aria-label. Tooltips never carry essential information.
