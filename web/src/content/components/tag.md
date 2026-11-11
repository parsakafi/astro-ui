---
slug: "tag"
name: "Tag"
description: >-
  Categorization label with shapes and optional close affordance.
category: data-display
importPath: "astro-ui"
exportName: "Tag"
js: false
since: "0.1.0"
isNew: false
related: ["badge", "button", "kbd"]
features:
  - "9 color variants"
  - "3 shapes: rounded, square, pill"
  - "closable with accessible label"
  - "content prop or slot"
a11y:
  - "Closable tags render a real button with an `aria-label` (no-JS submit removal)"
  - "Decorative shapes `aria-hidden`"
usage: |-
  ---
  import { Tag } from "astro-ui";
  ---
  
  <Tag>astro</Tag>
  <Tag variant="soft" shape="pill">design</Tag>
  <Tag variant="outline" closable closeLabel="Remove astro">astro</Tag>
demoIds: ["basic"]
props:
  - name: "variant"
    type: "\"primary\" | \"secondary\" | \"outline\" | \"soft\" | \"success\" | \"warning\" | \"error\" | \"info\" | \"muted\""
    def: "\"primary\""
    description: "Color scheme."
  - name: "size"
    type: "\"sm\" | \"md\" | \"lg\""
    def: "\"md\""
    description: "Scale."
  - name: "shape"
    type: "\"rounded\" | \"square\" | \"pill\""
    def: "\"rounded\""
    description: "Corner shape."
  - name: "content"
    type: "string"
    def: "—"
    description: "Text when no slot content."
  - name: "closable"
    type: "boolean"
    def: "false"
    description: "Render dismiss button."
  - name: "closeLabel"
    type: "string"
    def: "\"Remove\""
    description: "Accessible dismiss label."
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
  - q: "Tag or Badge?"
    a: "Tag = membership in a set (filter chips, keywords). Badge = status or count attached to something else."
---

Tag marks membership in a set — categories, filters, keywords. Unlike Badge (status/count), Tag is for grouping. Optional closable renders an accessible × button that stays zero-JS.
