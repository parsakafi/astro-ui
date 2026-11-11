/** avatar-empty-state block — copy-paste-ready Astro markup. */
export const codeAvatarEmptyState = `---
import { Empty, Avatar, Button } from "@parsakafi/astro-ui";
---

<Empty size="lg" ariaLabel="No team members yet">
  <span slot="media" class="block-empty-avatar" aria-hidden="true">
    <Avatar name="Your team" size="xl" variant="primary" ring="primary" />
  </span>
  <span slot="title">No team members yet</span>
  <span slot="description">Invite your first teammate to start collaborating on projects, deploys, and analytics.</span>
  <Button size="sm">Invite member</Button>
  <Button size="sm" variant="ghost" href="/docs/get-started/">Read the guide</Button>
</Empty>

<style is:global>
  .block-empty-avatar { display: grid; place-items: center; }
  /* Empty handles layout; Avatar sits in the media slot for a human-centered empty state. */
</style>`;
