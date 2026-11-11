import {type ComponentMeta, t} from "./types";

export const timePicker: ComponentMeta = {
    slug: "time-picker",
    name: "TimePicker",
    description: "Time field with four interaction patterns: slot list, native input, scroll-drum wheel, and circular clock.",
    overview:
        "TimePicker covers every time-entry scenario with a single component. `variant=\"select\"` builds a slot list from `step` — the shape appointment forms need. `variant=\"input\"` hands off to the platform picker. `variant=\"wheel\"` renders a scroll-snap column drum — the mobile-native feel on desktop. `variant=\"clock\"` renders a circular clock face where you tap the hour hand, then the minute hand. All four write the same `HH:mm` value into a hidden form input, so the form contract never changes.",
    importPath: "astro-ui",
    exportName: "TimePicker",
    category: "forms",
    js: true,
    usage:
        `---\nimport { TimePicker, Label } from "astro-ui";\n---\n\n<Label for="slot">Drop-off</Label>\n<TimePicker id="slot" name="slot" step={30} min="09:00" max="17:00"/>\n\n<!-- Wheel -->\n<TimePicker name="appt" variant="wheel" hour12 />\n\n<!-- Clock -->\n<TimePicker name="start" variant="clock" value="09:30" />`,
    features: [
        "Four variants: `select` slots, native `input`, scroll `wheel`, circular `clock`",
        "Wheel: infinite-scroll snap drums with pointer drag, momentum, and mouse wheel",
        "Clock: SVG clock face — tap to set hour then minute; auto-advances between steps",
        "24-hour and 12-hour (AM/PM) mode for both `wheel` and `clock`",
        "All variants write a hidden `HH:mm` input — same form contract everywhere",
        "`step`, `min`, and `max` bound the available slots (select/wheel)",
        "Labels formatted with `Intl` — 24-hour or 12-hour via `hour12`",
        "3 sizes, invalid state, disabled and required support",
    ],
    a11y: [
        "Wheel and clock variants include a `role='region'` with `aria-label`",
        "Wheel has an `aria-live` region that announces the current time after each change",
        "Clock display buttons use `aria-pressed` to convey active mode (hour vs minute)",
        "`select` / `input` variants use native elements — no custom widget to mis-key",
        "`aria-invalid` accompanies the invalid border on all variants",
        "Give the control a `<Label for>` or `ariaLabel`",
    ],
    demos: [
        {
            id: "slots",
            title: "30-minute booking slots",
            code: `<Label for="tp-slot">Drop-off</Label>\n<TimePicker id="tp-slot" name="slot" step={30} min="09:00" max="17:00"/>`,
        },
        {
            id: "twelve-hour",
            title: "12-hour labels",
            code: `<Label for="tp-12">Reminder</Label>\n<TimePicker\n  id="tp-12"\n  name="reminder"\n  step={15}\n  hour12\n  placeholder="Pick a reminder time"\n/>`,
        },
        {
            id: "native",
            title: "Native time input",
            code: `<Label for="tp-native">Starts at</Label>\n<TimePicker id="tp-native" name="starts" variant="input" step={15} value="09:30"/>`,
        },
        {
            id: "wheel",
            title: "Wheel (scroll-drum) picker",
            code: `<!-- 24-hour -->\n<TimePicker variant="wheel" name="appt" value="14:30" />\n\n<!-- 12-hour with AM/PM column -->\n<TimePicker variant="wheel" name="appt" hour12 value="02:45" />`,
        },
        {
            id: "clock",
            title: "Circular clock picker",
            code: `<!-- 24-hour -->\n<TimePicker variant="clock" name="meeting" value="09:30" />\n\n<!-- 12-hour with AM/PM toggle -->\n<TimePicker variant="clock" name="meeting" hour12 value="09:30" />`,
        },
    ],
    props: [
        t("variant", `"select" | "input" | "wheel" | "clock"`, `"select"`, "Interaction pattern."),
        t("name", "string", "—", "Form field name."),
        t("value", "string", "—", "Initial value (`HH:mm`)."),
        t("min", "string", "—", "Earliest time (`HH:mm`) — select/wheel."),
        t("max", "string", "—", "Latest time (`HH:mm`) — select/wheel."),
        t("step", "number", "1", "Slot interval in minutes (select/wheel)."),
        t("hour12", "boolean", "false", "12-hour display with AM/PM (wheel/clock/select)."),
        t("locale", "string", `"en-US"`, "Locale for slot labels (select)."),
        t("placeholder", "string", `"Select a time"`, "Empty option label (select variant)."),
        t("size", `"sm" | "md" | "lg"`, `"md"`, "Control size (select/input/wheel)."),
        t("invalid", "boolean", "false", "Sets `aria-invalid` and the error border."),
        t("required", "boolean", "false", "Required field."),
        t("disabled", "boolean", "false", "Disabled field."),
        t("ariaLabel", "string", "—", "Accessible name when there is no visible label."),
        t("class", "string", "—", "Merged via cn(); Tailwind classes welcome."),
        t("id", "string", "—", "Control id (use it in `<Label for>`)."),
    ],
    slots: [],
    faq: [
        {
            q: "How do I read the selected time from the wheel or clock?",
            a: "Listen for `change` (or `input`) on the hidden `<input type=\"hidden\">` inside the component, or read the form value by `name` on submit. The value is always `HH:mm`.",
        },
        {
            q: "Does the wheel support touch?",
            a: "Yes — the drum uses the Pointer Events API which covers mouse, touch, and stylus. `touch-action: none` is set on the drum so the page doesn't scroll while you spin it.",
        },
        {
            q: "How do I submit a timezone?",
            a: "Send the local wall-clock `HH:mm` plus a separate timezone field (or an ISO datetime) — a bare time has no zone, so the server must be told which one it is.",
        },
        {
            q: "Can I combine it with DatePicker?",
            a: "Yes — put a DatePicker and a TimePicker side by side with `name=\"date\"` and `name=\"time\"`, then combine them server-side.",
        },
    ],
    since: "0.1.0",
    new: true,
    related: ["date-picker", "select", "field"],
};
