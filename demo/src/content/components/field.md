---
slug: "field"
name: "Field"
description: >-
  Label + control + hint + error wiring in one wrapper.
category: forms
importPath: "astro-ui"
exportName: "Field"
js: false
since: "1.0.0"
isNew: false
related: ["label", "input", "textarea"]
features:
  - "Composition: control in the default slot, chrome in named slots"
  - "Automatic for/id wiring ({id}-control) when id is set"
  - "Stable hint ({id}-hint) and error ({id}-error) ids"
  - "data-invalid + data-required hooks; error slot renders role=\"alert\""
  - "Zero JS"
a11y:
  - "Associates hint and error text via `aria-describedby`"
  - "Errors announce with `role=\"alert\"`; `aria-invalid` marks the control"
usage: |-
  ---
  import { Field, Input } from "astro-ui";
  ---
  
  <Field id="email" required>
    <span slot="label">Email</span>
    <Input id="email-control" type="email" invalid ariaDescribedby="email-error" />
    <span slot="hint">We never share it.</span>
    <span slot="error">Enter a valid email.</span>
  </Field>
demoIds: ["basic", "error"]
props:
  - name: "id"
    type: "string"
    def: "—"
    description: "Base id — enables label-for wiring and stable hint/error ids."
  - name: "required"
    type: "boolean"
    def: "false"
    description: "Adds a required marker to the label + data-required."
  - name: "class"
    type: "string"
    def: "—"
    description: "Merged via cn(); Tailwind classes welcome."
slots:
  - name: "label"
    description: "Label text (wired to the control via for)."
  - name: "default"
    description: "The form control itself."
  - name: "hint"
    description: "Helper text ({id}-hint)."
  - name: "error"
    description: "Error message ({id}-error, role=\"alert\") — marks the field invalid."
faq:
  - q: "How does the control connect?"
    a: "Give Field an id and the control the matching id=\"{id}-control\", plus aria-describedby=\"{id}-error\" when invalid — Input/Textarea's invalid prop already sets aria-invalid."
---

Field composes a form control with its chrome: the default slot carries the control (Input, Select, Textarea…), the named slots carry label, hint, and error text. When id is set the wiring is automatic — the label points at {id}-control, hint and error get stable ids, and the wrapper exposes data-invalid so themes can recolor the chrome.
