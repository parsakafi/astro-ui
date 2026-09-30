---
slug: "clipboard"
name: "Clipboard"
description: >-
  Icon-first copy-to-clipboard trigger with copied-state check.
category: general
importPath: "astro-ui"
exportName: "Clipboard"
js: true
since: "1.0.0"
isNew: false
related: ["button", "kbd", "code"]
features:
  - "Copy icon swaps to a green check when copied"
  - "onlyIcon square trigger for code blocks and toolbars"
  - "Zero-JS core: value travels in data-aui-clipboard"
  - "auto mode adds a tiny built-in handler (no hydration)"
  - "Polite live-region copy feedback"
  - "3 trigger styles, 2 sizes, disabled state"
a11y:
  - "Copied confirmation is announced via `role=\"status\"` with `aria-live=\"polite\"`"
  - "Real button with an `aria-label`; icons `aria-hidden`"
usage: |-
  ---
  import { Clipboard } from "astro-ui";
  ---
  
  <Clipboard value="npm install astro-ui" auto />
  
  <!-- or wire it yourself -->
  <Clipboard value="npx astro add" />
  <script>
    // read data-aui-clipboard and call the async clipboard API
  </script>
demoIds: ["basic", "only-icon", "variants", "sizes", "feedback", "disabled", "manual", "code-block"]
props:
  - name: "value"
    type: "string"
    def: "required"
    description: "Text placed on the clipboard."
  - name: "label"
    type: "string"
    def: "\"Copy\""
    description: "Trigger label (hidden when onlyIcon)."
  - name: "icon"
    type: "boolean"
    def: "true"
    description: "Lead with the copy icon; swaps to a check when copied."
  - name: "onlyIcon"
    type: "boolean"
    def: "false"
    description: "Square icon-only trigger; aria-label derives from value."
  - name: "auto"
    type: "boolean"
    def: "false"
    description: "Opt into the built-in clipboard handler."
  - name: "feedback"
    type: "string"
    def: "\"Copied!\""
    description: "Live-region success message."
  - name: "variant"
    type: "\"outline\" | \"ghost\" | \"soft\""
    def: "\"outline\""
    description: "Trigger style."
  - name: "size"
    type: "\"sm\" | \"md\""
    def: "\"md\""
    description: "Trigger scale."
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
  - q: "Why is JS optional here?"
    a: "The web platform has no script-free clipboard write, so the component keeps its core markup zero-JS and makes the (tiny) script opt-in via auto."
  - q: "How does the copied state work?"
    a: "The success handler toggles an is-copied class on the root for 1.5s; CSS swaps the copy icon for a green check. With manual wiring, toggle the class yourself."
  - q: "Is the icon-only trigger accessible?"
    a: "Yes — it renders a real button whose aria-label defaults to Copy <value> (override with ariaLabel), and copy success is announced via the live region."
---

Clipboard renders an icon-first trigger button carrying its value in data-aui-clipboard. On success the copy icon swaps to a green check and a polite live region confirms. Ships zero JS by default — wire it app-side, or set auto to opt into a ~10-line built-in handler using the async Clipboard API. onlyIcon renders a square icon-only trigger for code blocks.
