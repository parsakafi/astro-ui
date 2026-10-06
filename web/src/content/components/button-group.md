---
slug: "button-group"
name: "ButtonGroup"
description: >-
  Zero-JS container that visually groups buttons by merging borders and rounding outer corners only.
category: general
importPath: "astro-ui"
exportName: "ButtonGroup"
js: false
since: "1.0.0"
isNew: false
related: ["button", "separator", "pagination"]
features:
  - "Horizontal and vertical orientations"
  - "Automatic border merging between adjacent children"
  - "Only outer corners remain rounded"
  - "Focus states elevated via z-index for full border visibility"
  - "role=\"group\" or role=\"toolbar\" for semantic grouping"
  - "Works with buttons, links, inputs, and other inline interactive elements"
  - "ButtonGroupText for non-button content (counts, labels, badges)"
  - "ButtonGroupSeparator for visual dividers between sections"
  - "Zero JavaScript — pure CSS visual grouping"
a11y:
  - "Grouped buttons share one `aria-label`-named group"
  - "Roving `:focus-visible` ring keeps focus clear across joined controls"
usage: |-
  ---
  import { Button, ButtonGroup } from "astro-ui";
  ---
  
  <ButtonGroup>
    <Button variant="outline">Previous</Button>
    <Button variant="outline">Next</Button>
  </ButtonGroup>
  
  <ButtonGroup orientation="vertical">
    <Button variant="outline">Copy</Button>
    <Button variant="outline">Paste</Button>
    <Button variant="outline">Delete</Button>
  </ButtonGroup>
demoIds: ["basic", "vertical", "variants", "icons", "with-separator", "with-text"]
props:
  - name: "orientation"
    type: "\"horizontal\" | \"vertical\""
    def: "\"horizontal\""
    description: "Layout direction."
  - name: "role"
    type: "\"group\" | \"toolbar\""
    def: "\"group\""
    description: "Semantic ARIA role for the container."
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
  - name: "default"
    description: "Button components or other inline interactive elements."
faq:
  - q: "What elements can I put inside?"
    a: "Any inline interactive elements work — Button, links with Button styles, even native <button> elements. The styles target direct children and merge their borders."
  - q: "Do buttons need special props?"
    a: "No — ButtonGroup is purely presentational. It adjusts borders and radii via CSS; buttons remain fully functional with zero changes."
  - q: "Can I nest ButtonGroups?"
    a: "Yes — vertical groups can contain horizontal groups (or vice versa) for complex toolbars. Each group independently manages its children's borders."
  - q: "How does focus styling work?"
    a: "Focused and hovered children get position: relative with elevated z-index, so their full border appears above siblings. This prevents border clipping."
---

ButtonGroup is a zero-JS layout container that visually groups buttons or other inline interactive elements by merging their borders and rounding only the outer corners. Children remain fully independent — the group is purely presentational. Horizontal and vertical orientations, plus proper focus/hover z-index handling, make it the foundation for toolbars, pagination controls, and segmented button sets.
