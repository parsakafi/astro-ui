---
slug: "radio-group"
name: "Radio Group"
description: >-
  Declarative single-choice group — fieldset of radios from a plain items array.
category: forms
importPath: "@parsakafi/astro-ui"
exportName: "RadioGroup"
js: false
since: "0.1.0"
isNew: false
related: ["radio", "checkbox", "toggle-group", "select"]
features:
  - "Declarative `items` array — strings or {value, label, hint?, disabled?}"
  - "defaultValue sets the initially checked option (server-rendered)"
  - "orientation: vertical stack or horizontal wrap"
  - "Per-option muted hint lines and disabled state"
  - "Group-level invalid legend styling + ariaDescribedby wiring"
  - "Native radios underneath — arrows navigate, forms submit natively"
  - "size/variant forwarded to every option (mirrors Radio)"
a11y:
  - "Real <fieldset>/<legend> group semantics — the legend names the group for screen readers"
  - "Native radio keyboard behavior: arrows move within the group, Tab enters/exits"
  - "Hint paragraphs get ids for aria-describedby wiring at the group level"
  - "Invalid state marks the legend visually; pair with ariaDescribedby pointing at error text"
  - "The required indicator is text (\" *\" in the legend), never color alone"
usage: |-
  ---
  import { RadioGroup } from "@parsakafi/astro-ui";
  ---
  
  <RadioGroup
    name="plan"
    label="Plan"
    defaultValue="pro"
    items={[
      { value: "free", label: "Free", hint: "For hobbies" },
      { value: "pro", label: "Pro", hint: "For teams" },
    ]}
  />
demoIds: ["basic", "hints", "orientation", "states", "sizes"]
props:
  - name: "name"
    type: "string"
    def: "—"
    description: "Shared radio name; the chosen value posts under it."
  - name: "items"
    type: "(string | { value, label, hint?, disabled? })[]"
    def: "—"
    description: "Option list; strings become both value and label."
  - name: "defaultValue"
    type: "string"
    def: "—"
    description: "Which option starts checked."
  - name: "label"
    type: "string"
    def: "—"
    description: "Group heading rendered in the legend."
  - name: "orientation"
    type: "\"vertical\" | \"horizontal\""
    def: "\"vertical\""
    description: "Row layout."
  - name: "invalid"
    type: "boolean"
    def: "false"
    description: "Error-colored legend; visual hook for validation."
  - name: "ariaDescribedby"
    type: "string"
    def: "—"
    description: "id of hint/error text describing the group."
  - name: "disabled"
    type: "boolean"
    def: "false"
    description: "Disable every option."
  - name: "size"
    type: "\"xs\" | \"sm\" | \"md\" | \"lg\" | \"xl\""
    def: "\"md\""
    description: "Forwarded to each Radio."
  - name: "variant"
    type: "\"primary\" | \"secondary\" | … | \"inherit\""
    def: "\"primary\""
    description: "Forwarded to each Radio."
  - name: "class"
    type: "string"
    def: "—"
    description: "Merged via cn(); Tailwind classes welcome."
  - name: "id"
    type: "string"
    def: "—"
    description: "Element id."
faq:
  - q: "How is this different from Radio?"
    a: "Radio is one control — you hand-write the fieldset/legend and repeat it per option. RadioGroup takes an items array and renders the whole labelled group, centralizing defaultValue, hints, orientation, and invalid wiring. Both are zero-JS; RadioGroup renders Radio components underneath."
  - q: "Can I use custom markup per option?"
    a: "RadioGroup options are label + hint text. For rich option content (icons, price tables, cards), hand-write the fieldset with individual Radio components — the native group semantics come from sharing `name`, not from the wrapper."
---

RadioGroup renders a labelled fieldset of Radio components from a plain `items` array — native radios underneath, so the browser provides single-choice semantics and arrow-key navigation with zero JavaScript. The group centralizes what hand-written fieldsets repeat: `defaultValue` picks the initially checked option (only one carries `checked`), `orientation` lays rows out vertically or horizontally, options can carry a muted `hint` line or be individually disabled, and group-level `invalid` styling ties the legend to your error text via `ariaDescribedby`. For fully custom per-option markup, hand-write the fieldset with Radio components instead.
