---
slug: "alert"
name: "Alert"
description: >-
  Feedback message with 8 variants and accessible dismissal.
category: feedback
importPath: "astro-ui"
exportName: "Alert"
js: false
since: "1.0.0"
isNew: false
related: ["spinner", "toast", "button"]
features:
  - "8 variants: primary, destructive, success, warning, info, carbon, secondary, accent"
  - "5 sizes: xs → xl"
  - "Smart role: alert (destructive) vs status (others)"
  - "closable renders an accessible dismiss button"
  - "Icon slot with built-in per-variant glyph"
a11y:
  - "Icons and the close button are aria-hidden — decoration never reaches the a11y tree"
  - "role=alert (destructive, assertive) vs role=status (others, polite)"
  - "Dismiss button carries an aria-label"
usage: |-
  ---
  import { Alert } from "astro-ui";
  ---

  <Alert variant="info" title="Heads up">Scheduled maintenance Sunday.</Alert>
  <Alert variant="destructive" title="Payment failed" closable>Retry or update your card.</Alert>
demoIds: ["basic", "variants", "closable"]
props:
  - name: "variant"
    type: "\"info\" | \"success\" | \"warning\" | \"destructive\" | …"
    def: "\"info\""
    description: "Visual + semantic variant."
  - name: "size"
    type: "\"xs\" | \"sm\" | \"md\" | \"lg\" | \"xl\""
    def: "\"md\""
    description: "Surface scale."
  - name: "title"
    type: "string"
    def: "—"
    description: "Bold heading line."
  - name: "closable"
    type: "boolean"
    def: "false"
    description: "Renders the dismiss button."
  - name: "closeLabel"
    type: "string"
    def: "\"Dismiss\""
    description: "Accessible name for the dismiss button."
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
    description: "Message body text."
  - name: "icon"
    description: "Custom leading glyph (overrides the built-in one)."
faq:
  - q: "When is it announced?"
    a: "Destructive alerts use role=alert (assertive, immediate); all other variants use role=status (polite). Mount-time announcements only — toggling content re-announces."
---

Alert shows a persistent inline message with a variant-colored surface, built-in variant glyph, and an optional dismiss
button. Smart semantics: destructive alerts render role=alert (announced immediately); the others render role=status
(polite).
