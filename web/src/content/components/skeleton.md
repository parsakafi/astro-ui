---
slug: "skeleton"
name: "Skeleton"
description: >-
  Pulsing placeholder blocks for loading layouts.
category: feedback
importPath: "astro-ui"
exportName: "Skeleton"
js: false
since: "0.1.0"
isNew: false
related: ["spinner", "avatar", "progress"]
features:
  - "Variants: text, circle, rectangle"
  - "Pulse animation with reduced-motion off switch"
  - "Static mode via animated=false"
  - "Size entirely consumer-driven (width/height styles)"
a11y:
  - "aria-hidden by default — pair with an aria-busy container or sr-only status"
  - "Animation removed under prefers-reduced-motion"
usage: |-
  ---
  import { Skeleton } from "astro-ui";
  ---
  
  <Skeleton style="width:100%;height:1rem" />
  <Skeleton variant="circle" style="width:3rem;height:3rem" />
demoIds: ["basic", "card", "compose"]
props:
  - name: "variant"
    type: "\"text\" | \"rect\" | \"circle\""
    def: "\"rect\""
    description: "Placeholder shape."
  - name: "width / height"
    type: "string"
    def: "—"
    description: "Explicit box dimensions (any CSS length)."
  - name: "size"
    type: "\"xs\" | \"sm\" | \"md\" | \"lg\" | \"xl\" | \"2xl\""
    def: "\"md\""
    description: "Preset scale."
  - name: "animated"
    type: "boolean"
    def: "true"
    description: "Pulse animation; false for a static block."
  - name: "class"
    type: "string"
    def: "—"
    description: "Merged via cn(); Tailwind classes welcome."
  - name: "id"
    type: "string"
    def: "—"
    description: "Element id."
faq:
  - q: "How do I announce loading?"
    a: "Skeletons are aria-hidden decoration. Put aria-busy=true on the loading region and swap it out when content arrives."
---

Skeleton reserves layout space with a pulsing neutral block while content loads — text lines, circles, rectangles — so the final content swaps in without reflow.
