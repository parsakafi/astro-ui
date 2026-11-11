---
slug: "sticky-surface"
name: "Sticky Surface"
description: >-
  Sticky-positioned region with scroll-based line, elevation, and glass effects.
category: layout
importPath: "astro-ui"
exportName: "StickySurface"
js: true
since: "0.1.0"
isNew: false
related: ["card", "tabs"]
features:
  - "Pure-CSS sticking (position: sticky) — works with zero JS"
  - "Scroll effects while stuck: line, elevate, backdrop glass"
  - "observeStuck adds an is-stuck hook class for custom CSS"
  - "Token-driven surface, border, shadow, and z-index"
  - "Semantic wrapper via the as prop (div, header, nav, section)"
a11y:
  - "No ARIA of its own — semantics come from the as tag"
  - "Stuck state is visual only: content never hides, moves, or reflows"
usage: |-
  ---
  import { StickySurface } from "astro-ui";
  ---
  
  <StickySurface effects={["line", "elevate"]} threshold="0px">
    <strong>Toolbar</strong>
  </StickySurface>
demoIds: ["toolbar", "glass", "stuck-hook"]
props:
  - name: "as"
    type: "\"div\" | \"header\" | \"nav\" | \"section\""
    def: "\"div\""
    description: "Semantic wrapper element."
  - name: "threshold"
    type: "string"
    def: "\"16px\""
    description: "Sticky offset from the viewport/scrollport edge — and the line where stuck styles kick in. Any CSS length."
  - name: "effects"
    type: "Array<\"line\" | \"elevate\" | \"backdrop\">"
    def: "[]"
    description: "Scroll effects applied while stuck: border line, elevation shadow, frosted-glass wash."
  - name: "observeStuck"
    type: "boolean"
    def: "false"
    description: "Adds is-stuck while stuck without visual effects — a hook for your own selectors."
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
    description: "Sticky region content."
faq:
  - q: "Does it work without JavaScript?"
    a: "Sticking itself is pure CSS position: sticky and works with zero JS. The stuck-state effects and the is-stuck hook need the tiny IntersectionObserver script the component ships."
  - q: "Which z-index does it use?"
    a: "--ui-z-dropdown, shared with dropdown menus — the surface stays above scrolled page content but below dialogs, popovers, and toasts."
---

StickySurface sticks to the viewport (or nearest scrolling ancestor) at a threshold with pure CSS. While stuck, it can grow a border line, an elevation shadow, and a frosted-glass wash — and observeStuck exposes the same moment as an is-stuck class for your own selectors. State is detected with an IntersectionObserver sentinel, so the only JavaScript is the tiny observer script.
