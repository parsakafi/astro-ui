/** empty-state block — copy-paste-ready Astro markup. */
export const codeEmptyState = `---
import { Empty, Button } from "@parsakafi/astro-ui";
---

<Empty>
  <span slot="media" class="block-empty-icon" aria-hidden="true">◈</span>
  <span slot="title">No projects yet</span>
  <span slot="description">
    Create your first project to see analytics, deploys, and team activity here.
  </span>
  <Button size="sm">New project</Button>
  <Button size="sm" variant="ghost" href="/docs/get-started/">Read the guide</Button>
</Empty>

<style is:global>
  .block-empty-icon { display: grid; place-items: center; font-size: 1.75rem; color: var(--ui-primary); }
</style>`;
