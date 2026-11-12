---
slug: "carousel"
name: "Carousel"
description: >-
  Accessible scroll-snap slide deck with buttons, counter, drag, and vertical layout.
category: general
importPath: "@parsakafi/astro-ui"
exportName: "Carousel"
js: true
since: "0.1.0"
isNew: false
related: ["button", "card", "scroll-area"]
features:
  - "Native scroll-snap: touch, trackpad, and drag work with zero positioning code"
  - "Prev/next buttons, optional “1 / 5” counter, optional loop wrap"
  - "Overlay prev/next arrows floating on the slide edges (controlsPlacement=\"overlay\")"
  - "Dot indicators under the deck — click to jump, active dot tracks the scroll"
  - "Per-slide captions (title + description) overlaid on the slide's lower edge"
  - "Autoplay with a configurable interval; pauses on hover and focus"
  - "Keyboard navigation when the scroll container is focused; slides announced as “x of y”"
  - "Horizontal and vertical orientations; single and multiple (peek) variants"
  - "Programmatic API via carousel:set; carousel:change fires on every move"
  - "snapType mandatory/proximity, custom gap and slide basis"
a11y:
  - "Root is role=region with aria-roledescription=carousel and a required accessible name"
  - "Slides carry aria-roledescription=slide and “x of y” aria-labels via the script"
  - "Scroll container is tabindex=0 so keyboard users can reach slide navigation"
  - "Buttons carry explicit aria-labels; counter is live text"
  - "Reduced motion: scrollIntoView respects the browser's behavior setting"
usage: |-
  ---
  import { Carousel, CarouselSlide } from "@parsakafi/astro-ui";
  ---
  
  <Carousel label="Featured cards">
    <CarouselSlide><div class="card">1</div></CarouselSlide>
    <CarouselSlide><div class="card">2</div></CarouselSlide>
    <CarouselSlide><div class="card">3</div></CarouselSlide>
  </Carousel>
demoIds: ["horizontal", "multiple", "vertical", "loop", "overlay-arrows", "indicators", "captions", "autoplay"]
props:
  - name: "label"
    type: "string"
    def: "\"Carousel\""
    description: "Accessible name for the carousel region."
  - name: "orientation"
    type: "\"horizontal\" | \"vertical\""
    def: "\"horizontal\""
    description: "Scroll axis."
  - name: "variant"
    type: "\"single\" | \"multiple\""
    def: "\"single\""
    description: "One slide per snap, or a peek layout sized via slideBasis."
  - name: "loop"
    type: "boolean"
    def: "false"
    description: "Wrap navigation from the last slide to the first and back."
  - name: "defaultIndex"
    type: "number"
    def: "0"
    description: "Zero-based slide shown initially."
  - name: "controls"
    type: "boolean"
    def: "true"
    description: "Show the prev/next buttons."
  - name: "controlsPlacement"
    type: "\"header\" | \"overlay\""
    def: "\"header\""
    description: "Buttons in the header row or floating over the slide edges."
  - name: "indicators"
    type: "boolean"
    def: "false"
    description: "One dot per slide; click jumps, the active dot tracks the scroll."
  - name: "autoplay"
    type: "boolean"
    def: "false"
    description: "Auto-advance on an interval (implies loop); pauses on hover/focus and under reduced motion."
  - name: "interval"
    type: "number"
    def: "4000"
    description: "Autoplay delay in milliseconds (min 1000)."
  - name: "showCounter"
    type: "boolean"
    def: "horizontal+single"
    description: "Show the “1 / 5” counter."
  - name: "counterLabel"
    type: "string"
    def: "\"Slide\""
    description: "Word used in the counter's aria-label."
  - name: "previousLabel / nextLabel"
    type: "string"
    def: "\"Previous slide\" / \"Next slide\""
    description: "Accessible labels for the buttons."
  - name: "labels"
    type: "{ previous?, next?, pause?, resume?, counter? }"
    def: "-"
    description: "Translate the built-in control names; explicit *Label props still win."
  - name: "snapType"
    type: "\"mandatory\" | \"proximity\""
    def: "\"mandatory\""
    description: "Scroll-snap strictness."
  - name: "contentClass"
    type: "string"
    def: "—"
    description: "Classes for the scroll container (e.g. fixed height for vertical)."
  - name: "slideBasis"
    type: "string"
    def: "100% / 50%"
    description: "Slide size for variant=\"multiple\" (any flex-basis value)."
  - name: "gap"
    type: "string"
    def: "token"
    description: "Space between slides (any CSS gap value)."
  - name: "class"
    type: "string"
    def: "—"
    description: "Merged via cn(); Tailwind classes welcome."
  - name: "id"
    type: "string"
    def: "—"
    description: "Element id."
faq:
  - q: "Why scroll-snap instead of transform math?"
    a: "The browser owns the physics: touch momentum, trackpad inertia, rtl, and resize all behave natively, and the script only syncs state. Transform-based carousels re-implement all of that and usually get drag wrong."
  - q: "How do I drive it from outside?"
    a: "Dispatch carousel:set on the root with {index: 2} or {action: 'next'}. Listen for carousel:change to sync external UI like dot indicators."
---

Carousel is a native scroll container with CSS scroll-snap — scrolling IS the interaction, so touch, trackpad, and drag all work with no positioning math. Prev/next buttons and an optional counter ride the header row; a small scoped script syncs the active slide on scroll, wires buttons, and adds ArrowLeft/ArrowRight (↑/↓ vertical) navigation with optional loop wrap. Slides are CarouselSlide wrappers around any content, each announced as “x of y”. variant="multiple" shows a peek layout sized via slideBasis. A bubbling carousel:change event fires on move, and carousel:set ({index} or {action}) drives it programmatically.
