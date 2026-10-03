---
slug: "kbd"
name: "Kbd"
description: >-
  Keyboard key cap for documenting shortcuts.
category: general
importPath: "astro-ui"
exportName: "Kbd"
js: false
since: "1.0.0"
isNew: false
related: ["clipboard", "tooltip", "button"]
features:
  - "Semantic <kbd>"
  - "3 variants incl. borderless muted"
  - "Raised key-cap shadow"
  - "3 sizes, mono font"
a11y:
  - "Semantic `<kbd>` elements — key sequences are announced as keyboard input"
usage: |-
  ---
  import { Kbd } from "astro-ui";
  ---
  
  <p>Press <Kbd>Ctrl</Kbd> + <Kbd>K</Kbd> to search.</p>
demoIds: ["basic"]
props:
  - name: "variant"
    type: "\"default\" | \"outline\" | \"muted\""
    def: "\"default\""
    description: "Visual style."
  - name: "size"
    type: "\"sm\" | \"md\" | \"lg\""
    def: "\"md\""
    description: "Key cap scale."
  - name: "raised"
    type: "boolean"
    def: "false"
    description: "Raised key-cap shadow."
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
---

Kbd renders an inline semantic &lt;kbd&gt; styled as a key cap. Optional raised shadow gives physical depth. Use inside prose; describe sequences with an accessible label on a wrapper.
