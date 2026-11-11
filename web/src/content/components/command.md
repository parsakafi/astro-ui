---
slug: "command"
name: "Command"
description: >-
  Inline searchable command palette — grouped actions, keyboard-first.
category: general
importPath: "@parsakafi/astro-ui"
exportName: "Command"
js: true
since: "0.1.0"
isNew: false
related: ["combobox", "autocomplete", "kbd"]
features:
  - "Grouped, ordered sections with uppercase group headings"
  - "Case-insensitive filter across labels + keywords; per-item disabled state"
  - "Full keyboard support: ↑/↓ navigate, Enter runs, Home/End jump; optional loop wrap"
  - "Right-aligned Kbd-style shortcuts (⌘P) and muted hint lines per item"
  - "vimBindings: j/k + ctrl+n/ctrl+p navigation"
  - "Bubbling command:select and command:search-change events"
  - "shouldFilter={false} for async/external filtering"
a11y:
  - "Root is a labelled group; the search input carries role=combobox with aria-controls and aria-autocomplete=list"
  - "Listbox carries role=listbox; items carry role=option and aria-selected managed by the script"
  - "Disabled items are aria-disabled and skipped by both navigation and Enter"
  - "aria-activedescendant keeps focus in the search field while navigating"
  - "Empty state lives inside the listbox so it is announced with context"
usage: |-
  ---
  import { Command } from "@parsakafi/astro-ui";
  ---
  
  <Command
    label="Commands"
    groups={[
      { label: "Suggestions", items: [
        { value: "calendar", label: "Calendar" },
        { value: "calculator", label: "Calculator", disabled: true },
      ]},
      { label: "Settings", items: [
        { value: "profile", label: "Profile", shortcut: "⌘P" },
      ]},
    ]}
  />
  
  <script>
    document.addEventListener("command:select", (e) => {
      console.log(e.detail.value);
    });
  </script>
demoIds: ["basic", "hints", "loop"]
props:
  - name: "groups"
    type: "{ label, items }[]"
    def: "required"
    description: "Ordered sections; items are { value, label, hint?, shortcut?, disabled?, keywords? }."
  - name: "label"
    type: "string"
    def: "\"Commands\""
    description: "Accessible name for the palette."
  - name: "defaultSearch"
    type: "string"
    def: "\"\""
    description: "Initial text in the search field."
  - name: "placeholder"
    type: "string"
    def: "\"Type a command or search…\""
    description: "Search placeholder text."
  - name: "emptyMessage"
    type: "string"
    def: "\"No results found.\""
    description: "Shown when nothing matches."
  - name: "shouldFilter"
    type: "boolean"
    def: "true"
    description: "Client-side filter; disable for async filtering."
  - name: "loop"
    type: "boolean"
    def: "false"
    description: "Highlight wraps from end back to start."
  - name: "vimBindings"
    type: "boolean"
    def: "false"
    description: "j/k and ctrl+n/ctrl+p move the highlight."
  - name: "autoHighlight"
    type: "boolean"
    def: "false"
    description: "Highlight the first item immediately."
  - name: "class"
    type: "string"
    def: "—"
    description: "Merged via cn(); Tailwind classes welcome."
  - name: "id"
    type: "string"
    def: "—"
    description: "Element id."
faq:
  - q: "How is this different from Combobox?"
    a: "Combobox commits a form value — it has a hidden input and posts with the form. Command runs actions: items are buttons that emit command:select, and nothing is submitted. Use Combobox to pick one of many values, Command to trigger one of many actions."
  - q: "Can it open in a dialog?"
    a: "Yes — place Command inside Dialog content and open the dialog from a keyboard shortcut or button. The palette is inline by design, so composition stays explicit."
---

Command renders a framed palette with a search input on top of a scrollable, grouped action list. Type to filter (case-insensitive substring on labels and keywords), move with ↑/↓, run with Enter or click. Items are declarative: pass ordered `groups` of `{ value, label, hint?, shortcut?, disabled?, keywords? }` — shortcuts render Kbd-style on the right, hints as a muted second line. Selection emits a bubbling `command:select` event with the item's value; run your action from a listener. loop wraps highlighting, vimBindings adds j/k and ctrl+n/ctrl+p, and shouldFilter={false} hands filtering to you for async sources.
