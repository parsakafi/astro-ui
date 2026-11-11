/** chat-support block — copy-paste-ready Astro markup. */
export const codeChatSupport = `---
import {
  Bubble,
  BubbleContent,
  BubbleGroup,
  BubbleReactions,
  Avatar,
  Badge,
  Button,
  Input,
} from "@parsakafi/astro-ui";
---

<div class="chat">
  <div class="chat__head">
    <Avatar name="Mira Chen" size="sm" status="online" />
    <div class="chat__who">
      <span class="chat__name">Mira · Support</span>
      <span class="chat__sub">Typically replies in minutes</span>
    </div>
    <Badge variant="success" size="sm">Online</Badge>
  </div>

  <div class="chat__thread">
    <p class="chat__meta">Today · 09:12</p>

    <!-- Operator turn: consecutive messages collapse into one group -->
    <div class="chat__turn">
      <Avatar name="Mira Chen" size="sm" />
      <BubbleGroup ariaLabel="Messages from Mira" class="chat__group">
        <Bubble align="start" variant="muted">
          <BubbleContent>👋 Hi! I'm Mira from support. I see ticket #4821 opened on your account — the double charge on last month's invoice, right?</BubbleContent>
        </Bubble>
        <Bubble align="start" variant="muted">
          <BubbleContent>I've already pulled up the billing log.</BubbleContent>
        </Bubble>
      </BubbleGroup>
    </div>

    <p class="chat__meta chat__meta--end">You · 09:14</p>
    <div class="chat__turn chat__turn--end">
      <BubbleGroup ariaLabel="Messages from you" class="chat__group">
        <Bubble align="end" variant="primary">
          <BubbleContent>Yes! My card was charged twice for the renewal 🙁</BubbleContent>
        </Bubble>
        <Bubble align="end" variant="primary">
          <BubbleContent>(and the renewal email never arrived either)</BubbleContent>
          <BubbleReactions side="bottom" align="end" ariaLabel="Reactions">
            <button type="button" aria-pressed="true" aria-label="Heart, 1 reaction">
              <span aria-hidden="true">❤️</span> 1
            </button>
          </BubbleReactions>
        </Bubble>
      </BubbleGroup>
      <Avatar name="Sam Visitor" size="sm" />
    </div>

    <!-- Keep alternating turns; add row-gap so reaction pills have room -->
    <p class="chat__meta">Mira · 09:15</p>
    <div class="chat__turn">
      <Avatar name="Mira Chen" size="sm" />
      <Bubble align="start" variant="muted">
        <BubbleContent>Confirmed — duplicate transaction at 14:02. Refund approved, lands in 3–5 business days.</BubbleContent>
      </Bubble>
    </div>

    <p class="chat__meta chat__meta--end">You · 09:16</p>
    <div class="chat__turn chat__turn--end">
      <Bubble align="end" variant="primary">
        <BubbleContent>Amazing, thank you! Will I get a confirmation email?</BubbleContent>
        <BubbleReactions side="bottom" align="start" ariaLabel="Reactions">
          <span aria-hidden="true">🙏 2</span>
        </BubbleReactions>
      </Bubble>
    </div>

    <p class="chat__meta">Mira · 09:17</p>
    <div class="chat__turn">
      <Avatar name="Mira Chen" size="sm" />
      <BubbleGroup ariaLabel="Messages from Mira" class="chat__group">
        <Bubble align="start" variant="muted">
          <BubbleContent>You will — and here's the refund reference for your records:</BubbleContent>
        </Bubble>
        <Bubble align="start" variant="outline">
          <BubbleContent><code>RFND-2026-09482</code></BubbleContent>
        </Bubble>
      </BubbleGroup>
    </div>

    <!-- Interactive bubble: a real button the user can pick -->
    <p class="chat__meta chat__meta--end">You · 09:18</p>
    <div class="chat__turn chat__turn--end">
      <Bubble align="end" variant="tinted">
        <button type="button" class="aui-bubble__content">Perfect — anything else I should know?</button>
      </Bubble>
    </div>

    <p class="chat__meta">Mira · 09:19</p>
    <div class="chat__turn">
      <Avatar name="Mira Chen" size="sm" />
      <Bubble align="start" variant="muted">
        <BubbleContent>All set on my side! I'll stay in this thread if anything else comes up. Quick actions before you go:</BubbleContent>
      </Bubble>
    </div>

    <!-- Suggested user actions -->
    <div class="chat__quick">
      <Button variant="outline" size="sm" shape="rounded">Email me the transcript</Button>
      <Button variant="outline" size="sm" shape="rounded">Rate this chat</Button>
      <Button variant="primary" size="sm" shape="rounded">Open new ticket</Button>
    </div>

    <!-- Ghost system event closes the thread -->
    <div class="chat__resolved">
      <Bubble align="start" variant="ghost">
        <BubbleContent>Ticket #4821 marked as <strong>resolved</strong> · Mira · 09:21</BubbleContent>
      </Bubble>
    </div>
  </div>

  <div class="chat__composer">
    <Input name="chat-message" placeholder="Type and press enter…" ariaLabel="Message" />
    <Button variant="primary" size="icon" shape="rounded" ariaLabel="Send message">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
    </Button>
  </div>
</div>

<style is:global>
  .chat { display: grid; gap: var(--ui-space-3); max-inline-size: 34rem; }
  .chat__head { display: flex; align-items: center; gap: var(--ui-space-2); padding-bottom: var(--ui-space-2); border-bottom: 1px solid var(--ui-border); }
  .chat__who { display: grid; gap: 2px; margin-inline-end: auto; }
  .chat__name { font-size: var(--ui-text-sm); font-weight: var(--ui-font-semibold); color: var(--ui-foreground); }
  .chat__sub { font-size: var(--ui-text-xs); color: var(--ui-muted-foreground); }
  .chat__thread { display: flex; flex-direction: column; gap: 1.75rem; max-block-size: 30rem; overflow-y: auto; overscroll-behavior: contain; scrollbar-width: thin; }
  .chat__meta { margin: 0; font-size: var(--ui-text-xs); color: var(--ui-muted-foreground); }
  .chat__meta--end { text-align: end; }
  .chat__turn { display: flex; align-items: flex-end; gap: var(--ui-space-2); }
  .chat__turn--end { flex-direction: row-reverse; }
  .chat__group { gap: var(--ui-space-1); }
  .chat__thread :is(.aui-bubble__content p) { margin: 0; }
  .chat__thread :is(.aui-bubble__content code) { padding: 0.05em 0.35em; background: color-mix(in srgb, currentcolor 10%, transparent); border-radius: var(--ui-radius-sm); font-family: var(--ui-font-mono); font-size: 0.85em; }
  .chat__quick { display: flex; flex-wrap: wrap; gap: var(--ui-space-2); }
  .chat__resolved { padding-inline-start: var(--ui-space-2); }
  .chat__composer { display: flex; align-items: center; gap: var(--ui-space-2); padding-top: var(--ui-space-2); border-top: 1px solid var(--ui-border); }
  .chat__composer :is(input, .aui-input) { flex: 1; }
</style>`;
