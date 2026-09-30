---
slug: "tabs"
name: "Tabs"
description: >-
  WAI-ARIA tab switcher — line, pill, and card variants.
category: navigation
importPath: "astro-ui"
exportName: "Tabs"
js: true
since: "1.0.0"
isNew: false
related: ["separator", "card", "button"]
features:
  - "WAI-ARIA tabs pattern: roving tabindex, automatic activation"
  - "Arrow keys, Home/End navigation; RTL-aware"
  - "3 variants: line (underline), pill, card (segmented)"
  - "5 sizes, horizontal or vertical orientation"
  - "SSR pre-selection; panels visible without JS"
  - "Automatic tab/panel id + aria wiring"
a11y:
  - "Full ARIA tabs pattern: `role=\"tablist\"` / `tab` / `tabpanel`"
  - "`aria-selected`, `aria-controls`, and `aria-labelledby` wire the relationships"
  - "Arrow keys move between tabs with roving `tabindex` (script)"
usage: |-
  ---
  import { Tabs } from "astro-ui";
  ---
  
  <Tabs id="settings" ariaLabel="Settings" defaultValue="billing"
    items={[
      { value: "account", label: "Account" },
      { value: "billing", label: "Billing" },
    ]}>
    <div data-tab="account">Account panel.</div>
    <div data-tab="billing">Billing panel.</div>
  </Tabs>
demoIds: ["variants", "card-variant", "vertical"]
props:
  - name: "items"
    type: "TabItem[]"
    def: "[]"
    description: "Tabs in display order: { value, label, disabled? }."
  - name: "defaultValue"
    type: "string"
    def: "first enabled"
    description: "Initially selected tab."
  - name: "variant"
    type: "\"line\" | \"pill\" | \"card\""
    def: "\"line\""
    description: "Visual style."
  - name: "size"
    type: "\"xs\" | \"sm\" | \"md\" | \"lg\" | \"xl\""
    def: "\"md\""
    description: "Scale."
  - name: "orientation"
    type: "\"horizontal\" | \"vertical\""
    def: "\"horizontal\""
    description: "Layout direction."
  - name: "ariaLabel"
    type: "string"
    def: "—"
    description: "Accessible name for the tab list."
  - name: "id"
    type: "string"
    def: "recommended"
    description: "Prefixes generated tab/panel ids."
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
    description: "Panel elements, each carrying data-tab=\"<value>\"."
faq:
  - q: "Does this this work without JS?"
    a: "The tab list and all panels render server-side; without JS every panel stays visible so content is never lost."
  - q: "Multiple groups on one page?"
    a: "Give each a unique id — generated tab/panel ids derive from it."
---

Tabs implements the WAI-ARIA tabs pattern: SSR renders the list with the initial tab pre-selected, panels hide via the hidden attribute, and a small inline script wires click + arrow-key navigation with automatic activation. Without JS everything stays visible and meaningful.
