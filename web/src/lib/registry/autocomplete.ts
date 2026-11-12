import {type ComponentMeta, t, common} from "./types";

export const autocomplete: ComponentMeta = {
    slug: "autocomplete",
    name: "Autocomplete",
    description: "Input that suggests options as you type — ARIA combobox pattern.",
    overview:
        "Autocomplete pairs a text input with a filtered suggestion list using the WAI-ARIA combobox + listbox pattern. Type to filter (case-insensitive substring on label/value), move with ↑/↓, commit with Enter, dismiss with Escape, jump with Home/End. Options render server-side; a small scoped script handles filtering and focus. The committed value posts with the form under the field's `name` — a native input underneath, so forms and autofill behave.",
    importPath: "@parsakafi/astro-ui",
    exportName: "Autocomplete",
    category: "forms",
    js: true,
    usage:
        `---\nimport { Autocomplete } from "@parsakafi/astro-ui";\n---\n\n<Autocomplete\n  name="framework"\n  placeholder="Pick a framework…"\n  items={["Astro", "Next.js", "Nuxt", "SvelteKit"]}\n  clearable\n/>`,
    features: [
        "Full keyboard support: ↑/↓ navigate, Enter commits, Escape closes, Home/End jump",
        "Case-insensitive substring filtering; filter={false} for async/external results",
        "Grouped options with labelled sections",
        "autoHighlight, clearable button, openOnFocus, and top/bottom placement",
        "Five sizes and eight border variants matching Input",
        "Committed value posts with the form under name — native input underneath",
    ],
    a11y: [
        "Implements the WAI-ARIA combobox + listbox pattern: role=combobox with aria-expanded, aria-controls, aria-autocomplete=list, aria-activedescendant",
        "Options carry role=option and aria-selected state managed by the script",
        "Groups use role=group with accessible labels",
        "Focus stays in the input while navigating — no focus jumps into the list",
        "Empty state is announced via the listbox content itself",
    ],
    demos: [
        {
            id: "basic",
            title: "Basic",
            code: `<Autocomplete
  name="framework"
  placeholder="Pick a framework…"
  items={["Astro", "Next.js", "Nuxt", "SvelteKit", "Remix"]}
/>`,
        },
        {
            id: "hints",
            title: "Options with hints",
            code: `<Autocomplete
  name="city"
  items={[
{ value: "jp-tokyo", label: "Tokyo", hint: "Japan" },
{ value: "fr-paris", label: "Paris", hint: "France" },
{ value: "us-nyc", label: "New York", hint: "United States" },
  ]}
/>`,
        },
        {
            id: "groups",
            title: "Groups",
            code: `<Autocomplete
  name="stack"
  groups={[{ label: "Frontend", items: ["Astro", "Next.js"] }, { label: "Backend", items: ["Node", "Deno"] }]}
/>`,
        },
        {
            id: "sizes",
            title: "Sizes",
            code: `<Autocomplete size="xs" items={…} />
<Autocomplete size="sm" items={…} />
<Autocomplete size="md" items={…} />
<Autocomplete size="lg" items={…} />`,
        },
        {
            id: "clearable",
            title: "Clearable + open on focus",
            code: `<Autocomplete name="search" clearable openOnFocus items={["One", "Two", "Three"]} />`,
        },
    ],
    props: [
        t("items", `(string | { value, label, hint? })[]`, `[]`, `Suggestion list; strings become both value and label.`),
        t("groups", `{ label, items }[]`, "—", "Labelled sections; overrides items when set."),
        t("name", "string", "—", "Form field name; committed value posts with the form."),
        t("value", "string", "—", "Initial committed value (server-side preselect)."),
        t("placeholder", "string", `"Search…"`, "Input placeholder text."),
        t("emptyMessage", "string", `"No results found."`, "Shown when the filter matches nothing."),
        t("filter", "boolean", "true", "Client-side substring filter; disable for async filtering."),
        t("autoHighlight", "boolean", "false", "Highlight the first match when the list opens."),
        t("clearable", "boolean", "false", "Render a clear (✕) button when the field has a value."),
        t("openOnFocus", "boolean", "false", "Open the list on focus (search-style)."),
        t("size", `"xs" | "sm" | "md" | "lg" | "xl"`, `"md"`, "Control size (heights mirror Input)."),
        t("variant", `"inherit" | "primary" | … | "info"`, `"inherit"`, "Border color variant (mirrors Input)."),
        t("placement", `"bottom" | "top"`, `"bottom"`, "Which side the panel opens on."),
        t("disabled / required / invalid", "boolean", "false", "Native states + invalid styling hook."),
        t("labels", `{ clear?, empty? }`, "-", "Translate the built-in strings; explicit props still win."),
        ...common(false),
    ],
    faq: [
        {
            q: "How is this different from Select?",
            a: "Select is the native &lt;select&gt; — zero JS, platform keyboard handling, always fully accessible. Autocomplete adds type-to-filter and free typing at the cost of a small script. Prefer Select when the option set is small and fixed.",
        },
        {
            q: "Can I filter against an API?",
            a: "Yes — set filter={false} so the script doesn't filter client-side, then listen for input events and render your own options into the listbox panel (or re-render the whole component server-side per request).",
        },
    ],
    since: "0.1.0",
    related: ["select", "input", "field"],
};
