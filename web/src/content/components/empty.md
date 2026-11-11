---
slug: "empty"
name: "Empty"
description: >-
  Empty-state placeholder with media/title/description/footer slots.
category: data-display
importPath: "@parsakafi/astro-ui"
exportName: "Empty"
js: false
since: "0.1.0"
isNew: false
related: ["skeleton", "spinner", "card"]
features:
  - "Slot composition: media, title, description, footer"
  - "3 sizes"
  - "Centered, token-themed layout"
a11y:
  - "`aria-label` support on the empty-state container"
  - "Decorative media slot is `aria-hidden`"
usage: |-
  ---
  import { Empty, Button } from "@parsakafi/astro-ui";
  ---
  
  <Empty>
    <span slot="media" aria-hidden="true">⌀</span>
    <span slot="title">No results</span>
    <span slot="description">Try adjusting your filters.</span>
    <Button slot="footer" size="sm" variant="outline">Clear filters</Button>
  </Empty>
demoIds: ["basic"]
props:
  - name: "size"
    type: "\"sm\" | \"md\" | \"lg\""
    def: "\"md\""
    description: "Spacing/text scale."
  - name: "ariaLabel"
    type: "string"
    def: "—"
    description: "Accessible name when context needs one."
  - name: "class"
    type: "string"
    def: "—"
    description: "Merged via cn(); Tailwind classes welcome."
  - name: "id"
    type: "string"
    def: "—"
    description: "Element id."
slots:
  - name: "media"
    description: "Icon or illustration above the text."
  - name: "title"
    description: "State heading."
  - name: "description"
    description: "Supporting text."
  - name: "footer"
    description: "Action row (buttons)."
---

Empty marks the 'no data' moment: an icon or illustration slot, a title, a description, and an action footer. Every part is optional — compose what the state needs.
