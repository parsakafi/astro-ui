---
slug: "collapsible"
name: "Collapsible"
description: >-
  Expand/collapse region with a dedicated trigger button.
category: layout
importPath: "astro-ui"
exportName: "Collapsible"
js: true
since: "0.1.0"
isNew: false
related: ["accordion", "disclosure", "tabs"]
features:
  - "Trigger button with aria-expanded / aria-controls + rotating chevron"
  - "Arbitrary composed panel content (slot, not data)"
  - "hidden=until-found: find-in-page + deep links reveal closed panels"
  - "Escape closes the panel and returns focus to the trigger"
  - "Multiple independent instances per page (data-attribute wiring)"
a11y:
  - "`aria-expanded` + `aria-controls` wire the trigger to the panel state"
  - "Panel is a `role=\"region\"` labelled by the trigger"
  - "`hidden=\"until-found\"` keeps closed content reachable by find-in-page and deep links (`beforematch` keeps aria-expanded honest)"
  - "Escape closes and returns focus to the trigger"
usage: |-
  ---
  import { Collapsible } from "astro-ui";
  ---
  
  <Collapsible id="filters" open>
    <span slot="trigger">Filters</span>
    <p>Any composed content…</p>
  </Collapsible>
demoIds: ["basic", "searchable", "open"]
props:
  - name: "open"
    type: "boolean"
    def: "false"
    description: "Open on first render (SSR)."
  - name: "disabled"
    type: "boolean"
    def: "false"
    description: "Disables the trigger."
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
    description: "Trigger button content (chevron is added)."
  - name: "default"
    description: "The collapsible panel content."
faq:
  - q: "Collapsible or Accordion?"
    a: "Accordion = data-driven items in a group (native <details>, optional single-open via name). Collapsible = arbitrary composed content with a trigger you position yourself."
  - q: "Can users find text inside a closed panel?"
    a: "Yes. Closed panels use hidden=\"until-found\", so Ctrl/Cmd+F, #hash links, and :~:text= fragments match collapsed content and the browser reveals it (firing beforematch — the component keeps aria-expanded in sync). Native <details> accordions get the same behavior from the platform. Falls back to display: none where unsupported."
---

Collapsible is an expand/collapse region whose trigger is a separate button that can live anywhere in the markup, and whose panel is arbitrary composed content — unlike Accordion, which uses native &lt;details&gt; with content authored as data. The scoped script toggles hidden + aria-expanded and closes on Escape. Closed panels use hidden="until-found": find-in-page, #hash deep links, and :~:text= fragments can still match and reveal collapsed content (the browser fires beforematch and removes the attribute; aria-expanded stays in sync). Multiple collapsibles on one page are supported — each root is wired independently by its data attribute.
