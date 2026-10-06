/** pill-button-with-avatar block — copy-paste-ready Astro markup. */
export const codePillButtonWithAvatar = `---
import { Button, Avatar } from "astro-ui";
---

<div class="block-pill-buttons">
  <Button variant="outline" size="sm" shape="rounded" class="block-pill-btn">
    <Avatar name="Ada Lovelace" size="xs" />
    <span style="margin-inline-start:var(--ui-space-2)">Ada</span>
  </Button>
  <Button variant="outline" size="sm" shape="rounded" class="block-pill-btn">
    <Avatar name="Grace Hopper" size="xs" />
    <span style="margin-inline-start:var(--ui-space-2)">Grace</span>
  </Button>
  <Button variant="outline" size="sm" shape="rounded" class="block-pill-btn">
    <Avatar name="Alan Turing" size="xs" status="online" />
    <span style="margin-inline-start:var(--ui-space-2)">Alan</span>
  </Button>
</div>

<style is:global>
  .block-pill-buttons { display: flex; gap: var(--ui-space-2); flex-wrap: wrap; }
  .block-pill-btn { align-items: center; }
</style>`;
