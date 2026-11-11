---
slug: "progress"
name: "Progress"
description: >-
  Determinate/indeterminate progress bar and circle.
category: data-display
importPath: "astro-ui"
exportName: "Progress"
js: false
since: "0.1.0"
isNew: false
related: ["spinner", "skeleton", "badge"]
features:
  - "Bar and circle variants"
  - "Determinate (value) or indeterminate"
  - "6 sizes, 8 colors"
  - "stripes: static or animated diagonal stripes on the bar fill"
  - "stripedTrack / segmented / squared bar styles"
  - "label + showValue text"
  - "RTL: fill and label mirror via logical properties"
a11y:
  - "`role=\"progressbar\"` with `aria-valuenow/min/max` announces completion"
  - "`aria-label` names the task; visual bars are `aria-hidden`"
usage: |-
  ---
  import { Progress } from "astro-ui";
  ---
  
  <Progress value={64} label="Uploading" showValue />
  <Progress variant="circle" value={80} showValue />
demoIds: ["bar", "circle", "stripes", "striped-track", "segmented", "squared"]
props:
  - name: "value"
    type: "number"
    def: "—"
    description: "0–100; omit for indeterminate."
  - name: "variant"
    type: "\"bar\" | \"circle\""
    def: "\"bar\""
    description: "Shape."
  - name: "size"
    type: "\"xs\" | \"sm\" | \"md\" | \"lg\" | \"xl\" | \"2xl\""
    def: "\"md\""
    description: "Scale."
  - name: "color"
    type: "\"primary\" | \"secondary\" | \"success\" | \"warning\" | \"info\" | \"muted\" | \"error\""
    def: "\"primary\""
    description: "Fill color."
  - name: "label"
    type: "string"
    def: "—"
    description: "Text label."
  - name: "showValue"
    type: "boolean"
    def: "false"
    description: "Show the percentage."
  - name: "stripes"
    type: "boolean | \"static\""
    def: "false"
    description: "Diagonal stripes on the bar fill; true animates them."
  - name: "stripedTrack"
    type: "boolean"
    def: "false"
    description: "Hatch the empty remainder inside an outlined track."
  - name: "segmented"
    type: "boolean | number"
    def: "false"
    description: "Discrete blocks; a number sets the count."
  - name: "squared"
    type: "boolean"
    def: "false"
    description: "Gap between fill and track."
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
  - q: "Is the value announced?"
    a: "When label is set the component exposes a role=\"progressbar\" with aria-valuenow. Without label, treat it as decorative."
---

Progress shows task completion as a bar or circle. Omit value for indeterminate. `stripes` overlays diagonal stripes on the bar fill (optionally animated), `stripedTrack` hatches the empty remainder, `segmented` renders discrete blocks, and `squared` separates fill and track with a gap. The circle uses an SVG ring with stroke-dashoffset math.
