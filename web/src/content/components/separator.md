---
slug: "separator"
name: "Separator"
description: >-
  Horizontal/vertical divider with solid, dashed, and dotted styles.
category: layout
importPath: "astro-ui"
exportName: "Separator"
js: false
since: "0.1.0"
isNew: false
related: ["card", "scroll-area", "aspect-ratio"]
features:
  - "Horizontal / vertical orientation"
  - "solid / dashed / dotted styles"
  - "Optional centered label (\"or\", section names)"
  - "Semantic hr or decorative span"
a11y:
  - "Renders semantic <hr> by default (separator role implicit)"
  - "decorative prop downgrades to aria-hidden span when the rule is purely visual"
  - "Optional label is read by screen readers (\"or\" between form actions)"
usage: |-
  ---
  import { Separator } from "astro-ui";
  ---
  
  <Separator />
  <Separator orientation="vertical" style="height:2rem" />
  <Separator label="or" />
demoIds: ["both", "variants", "vertical-variants", "labeled"]
props:
  - name: "orientation"
    type: "\"horizontal\" | \"vertical\""
    def: "\"horizontal\""
    description: "Rule direction."
  - name: "variant"
    type: "\"solid\" | \"dashed\" | \"dotted\" | \"double\" | \"gradient\" | \"faded\" | \"labeled\""
    def: "\"solid\""
    description: "Line treatment; labeled centers slot content between two lines (horizontal only)."
  - name: "label"
    type: "string"
    def: "—"
    description: "Accessible name when the separator delimits labelled regions."
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
    description: "Label content (overrides the label prop)."
faq:
  - q: "hr or span?"
    a: "Semantic <hr> by default — it announces a thematic break. Pass decorative when the rule is purely visual spacing."
---

Separator renders a themed rule between sections — semantic hr (or a decorated span when purely visual), with orientation, style, and label support.
