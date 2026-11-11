import {type ComponentMeta, t, common} from "./types";

export const tree: ComponentMeta = {
    slug: "tree",
    name: "Tree",
    description: "Keyboard-navigable file/folder hierarchy with guide lines.",
    overview:
        "Tree renders a nested `role=\"tree\"` from a plain `items` array — no markup authoring, no recursion in your page. Branches toggle `aria-expanded`, leaves with an `href` are real links, and one tab stop plus arrow keys give the whole hierarchy a single keyboard entry point. Because the structure is semantic, screen readers announce level and position for free.",
    importPath: "@parsakafi/astro-ui",
    exportName: "Tree",
    category: "navigation",
    js: true,
    usage:
        `---\nimport { Tree } from "@parsakafi/astro-ui";\n---\n\n<Tree\n  ariaLabel="Project files"\n  items={[\n    {\n      id: "src",\n      label: "src",\n      icon: "▸",\n      expanded: true,\n      children: [\n        { id: "app", label: "App.astro" },\n        { id: "lib", label: "lib", children: [{ id: "cn", label: "cn.ts" }] },\n      ],\n    },\n    { id: "pkg", label: "package.json" },\n  ]}\n/>`,
    features: [
        "Data-driven recursion via `Astro.self` — any depth, correct `aria-level`",
        "WAI-ARIA tree view keyboard model: arrows, Home/End, typeahead",
        "Single tab stop with roving focus; pointer clicks move it too",
        "Real links for leaves (`href`), so middle-click and copy-link work",
        "Disabled nodes are skipped by keyboard navigation",
        "Guide lines, twisties, and optional per-node icons",
    ],
    a11y: [
        "`role=\"tree\"` labelled by `ariaLabel` (required)",
        "`role=\"treeitem\"` with `aria-level` and `aria-expanded` on branches",
        "Nested children render in `role=\"group\"`, hidden when collapsed",
        "Derived keyboard model: → expand/enter, ← collapse/exit, ↑ ↓ move, Home/End, typeahead",
        "Disabled nodes expose `aria-disabled` and never take focus",
        "`selected` marks the current item with `aria-selected=\"true\"`",
    ],
    demos: [
        {
            id: "files",
            title: "Project files",
            code: `<Tree\n  ariaLabel="Project files"\n  items={[\n    {\n      id: "src",\n      label: "src",\n      icon: "▸",\n      expanded: true,\n      children: [\n        { id: "app", label: "App.astro" },\n        { id: "lib", label: "lib", children: [{ id: "cn", label: "cn.ts" }] },\n      ],\n    },\n    { id: "pkg", label: "package.json" },\n  ]}\n/>`,
        },
        {
            id: "deep",
            title: "Deep hierarchy with links",
            code: `<Tree\n  ariaLabel="Documentation"\n  selected="button"\n  items={[\n    {\n      id: "components",\n      label: "Components",\n      expanded: true,\n      children: [\n        {\n          id: "general",\n          label: "General",\n          expanded: true,\n          children: [\n            { id: "button", label: "Button", href: "/components/button" },\n            { id: "kbd", label: "Kbd", href: "/components/kbd" },\n          ],\n        },\n        {\n          id: "overlay",\n          label: "Overlay",\n          expanded: true,\n          children: [\n            { id: "menu", label: "Menu", href: "/components/menu" },\n            { id: "sheet", label: "Sheet", href: "/components/sheet" },\n          ],\n        },\n      ],\n    },\n  ]}\n/>`,
        },
        {
            id: "disabled",
            title: "Disabled nodes",
            code: `<Tree\n  ariaLabel="Branches"\n  items={[\n    { id: "main", label: "main", expanded: true, children: [{ id: "a", label: "feat/tree" }] },\n    { id: "locked", label: "release/1.0 (locked)", disabled: true },\n  ]}\n/>`,
        },
    ],
    props: [
        t("items", "TreeNode[]", "—", "The hierarchy; see the TreeNode shape below."),
        t("ariaLabel", "string", "—", "Accessible name for the tree (required)."),
        t("selected", "string", "—", "Node id exposed as `aria-selected=\"true\"`."),
        ...common(true),
    ],
    faq: [
        {
            q: "What does a TreeNode look like?",
            a: "`{ id: string; label: string; icon?: string; href?: string; children?: TreeNode[]; expanded?: boolean; disabled?: boolean }`. The presence of the `children` key marks a branch — an empty array renders a branch that expands to nothing.",
        },
        {
            q: "How do I select nodes?",
            a: "Tree is a navigation/disclosure widget: it toggles branches and follows links. For selection, listen for clicks on `[data-tree-node]` and render your own selected styling with `aria-selected`.",
        },
        {
            q: "Why is the tree focusable as a whole?",
            a: "It uses roving tabindex: exactly one item has `tabindex=\"0\"` and arrow keys move that tab stop. Tabbing in lands on the last-focused node, then Tab leaves the tree — one stop, no keyboard trap.",
        },
    ],
    since: "0.1.0",
    new: true,
    related: ["menu", "sidebar", "breadcrumb"],
};
