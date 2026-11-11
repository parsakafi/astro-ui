---
slug: "before-after"
name: "BeforeAfter"
description: >-
  Draggable image comparison — two images, one split, native range control.
category: data-display
importPath: "astro-ui"
exportName: "BeforeAfter"
js: true
since: "0.1.0"
isNew: true
related: ["aspect-ratio", "carousel", "card"]
features:
  - "Native range input drives the split — pointer, touch, and keyboard all work"
  - "Independent src + alt for each image"
  - "Initial split via value (0–100)"
  - "Any CSS aspect-ratio for the frame"
  - "Optional Before/After chips (labels)"
  - "RTL-aware reveal via logical properties and :dir()"
  - "before-after:change event carries the current percentage"
  - "Token-driven line, handle, shadow, and focus ring"
a11y:
  - "Root is role=group named by `ariaLabel`"
  - "The split control is a native input[type=range], so screen readers announce a percentage and keyboard stepping works"
  - "`aria-valuetext` mirrors the current position"
  - "The decorative divider and handle are aria-hidden; both images keep their alt text"
  - "Focus is shown on the handle with `:focus-visible` and the shared ring tokens"
usage: |-
  ---
  import { BeforeAfter } from "astro-ui";
  ---
  
  <BeforeAfter
    before={{ src: "/before.jpg", alt: "Empty room" }}
    after={{ src: "/after.jpg", alt: "Furnished room" }}
  />
demoIds: ["basic", "labels", "portrait", "cinematic"]
props:
  - name: "before"
    type: "{ src: string; alt: string }"
    def: "—"
    description: "Image revealed on the start side of the split."
  - name: "after"
    type: "{ src: string; alt: string }"
    def: "—"
    description: "Image revealed on the end side of the split."
  - name: "value"
    type: "number"
    def: "50"
    description: "Initial split position, 0–100."
  - name: "aspectRatio"
    type: "string"
    def: "\"16 / 9\""
    description: "Frame aspect ratio (any CSS aspect-ratio value)."
  - name: "ariaLabel"
    type: "string"
    def: "\"Before and after comparison\""
    description: "Accessible name for the comparison region."
  - name: "rangeLabel"
    type: "string"
    def: "\"Comparison position\""
    description: "Accessible name for the range control."
  - name: "labels"
    type: "boolean"
    def: "false"
    description: "Show Before/After chips over the images."
  - name: "beforeLabel"
    type: "string"
    def: "\"Before\""
    description: "Text of the start-side chip."
  - name: "afterLabel"
    type: "string"
    def: "\"After\""
    description: "Text of the end-side chip."
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
  - q: "Why a range input instead of a custom drag handler?"
    a: "The browser already ships the interaction: pointer capture, touch, keyboard stepping, Home/End, and screen-reader value announcements. The component only maps the input value to a clip position, so there is no drag math to get wrong."
  - q: "How do I react when the split moves?"
    a: "Listen for before-after:change on the root (it bubbles) and read event.detail.value, or listen for the native input event on the range inside. The event fires on every movement, including keyboard changes."
  - q: "Does it work without JavaScript?"
    a: "The initial split renders at value and both images are present, but dragging needs the scoped script. Treat it as a JavaScript-required component and provide a static image pair as the no-JS fallback."
---

BeforeAfter stacks two images in one frame and clips the “before” layer at the split position, revealing the “after” layer underneath. The split is driven by a real `<input type="range">` stretched across the frame, so pointer drag, touch, and keyboard (Arrow keys, Home, End, Page Up/Down) work natively — the scoped script only mirrors the input value into a CSS custom property. `value` sets the initial position, `aspectRatio` shapes the frame, and `labels` adds Before/After chips. Clipping uses logical properties plus `:dir()` so the reveal starts on the reading side in RTL. Every move emits a bubbling `before-after:change` event with `detail.value` (0–100).
