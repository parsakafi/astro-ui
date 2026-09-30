---
slug: "toggle"
name: "Toggle"
description: >-
  Two-state button with aria-pressed — SSR-controlled.
category: forms
importPath: "astro-ui"
exportName: "Toggle"
js: false
since: "1.0.0"
isNew: false
related: ["toggle-group", "switch", "button"]
features:
  - "Semantic button + aria-pressed (correct pressed semantics, no div hacks)"
  - "SSR-controlled state via the pressed prop"
  - "default / outline variants at sm / md / lg"
  - "Zero JS — flip aria-pressed with a one-line app script"
a11y:
  - "`aria-pressed` announces the on/off state"
  - "`:focus-visible` ring"
usage: |-
  ---
  import { Toggle } from "astro-ui";
  ---
  
  <Toggle ariaLabel="Bold"><strong>B</strong></Toggle>
  
  <script>
    document.querySelectorAll(".aui-toggle").forEach((btn) => {
      btn.addEventListener("click", () => {
        const on = btn.getAttribute("aria-pressed") === "true";
        btn.setAttribute("aria-pressed", String(!on));
        btn.classList.toggle("aui-toggle--pressed", !on);
      });
    });
  </script>
demoIds: ["variants", "sizes"]
props:
  - name: "pressed"
    type: "boolean"
    def: "false"
    description: "SSR state — maps to aria-pressed and the pressed styling."
  - name: "variant"
    type: "\"default\" | \"outline\""
    def: "\"default\""
    description: "Visual style."
  - name: "size"
    type: "\"sm\" | \"md\" | \"lg\""
    def: "\"md\""
    description: "Scale of the button."
  - name: "disabled"
    type: "boolean"
    def: "false"
    description: "Disables the toggle."
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
  - q: "Where's the click handling?"
    a: "Nowhere — Toggle is SSR-only. Flip aria-pressed (and toggle the aui-toggle--pressed class) in a one-line app script; see the usage example."
---

Toggle is a semantic &lt;button type="button"&gt; that carries aria-pressed. State is server-rendered: pass pressed for SSR-controlled state (e.g. a filter that is on for the initial page load), and flip the attribute with your own one-line script when the user clicks. Styles mirror Button: default (muted fill when pressed) and outline (primary fill) variants at three sizes.
