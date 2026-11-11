---
slug: "combobox"
name: "Combobox"
description: >-
  Select-style trigger that opens a searchable listbox — pick one from many.
category: forms
importPath: "@parsakafi/astro-ui"
exportName: "Combobox"
js: true
since: "0.1.0"
isNew: false
related: ["autocomplete", "select", "input"]
features:
  - "Select-style trigger (committed value + chevron) with a search field inside the popup"
  - "Case-insensitive substring filtering across label and value"
  - "Full keyboard support: ↑/↓ navigate, Enter commits, Escape closes, Home/End jump"
  - "Check mark on the committed option; autoHighlight to land on the first match"
  - "Grouped options with labelled sections, per-option hints"
  - "Five sizes and eight border variants matching Input; clearable button"
  - "Committed value posts with the form via a hidden input under name"
a11y:
  - "Trigger carries role=combobox with aria-expanded and aria-controls pointing at the listbox"
  - "In-popup search filters the listbox and manages aria-activedescendant"
  - "Options carry role=option and aria-selected state managed by the script"
  - "Groups use role=group with accessible labels"
  - "Escape always returns focus to the trigger; Tab closes without stealing focus"
usage: |-
  ---
  import { Combobox } from "@parsakafi/astro-ui";
  ---
  
  <Combobox
    name="framework"
    placeholder="Select framework…"
    items={["Astro", "Next.js", "Nuxt", "SvelteKit"]}
    clearable
  />
demoIds: ["basic", "preselect", "groups", "sizes", "states"]
props:
  - name: "items"
    type: "(string | { value, label, hint? })[]"
    def: "[]"
    description: "Option list; strings become both value and label."
  - name: "groups"
    type: "{ label, items }[]"
    def: "—"
    description: "Labelled sections; overrides items when set."
  - name: "name"
    type: "string"
    def: "—"
    description: "Form field name; committed value posts via a hidden input."
  - name: "value"
    type: "string"
    def: "—"
    description: "Initial committed value (server-side preselect)."
  - name: "placeholder"
    type: "string"
    def: "\"Select…\""
    description: "Trigger text when nothing is committed."
  - name: "searchPlaceholder"
    type: "string"
    def: "\"Search…\""
    description: "Placeholder for the search field inside the popup."
  - name: "emptyMessage"
    type: "string"
    def: "\"No results found.\""
    description: "Shown when the filter matches nothing."
  - name: "autoHighlight"
    type: "boolean"
    def: "false"
    description: "Highlight the first match when filtering."
  - name: "clearable"
    type: "boolean"
    def: "false"
    description: "Render a clear (✕) button on the trigger when a value is committed."
  - name: "size"
    type: "\"xs\" | \"sm\" | \"md\" | \"lg\" | \"xl\""
    def: "\"md\""
    description: "Trigger size (heights mirror Input)."
  - name: "variant"
    type: "\"inherit\" | \"primary\" | … | \"info\""
    def: "\"inherit\""
    description: "Border color variant (mirrors Input)."
  - name: "placement"
    type: "\"bottom\" | \"top\""
    def: "\"bottom\""
    description: "Which side the panel opens on."
  - name: "panelWidth"
    type: "string"
    def: "trigger width"
    description: "Fixed panel width (any CSS inline-size value)."
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
  - q: "How is this different from Autocomplete?"
    a: "Autocomplete is a typable text input that suggests completions; the value can be typed freely. Combobox is a select-style trigger — the value can only come from the list, but a search field inside the popup makes long option sets findable. Use Combobox when the value must be one of the options."
  - q: "Does it work without JavaScript?"
    a: "The trigger renders server-side with the committed value and posts it with the form via a hidden input. Opening the popup, searching, and keyboard selection need the small scoped script that ships with the component."
---

Combobox reads like a select: the trigger shows the committed value with a chevron, and opening it reveals a panel with a search field on top of a filterable listbox. Type to filter (case-insensitive substring on label/value), move with ↑/↓, commit with Enter or click, dismiss with Escape. The committed value posts with the form via a hidden input under the field's `name`. The selected option carries a check mark, and options can carry a muted hint line. With JS disabled the trigger still renders the committed value; the popup and search need the small scoped script.
