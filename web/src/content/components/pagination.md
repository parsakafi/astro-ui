---
slug: "pagination"
name: "Pagination"
description: >-
  Zero-JS linked page navigation with truncation ellipsis.
category: navigation
importPath: "@parsakafi/astro-ui"
exportName: "Pagination"
js: false
since: "0.1.0"
isNew: false
related: ["breadcrumb", "button", "tabs"]
features:
  - "Real links — crawlable, zero JS"
  - "Ellipsis truncation with siblingCount control"
  - "prev/next with end-disabling"
  - "compact arrows-only mode"
  - "2 variants, 3 sizes"
a11y:
  - "Wrapped in `<nav aria-label>` as a navigable landmark"
  - "Real `<a>` links — crawlable and keyboard-operable without JS"
  - "`aria-current=\"page\"` announces the current page; page arrows are labeled buttons with `aria-hidden` glyphs"
usage: |-
  ---
  import { Pagination } from "@parsakafi/astro-ui";
  ---
  
  <Pagination
    page={2}
    total={9}
    pageHref={(p) => `/blog?page=${p}`}
  />
demoIds: ["basic", "compact"]
props:
  - name: "page"
    type: "number"
    def: "required"
    description: "1-based current page."
  - name: "total"
    type: "number"
    def: "required"
    description: "Total pages."
  - name: "pageHref"
    type: "(page: number) => string"
    def: "required"
    description: "URL builder per page."
  - name: "siblingCount"
    type: "number"
    def: "1"
    description: "Pages shown each side before truncation."
  - name: "showPrevNext"
    type: "boolean"
    def: "true"
    description: "Prev/next controls."
  - name: "compact"
    type: "boolean"
    def: "false"
    description: "Arrows-only mode."
  - name: "variant"
    type: "\"outline\" | \"ghost\""
    def: "\"outline\""
    description: "Control style."
  - name: "size"
    type: "\"sm\" | \"md\" | \"lg\""
    def: "\"md\""
    description: "Scale."
  - name: "labels"
    type: "{ previous?, next? }"
    def: "-"
    description: "Translate the prev/next accessible names; omitted keys keep their English defaults."
  - name: "class"
    type: "string"
    def: "—"
    description: "Merged via cn(); Tailwind classes welcome."
  - name: "id"
    type: "string"
    def: "—"
    description: "Element id."
faq:
  - q: "Why links instead of buttons?"
    a: "Pagination navigates — real anchors keep it functional without JS, shareable, and indexable. SPA-style paging can layer on top app-side."
---

Pagination renders fully server-rendered page links — every page is a real &lt;a&gt;, so it works without JS and is crawlable. Pages outside the sibling window collapse into ellipsis; prev/next disable at the ends.
