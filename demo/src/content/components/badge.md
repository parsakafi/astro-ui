---
slug: "badge"
name: "Badge"
description: >-
  Status/count label — inline or overlay bubble with icon, dot, avatar, and dismiss.
category: data-display
importPath: "astro-ui"
exportName: "Badge"
js: false
since: "1.0.0"
isNew: false
related: ["button", "avatar", "card"]
features:
  - "11 variants incl. soft, muted, destructive"
  - "5 sizes: xs → 2xl"
  - "Overlay bubble mode with 4 corner positions"
  - "Icon slot, status dot, avatar alignment, dismiss button"
  - "content prop for counts (keeps text announcement)"
  - "Logical-property positioning — mirrors in RTL"
a11y:
  - "Status changes announced via `aria-label` on status badges"
  - "Purely presentational by default — no extra semantics to announce"
usage: |-
  ---
  import { Badge } from "astro-ui";
  ---

  <Badge variant="success">Active</Badge>
  <Badge content="3" position="top-right" variant="destructive" ariaLabel="3 notifications" />
    Inbox
demoIds: ["variants", "sizes", "icon", "dot", "avatar", "flag", "dismiss", "overlay"]
props:
  - name: "variant"
    type: "\"primary\" | \"secondary\" | \"outline\" | \"ghost\" | \"soft\" | \"success\" | \"warning\" | \"error\" | \"info\" | \"muted\" | \"destructive\""
    def: "\"primary\""
    description: "Color scheme."
  - name: "size"
    type: "\"sm\" | \"md\" | \"lg\" | \"xl\" | \"2xl\""
    def: "\"md\""
    description: "Font/padding scale."
  - name: "content"
    type: "string"
    def: "—"
    description: "Count/content when no default slot is provided."
  - name: "position"
    type: "\"top-right\" | \"top-left\" | \"bottom-right\" | \"bottom-left\""
    def: "—"
    description: "Overlay bubble corner (logical start/end — mirrors in RTL)."
  - name: "contentProps"
    type: "Record<string, any>"
    def: "{}"
    description: "Forwarded to the bubble element."
  - name: "dot"
    type: "boolean"
    def: "false"
    description: "Leading status dot tinted by the variant (inline mode)."
  - name: "closable"
    type: "boolean"
    def: "false"
    description: "Renders an accessible dismiss button (inline mode)."
  - name: "closeLabel"
    type: "string"
    def: "\"Dismiss\""
    description: "Accessible label for the dismiss button."
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
  - q: "How do screen readers handle counts?"
    a: "The count is real text inside the badge. Add ariaLabel for context, e.g. ariaLabel=\"3 unread messages\"."
  - q: "Does the dismiss button remove the badge?"
    a: "No — Badge ships zero JS. The button is real, focusable, and labeled via closeLabel; wire the removal with a small script or a form action on your side."
  - q: "How do I put an image or flag inside a badge?"
    a: "Anything in the icon slot is boxed at --aui-badge-icon (default 0.875em) and scales with the badge. Set the variable inline, e.g. style=\"--aui-badge-icon: 1rem\", for a 16px flag."
---

Badge is a zero-JS status and count label. Inline it next to text, or use it as an overlay bubble pinned to another
element's corner with content + position. Inline badges compose: an icon slot (or any image, e.g. a flag) sized via
--aui-badge-icon, a variant-tinted status dot, optically aligned avatars, and a labeled dismiss button. Counts stay real
text so screen readers announce them.
