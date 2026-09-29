---
slug: "separator"
name: "Separator"
description: >-
  Horizontal/vertical divider with solid, dashed, and dotted styles.
category: layout
importPath: "astro-ui"
exportName: "Separator"
js: false
since: "1.0.0"
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
demoIds: ["basic", "styles", "label"]
props:
  - name: "orientation"
    type: "\"horizontal\" | \"vertical\""
    def: "\"horizontal\""
    description: "Rule direction."
  - name: "style"
    type: "\"solid\" | \"dashed\" | \"dotted\""
    def: "\"solid\""
    description: "Line treatment."
  - name: "label"
    type: "string"
    def: "—"
    description: "Centered text inside the rule."
  - name: "decorative"
    type: "boolean"
    def: "false"
    description: "Renders aria-hidden span instead of hr."
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

Separator renders a themed rule between sections — semantic hr (or a decorated span when purely visual), with
orientation, style, and label support.
