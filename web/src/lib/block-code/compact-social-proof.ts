/** compact-social-proof block — copy-paste-ready Astro markup. */
export const codeCompactSocialProof = `---
import { Avatar } from "@parsakafi/astro-ui";
---

<div class="block-social-proof">
  <div class="block-social-proof__row">
    <Avatar name="Ada Lovelace" size="xs" status="online" />
    <Avatar name="Grace Hopper" size="xs" />
    <Avatar name="Alan Turing" size="xs" />
    <Avatar name="Edsger Dijkstra" size="xs" variant="primary" />
    <Avatar name="Barbara Liskov" size="xs" />
  </div>
  <p class="block-social-proof__label">Trusted by engineers at</p>
  <p class="block-social-proof__name">Ada Lovelace, Grace Hopper, Alan Turing, and 247 more</p>
</div>

<style is:global>
  .block-social-proof { display: flex; flex-direction: column; align-items: center; gap: var(--ui-space-2); padding: var(--ui-space-6); text-align: center; }
  .block-social-proof__row { display: flex; gap: var(--ui-space-2); }
  .block-social-proof__label { margin: 0; font-size: var(--ui-text-xs); color: var(--ui-muted-foreground); text-transform: uppercase; letter-spacing: 0.05em; }
  .block-social-proof__name { margin: 0; font-size: var(--ui-text-sm); color: var(--ui-foreground); max-width: 20rem; text-align: center; }
</style>`;
