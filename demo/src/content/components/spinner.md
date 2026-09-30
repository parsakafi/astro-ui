---
slug: "spinner"
name: "Spinner"
description: >-
  Loading indicator in 4 animation styles and 6 sizes.
category: feedback
importPath: "astro-ui"
exportName: "Spinner"
js: false
since: "1.0.0"
isNew: false
related: ["skeleton", "progress", "button"]
features:
  - "4 variants: ring (default), dots, bars, pulse"
  - "6 sizes from xs to 2xl"
  - "Pure CSS animation — zero JS"
  - "Respects prefers-reduced-motion"
a11y:
  - "role=status with a visually hidden Loading label by default"
  - "aria-label override for specific contexts (Saving, Uploading…)"
  - "Animation disabled under prefers-reduced-motion (static glyph)"
usage: |-
  ---
  import { Spinner } from "astro-ui";
  ---
  
  <Spinner />
  <Spinner variant="dots" size="lg" />
demoIds: ["basic", "sizes"]
props:
  - name: "variant"
    type: "\"ring\" | \"dots\" | \"bars\" | \"pulse\""
    def: "\"ring\""
    description: "Animation style."
  - name: "size"
    type: "\"xs\" | \"sm\" | \"md\" | \"lg\" | \"xl\" | \"2xl\""
    def: "\"md\""
    description: "Glyph size."
  - name: "ariaLabel"
    type: "string"
    def: "\"Loading\""
    description: "Accessible status label."
  - name: "class"
    type: "string"
    def: "—"
    description: "Merged via cn(); Tailwind classes welcome."
  - name: "id"
    type: "string"
    def: "—"
    description: "Element id."
faq:
  - q: "Ring vs Button loading?"
    a: "Button has built-in loading that swaps its label for a spinner. Use standalone Spinner for page regions and inline waits."
---

Spinner communicates in-flight work with pure CSS animation — ring, dots, bars, and pulse styles at six sizes. Color follows the text color; wrap it in a button or surface and it inherits.
