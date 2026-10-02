import {type ComponentMeta, t, common} from "./types";

export const command: ComponentMeta = {
    slug: "command",
    name: "Command",
    description: "Inline searchable command palette — grouped actions, keyboard-first.",
    overview:
        "Command renders a framed palette with a search input on top of a scrollable, grouped action list. Type to filter (case-insensitive substring on labels and keywords), move with ↑/↓, run with Enter or click. Items are declarative: pass ordered `groups` of `{ value, label, hint?, shortcut?, disabled?, keywords? }` — shortcuts render Kbd-style on the right, hints as a muted second line. Selection emits a bubbling `command:select` event with the item's value; run your action from a listener. loop wraps highlighting, vimBindings adds j/k and ctrl+n/ctrl+p, and shouldFilter={false} hands filtering to you for async sources.",
    importPath: "astro-ui",
    exportName: "Command",
    category: "general",
    js: true,
    usage:
        `---\nimport { Command } from "astro-ui";\n---\n\n<Command\n  label="Commands"\n  groups={[\n    { label: "Suggestions", items: [\n      { value: "calendar", label: "Calendar" },\n      { value: "calculator", label: "Calculator", disabled: true },\n    ]},\n    { label: "Settings", items: [\n      { value: "profile", label: "Profile", shortcut: "\u2318P" },\n    ]},\n  ]}\n/>\n\n<script>\n  document.addEventListener("command:select", (e) => {\n    console.log(e.detail.value);\n  });\n<\/script>`,
    features: [
        "Grouped, ordered sections with uppercase group headings",
        "Case-insensitive filter across labels + keywords; per-item disabled state",
        "Full keyboard support: ↑/↓ navigate, Enter runs, Home/End jump; optional loop wrap",
        "Right-aligned Kbd-style shortcuts (⌘P) and muted hint lines per item",
        "vimBindings: j/k + ctrl+n/ctrl+p navigation",
        "Bubbling command:select and command:search-change events",
        "shouldFilter={false} for async/external filtering",
    ],
    a11y: [
        "Root is a labelled group; the search input carries role=combobox with aria-controls and aria-autocomplete=list",
        "Listbox carries role=listbox; items carry role=option and aria-selected managed by the script",
        "Disabled items are aria-disabled and skipped by both navigation and Enter",
        "aria-activedescendant keeps focus in the search field while navigating",
        "Empty state lives inside the listbox so it is announced with context",
    ],
    demos: [
        {
            id: "basic",
            title: "Basic",
            code: `<Command\n  label="Commands"\n  style="max-inline-size:20rem"\n  groups={[\n    { label: "Suggestions", items: [\n      { value: "calendar", label: "Calendar" },\n      { value: "emoji", label: "Search Emoji" },\n      { value: "calculator", label: "Calculator", disabled: true },\n    ]},\n    { label: "Settings", items: [\n      { value: "profile", label: "Profile", shortcut: "\u2318P" },\n      { value: "billing", label: "Billing", shortcut: "\u2318B" },\n      { value: "settings", label: "Settings", shortcut: "\u2318S" },\n    ]},\n  ]}\n/>\n\n<script>\n  document.addEventListener("command:select", (e) => {\n    console.log("run:", e.detail.value);\n  });\n<\/script>`,
        },
        {
            id: "hints",
            title: "Hints & keywords",
            code: `<Command\n  label="Actions"\n  style="max-inline-size:22rem"\n  groups={[\n    { label: "Repository", items: [\n      { value: "push", label: "Push to origin", hint: "main \u2192 origin/main", keywords: ["git", "upload"] },\n      { value: "pr", label: "Open pull request", hint: "3 files changed", keywords: ["git", "review"] },\n      { value: "stash", label: "Stash changes", keywords: ["git", "save"] },\n    ]},\n  ]}\n/>`,
        },
        {
            id: "loop",
            title: "Loop + vim bindings",
            code: `<Command\n  label="Commands"\n  loop\n  vimBindings\n  autoHighlight\n  style="max-inline-size:20rem"\n  groups={[{ label: "Actions", items: [\n    { value: "one", label: "First action" },\n    { value: "two", label: "Second action" },\n    { value: "three", label: "Third action" },\n  ]}]}\n/>\n<!-- loop wraps the highlight; vimBindings adds j/k + ctrl+n/ctrl+p;\n     autoHighlight lands on the first item immediately -->`,
        },
    ],
    props: [
        t("groups", `{ label, items }[]`, "required", "Ordered sections; items are { value, label, hint?, shortcut?, disabled?, keywords? }."),
        t("label", "string", `"Commands"`, "Accessible name for the palette."),
        t("defaultSearch", "string", `""`, "Initial text in the search field."),
        t("placeholder", "string", `"Type a command or search…"`, "Search placeholder text."),
        t("emptyMessage", "string", `"No results found."`, "Shown when nothing matches."),
        t("shouldFilter", "boolean", "true", "Client-side filter; disable for async filtering."),
        t("loop", "boolean", "false", "Highlight wraps from end back to start."),
        t("vimBindings", "boolean", "false", "j/k and ctrl+n/ctrl+p move the highlight."),
        t("autoHighlight", "boolean", "false", "Highlight the first item immediately."),
        ...common(false),
    ],
    faq: [
        {
            q: "How is this different from Combobox?",
            a: "Combobox commits a form value — it has a hidden input and posts with the form. Command runs actions: items are buttons that emit command:select, and nothing is submitted. Use Combobox to pick one of many values, Command to trigger one of many actions.",
        },
        {
            q: "Can it open in a dialog?",
            a: "Yes — place Command inside Dialog content and open the dialog from a keyboard shortcut or button. The palette is inline by design, so composition stays explicit.",
        },
    ],
    since: "1.0.0",
    related: ["combobox", "autocomplete", "kbd"],
};
