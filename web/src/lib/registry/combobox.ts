import {type ComponentMeta, t, common} from "./types";

export const combobox: ComponentMeta = {
    slug: "combobox",
    name: "Combobox",
    description: "Select-style trigger that opens a searchable listbox — pick one from many.",
    overview:
        "Combobox reads like a select: the trigger shows the committed value with a chevron, and opening it reveals a panel with a search field on top of a filterable listbox. Type to filter (case-insensitive substring on label/value), move with ↑/↓, commit with Enter or click, dismiss with Escape. The committed value posts with the form via a hidden input under the field's `name`. The selected option carries a check mark, and options can carry a muted hint line. With JS disabled the trigger still renders the committed value; the popup and search need the small scoped script.",
    importPath: "@parsakafi/astro-ui",
    exportName: "Combobox",
    category: "forms",
    js: true,
    usage:
        `---\nimport { Combobox } from "@parsakafi/astro-ui";\n---\n\n<Combobox\n  name="framework"\n  placeholder="Select framework…"\n  items={["Astro", "Next.js", "Nuxt", "SvelteKit"]}\n  clearable\n/>`,
    features: [
        "Select-style trigger (committed value + chevron) with a search field inside the popup",
        "Case-insensitive substring filtering across label and value",
        "Full keyboard support: ↑/↓ navigate, Enter commits, Escape closes, Home/End jump",
        "Check mark on the committed option; autoHighlight to land on the first match",
        "Grouped options with labelled sections, per-option hints",
        "Five sizes and eight border variants matching Input; clearable button",
        "Committed value posts with the form via a hidden input under name",
    ],
    a11y: [
        "Trigger carries role=combobox with aria-expanded and aria-controls pointing at the listbox",
        "In-popup search filters the listbox and manages aria-activedescendant",
        "Options carry role=option and aria-selected state managed by the script",
        "Groups use role=group with accessible labels",
        "Escape always returns focus to the trigger; Tab closes without stealing focus",
    ],
    demos: [
        {
            id: "basic",
            title: "Basic",
            code: `<Combobox\n  name="framework"\n  placeholder="Select framework…"\n  items={["Astro", "Next.js", "Nuxt", "SvelteKit", "Remix"]}\n/>`,
        },
        {
            id: "preselect",
            title: "Preselected + clearable",
            code: `<Combobox\n  name="country"\n  value="jp-tokyo"\n  clearable\n  placeholder="Choose a city…"\n  items={[\n    { value: "jp-tokyo", label: "Tokyo", hint: "Japan" },\n    { value: "fr-paris", label: "Paris", hint: "France" },\n    { value: "us-nyc", label: "New York", hint: "United States" },\n  ]}\n/>`,
        },
        {
            id: "groups",
            title: "Groups",
            code: `<Combobox\n  name="stack"\n  placeholder="Search the stack…"\n  groups={[{ label: "Frontend", items: ["Astro", "Next.js", "Nuxt"] }, { label: "Backend", items: ["Node", "Deno", "Bun"] }]}\n/>`,
        },
        {
            id: "sizes",
            title: "Sizes",
            code: `<Combobox size="xs" items={…} placeholder="xs" />\n<Combobox size="sm" items={…} placeholder="sm" />\n<Combobox size="md" items={…} placeholder="md" />\n<Combobox size="lg" items={…} placeholder="lg" />`,
        },
        {
            id: "states",
            title: "Invalid & disabled",
            code: `<Combobox invalid placeholder="Required field…" items={["One", "Two", "Three"]} />\n<Combobox disabled placeholder="Disabled" items={["One", "Two"]} />`,
        },
    ],
    props: [
        t("items", `(string | { value, label, hint? })[]`, `[]`, `Option list; strings become both value and label.`),
        t("groups", `{ label, items }[]`, "—", "Labelled sections; overrides items when set."),
        t("name", "string", "—", "Form field name; committed value posts via a hidden input."),
        t("value", "string", "—", "Initial committed value (server-side preselect)."),
        t("placeholder", "string", `"Select…"`, "Trigger text when nothing is committed."),
        t("searchPlaceholder", "string", `"Search…"`, "Placeholder for the search field inside the popup."),
        t("emptyMessage", "string", `"No results found."`, "Shown when the filter matches nothing."),
        t("autoHighlight", "boolean", "false", "Highlight the first match when filtering."),
        t("clearable", "boolean", "false", "Render a clear (✕) button on the trigger when a value is committed."),
        t("size", `"xs" | "sm" | "md" | "lg" | "xl"`, `"md"`, "Trigger size (heights mirror Input)."),
        t("variant", `"inherit" | "primary" | … | "info"`, `"inherit"`, "Border color variant (mirrors Input)."),
        t("placement", `"bottom" | "top"`, `"bottom"`, "Which side the panel opens on."),
        t("panelWidth", "string", "trigger width", "Fixed panel width (any CSS inline-size value)."),
        t("disabled / required / invalid", "boolean", "false", "Native states + invalid styling hook."),
        t("labels", `{ clear?, empty? }`, "-", "Translate the built-in strings; explicit props still win."),
        ...common(false),
    ],
    faq: [
        {
            q: "How is this different from Autocomplete?",
            a: "Autocomplete is a typable text input that suggests completions; the value can be typed freely. Combobox is a select-style trigger — the value can only come from the list, but a search field inside the popup makes long option sets findable. Use Combobox when the value must be one of the options.",
        },
        {
            q: "Does it work without JavaScript?",
            a: "The trigger renders server-side with the committed value and posts it with the form via a hidden input. Opening the popup, searching, and keyboard selection need the small scoped script that ships with the component.",
        },
    ],
    since: "0.1.0",
    related: ["autocomplete", "select", "input"],
};
