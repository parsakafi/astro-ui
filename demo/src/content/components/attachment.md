---
slug: "attachment"
name: "Attachment"
description: >-
  File attachment card with media, state hooks, and action slots.
category: data-display
importPath: "astro-ui"
exportName: "Attachment"
js: false
since: "1.0.0"
isNew: false
related: ["empty", "tag", "button-group"]
features:
  - "Five state hooks: idle (dashed), uploading, processing, error, done — via data-state"
  - "Media variants: icon (paperclip) or image thumbnail, or your own media slot"
  - "Three sizes (xs/sm/md) and horizontal/vertical orientation"
  - "Named slots: media, title, description, actions"
  - "Zero JS — all behavior (pick, upload, remove) stays app-side"
a11y:
  - "Purely presentational card — no implicit widget role, so it never traps focus"
  - "State is exposed via data-state attributes; announce changes app-side with aria-live when they matter"
  - "Action buttons keep their own accessible names — icon-only actions must pass aria-label"
  - "Decorative media and the paperclip fallback icon are aria-hidden"
usage: |-
  ---
  import { Attachment, Button } from "astro-ui";
  ---

  <Attachment
    state="done"
    title="quarterly-report.pdf"
    description="PDF · 2.4 MB"
  >
    <Button variant="ghost" size="icon" slot="actions" aria-label="Remove file">✕</Button>
  </Attachment>
demoIds: ["basic", "states", "sizes", "vertical", "group"]
props:
  - name: "state"
    type: "\"idle\" | \"uploading\" | \"processing\" | \"error\" | \"done\""
    def: "\"done\""
    description: "Visual state; renders as data-state for styling hooks (idle = dashed border, error = destructive)."
  - name: "size"
    type: "\"xs\" | \"sm\" | \"md\""
    def: "\"md\""
    description: "Card and media-box scale."
  - name: "orientation"
    type: "\"horizontal\" | \"vertical\""
    def: "\"horizontal\""
    description: "Media above text (vertical) or inline row (horizontal)."
  - name: "media"
    type: "\"icon\" | \"image\""
    def: "\"icon\""
    description: "Media-box content: paperclip icon or image fallback; override with the media slot."
  - name: "progress"
    type: "number"
    def: "—"
    description: "0–100 — renders a determinate 2px progress bar on the card's bottom edge; omit for an indeterminate sweep while uploading/processing."
  - name: "title"
    type: "string"
    def: "—"
    description: "Title line (overridden by the title slot)."
  - name: "description"
    type: "string"
    def: "—"
    description: "Muted second line (overridden by the description slot)."
  - name: "class"
    type: "string"
    def: "—"
    description: "Merged via cn(); Tailwind classes welcome."
  - name: "id"
    type: "string"
    def: "—"
    description: "Element id."
faq:
  - q: "How do I handle uploads?"
    a: "The component is presentational by design. Wrap it with your own file input + submit flow, flip state through idle → uploading → done, and announce progress with an aria-live region app-side."
  - q: "How do I remove an attachment?"
    a: "Put a button in the actions slot with an explicit aria-label — icon-only actions need a name. Wire the click handler or a form submit in your app; the component ships zero JS."
---

Attachment shows an attached file as a composed card: a media box (icon or image thumbnail), a title and description
line, and an actions area. It is purely presentational — upload progress, errors, and removal are wired app-side. Five
`state` values render as `data-state` attributes (idle is dashed; error is destructive) that you can target from your
own CSS, and `orientation` stacks the card vertically (image-first) or in a row.
