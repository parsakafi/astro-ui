---
slug: "hover-card"
name: "HoverCard"
description: >-
  Rich preview card on hover and keyboard focus — CSS-only.
category: overlay
importPath: "astro-ui"
exportName: "HoverCard"
js: false
since: "1.0.0"
isNew: false
related: ["popover", "tooltip", "card"]
features:
  - "Zero JS — pure CSS :hover / :focus-within with an open delay"
  - "Interactive content: links inside the card work"
  - "top / bottom placement; symmetric show/hide delay (no flicker)"
  - "role=\"note\" + aria-label announced on focus"
a11y:
  - "Hover content is a `role=\"note\"` region"
  - "Triggerable from keyboard focus, not only pointer hover"
usage: |-
  ---
  import { HoverCard } from "astro-ui";
  ---

  <HoverCard ariaLabel="Profile preview">
    <a href="/users/ada">@ada</a>
    <div slot="content">
      <strong>Ada Lovelace</strong>
      <p>Notes on the Analytical Engine.</p>
    </div>
  </HoverCard>
demoIds: ["basic", "top"]
props:
  - name: "placement"
    type: "\"top\" | \"bottom\""
    def: "\"bottom\""
    description: "Placement of the card relative to the trigger."
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
  - name: "default"
    description: "The trigger content (focusable)."
  - name: "content"
    description: "The preview card."
faq:
  - q: "Can I put essential info in it?"
    a: "No — it's pointer-driven and dismissible. The trigger must carry the primary content; the card is an enhancement (same rule as Tooltip)."
---

HoverCard is the CSS-only sibling of Popover: content that appears after a short delay when the user hovers or focuses
the trigger. Unlike Tooltip the card stays interactive (links inside work) and carries an aria-label so assistive tech
can announce it. Because it is pointer-driven, never put essential information only in a HoverCard — the trigger itself
must carry the primary content.
