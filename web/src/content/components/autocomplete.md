---
slug: "autocomplete"
name: "Autocomplete"
description: >-
  Input that suggests options as you type — ARIA combobox pattern.
category: forms
importPath: "astro-ui"
exportName: "Autocomplete"
js: true
since: "0.1.0"
isNew: false
related: ["select", "input", "field"]
features:
  - "Full keyboard support: ↑/↓ navigate, Enter commits, Escape closes, Home/End jump"
  - "Case-insensitive substring filtering; filter={false} for async/external results"
  - "Grouped options with labelled sections"
  - "autoHighlight, clearable button, openOnFocus, and top/bottom placement"
  - "Five sizes and eight border variants matching Input"
  - "Committed value posts with the form under name — native input underneath"
a11y:
  - "Implements the WAI-ARIA combobox + listbox pattern: role=combobox with aria-expanded, aria-controls, aria-autocomplete=list, aria-activedescendant"
  - "Options carry role=option and aria-selected state managed by the script"
  - "Groups use role=group with accessible labels"
  - "Focus stays in the input while navigating — no focus jumps into the list"
  - "Empty state is announced via the listbox content itself"
usage: |-
  ---
  import { Autocomplete } from "astro-ui";
  ---
  
  <Autocomplete
    name="framework"
    placeholder="Pick a framework…"
    items={["Astro", "Next.js", "Nuxt", "SvelteKit"]}
    clearable
  />
demoIds: ["basic", "hints", "groups", "sizes", "clearable"]
props:
  - name: "items"
    type: "(string | { value, label, hint? })[]"
    def: "[]"
    description: "Suggestion list; strings become both value and label."
  - name: "groups"
    type: "{ label, items }[]"
    def: "—"
    description: "Labelled sections; overrides items when set."
  - name: "name"
    type: "string"
    def: "—"
    description: "Form field name; committed value posts with the form."
  - name: "value"
    type: "string"
    def: "—"
    description: "Initial committed value (server-side preselect)."
  - name: "placeholder"
    type: "string"
    def: "\"Search…\""
    description: "Input placeholder text."
  - name: "emptyMessage"
    type: "string"
    def: "\"No results found.\""
    description: "Shown when the filter matches nothing."
  - name: "filter"
    type: "boolean"
    def: "true"
    description: "Client-side substring filter; disable for async filtering."
  - name: "autoHighlight"
    type: "boolean"
    def: "false"
    description: "Highlight the first match when the list opens."
  - name: "clearable"
    type: "boolean"
    def: "false"
    description: "Render a clear (✕) button when the field has a value."
  - name: "openOnFocus"
    type: "boolean"
    def: "false"
    description: "Open the list on focus (search-style)."
  - name: "size"
    type: "\"xs\" | \"sm\" | \"md\" | \"lg\" | \"xl\""
    def: "\"md\""
    description: "Control size (heights mirror Input)."
  - name: "variant"
    type: "\"inherit\" | \"primary\" | … | \"info\""
    def: "\"inherit\""
    description: "Border color variant (mirrors Input)."
  - name: "placement"
    type: "\"bottom\" | \"top\""
    def: "\"bottom\""
    description: "Which side the panel opens on."
  - name: "disabled / required / invalid"
    type: "boolean"
    def: "false"
    description: "Native states + invalid styling hook."
  - name: "class"
    type: "string"
    def: "—"
    description: "Merged via cn(); Tailwind classes welcome."
  - name: "id"
    type: "string"
    def: "—"
    description: "Element id."
faq:
  - q: "How is this different from Select?"
    a: "Select is the native &lt;select&gt; — zero JS, platform keyboard handling, always fully accessible. Autocomplete adds type-to-filter and free typing at the cost of a small script. Prefer Select when the option set is small and fixed."
  - q: "Can I filter against an API?"
    a: "Yes — set filter={false} so the script doesn't filter client-side, then listen for input events and render your own options into the listbox panel (or re-render the whole component server-side per request)."
---

Autocomplete pairs a text input with a filtered suggestion list using the WAI-ARIA combobox + listbox pattern. Type to filter (case-insensitive substring on label/value), move with ↑/↓, commit with Enter, dismiss with Escape, jump with Home/End. Options render server-side; a small scoped script handles filtering and focus. The committed value posts with the form under the field's `name` — a native input underneath, so forms and autofill behave.
