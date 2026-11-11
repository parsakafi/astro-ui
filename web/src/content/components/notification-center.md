---
slug: "notification-center"
name: "NotificationCenter"
description: >-
  Bell trigger with an unread badge and a grouped notification panel.
category: feedback
importPath: "@parsakafi/astro-ui"
exportName: "NotificationCenter"
js: true
since: "0.1.0"
isNew: true
related: ["menu", "sheet", "empty"]
features:
  - "Unread badge with 99+ cap, mirrored into the trigger's accessible name"
  - "Grouped sections with day/source headings"
  - "Rows as links or static cards, with media, description, and timestamp"
  - "Empty-state slot for the zero-notification case"
  - "Header action slot (mark all read, settings)"
  - "Escape, outside click, and focus return handled"
a11y:
  - "Trigger is a button with `aria-haspopup=\"dialog\"` and `aria-expanded`"
  - "Panel is a named `role=\"dialog\"`, focused on open"
  - "Groups are `<section>` + `<h3>` + `<ul>`, so counts are announced"
  - "Unread rows announce \"Unread\" in text, not colour alone"
  - "Badge number is `aria-hidden` to avoid double announcement"
usage: |-
  ---
  import {
    NotificationCenter,
    NotificationGroup,
    NotificationItem,
  } from "@parsakafi/astro-ui";
  ---
  
  <NotificationCenter count={2} title="Notifications">
    <NotificationGroup label="Today">
      <NotificationItem unread title="Deploy finished" time="2m ago" href="/deploys/412">
        Production build 412 is live.
      </NotificationItem>
      <NotificationItem title="Ada left a comment" time="1h ago">
        On the sidebar PR.
      </NotificationItem>
    </NotificationGroup>
  </NotificationCenter>
demoIds: ["inbox", "actions", "empty"]
props:
  - name: "count"
    type: "number"
    def: "0"
    description: "Unread count; 0 hides the badge."
  - name: "title"
    type: "string"
    def: "\"Notifications\""
    description: "Panel heading."
  - name: "ariaLabel"
    type: "string"
    def: "\"Notifications\""
    description: "Accessible name for the trigger."
  - name: "placement"
    type: "\"bottom-end\" | \"bottom-start\""
    def: "\"bottom-end\""
    description: "Panel alignment."
  - name: "open"
    type: "boolean"
    def: "false"
    description: "Render the panel open on first paint."
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
  - name: "trigger"
    description: "Custom bell content (defaults to 🔔)."
  - name: "(default)"
    description: "NotificationGroup / NotificationItem children."
  - name: "actions"
    description: "Header actions (Menu, button)."
  - name: "footer"
    description: "Footer link or action."
faq:
  - q: "What props does NotificationItem take?"
    a: "`title`, `time`, `datetime`, `unread`, `href`, `class`, `id`, plus `media` and `description` slots. With `href` the whole row becomes one link."
  - q: "How do I mark notifications read?"
    a: "The component is presentational: render `unread` from your own state and update it when the user acts. Because `count` is a prop, re-render (or update the trigger label) when the unread total changes."
  - q: "Can it open as a side panel instead?"
    a: "Yes — compose the same groups inside `Sheet side=\"right\"` and use NotificationCenter only for the bell and count. The inner markup is the same."
---

NotificationCenter owns the bell, the unread count, and the panel that opens from it. Groups keep rows scannable by day or source, NotificationItem renders the row (optionally as a link), and the badge stays decorative because the count is already part of the trigger's accessible name. It is a disclosure rather than a modal: Escape and outside clicks close it, and focus returns to the bell.
