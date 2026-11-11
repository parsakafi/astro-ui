---
slug: "date-picker"
name: "DatePicker"
description: >-
  Native date input with a Gregorian or Persian calendar panel.
category: forms
importPath: "astro-ui"
exportName: "DatePicker"
js: true
since: "0.1.0"
isNew: true
related: ["input", "field", "time-picker"]
features:
  - "Native `<input type=\"date\">` baseline — works with zero JS"
  - "Gregorian and Persian (Jalali) month grids from `Intl`"
  - "Locale-driven month, weekday, and digit rendering"
  - "Full keyboard model: arrows, Home/End, PageUp/PageDown, Escape"
  - "RTL-aware: arrow keys follow the page's writing direction"
  - "`min` / `max` bounds disable out-of-range days"
  - "Today and Clear actions in the panel footer"
  - "Picking a day dispatches native `input` + `change` events"
a11y:
  - "The input is the labelled control — give it a `<Label for>` or `ariaLabel`"
  - "Panel is a `role=\"dialog\"` named \"Choose date\""
  - "Grid uses `role=\"grid\"` / `role=\"gridcell\"` with one tab stop"
  - "Selection is exposed with `aria-selected`; today is styled, not announced as the selection"
  - "Escape closes the panel and returns focus to the trigger"
usage: |-
  ---
  import { DatePicker, Label } from "astro-ui";
  ---
  
  <Label for="start-input">Start date</Label>
  <DatePicker
    id="start"
    name="start"
    calendar="persian"
    locale="fa-IR"
    min="2026-01-01"
  />
demoIds: ["gregorian", "persian", "range"]
props:
  - name: "name"
    type: "string"
    def: "—"
    description: "Form field name."
  - name: "value"
    type: "string"
    def: "—"
    description: "Initial ISO date (`YYYY-MM-DD`)."
  - name: "min"
    type: "string"
    def: "—"
    description: "Earliest selectable ISO date."
  - name: "max"
    type: "string"
    def: "—"
    description: "Latest selectable ISO date."
  - name: "calendar"
    type: "\"gregory\" | \"persian\""
    def: "\"gregory\""
    description: "Calendar system for the panel."
  - name: "locale"
    type: "string"
    def: "\"en-US\" | \"fa-IR\""
    description: "BCP-47 locale for names and digits."
  - name: "firstDayOfWeek"
    type: "number"
    def: "0 | 6"
    description: "0 = Sunday … 6 = Saturday."
  - name: "ariaLabel"
    type: "string"
    def: "—"
    description: "Accessible name when there is no visible label."
  - name: "toggleLabel"
    type: "string"
    def: "\"Open calendar\""
    description: "Accessible name for the calendar button."
  - name: "panelLabel"
    type: "string"
    def: "\"Choose date\""
    description: "Accessible name for the panel."
  - name: "required"
    type: "boolean"
    def: "false"
    description: "Required field."
  - name: "disabled"
    type: "boolean"
    def: "false"
    description: "Disabled field."
  - name: "class"
    type: "string"
    def: "—"
    description: "Merged via cn(); Tailwind classes welcome."
  - name: "id"
    type: "string"
    def: "—"
    description: "Wrapper id; the input becomes `<id>-input`."
faq:
  - q: "How do I read the chosen date?"
    a: "Listen for `change` (or `input`) on `#<id>-input`, or read the form value by `name`. The panel writes the ISO date into that input and dispatches native events, so the component never invents its own event system."
  - q: "Is the Jalali calendar accurate?"
    a: "The grid is derived from `Intl.DateTimeFormat` with `calendar: \"persian\"`, so month boundaries, lengths, and leap years follow the platform's ICU data — the same data your users' browsers use for `toLocaleDateString`."
  - q: "Does it work without JavaScript?"
    a: "Yes. The native date input is the control; the panel is additive. If the script never runs, users still pick a date with the platform picker."
  - q: "Are range pickers supported?"
    a: "Not yet — there is no two-input range state machine. For now, pair two DatePickers (`min` on the second bound to the first value) and validate on submit."
---

DatePicker wraps a real `<input type="date">`, so the field submits with the form, validates natively, and opens the platform picker on mobile with no JavaScript at all. The calendar panel is the enhancement: a month grid whose month names, weekday order, and digits come from `Intl.DateTimeFormat`, which is what makes a Persian (Jalali) calendar possible without shipping a calendar library.
