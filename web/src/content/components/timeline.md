---
slug: "timeline"
name: "Timeline"
description: >-
  Ordered event list with markers, connector rails, and time stamps.
category: data-display
importPath: "@parsakafi/astro-ui"
exportName: "Timeline"
js: false
since: "0.1.0"
isNew: true
related: ["stepper", "separator", "card"]
features:
  - "Semantic `<ol>` / `<li>` — no list role needed"
  - "Marker variants: neutral, primary, success, warning, error, info"
  - "Optional `active` halo marks the current event"
  - "Custom glyphs through the `marker` slot"
  - "Two scales (`sm`, `md`) shared by list and items"
  - "Rail stops at the last item automatically"
a11y:
  - "Ordered list structure announces position and item count"
  - "Markers and rails are `aria-hidden` — meaning belongs in the body"
  - "Optional `aria-label` names the list (e.g. \"Deployment history\")"
usage: |-
  ---
  import { Timeline, TimelineItem } from "@parsakafi/astro-ui";
  ---
  
  <Timeline ariaLabel="Deployment history">
    <TimelineItem variant="success">
      <time slot="time" datetime="2026-10-14T09:12Z">Oct 14 · 09:12</time>
      <span slot="title">Deploy v2.5.0</span>
      <span slot="description">Shipped by Ada — 42 files changed.</span>
    </TimelineItem>
  </Timeline>
demoIds: ["deploy", "activity", "rich"]
props:
  - name: "size"
    type: "\"sm\" | \"md\""
    def: "\"md\""
    description: "Marker and gap scale for the list."
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
slots:
  - name: "(default)"
    description: "TimelineItem children."
faq:
  - q: "How do I put the newest event first?"
    a: "Render TimelineItem children in that order. Timeline is plain document order — there is no internal sorting, so your data source decides."
  - q: "Can an item have a custom marker?"
    a: "Yes. Use the `marker` slot on TimelineItem for a glyph or icon; the marker column is `aria-hidden`, so keep the meaning in the title or description."
---

Timeline is a semantic `<ol>` of events; TimelineItem draws the marker, the connector rail, and the body. Because it is real document order, "list, 4 items" announcements and keyboard reading stay correct without any ARIA scaffolding. The rail is drawn by each item and stops at the last one automatically, so reordering or filtering items never leaves a dangling line.
