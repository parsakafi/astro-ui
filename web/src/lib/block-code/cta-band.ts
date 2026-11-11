/** cta-band block — copy-paste-ready Astro markup. */
export const codeCtaBand = `---
import { Badge, Button } from "@parsakafi/astro-ui";
---

<div class="block-cta">
  <Badge variant="muted">v0.1 — first release</Badge>
  <h2>Ship your next Astro site faster</h2>
  <p>Install once, import tokens, compose pages from blocks like this one.</p>
  <div class="block-cta-actions">
    <Button href="/docs/get-started/">Get started</Button>
    <Button href="/components/" variant="outline">Components</Button>
  </div>
</div>

<style is:global>
  .block-cta {
    display: grid;
    gap: var(--ui-space-4);
    justify-items: center;
    text-align: center;
    padding: var(--ui-space-10) var(--ui-space-6);
    border: 1px solid var(--ui-border);
    border-radius: var(--ui-radius-xl, var(--ui-radius-lg));
    background: radial-gradient(
      120% 140% at 50% 0%,
      color-mix(in srgb, var(--ui-primary) 14%, var(--ui-background)),
      var(--ui-background)
    );
  }
  .block-cta h2 { margin: 0; max-width: 24ch; font-size: var(--ui-text-2xl); letter-spacing: -0.02em; }
  .block-cta p { margin: 0; max-width: 52ch; color: var(--ui-muted-foreground); }
  .block-cta-actions { display: flex; flex-wrap: wrap; gap: var(--ui-space-3); justify-content: center; }
</style>`;
