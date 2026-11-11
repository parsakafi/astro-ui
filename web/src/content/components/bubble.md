---
slug: "bubble"
name: "Bubble"
description: >-
  Chat message bubble — 7 variants, start/end align, reactions, groups.
category: data-display
importPath: "astro-ui"
exportName: "Bubble"
js: false
since: "0.1.0"
isNew: false
related: ["avatar", "collapsible", "attachment"]
features:
  - "7 variants: primary, secondary, muted, tinted, outline, ghost, destructive"
  - "start/end alignment for two-sided threads"
  - "BubbleGroup collapses consecutive same-sender turns"
  - "Edge-anchored reactions pill (top/bottom, start/end)"
  - "Interactive content: a button or link as the content gets a themed hover"
  - "Zero JS — wire reactions and actions app-side"
a11y:
  - "Reactions row is a labeled group; pressable reactions are real buttons with aria-pressed"
  - "BubbleGroup exposes role=group with an accessible name per sender run"
  - "Variant color pairs keep 4.5:1 contrast on their content"
usage: |-
  ---
  import { Bubble, BubbleContent, BubbleReactions } from "astro-ui";
  ---
  
  <Bubble align="end" variant="primary">
    <BubbleContent>Looks great — ship it.</BubbleContent>
    <BubbleReactions side="bottom" align="end" ariaLabel="Reactions">
      <span aria-hidden="true">🎉</span>
    </BubbleReactions>
  </Bubble>
demoIds: ["billing-thread", "deploy-thread", "group", "reactions", "ghost-rich", "collapsible-answer", "interactive"]
props:
  - name: "align"
    type: "'\"start\" | \"end\"'"
    def: "'\"start\"'"
    description: "Side of the thread the message sits on."
  - name: "variant"
    type: "'\"primary\" | \"secondary\" | \"muted\" | \"tinted\" | \"outline\" | \"ghost\" | \"destructive\"'"
    def: "'\"primary\"'"
    description: "Color scheme of the content box."
  - name: "class"
    type: "string"
    def: "—"
    description: "Merged via cn(); Tailwind classes welcome."
  - name: "id"
    type: "string"
    def: "—"
    description: "Element id."
slots:
  - name: "default"
    description: "BubbleContent box and optional BubbleReactions pill."
faq:
  - q: "How do I make a pressable reaction?"
    a: "Put a real <button> inside BubbleReactions with aria-pressed; the pill styles it. Toggling state (and the count) is app-side — the component ships zero JS."
  - q: "How do interactive bubbles work?"
    a: "Author <button class=\"aui-bubble__content\"> or <a class=\"aui-bubble__content\"> directly instead of BubbleContent — the Bubble root gives interactive content a themed hover and focus ring."
  - q: "When do I use BubbleGroup?"
    a: "When one sender sends several turns in a row: group them so spacing tightens and the run reads as a single message block. Give each group an ariaLabel naming the sender."
---

Bubble composes a conversational message from three parts: Bubble sets alignment (start/end) and variant context, BubbleContent is the visible rounded box, and BubbleReactions anchors a reaction pill to an edge. BubbleGroup stacks consecutive same-sender turns with tight spacing. Ghost renders bare content for headings, lists, and code.
