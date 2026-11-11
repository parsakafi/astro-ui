---
slug: "breadcrumb"
name: "Breadcrumb"
description: >-
  Semantic breadcrumb trail — CSS separators, icons, ellipsis, pill, composed items.
category: navigation
importPath: "astro-ui"
exportName: "Breadcrumb"
js: false
since: "0.1.0"
isNew: false
related: ["pagination", "tabs", "link"]
features:
  - "Semantic nav structure, flat span items — no list markup"
  - "aria-current=\"page\" on the current item"
  - "Separators drawn in CSS: slash, chevron, double-chevron, dot, custom"
  - "icon + ellipsis item fields for rich trails"
  - "Composed slot mode for badges, avatars, dropdowns, buttons"
  - "Pill style for frames, headers, and toolbars"
  - "3 sizes; hidden items for responsive trimming"
a11y:
  - "Wrapped in `<nav>` with an `aria-label` so it's a navigable landmark"
  - "`aria-current=\"page\"` on the last item announces the current location"
  - "Separators are CSS pseudo-elements — never read by screen readers"
usage: |-
  ---
  import { Breadcrumb } from "astro-ui";
  ---
  
  <Breadcrumb
    ariaLabel="Breadcrumb"
    items={[
      { href: "/", label: "Home" },
      { href: "/components/", label: "Components" },
      { label: "Button" },
    ]}
  />
demoIds: ["basic", "chevron", "dropdown", "slash", "ellipsis", "icons", "chevrons", "pill-frame", "home-icon", "badge-count", "buttons", "card"]
props:
  - name: "items"
    type: "BreadcrumbItem[]"
    def: "[]"
    description: "Trail: { href?, label, hidden?, icon?, ellipsis? }. Last item without href = current page. Omit to author composed items in the default slot."
  - name: "ariaLabel"
    type: "string"
    def: "\"Breadcrumb\""
    description: "Name for the nav landmark."
  - name: "separator"
    type: "\"slash\" | \"chevron\" | \"chevrons\" | \"dot\" | \"custom\""
    def: "\"slash\""
    description: "Separator glyph (CSS-drawn); custom reads --aui-breadcrumb-separator."
  - name: "pill"
    type: "boolean"
    def: "false"
    description: "Renders the trail in a muted pill."
  - name: "size"
    type: "\"sm\" | \"md\" | \"lg\""
    def: "\"md\""
    description: "Text scale."
  - name: "class"
    type: "string"
    def: "—"
    description: "Merged via cn(); Tailwind classes welcome."
  - name: "id"
    type: "string"
    def: "—"
    description: "Element id."
faq:
  - q: "Why no separator markup?"
    a: "Separators are pseudo-elements, so screen readers announce only the real items — no repeated 'slash' noise."
  - q: "How do I add badges or avatars to items?"
    a: "Omit items and author the trail: <Breadcrumb><span class=\"aui-breadcrumb__item\">…</span></Breadcrumb>. Compose any astro-ui component inside the item spans; the same separator and typography styles apply."
  - q: "How do I collapse a long path?"
    a: "Set ellipsis: true on a middle item to render a presentational …, or compose a Popover trigger inside an item so users can open the hidden segments from the ellipsis."
---

Breadcrumb renders a &lt;nav aria-label&gt; of links — a flat flex container, no list markup. The current page is a non-link span with aria-current="page"; separators are drawn in CSS pseudo-elements. Pass `items` for data-driven trails (with optional icon and ellipsis fields) or omit items and author composed &lt;span&gt; children for badges, avatars, dropdown triggers, and buttons.
