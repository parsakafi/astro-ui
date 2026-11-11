import {type ComponentMeta, t} from "./types";

export const bubble: ComponentMeta = {
    slug: "bubble",
    name: "Bubble",
    description: "Chat message bubble — 7 variants, start/end align, reactions, groups.",
    overview:
        "Bubble composes a conversational message from three parts: Bubble sets alignment (start/end) and variant context, BubbleContent is the visible rounded box, and BubbleReactions anchors a reaction pill to an edge. BubbleGroup stacks consecutive same-sender turns with tight spacing. Ghost renders bare content for headings, lists, and code.",
    importPath: "astro-ui",
    exportName: "Bubble",
    category: "data-display",
    js: false,
    usage:
        `---\nimport { Bubble, BubbleContent, BubbleReactions } from "astro-ui";\n---\n\n<Bubble align="end" variant="primary">\n  <BubbleContent>Looks great — ship it.</BubbleContent>\n  <BubbleReactions side="bottom" align="end" ariaLabel="Reactions">\n    <span aria-hidden="true">🎉</span>\n  </BubbleReactions>\n</Bubble>`,
    features: [
        "7 variants: primary, secondary, muted, tinted, outline, ghost, destructive",
        "start/end alignment for two-sided threads",
        "BubbleGroup collapses consecutive same-sender turns",
        "Edge-anchored reactions pill (top/bottom, start/end)",
        "Interactive content: a button or link as the content gets a themed hover",
        "Zero JS — wire reactions and actions app-side",
    ],
    a11y: [
        "Reactions row is a labeled group; pressable reactions are real buttons with aria-pressed",
        "BubbleGroup exposes role=group with an accessible name per sender run",
        "Variant color pairs keep 4.5:1 contrast on their content",
    ],
    demos: [
        {
            id: "billing-thread",
            title: "Two-sided billing thread",
            code: `<div class="docs-bubble-thread">\n  <p class="docs-bubble-meta">Support · 09:12</p>\n  <Bubble align="start" variant="outline">\n    <BubbleContent>Hi! I see a double charge on your last invoice.</BubbleContent>\n  </Bubble>\n  <p class="docs-bubble-meta docs-bubble-meta--end">You · 09:14</p>\n  <Bubble align="end" variant="primary">\n    <BubbleContent>Yes — my card was charged twice for the renewal.</BubbleContent>\n  </Bubble>\n  <Bubble align="start" variant="muted">\n    <BubbleContent>Refunding the duplicate now. It lands in 3–5 business days.</BubbleContent>\n  </Bubble>\n  <Bubble align="end" variant="tinted">\n    <BubbleContent>Confirmed — thank you!</BubbleContent>\n  </Bubble>\n</div>`,
        },
        {
            id: "deploy-thread",
            title: "Seven variants in one deploy thread",
            code: `<div class="docs-bubble-thread">\n  <Bubble align="end" variant="primary">\n    <BubbleContent>Deploy the preview build to production.</BubbleContent>\n  </Bubble>\n  <Bubble align="start" variant="secondary">\n    <BubbleContent>On it — building #412.</BubbleContent>\n  </Bubble>\n  <Bubble align="start" variant="muted">\n    <BubbleContent>Last production deploy was v2.4.1, two days ago.</BubbleContent>\n  </Bubble>\n  <Bubble align="start" variant="tinted">\n    <BubbleContent>Build passed in 1m 32s.</BubbleContent>\n  </Bubble>\n  <Bubble align="start" variant="outline">\n    <BubbleContent>3 files changed, 128 additions, 12 deletions.</BubbleContent>\n  </Bubble>\n  <Bubble align="start" variant="destructive">\n    <BubbleContent>Coverage dropped below 80% — consider adding tests.</BubbleContent>\n  </Bubble>\n  <Bubble align="start" variant="ghost">\n    <BubbleContent>Run #412 · runner eu-west-1 · log retained 30 days</BubbleContent>\n  </Bubble>\n</div>`,
        },
        {
            id: "group",
            title: "Consecutive turns in a BubbleGroup",
            code: `<div class="docs-bubble-thread">\n  <p class="docs-bubble-meta">Ada · just now</p>\n  <BubbleGroup ariaLabel="Three messages from Ada">\n    <Bubble align="end" variant="primary">\n      <BubbleContent>Pushed the fix to staging.</BubbleContent>\n    </Bubble>\n    <Bubble align="end" variant="primary">\n      <BubbleContent>Can you re-run the smoke tests?</BubbleContent>\n    </Bubble>\n    <Bubble align="end" variant="primary">\n      <BubbleContent>Then we're clear for the release.</BubbleContent>\n    </Bubble>\n  </BubbleGroup>\n  <p class="docs-bubble-meta">Grace · 1 min ago</p>\n  <Bubble align="start" variant="muted">\n    <BubbleContent>Running them now.</BubbleContent>\n  </Bubble>\n</div>`,
        },
        {
            id: "reactions",
            title: "Reaction rows",
            code: `<div class="docs-bubble-thread">\n  <Bubble align="start" variant="outline">\n    <BubbleContent>The release notes are ready for review.</BubbleContent>\n    <BubbleReactions side="bottom" align="end" ariaLabel="Reactions">\n      <span aria-hidden="true">👍 4</span>\n      <span aria-hidden="true">🚀 2</span>\n    </BubbleReactions>\n  </Bubble>\n  <Bubble align="end" variant="primary">\n    <BubbleContent>Great — leaving a celebration on it.</BubbleContent>\n    <BubbleReactions side="bottom" align="start" ariaLabel="Reactions">\n      <button type="button" aria-pressed="true" aria-label="Celebrate, 3 reactions">\n        <span aria-hidden="true">🎉</span> 3\n      </button>\n    </BubbleReactions>\n  </Bubble>\n  <Bubble align="start" variant="muted">\n    <BubbleContent>Deployment window opens at 14:00 UTC.</BubbleContent>\n    <BubbleReactions side="top" align="end" ariaLabel="Reactions">\n      <span aria-hidden="true">⏰ 1</span>\n    </BubbleReactions>\n  </Bubble>\n</div>`,
        },
        {
            id: "ghost-rich",
            title: "Ghost bubble with rich content",
            code: `<div class="docs-bubble-thread">\n  <Bubble align="start" variant="ghost">\n    <BubbleContent>\n      <h4>What changed in v2.5</h4>\n      <ul>\n        <li><strong>Bubble</strong> components for conversational UIs</li>\n        <li>Logical-property separators in <code>Breadcrumb</code></li>\n        <li><em>40% faster</em> docs generation</li>\n      </ul>\n      <p>Upgrade with <code>npm install astro-ui@latest</code>.</p>\n    </BubbleContent>\n  </Bubble>\n</div>`,
        },
        {
            id: "collapsible-answer",
            title: "Long answer behind a Collapsible",
            code: `<div class="docs-bubble-thread">\n  <Bubble align="end" variant="primary">\n    <BubbleContent>Explain how the reactions pill positions itself.</BubbleContent>\n  </Bubble>\n  <Bubble align="start" variant="muted">\n    <BubbleContent>\n      <p>\n        The pill is absolutely positioned inside the bubble and pushed\n        out with a translate of 75% of its own height, so it straddles\n        the edge without occupying flow space.\n      </p>\n      <Collapsible id="dm-bubble-more">\n        <span slot="trigger">Show the details</span>\n        <p>\n          A 3px ring in the page background separates the pill from the\n          bubble and any media behind it. side picks the edge (top or\n          bottom) and align picks the horizontal anchor (start or end) —\n          both logical, so they mirror in RTL layouts.\n        </p>\n      </Collapsible>\n    </BubbleContent>\n  </Bubble>\n</div>`,
        },
        {
            id: "interactive",
            title: "Tinted bubbles as buttons + action row",
            code: `<div class="docs-bubble-thread">\n  <Bubble align="start" variant="muted">\n    <BubbleContent>Two plans fit your usage. Pick one:</BubbleContent>\n  </Bubble>\n  <Bubble align="end" variant="tinted">\n    <button type="button" class="aui-bubble__content">Pro — $19/mo, priority builds</button>\n  </Bubble>\n  <Bubble align="end" variant="tinted">\n    <button type="button" class="aui-bubble__content">Team — $49/mo, shared themes</button>\n  </Bubble>\n  <Bubble align="start" variant="outline">\n    <a class="aui-bubble__content" href="#">Compare all plans</a>\n  </Bubble>\n  <div class="docs-bubble-actions">\n    <Button variant="ghost" size="sm">Regenerate</Button>\n    <Button variant="outline" size="sm">Copy summary</Button>\n  </div>\n</div>`,
        },
    ],
    props: [
        t("align", `'"start" | "end"'`, `'"start"'`, "Side of the thread the message sits on."),
        t("variant", `'"primary" | "secondary" | "muted" | "tinted" | "outline" | "ghost" | "destructive"'`, `'"primary"'`, "Color scheme of the content box."),
        t("class", "string", "—", "Merged via cn(); Tailwind classes welcome."),
        t("id", "string", "—", "Element id."),
    ],
    slots: [
        {name: "default", description: "BubbleContent box and optional BubbleReactions pill."},
    ],
    faq: [
        {
            q: "How do I make a pressable reaction?",
            a: "Put a real <button> inside BubbleReactions with aria-pressed; the pill styles it. Toggling state (and the count) is app-side — the component ships zero JS.",
        },
        {
            q: "How do interactive bubbles work?",
            a: "Author <button class=\"aui-bubble__content\"> or <a class=\"aui-bubble__content\"> directly instead of BubbleContent — the Bubble root gives interactive content a themed hover and focus ring.",
        },
        {
            q: "When do I use BubbleGroup?",
            a: "When one sender sends several turns in a row: group them so spacing tightens and the run reads as a single message block. Give each group an ariaLabel naming the sender.",
        },
    ],
    since: "0.1.0",
    related: ["avatar", "collapsible", "attachment"],
};
