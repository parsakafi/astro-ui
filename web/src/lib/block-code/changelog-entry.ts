/** changelog-entry block — copy-paste-ready Astro markup. */
export const codeChangelogEntry = `---
import { Card, Badge, Kbd } from "@parsakafi/astro-ui";
---

<Card>
  <h3 slot="header" class="block-version">v0.1.0 <Badge variant="success" size="sm">Latest</Badge></h3>
  <p class="block-hint">Released Nov 11, 2026</p>
  <ul class="block-features">
    <li><Badge variant="success" size="sm">Added</Badge> Rating scale modes and predefined icons</li>
    <li><Badge variant="info" size="sm">Changed</Badge> Slider tooltip follows logical properties in RTL</li>
    <li><Badge variant="warning" size="sm">Fixed</Badge> Badge overlay anchoring in RTL layouts</li>
  </ul>
  <div class="block-form-row">
    <span class="block-plan-label">Full notes</span>
    <span><Kbd>Ctrl</Kbd> <Kbd>K</Kbd> to search the changelog</span>
  </div>
</Card>

<style is:global>
  .block-version { display: flex; align-items: center; gap: var(--ui-space-2); margin: 0; }
  .block-hint { margin: 0; color: var(--ui-muted-foreground); font-size: var(--ui-text-sm); }
  .block-features { display: grid; gap: var(--ui-space-2); margin: 0 0 var(--ui-space-4); padding: 0; list-style: none; font-size: var(--ui-text-sm); color: var(--ui-muted-foreground); }
  .block-features li { display: flex; align-items: start; gap: var(--ui-space-2); line-height: var(--ui-leading-normal); }
  .block-features li::before { content: "\\2713"; flex-shrink: 0; color: var(--ui-primary); font-weight: var(--ui-font-semibold); }
  .block-form-row { display: flex; align-items: center; justify-content: space-between; gap: var(--ui-space-3); }
  .block-plan-label { font-size: var(--ui-text-sm); color: var(--ui-muted-foreground); }
</style>`;
