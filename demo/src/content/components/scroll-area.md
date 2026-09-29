---
slug: "scroll-area"
name: "ScrollArea"
description: >-
  Token-themed scrollable region with styled scrollbar.
category: layout
importPath: "astro-ui"
exportName: "ScrollArea"
js: false
since: "1.0.0"
isNew: false
related: ["separator", "card", "table"]
features:
  - "Custom scrollbar themed from tokens"
  - "height / maxHeight control"
  - "Horizontal and vertical overflow"
  - "Keyboard scrollable (native overflow region semantics)"
a11y:
  - "Native scrolling region — keyboard scroll works out of the box"
  - "Optionally add tabindex=0 + aria-label via props for focusable regions"
usage: |-
  ---
  import { ScrollArea } from "astro-ui";
  ---

  <ScrollArea height="12rem">
    {longList.map((item) => <p>{item}</p>)}
  </ScrollArea>
demoIds: ["basic", "horizontal"]
props:
  - name: "height"
    type: "string"
    def: "—"
    description: "Region height (CSS length)."
  - name: "maxHeight"
    type: "string"
    def: "—"
    description: "Grows until this cap."
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
    description: "Scrollable content."
faq:
  - q: "Native or custom scrolling?"
    a: "Native overflow with themed scrollbar styles — no JS scroll simulation, so momentum, keyboard, and touch behaviors all stay native."
---

ScrollArea wraps any content in a fixed-size region with a custom-styled, token-themed scrollbar — consistent across
platforms where the native scrollbar clashes with the design.
