---
slug: "toast"
name: "Toast"
description: >-
  Notification toasts with actions, positions, and expand.
category: feedback
importPath: "astro-ui/toaster"
exportName: "Toaster / toast"
js: true
since: "0.1.0"
isNew: false
related: ["alert", "spinner", "button"]
features:
  - "6 helpers: toast, success, error, warning, info, loading"
  - "action: { label, onClick } — dismisses after it runs"
  - "6 position corners; per-toast position"
  - "Stacked expand: collapsed stacks, hover to expand, expand option"
  - "description, duration, dismissible options"
  - "toast.update for loading → result flows"
  - "Rich-color card tier + always-on accent icons"
a11y:
  - "Six position stacks use `aria-live=\"polite\"` + `aria-atomic=\"true\"` so notifications announce without interrupting"
  - "`aria-relevant` limits re-announcements to additions"
  - "Role by type (status/alert) with per-type override via the `role` option"
usage: |-
  ---
  import { Toaster } from "astro-ui";
  import "astro-ui/toast.css";
  ---
  <body>
    <Toaster />
  </body>
  <script>
    import { toast } from "astro-ui/toast";
    toast.success("Saved!");
    toast("Event has been created", {
      action: { label: "Undo", onClick: () => console.log("Undo") },
    });
  </script>
demoIds: ["basic", "modes", "description", "action", "position", "promise", "expand"]
props:
  - name: "title"
    type: "string"
    def: "required"
    description: "First argument — the message."
  - name: "options.description"
    type: "string"
    def: "—"
    description: "Secondary line."
  - name: "options.type"
    type: "\"default\" | \"success\" | \"error\" | \"warning\" | \"info\" | \"loading\""
    def: "\"default\""
    description: "Variant (helpers set this)."
  - name: "options.action"
    type: "{ label: string; onClick: (e: MouseEvent) => void }"
    def: "—"
    description: "Action button; toast dismisses after it runs."
  - name: "options.position"
    type: "6 corner union"
    def: "\"bottom-right\""
    description: "Which stack receives it."
  - name: "options.duration"
    type: "number"
    def: "4000"
    description: "Ms until auto-dismiss; Infinity to persist."
  - name: "options.dismissible"
    type: "boolean"
    def: "true"
    description: "Show the × button."
  - name: "options.expand"
    type: "boolean"
    def: "false"
    description: "Pin this toast's stack open."
  - name: "options.richColors"
    type: "boolean"
    def: "false"
    description: "Tint the whole card, not just the icon."
  - name: "options.role"
    type: "string"
    def: "by type"
    description: "ARIA role override."
faq:
  - q: "Where does <Toaster /> go?"
    a: "Once in your base layout — it renders the six fixed stacks. Fire toasts from any script on any page."
  - q: "How do two positions show at once?"
    a: "Each toast routes to the stack matching its position option — stacks are independent, so bottom-right and top-left toasts coexist."
  - q: "Expand behavior?"
    a: "Stacks of 2+ collapse: older cards tuck behind the newest. Hover or focus expands; pass expand: true to pin a stack open."
---

Toaster renders stacked notification toasts. Import the toast function, place &lt;Toaster /&gt; once in your layout, and fire from anywhere: six semantic helpers, action buttons, per-toast positions, durations, expand/collapse stacks, and swipe-free dismiss. The store is a tiny module — no framework island.
