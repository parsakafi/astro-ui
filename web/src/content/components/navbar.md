---
slug: "navbar"
name: "Navbar"
description: >-
  Top app bar with brand, nav links, actions, and a zero-JS mobile menu.
category: navigation
importPath: "astro-ui"
exportName: "Navbar"
js: false
since: "0.1.0"
isNew: true
related: ["sidebar", "menu", "sheet"]
features:
  - "3 surfaces: bordered, elevated, transparent"
  - "Optional sticky placement"
  - "Brand, actions, and mobile slots"
  - "Native `<details>` mobile menu — zero JS, no focus trap"
  - "Links get hover/current styling automatically (`aria-current`)"
  - "Full-width bar with a centered 80rem content rail"
a11y:
  - "Renders a `<header>` with a `<nav aria-label>` landmark"
  - "Desktop links are plain `<a>` elements; mark the current one with `aria-current=\"page\"`"
  - "Mobile disclosure is a real `<summary>` — keyboard-operable with no script"
  - "Summary carries an `aria-label` (default \"Menu\") because the glyph is decorative"
usage: |-
  ---
  import { Navbar, Button } from "astro-ui";
  ---
  
  <Navbar sticky ariaLabel="Main">
    <a slot="brand" href="/">Acme</a>
    <a href="/docs" aria-current="page">Docs</a>
    <a href="/pricing">Pricing</a>
    <Button slot="actions" size="sm">Sign in</Button>
    <Fragment slot="mobile">
      <a href="/docs">Docs</a>
      <a href="/pricing">Pricing</a>
    </Fragment>
  </Navbar>
demoIds: ["app", "elevated", "transparent"]
props:
  - name: "variant"
    type: "\"bordered\" | \"elevated\" | \"transparent\""
    def: "\"bordered\""
    description: "Surface treatment."
  - name: "sticky"
    type: "boolean"
    def: "false"
    description: "Stick to the top of the scroll container."
  - name: "ariaLabel"
    type: "string"
    def: "\"Main\""
    description: "Accessible name for the navigation landmark."
  - name: "mobileLabel"
    type: "string"
    def: "\"Menu\""
    description: "Accessible name for the mobile disclosure."
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
slots:
  - name: "brand"
    description: "Logo or product name on the leading edge."
  - name: "(default)"
    description: "Desktop navigation links."
  - name: "actions"
    description: "Trailing buttons or status."
  - name: "mobile"
    description: "Links shown inside the mobile disclosure."
faq:
  - q: "Why do I author links twice (default and mobile)?"
    a: "The mobile menu is a native `<details>` that hides the desktop nav below 48rem. Duplicating the links keeps that zero-JS; if you would rather render once, use the Sidebar + Sheet recipe for a drawer instead."
  - q: "How do I add a mega menu?"
    a: "Put a `<details>` inside a nav item, or compose Menu (JS) for hover-intent behavior. Navbar deliberately ships no mega-menu logic — it only owns the bar."
  - q: "How do I mark the current page?"
    a: "Add `aria-current=\"page\"` to that link. Navbar styles it and screen readers announce it; no extra prop needed."
---

Navbar is the top-level app bar: a `<header>` with a brand slot, a `<nav>` landmark for the desktop links, an actions slot for the right edge, and a `<details>` disclosure that replaces the links under 48rem. Because the mobile menu is a native disclosure, it works with zero JavaScript, before hydration, and through back/forward cache restores.
