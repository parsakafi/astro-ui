---
slug: "tree"
name: "Tree"
description: >-
  Keyboard-navigable file/folder hierarchy with guide lines.
category: navigation
importPath: "astro-ui"
exportName: "Tree"
js: true
since: "0.1.0"
isNew: true
related: ["menu", "sidebar", "breadcrumb"]
features:
  - "Data-driven recursion via `Astro.self` — any depth, correct `aria-level`"
  - "WAI-ARIA tree view keyboard model: arrows, Home/End, typeahead"
  - "Single tab stop with roving focus; pointer clicks move it too"
  - "Real links for leaves (`href`), so middle-click and copy-link work"
  - "Disabled nodes are skipped by keyboard navigation"
  - "Guide lines, twisties, and optional per-node icons"
a11y:
  - "`role=\"tree\"` labelled by `ariaLabel` (required)"
  - "`role=\"treeitem\"` with `aria-level` and `aria-expanded` on branches"
  - "Nested children render in `role=\"group\"`, hidden when collapsed"
  - "Derived keyboard model: → expand/enter, ← collapse/exit, ↑ ↓ move, Home/End, typeahead"
  - "Disabled nodes expose `aria-disabled` and never take focus"
  - "`selected` marks the current item with `aria-selected=\"true\"`"
usage: |-
  ---
  import { Tree } from "astro-ui";
  ---
  
  <Tree
    ariaLabel="Project files"
    items={[
      {
        id: "src",
        label: "src",
        icon: "▸",
        expanded: true,
        children: [
          { id: "app", label: "App.astro" },
          { id: "lib", label: "lib", children: [{ id: "cn", label: "cn.ts" }] },
        ],
      },
      { id: "pkg", label: "package.json" },
    ]}
  />
demoIds: ["files", "deep", "disabled"]
props:
  - name: "items"
    type: "TreeNode[]"
    def: "—"
    description: "The hierarchy; see the TreeNode shape below."
  - name: "ariaLabel"
    type: "string"
    def: "—"
    description: "Accessible name for the tree (required)."
  - name: "selected"
    type: "string"
    def: "—"
    description: "Node id exposed as `aria-selected=\"true\"`."
  - name: "class"
    type: "string"
    def: "—"
    description: "Merged via cn(); Tailwind classes welcome."
  - name: "id"
    type: "string"
    def: "—"
    description: "Element id."
  - name: "ariaLabel"
    type: "string"
    def: "—"
    description: "Accessible name."
faq:
  - q: "What does a TreeNode look like?"
    a: "`{ id: string; label: string; icon?: string; href?: string; children?: TreeNode[]; expanded?: boolean; disabled?: boolean }`. The presence of the `children` key marks a branch — an empty array renders a branch that expands to nothing."
  - q: "How do I select nodes?"
    a: "Tree is a navigation/disclosure widget: it toggles branches and follows links. For selection, listen for clicks on `[data-tree-node]` and render your own selected styling with `aria-selected`."
  - q: "Why is the tree focusable as a whole?"
    a: "It uses roving tabindex: exactly one item has `tabindex=\"0\"` and arrow keys move that tab stop. Tabbing in lands on the last-focused node, then Tab leaves the tree — one stop, no keyboard trap."
---

Tree renders a nested `role="tree"` from a plain `items` array — no markup authoring, no recursion in your page. Branches toggle `aria-expanded`, leaves with an `href` are real links, and one tab stop plus arrow keys give the whole hierarchy a single keyboard entry point. Because the structure is semantic, screen readers announce level and position for free.
