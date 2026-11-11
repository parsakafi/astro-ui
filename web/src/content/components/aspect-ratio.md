---
slug: "aspect-ratio"
name: "AspectRatio"
description: >-
  Reserves a fixed width/height ratio for media — no layout shift.
category: layout
importPath: "astro-ui"
exportName: "AspectRatio"
js: false
since: "0.1.0"
isNew: false
related: ["card", "avatar", "scroll-area"]
features:
  - "CSS aspect-ratio — number (1.78) or string (\"16 / 9\")"
  - "Child stretches to fill; object-fit stays consumer-controlled"
  - "Overflow hidden — no media bleeding past the box"
  - "Zero JS, no layout shift"
a11y:
  - "Purely presentational wrapper — media keeps its own alt text"
  - "No role or label of its own; nothing extra for assistive tech"
usage: |-
  ---
  import { AspectRatio } from "astro-ui";
  ---
  
  <AspectRatio ratio="16 / 9">
    <img src="hero.jpg" alt="Hero" class="object-cover" />
  </AspectRatio>
demoIds: ["ratios", "widescreen", "portrait", "photo"]
props:
  - name: "ratio"
    type: "number | string"
    def: "1"
    description: "CSS aspect-ratio value: number (1.78) or string (\"16 / 9\")."
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
    description: "Media stretched to fill the box."
faq:
  - q: "Why doesn't my image fill the box?"
    a: "The child is stretched to 100%×100% — add object-cover (or object-contain) on the img so it fills without distortion."
---

AspectRatio wraps a single child (img, video, iframe, or div) in a box with a fixed CSS aspect-ratio and stretches the child to fill it. Drop media in and it covers the box without layout shift — object-fit stays in your hands.
