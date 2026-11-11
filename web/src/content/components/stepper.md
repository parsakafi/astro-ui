---
slug: "stepper"
name: "Stepper"
description: >-
  Ordered progress indicator with complete/current/upcoming states.
category: navigation
importPath: "@parsakafi/astro-ui"
exportName: "Stepper"
js: false
since: "0.1.0"
isNew: false
related: ["pagination", "breadcrumb", "progress"]
features:
  - "Semantic ol with aria-current=\"step\""
  - "complete/current/upcoming/disabled states"
  - "Horizontal + vertical orientations"
  - "Optional per-step links"
  - "Dots or line connectors"
a11y:
  - "Semantic `<ol>` — steps announced in order"
  - "`aria-current=\"step\"` marks the active step; complete steps render a checkmark"
  - "Per-step links remain real anchors"
usage: |-
  ---
  import { Stepper } from "@parsakafi/astro-ui";
  ---
  
  <Stepper
    ariaLabel="Checkout progress"
    items={[
      { label: "Cart", complete: true },
      { label: "Shipping", current: true, description: "Address & delivery" },
      { label: "Payment" },
    ]}
  />
demoIds: ["basic", "vertical"]
props:
  - name: "items"
    type: "StepperItem[]"
    def: "[]"
    description: "Steps: { label, description?, complete?, current?, disabled?, href? }."
  - name: "orientation"
    type: "\"horizontal\" | \"vertical\""
    def: "\"horizontal\""
    description: "Layout."
  - name: "variant"
    type: "\"line\" | \"dots\""
    def: "\"line\""
    description: "Connector style."
  - name: "size"
    type: "\"sm\" | \"md\" | \"lg\""
    def: "\"md\""
    description: "Scale."
  - name: "ariaLabel"
    type: "string"
    def: "\"Progress\""
    description: "Group name."
  - name: "class"
    type: "string"
    def: "—"
    description: "Merged via cn(); Tailwind classes welcome."
  - name: "id"
    type: "string"
    def: "—"
    description: "Element id."
---

Stepper visualizes multi-step progress as a semantic &lt;ol&gt;: numbered markers, ✓ for completed steps, and optional links per step. Connectors are CSS pseudo-elements; states are data-attributes.
