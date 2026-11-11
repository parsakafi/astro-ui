---
slug: "popover"
name: "Popover"
description: >-
  Click-triggered anchored panel for interactive content.
category: overlay
importPath: "@parsakafi/astro-ui"
exportName: "Popover"
js: true
since: "0.1.0"
isNew: false
related: ["hover-card", "tooltip", "dialog"]
features:
  - "Real <button> trigger with aria-expanded / aria-controls"
  - "Focus moves into the panel on open, returns to the trigger on close"
  - "Closes on Escape and outside-pointer"
  - "top / bottom placement; CSS-anchored — no viewport math"
a11y:
  - "`aria-expanded` + `aria-controls` wire trigger to panel"
  - "Panel is `role=\"dialog\"`; Escape closes and focus returns to the trigger"
usage: |-
  ---
  import { Popover } from "@parsakafi/astro-ui";
  ---
  
  <Popover id="share">
    <span slot="trigger">Share</span>
    <span slot="content">Share via <a href="…">link</a></span>
  </Popover>
demoIds: ["basic", "top"]
props:
  - name: "placement"
    type: "\"top\" | \"bottom\""
    def: "\"bottom\""
    description: "Anchor the panel above the trigger when there is no room below."
  - name: "open"
    type: "boolean"
    def: "false"
    description: "Open on first render (SSR)."
  - name: "disabled"
    type: "boolean"
    def: "false"
    description: "Disables the trigger button."
  - name: "triggerLabel"
    type: "string"
    def: "—"
    description: "Accessible name for the trigger (required when trigger text is absent)."
  - name: "id"
    type: "string"
    def: "—"
    description: "Recommended: stable prefix for trigger/panel ids."
  - name: "class"
    type: "string"
    def: "—"
    description: "Merged via cn(); Tailwind classes welcome."
  - name: "id"
    type: "string"
    def: "—"
    description: "Element id."
slots:
  - name: "trigger"
    description: "Trigger button content."
  - name: "content"
    description: "Anchored panel content (role=\"dialog\")."
faq:
  - q: "Popover or HoverCard?"
    a: "Popover = click-triggered, dismissible, focus-managed — use for interactive content (forms, links). HoverCard = pointer/focus preview — use for passive rich previews."
---

Popover is a click-triggered anchored layer for interactive content — the trigger slot renders a real &lt;button&gt; (aria-expanded + aria-controls) and the content slot renders in an anchored panel below (or above) it. The scoped script toggles the panel, closes on Escape and outside-pointer, moves focus into the panel on open, and returns focus to the trigger on close. Positioning is CSS-anchored relative to the trigger wrapper (same technique as Tooltip), so the panel never needs viewport math.
