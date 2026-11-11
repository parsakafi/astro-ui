---
slug: "accordion"
name: "Accordion"
description: >-
  Collapsible sections built on native details/summary — zero JS.
category: layout
importPath: "@parsakafi/astro-ui"
exportName: "Accordion"
js: false
since: "0.1.0"
isNew: false
related: ["separator", "card", "tabs"]
features:
  - "Native <details>/<summary> — keyboard and AT for free"
  - "single mode via the native name attribute (Chrome 120+)"
  - "3 variants: default, bordered, ghost"
  - "Chevron indicator with rotation"
  - "Optional height animation via `animated` (pure CSS, graceful fallback)"
  - "SSR-controlled open panels via item.open"
a11y:
  - "Native `<details>`/`<summary>` — expand/collapse state, Space/Enter activation, and screen-reader announcements come from the platform"
  - "Disabled summaries are skipped by keyboard and assistive tech"
  - "Focus-visible ring on summaries via `:focus-visible`"
usage: |-
  ---
  import { Accordion } from "@parsakafi/astro-ui";
  ---
  
  <Accordion
    id="faq"
    items={[
      { value: "q1", title: "What is astro-ui?", content: "A zero-JS Astro component library." },
      { value: "q2", title: "Does it need JavaScript?", content: "Not for the accordion — it's native details." },
    ]}
  />
demoIds: ["basic", "bordered", "animated"]
props:
  - name: "items"
    type: "AccordionItem[]"
    def: "[]"
    description: "Sections: { value, title, content, open?, disabled? }."
  - name: "single"
    type: "boolean"
    def: "false"
    description: "One-open-at-a-time via native name attribute."
  - name: "animated"
    type: "boolean"
    def: "false"
    description: "Smooth expand/collapse height animation (CSS-only)."
  - name: "variant"
    type: "\"default\" | \"bordered\" | \"ghost\""
    def: "\"default\""
    description: "Visual style."
  - name: "size"
    type: "\"sm\" | \"md\" | \"lg\""
    def: "\"md\""
    description: "Text/padding scale."
  - name: "indicator"
    type: "boolean"
    def: "true"
    description: "Rotating chevron."
  - name: "ariaLabel"
    type: "string"
    def: "—"
    description: "Accessible name for the group."
  - name: "class"
    type: "string"
    def: "—"
    description: "Merged via cn(); Tailwind classes welcome."
  - name: "id"
    type: "string"
    def: "—"
    description: "Element id."
faq:
  - q: "How does single mode work without JS?"
    a: "Native <details name=\"group\"> exclusivity (Chrome 120+). Elsewhere panels toggle independently — behavior degrades gracefully."
  - q: "Can content be arbitrary markup?"
    a: "Use the item.content string for text, or compose the component differently — the items API keeps SSR output fully static."
  - q: "How does the animation work?"
    a: "`animated` animates the native ::details-content pseudo between block-size 0 and auto (interpolate-size: allow-keywords). Browsers without support ignore it and snap instantly — never broken."
---

Accordion provides collapsible content sections on native &lt;details&gt;/&lt;summary&gt;: expand/collapse, keyboard (Space/Enter), and announcements come from the platform. A bordered variant and chevron indicator round out the presentation.
