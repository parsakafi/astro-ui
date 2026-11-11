import {type ComponentMeta, t, common} from "./types";

export const menu: ComponentMeta = {
    slug: "menu",
    name: "Menu",
    description: "Floating action menu with the WAI-ARIA menu-button keyboard model.",
    overview:
        "Menu is the \"⋯\" action list: a trigger button that opens a `role=\"menu\"` panel of actions. MenuItem renders a real `<button>` or `<a>`, so activation, middle-click, and copy-link all behave like normal HTML. The scoped script adds the parts native HTML cannot express — roving focus, arrow/Home/End navigation, typeahead, Escape-to-close with focus return, and outside-click dismissal.",
    importPath: "astro-ui",
    exportName: "Menu",
    category: "overlay",
    js: true,
    usage:
        `---\nimport { Menu, MenuItem, MenuSeparator } from "astro-ui";\n---\n\n<Menu id="row-actions" triggerLabel="Row actions">\n  <MenuItem shortcut="⌘E">Edit</MenuItem>\n  <MenuItem shortcut="⌘D">Duplicate</MenuItem>\n  <MenuSeparator/>\n  <MenuItem variant="error" shortcut="⌫">Delete</MenuItem>\n</Menu>`,
    features: [
        "WAI-ARIA menu-button pattern: aria-haspopup, aria-expanded, role=menu",
        "Arrow keys with wraparound, Home/End, letter typeahead",
        "Escape closes and returns focus to the trigger",
        "Outside pointerdown and Tab close without stealing focus",
        "Four placements: bottom/top × start/end (logical, RTL-safe)",
        "Flips to the other edge when the panel would leave the viewport",
        "MenuGroup for labeled sections, MenuSeparator for dividers",
        "Error variant for irreversible actions",
    ],
    a11y: [
        "Trigger is a real button with `aria-haspopup=\"menu\"` and `aria-expanded`",
        "Panel is `role=\"menu\"` labelled by its trigger",
        "Items are native buttons/links with `role=\"menuitem\"` and `tabindex=\"-1\"`",
        "Disabled items use `aria-disabled` and are skipped by keyboard navigation",
        "Shortcut hints are `aria-hidden` — they mirror platform bindings, not app state",
    ],
    demos: [
        {
            id: "row-actions",
            title: "Row actions",
            code: `<Menu id="dm-menu-row" triggerLabel="Row actions">\n  <MenuItem shortcut="⌘E">Edit</MenuItem>\n  <MenuItem shortcut="⌘D">Duplicate</MenuItem>\n  <MenuSeparator/>\n  <MenuItem variant="error" shortcut="⌫">Delete</MenuItem>\n</Menu>`,
        },
        {
            id: "groups",
            title: "Grouped actions with icons",
            code: `<Menu id="dm-menu-groups" triggerLabel="Project actions">\n  <MenuGroup label="Project">\n    <MenuItem>\n      <span slot="icon" aria-hidden="true">✎</span>\n      Rename project\n    </MenuItem>\n    <MenuItem>\n      <span slot="icon" aria-hidden="true">⧉</span>\n      Duplicate\n    </MenuItem>\n  </MenuGroup>\n  <MenuSeparator/>\n  <MenuGroup label="Danger zone">\n    <MenuItem variant="error" disabled>Transfer ownership</MenuItem>\n    <MenuItem variant="error">Delete project</MenuItem>\n  </MenuGroup>\n</Menu>`,
        },
        {
            id: "links",
            title: "Link items",
            code: `<Menu id="dm-menu-links" triggerLabel="Open in" placement="bottom-start">\n  <MenuItem href="https://astro.build" shortcut="↗">Astro docs</MenuItem>\n  <MenuItem href="https://github.com/parsakafi/astro-ui" shortcut="↗">GitHub source</MenuItem>\n  <MenuSeparator/>\n  <MenuItem href="/docs/components/menu" shortcut="↵">Component page</MenuItem>\n</Menu>`,
        },
        {
            id: "open",
            title: "Panel open on first paint",
            code: `<Menu id="dm-menu-open" triggerLabel="Filters" open placement="bottom-start">\n  <MenuItem>Newest first</MenuItem>\n  <MenuItem>Most reactions</MenuItem>\n  <MenuSeparator/>\n  <MenuItem>Only my drafts</MenuItem>\n</Menu>`,
        },
    ],
    props: [
        t(
            "placement",
            `"bottom-start" | "bottom-end" | "top-start" | "top-end"`,
            `"bottom-end"`,
            "Corner of the trigger the panel aligns to.",
        ),
        t("open", "boolean", "false", "Render the panel open on first paint."),
        t("disabled", "boolean", "false", "Disable the trigger."),
        t("bareTrigger", "boolean", "false", "Drop the trigger's own border/background."),
        t("triggerLabel", "string", `"Actions"`, "Accessible name for the trigger."),
        ...common(true),
    ],
    slots: [
        {name: "trigger", description: "Trigger content; defaults to a ⋯ glyph."},
        {name: "(default)", description: "MenuItem, MenuGroup, and MenuSeparator children."},
    ],
    faq: [
        {
            q: "How does MenuItem behave?",
            a: "It renders `<a>` when `href` is set and `<button type=\"button\">` otherwise, with `role=\"menuitem\"` and `tabindex=\"-1\"`. Props: `variant` (default/error), `href`, `disabled`, `shortcut`, `class`, `id`, plus an `icon` slot.",
        },
        {
            q: "What about MenuGroup and MenuSeparator?",
            a: "MenuGroup takes a `label` and renders `role=\"group\"` labelled by that heading, so screen readers name the section. MenuSeparator is an `<hr role=\"separator\">`, skipped by arrow-key navigation.",
        },
        {
            q: "Do submenus work?",
            a: "Not yet. Nested flyouts need a second positioning layer plus hover-intent timers; until then, split large menus into separate entry points so every action stays one level deep.",
        },
        {
            q: "How do I run an action?",
            a: "Attach a click listener to the MenuItem (or its `id`) in your own script. The menu closes and restores focus before your handler runs, so the action never loses its trigger.",
        },
    ],
    since: "0.1.0",
    new: true,
    related: ["popover", "button", "sheet"],
};
