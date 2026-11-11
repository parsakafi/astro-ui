---
slug: "input"
name: "Input"
description: >-
  Every native input type with token styling and validation states.
category: forms
importPath: "astro-ui"
exportName: "Input"
js: false
since: "0.1.0"
isNew: false
related: ["label", "textarea", "select"]
features:
  - "All 16 native input types, fully typed"
  - "8 border variants incl. success/error"
  - "5 sizes"
  - "invalid state for server-side validation display"
  - "min/max/step/accept forward via rest"
  - "Zero JS — forms submit natively"
a11y:
  - "Native input semantics; hint/error text connected via `aria-describedby`"
  - "`aria-invalid` for validation state"
usage: |-
  ---
  import { Input, Label } from "astro-ui";
  ---
  
  <Label for="email" required>Email</Label>
  <Input id="email" name="email" type="email" placeholder="ada@example.com" />
demoIds: ["types", "states", "sizes"]
props:
  - name: "type"
    type: "all 16 native types"
    def: "\"text\""
    description: "Fully typed union."
  - name: "name / value / placeholder"
    type: "string"
    def: "—"
    description: "Native attributes."
  - name: "min / max / step"
    type: "string | number"
    def: "—"
    description: "Numeric/date bounds (native)."
  - name: "minlength / maxlength"
    type: "number"
    def: "—"
    description: "Length bounds."
  - name: "invalid"
    type: "boolean"
    def: "false"
    description: "Error border + aria-invalid."
  - name: "size"
    type: "\"xs\" | \"sm\" | \"md\" | \"lg\" | \"xl\""
    def: "\"md\""
    description: "Control scale."
  - name: "variant"
    type: "\"inherit\" | \"primary\" | \"secondary\" | \"muted\" | \"error\" | \"success\" | \"warning\" | \"info\""
    def: "\"primary\""
    description: "Border color."
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
faq:
  - q: "How is validation shown?"
    a: "Server/form-driven: set invalid and point ariaDescribedby at the message element. No client JS ships or runs."
---

Input covers all 16 native types — text, email, password, date, color, range, file and friends — with token styling, size/variant control, and invalid state for server-driven validation. Numeric/date bounds forward via rest attributes.
