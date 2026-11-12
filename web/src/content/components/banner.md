---
slug: "banner"
name: "Banner"
description: >-
  Full-width announcement strip with icon, actions, and dismissal hook.
category: feedback
importPath: "@parsakafi/astro-ui"
exportName: "Banner"
js: false
since: "0.1.0"
isNew: true
related: ["alert", "toast", "timeline"]
features:
  - "6 variants: primary, info, success, warning, error, neutral"
  - "Slots for icon, title, message, and an action row"
  - "Optional sticky placement for top-of-page announcements"
  - "Responsive: actions wrap under the message on narrow screens"
  - "Closable affordance with a `data-banner-close` hook — zero JS"
a11y:
  - "`role=\"region\"` with a default `aria-label` of \"Announcement\""
  - "`role=\"alert\"` / `role=\"status\"` available for live announcements"
  - "The icon slot is `aria-hidden` — decorative only"
  - "Close button carries a real `aria-label` (configurable via `closeLabel`)"
  - "Focus ring uses currentColor so it stays visible on every variant"
usage: |-
  ---
  import { Banner, Button } from "@parsakafi/astro-ui";
  ---
  
  <Banner variant="info" closable>
    <span slot="icon" aria-hidden="true">✦</span>
    <strong>v2.5 is out.</strong> Timeline and Banner have landed.
    <Button slot="actions" size="sm" variant="secondary">Read the notes</Button>
  </Banner>
demoIds: ["release", "dismissible", "sticky", "neutral"]
props:
  - name: "variant"
    type: "\"primary\" | \"info\" | \"success\" | \"warning\" | \"error\" | \"neutral\""
    def: "\"primary\""
    description: "Color treatment of the strip."
  - name: "sticky"
    type: "boolean"
    def: "false"
    description: "Stick to the top of the scroll container."
  - name: "closable"
    type: "boolean"
    def: "false"
    description: "Render a close button with a data hook."
  - name: "closeLabel"
    type: "string"
    def: "\"Dismiss announcement\""
    description: "Accessible name for the close button."
  - name: "role"
    type: "\"region\" | \"status\" | \"alert\" | \"none\""
    def: "\"region\""
    description: "Landmark role; \"none\" drops it."
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
  - name: "icon"
    description: "Leading glyph (rendered aria-hidden)."
  - name: "title"
    description: "Optional bold first line."
  - name: "(default)"
    description: "The message itself."
  - name: "actions"
    description: "Buttons or links on the trailing edge."
faq:
  - q: "How do I dismiss a banner?"
    a: "Listen for a click on `[data-banner-close]` and hide the element yourself — that keeps persistence (cookie, localStorage, server flag) in your hands. The Dismissible demo does exactly this with one delegated listener."
  - q: "Banner or Alert?"
    a: "Alert is a boxed message inside content. Banner spans its container and usually sits above the page, at the top of the layout."
---

Banner is the page-level sibling of Alert: a strip that spans its container instead of sitting inside a card. Use it for release notes, trial notices, or maintenance windows that belong above the content. It renders as a named `region` landmark by default, so the announcement is reachable from a screen reader's landmark list; pass `role="none"` when several banners stack on one page.
