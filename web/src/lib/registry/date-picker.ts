import {type ComponentMeta, t, common} from "./types";

export const datePicker: ComponentMeta = {
    slug: "date-picker",
    name: "DatePicker",
    description: "Native date input with a Gregorian or Persian calendar panel.",
    overview:
        "DatePicker wraps a real `<input type=\"date\">`, so the field submits with the form, validates natively, and opens the platform picker on mobile with no JavaScript at all. The calendar panel is the enhancement: a month grid whose month names, weekday order, and digits come from `Intl.DateTimeFormat`, which is what makes a Persian (Jalali) calendar possible without shipping a calendar library.",
    importPath: "@parsakafi/astro-ui",
    exportName: "DatePicker",
    category: "forms",
    js: true,
    usage:
        `---\nimport { DatePicker, Label } from "@parsakafi/astro-ui";\n---\n\n<Label for="start-input">Start date</Label>\n<DatePicker\n  id="start"\n  name="start"\n  calendar="persian"\n  locale="fa-IR"\n  min="2026-01-01"\n/>`,
    features: [
        "Native `<input type=\"date\">` baseline — works with zero JS",
        "Gregorian and Persian (Jalali) month grids from `Intl`",
        "Locale-driven month, weekday, and digit rendering",
        "Full keyboard model: arrows, Home/End, PageUp/PageDown, Escape",
        "RTL-aware: arrow keys follow the page's writing direction",
        "`min` / `max` bounds disable out-of-range days",
        "Today and Clear actions in the panel footer",
        "Picking a day dispatches native `input` + `change` events",
    ],
    a11y: [
        "The input is the labelled control — give it a `<Label for>` or `ariaLabel`",
        "Panel is a `role=\"dialog\"` named \"Choose date\"",
        "Grid uses `role=\"grid\"` / `role=\"gridcell\"` with one tab stop",
        "Selection is exposed with `aria-selected`; today is styled, not announced as the selection",
        "Escape closes the panel and returns focus to the trigger",
    ],
    demos: [
        {
            id: "gregorian",
            title: "Gregorian date",
            code: `<Label for="dp-start-input">Start date</Label>\n<DatePicker id="dp-start" name="start"/>\n\n<script>\n  document\n    .querySelector("#dp-start-input")\n    ?.addEventListener("change", (event) => {\n      console.log(event.target.value); // "2026-10-20"\n    });\n</script>`,
        },
        {
            id: "persian",
            title: "Persian (Jalali) calendar",
            code: `<Label for="dp-jalali-input">تاریخ شروع</Label>\n<DatePicker\n  id="dp-jalali"\n  name="start"\n  calendar="persian"\n  locale="fa-IR"\n  value="2026-10-20"\n/>`,
        },
        {
            id: "range",
            title: "Bounded to a booking window",
            code: `<Label for="dp-bounded-input">Visit date</Label>\n<DatePicker\n  id="dp-bounded"\n  name="visit"\n  min="2026-10-20"\n  max="2026-11-20"\n/>`,
        },
    ],
    props: [
        t("name", "string", "—", "Form field name."),
        t("value", "string", "—", "Initial ISO date (`YYYY-MM-DD`)."),
        t("min", "string", "—", "Earliest selectable ISO date."),
        t("max", "string", "—", "Latest selectable ISO date."),
        t("calendar", `"gregory" | "persian"`, `"gregory"`, "Calendar system for the panel."),
        t("locale", "string", '"en-US" | "fa-IR"', "BCP-47 locale for names and digits."),
        t("firstDayOfWeek", "number", `0` + " | 6", "0 = Sunday … 6 = Saturday."),
        t("ariaLabel", "string", "—", "Accessible name when there is no visible label."),
        t("toggleLabel", "string", `"Open calendar"`, "Accessible name for the calendar button."),
        t("panelLabel", "string", `"Choose date"`, "Accessible name for the panel."),
        t("labels", `{ toggle?, panel?, previousMonth?, nextMonth?, today?, clear? }`, "-", "Translate the calendar's built-in control names; explicit *Label props still win."),
        t("required", "boolean", "false", "Required field."),
        t("disabled", "boolean", "false", "Disabled field."),
        t("class", "string", "—", "Merged via cn(); Tailwind classes welcome."),
        t("id", "string", "—", "Wrapper id; the input becomes `<id>-input`."),
    ],
    slots: [],
    faq: [
        {
            q: "How do I read the chosen date?",
            a: "Listen for `change` (or `input`) on `#<id>-input`, or read the form value by `name`. The panel writes the ISO date into that input and dispatches native events, so the component never invents its own event system.",
        },
        {
            q: "Is the Jalali calendar accurate?",
            a: "The grid is derived from `Intl.DateTimeFormat` with `calendar: \"persian\"`, so month boundaries, lengths, and leap years follow the platform's ICU data — the same data your users' browsers use for `toLocaleDateString`.",
        },
        {
            q: "Does it work without JavaScript?",
            a: "Yes. The native date input is the control; the panel is additive. If the script never runs, users still pick a date with the platform picker.",
        },
        {
            q: "Are range pickers supported?",
            a: "Not yet — there is no two-input range state machine. For now, pair two DatePickers (`min` on the second bound to the first value) and validate on submit.",
        },
    ],
    since: "0.1.0",
    new: true,
    related: ["input", "field", "time-picker"],
};
