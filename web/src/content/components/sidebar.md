---
slug: "sidebar"
name: "Sidebar"
description: >-
  Side navigation shell with header, grouped links, and a footer.
category: navigation
importPath: "@parsakafi/astro-ui"
exportName: "Sidebar"
js: false
since: "0.1.0"
isNew: true
related: ["navbar", "sheet", "tree"]
features:
  - "Attached (flush) or floating (stand-off) surfaces"
  - "Optional sticky positioning and a scrollable body"
  - "SidebarGroup: static groups or native `<details>` disclosures"
  - "SidebarItem: links or action buttons, icons, badges, nested indent"
  - "`active` maps to `aria-current=\"page\"` on links and buttons, not a class"
  - "Header and footer slots for brand and user menus"
a11y:
  - "Root is a `<nav>` landmark named by `ariaLabel`"
  - "Groups use `role=\"group\"` with `aria-labelledby`, or `<summary>` when collapsible"
  - "Current page is exposed with `aria-current=\"page\"` in both link and button rows"
  - "Disabled items use `aria-disabled` and drop their `href`"
  - "Collapsible groups are native `<details>` — no keyboard handler to get wrong"
usage: |-
  ---
  import { Sidebar, SidebarGroup, SidebarItem } from "@parsakafi/astro-ui";
  ---
  
  <Sidebar ariaLabel="Project">
    <div slot="header">Acme</div>
    <SidebarGroup label="Workspace">
      <SidebarItem href="/overview" active>Overview</SidebarItem>
      <SidebarItem href="/deploys" badge="3">Deploys</SidebarItem>
    </SidebarGroup>
    <div slot="footer">ada@acme.dev</div>
  </Sidebar>
demoIds: ["default", "collapsible", "buttons", "floating"]
props:
  - name: "variant"
    type: "\"attached\" | \"floating\""
    def: "\"attached\""
    description: "Surface treatment."
  - name: "sticky"
    type: "boolean"
    def: "false"
    description: "Stick to the viewport while content scrolls."
  - name: "ariaLabel"
    type: "string"
    def: "\"Sidebar\""
    description: "Accessible name for the navigation landmark."
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
  - name: "header"
    description: "Brand or workspace switcher."
  - name: "(default)"
    description: "SidebarGroup and SidebarItem children."
  - name: "footer"
    description: "User menu or account row."
faq:
  - q: "How do I build the mobile drawer version?"
    a: "Render the same groups inside `Sheet side=\"left\"` and trigger it from a Navbar button. The sidebar itself stays hidden below your breakpoint; `Sheet` already owns the dialog focus trap."
  - q: "Can I collapse it to an icon rail?"
    a: "Not as a prop. Rail/collapsed state is application state: hide the labels yourself (a `data-collapsed` attribute on the nav plus your own CSS), and keep the accessible name on each item so the rail stays usable."
  - q: "What props does SidebarItem take?"
    a: "`href`, `active`, `disabled`, `badge`, `nested`, `class`, `id`, plus an `icon` slot. `active` renders `aria-current=\"page\"` on links and buttons alike."
  - q: "When do I use a button row instead of a link?"
    a: "When navigation happens client-side (a view switcher, a filter, a drawer toggle). Omit `href` and SidebarItem renders `<button type=\"button\">`, so keyboard activation and form-less behavior stay native."
---

Sidebar is a `<nav>` landmark with three regions: a header for the product or workspace switcher, a scrollable body of SidebarGroup and SidebarItem children, and a footer for the user menu. Groups can be static or collapsible through native `<details>`, so a long navigation tree expands and collapses without any JavaScript. Collapsing the whole sidebar to an icon rail is application state, not a visual variant, and is left to the app.
