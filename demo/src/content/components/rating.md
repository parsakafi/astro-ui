---
slug: "rating"
name: "Rating"
description: >-
  Rating input on native radios — icon presets, emoji, and satisfaction scales, zero JS.
category: forms
importPath: "astro-ui"
exportName: "Rating"
js: false
since: "1.0.0"
isNew: false
related: ["slider", "switch", "progress"]
features:
  - "Native radios: keyboard + form value"
  - "Per-step screen-reader labels"
  - "Icon presets + custom SVG paths"
  - "Emoji sentiment faces"
  - "Satisfaction scale with per-step colors"
  - "NPS-style single highlight"
  - "readonly fractional display"
a11y:
  - "Native `<fieldset>` of radios — arrow keys, exact selection, and a form value with zero script"
  - "Each step has a real label (\"3 out of 5\" or per-step `labels`) so screen readers announce values"
  - "`readonly` renders `role=\"img\"` with an inclusive aria-label"
  - "`colorScale`/emoji states remain announced through their radio labels"
usage: |-
  ---
  import { Rating } from "astro-ui";
  ---

  <Rating name="score" value={4} />
  <Rating name="mood" value={4} icon="emoji" />
  <Rating
    name="satisfaction"
    colorScale
    showLabels
    labels={["Very bad", "Bad", "OK", "Good", "Excellent"]}
  />
  <Rating value={3.5} readonly />
demoIds: ["basic", "sizes", "icons", "emoji", "scale", "nps"]
props:
  - name: "name"
    type: "string"
    def: "—"
    description: "Field name (required for interactive)."
  - name: "value"
    type: "number"
    def: "0"
    description: "Initial value (fractional for readonly)."
  - name: "max"
    type: "number"
    def: "5"
    description: "Step count."
  - name: "icon"
    type: "\"star\" | \"heart\" | \"circle\" | \"square\" | \"bar\" | \"thumb\" | \"emoji\""
    def: "\"star\""
    description: "Icon preset; emoji renders sentiment faces."
  - name: "iconPath"
    type: "string"
    def: "—"
    description: "Custom icon: 16×16 SVG path data (overrides icon)."
  - name: "icons"
    type: "string[]"
    def: "—"
    description: "Per-step custom icons: 16×16 SVG path data, index 0 = step 1."
  - name: "colorScale"
    type: "boolean"
    def: "false"
    description: "Tint each step red → green (satisfaction ramp)."
  - name: "single"
    type: "boolean"
    def: "false"
    description: "Highlight only the selected step (NPS-style)."
  - name: "labels"
    type: "string[]"
    def: "—"
    description: "Per-step labels: sr text + visible labels row."
  - name: "showLabels"
    type: "boolean"
    def: "false"
    description: "Render the labels row under the scale."
  - name: "readonly"
    type: "boolean"
    def: "false"
    description: "Display-only mode."
  - name: "variant"
    type: "\"primary\" | \"warning\""
    def: "\"warning\""
    description: "Fill color (ignored per-step when colorScale)."
  - name: "size"
    type: "\"sm\" | \"md\" | \"lg\""
    def: "\"md\""
    description: "Icon scale."
  - name: "disabled"
    type: "boolean"
    def: "false"
    description: "Disable the input."
  - name: "ariaLabel"
    type: "string"
    def: "\"Rating\""
    description: "Group name."
  - name: "class"
    type: "string"
    def: "—"
    description: "Merged via cn(); Tailwind classes welcome."
  - name: "id"
    type: "string"
    def: "—"
    description: "Element id."
faq:
  - q: "Why radios and not a slider?"
    a: "Ratings are discrete choices — radios give exact selection, per-step labels, and platform keyboard behavior with zero script."
  - q: "Star scale or emotion scale?"
    a: "Use stars for familiar magnitude judgments. Use colorScale with labels for satisfaction (CSAT) — color + wording anchor each step. Use single with icon=\"emoji\" for quick sentiment pulses where magnitude between options is meaningless."
  - q: "How do custom icons work?"
    a: "Pass iconPath (one icon for every step) or icons (one path per step) with SVG path data drawn in a 16×16 viewBox. Paths render as-is — keep them simple, filled shapes."
---

Rating is a fieldset of radio inputs styled as rating icons: arrow keys, form submission, and per-step labels ("3 out of
5") come from the platform. Pick an icon preset (star, heart, circle, square, bar, thumb) or emoji faces, supply custom
SVG paths, tint each step with colorScale for satisfaction scales, or highlight only the selected step with single for
NPS-style questions. readonly renders a fractional display-only value.
