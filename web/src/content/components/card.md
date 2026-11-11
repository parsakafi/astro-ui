---
slug: "card"
name: "Card"
description: >-
  Content container with named-slot header/content/footer composition.
category: layout
importPath: "@parsakafi/astro-ui"
exportName: "Card"
js: false
since: "0.1.0"
isNew: false
related: ["button", "separator", "table"]
features:
  - "Named-slot composition: header / default / footer"
  - "4 variants: default, outline, ghost, bordered"
  - "6 sizes: xs → 2xl"
  - "split dividers, scrollable body"
  - "Semantic <article>, overridable with as"
  - "title/description props as a text-only shortcut"
a11y:
  - "`aria-labelledby` / `aria-describedby` wire the title and description to the card region"
  - "`aria-label` fallback for cards without a visible title"
usage: |-
  ---
  import { Card, Button } from "@parsakafi/astro-ui";
  ---
  
  <Card>
    <h3 slot="header">Title</h3>
    <p>Body content.</p>
    <div slot="footer"><Button size="sm">Action</Button></div>
  </Card>
demoIds: ["basic", "variants", "split"]
props:
  - name: "as"
    type: "\"article\" | \"section\" | \"div\""
    def: "\"article\""
    description: "Semantic wrapper element."
  - name: "variant"
    type: "\"default\" | \"outline\" | \"ghost\" | \"bordered\""
    def: "\"default\""
    description: "Surface style."
  - name: "size"
    type: "\"xs\" | \"sm\" | \"md\" | \"lg\" | \"xl\" | \"2xl\""
    def: "\"md\""
    description: "Padding/radius scale."
  - name: "split"
    type: "boolean"
    def: "false"
    description: "Dividers between header, content, footer."
  - name: "scrollable"
    type: "boolean"
    def: "true"
    description: "Scrollable body when content overflows."
  - name: "title / description"
    type: "string"
    def: "—"
    description: "Text-only shortcut props."
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
    description: "Card header (your own heading element)."
  - name: "default"
    description: "Body content."
  - name: "footer"
    description: "Footer actions."
faq:
  - q: "Slots or title prop?"
    a: "Slots — they keep your heading hierarchy and allow rich content. title/description exist only for trivial text-only cards."
---

Card composes through named slots — header, default content, footer — and renders a semantic &lt;article&gt;. Four variants, six sizes, optional split dividers and a scrollable body. Prefer slots over title/description props.
