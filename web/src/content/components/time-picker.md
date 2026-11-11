---
slug: "time-picker"
name: "TimePicker"
description: >-
  Time field with four interaction patterns: slot list, native input, scroll-drum wheel, and circular clock.
category: forms
importPath: "astro-ui"
exportName: "TimePicker"
js: true
since: "0.1.0"
isNew: true
related: ["date-picker", "select", "field"]
features:
  - "Four variants: `select` slots, native `input`, scroll `wheel`, circular `clock`"
  - "Wheel: infinite-scroll snap drums with pointer drag, momentum, and mouse wheel"
  - "Clock: SVG clock face — tap to set hour then minute; auto-advances between steps"
  - "24-hour and 12-hour (AM/PM) mode for both `wheel` and `clock`"
  - "All variants write a hidden `HH:mm` input — same form contract everywhere"
  - "`step`, `min`, and `max` bound the available slots (select/wheel)"
  - "Labels formatted with `Intl` — 24-hour or 12-hour via `hour12`"
  - "3 sizes, invalid state, disabled and required support"
a11y:
  - "Wheel and clock variants include a `role='region'` with `aria-label`"
  - "Wheel has an `aria-live` region that announces the current time after each change"
  - "Clock display buttons use `aria-pressed` to convey active mode (hour vs minute)"
  - "`select` / `input` variants use native elements — no custom widget to mis-key"
  - "`aria-invalid` accompanies the invalid border on all variants"
  - "Give the control a `<Label for>` or `ariaLabel`"
usage: |-
  ---
  import { TimePicker, Label } from "astro-ui";
  ---
  
  <Label for="slot">Drop-off</Label>
  <TimePicker id="slot" name="slot" step={30} min="09:00" max="17:00"/>
  
  <!-- Wheel -->
  <TimePicker name="appt" variant="wheel" hour12 />
  
  <!-- Clock -->
  <TimePicker name="start" variant="clock" value="09:30" />
demoIds: ["slots", "twelve-hour", "native", "wheel", "clock"]
props:
  - name: "variant"
    type: "\"select\" | \"input\" | \"wheel\" | \"clock\""
    def: "\"select\""
    description: "Interaction pattern."
  - name: "name"
    type: "string"
    def: "—"
    description: "Form field name."
  - name: "value"
    type: "string"
    def: "—"
    description: "Initial value (`HH:mm`)."
  - name: "min"
    type: "string"
    def: "—"
    description: "Earliest time (`HH:mm`) — select/wheel."
  - name: "max"
    type: "string"
    def: "—"
    description: "Latest time (`HH:mm`) — select/wheel."
  - name: "step"
    type: "number"
    def: "1"
    description: "Slot interval in minutes (select/wheel)."
  - name: "hour12"
    type: "boolean"
    def: "false"
    description: "12-hour display with AM/PM (wheel/clock/select)."
  - name: "locale"
    type: "string"
    def: "\"en-US\""
    description: "Locale for slot labels (select)."
  - name: "placeholder"
    type: "string"
    def: "\"Select a time\""
    description: "Empty option label (select variant)."
  - name: "size"
    type: "\"sm\" | \"md\" | \"lg\""
    def: "\"md\""
    description: "Control size (select/input/wheel)."
  - name: "invalid"
    type: "boolean"
    def: "false"
    description: "Sets `aria-invalid` and the error border."
  - name: "required"
    type: "boolean"
    def: "false"
    description: "Required field."
  - name: "disabled"
    type: "boolean"
    def: "false"
    description: "Disabled field."
  - name: "ariaLabel"
    type: "string"
    def: "—"
    description: "Accessible name when there is no visible label."
  - name: "class"
    type: "string"
    def: "—"
    description: "Merged via cn(); Tailwind classes welcome."
  - name: "id"
    type: "string"
    def: "—"
    description: "Control id (use it in `<Label for>`)."
faq:
  - q: "How do I read the selected time from the wheel or clock?"
    a: "Listen for `change` (or `input`) on the hidden `<input type=\"hidden\">` inside the component, or read the form value by `name` on submit. The value is always `HH:mm`."
  - q: "Does the wheel support touch?"
    a: "Yes — the drum uses the Pointer Events API which covers mouse, touch, and stylus. `touch-action: none` is set on the drum so the page doesn't scroll while you spin it."
  - q: "How do I submit a timezone?"
    a: "Send the local wall-clock `HH:mm` plus a separate timezone field (or an ISO datetime) — a bare time has no zone, so the server must be told which one it is."
  - q: "Can I combine it with DatePicker?"
    a: "Yes — put a DatePicker and a TimePicker side by side with `name=\"date\"` and `name=\"time\"`, then combine them server-side."
---

TimePicker covers every time-entry scenario with a single component. `variant="select"` builds a slot list from `step` — the shape appointment forms need. `variant="input"` hands off to the platform picker. `variant="wheel"` renders a scroll-snap column drum — the mobile-native feel on desktop. `variant="clock"` renders a circular clock face where you tap the hour hand, then the minute hand. All four write the same `HH:mm` value into a hidden form input, so the form contract never changes.
