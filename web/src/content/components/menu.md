---
slug: "menu"
name: "Menu"
description: >-
  Floating action menu with the WAI-ARIA menu-button keyboard model.
category: overlay
importPath: "@parsakafi/astro-ui"
exportName: "Menu"
js: true
since: "0.1.0"
isNew: true
related: ["popover", "button", "sheet"]
features:
  - "WAI-ARIA menu-button pattern: aria-haspopup, aria-expanded, role=menu"
  - "Arrow keys with wraparound, Home/End, letter typeahead"
  - "Escape closes and returns focus to the trigger"
  - "Outside pointerdown and Tab close without stealing focus"
  - "Four placements: bottom/top × start/end (logical, RTL-safe)"
  - "Flips to the other edge when the panel would leave the viewport"
  - "MenuGroup for labeled sections, MenuSeparator for dividers"
  - "Error variant for irreversible actions"
a11y:
  - "Trigger is a real button with `aria-haspopup=\"menu\"` and `aria-expanded`"
  - "Panel is `role=\"menu\"` labelled by its trigger"
  - "Items are native buttons/links with `role=\"menuitem\"` and `tabindex=\"-1\"`"
  - "Disabled items use `aria-disabled` and are skipped by keyboard navigation"
  - "Shortcut hints are `aria-hidden` — they mirror platform bindings, not app state"
usage: |-
  ---
  import { Menu, MenuItem, MenuSeparator } from "@parsakafi/astro-ui";
  ---
  
  <Menu id="row-actions" triggerLabel="Row actions">
    <MenuItem shortcut="⌘E">Edit</MenuItem>
    <MenuItem shortcut="⌘D">Duplicate</MenuItem>
    <MenuSeparator/>
    <MenuItem variant="error" shortcut="⌫">Delete</MenuItem>
  </Menu>
demoIds: ["row-actions", "groups", "links", "open"]
props:
  - name: "placement"
    type: "\"bottom-start\" | \"bottom-end\" | \"top-start\" | \"top-end\""
    def: "\"bottom-end\""
    description: "Corner of the trigger the panel aligns to."
  - name: "open"
    type: "boolean"
    def: "false"
    description: "Render the panel open on first paint."
  - name: "disabled"
    type: "boolean"
    def: "false"
    description: "Disable the trigger."
  - name: "bareTrigger"
    type: "boolean"
    def: "false"
    description: "Drop the trigger's own border/background."
  - name: "triggerLabel"
    type: "string"
    def: "\"Actions\""
    description: "Accessible name for the trigger."
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
  - name: "trigger"
    description: "Trigger content; defaults to a ⋯ glyph."
  - name: "(default)"
    description: "MenuItem, MenuGroup, and MenuSeparator children."
faq:
  - q: "How does MenuItem behave?"
    a: "It renders `<a>` when `href` is set and `<button type=\"button\">` otherwise, with `role=\"menuitem\"` and `tabindex=\"-1\"`. Props: `variant` (default/error), `href`, `disabled`, `shortcut`, `class`, `id`, plus an `icon` slot."
  - q: "What about MenuGroup and MenuSeparator?"
    a: "MenuGroup takes a `label` and renders `role=\"group\"` labelled by that heading, so screen readers name the section. MenuSeparator is an `<hr role=\"separator\">`, skipped by arrow-key navigation."
  - q: "Do submenus work?"
    a: "Not yet. Nested flyouts need a second positioning layer plus hover-intent timers; until then, split large menus into separate entry points so every action stays one level deep."
  - q: "How do I run an action?"
    a: "Attach a click listener to the MenuItem (or its `id`) in your own script. The menu closes and restores focus before your handler runs, so the action never loses its trigger."
---

Menu is the "⋯" action list: a trigger button that opens a `role="menu"` panel of actions. MenuItem renders a real `<button>` or `<a>`, so activation, middle-click, and copy-link all behave like normal HTML. The scoped script adds the parts native HTML cannot express — roving focus, arrow/Home/End navigation, typeahead, Escape-to-close with focus return, and outside-click dismissal.
