/** avatar-social-proof-label block — copy-paste-ready Astro markup. */
export const codeAvatarSocialProofLabel = `---
import { Avatar, AvatarGroup } from "@parsakafi/astro-ui";
---

<div class="block-social-proof-label">
  <AvatarGroup>
    {["Ada Lovelace", "Grace Hopper", "Alan Turing", "Edsger Dijkstra", "Barbara Liskov"].map((name) => (
      <Avatar
        name={name}
        src={"https://i.pravatar.cc/150?img=" + (47 + ["Ada Lovelace", "Grace Hopper", "Alan Turing", "Edsger Dijkstra", "Barbara Liskov"].indexOf(name))}
        status={name === "Ada Lovelace" ? "online" : undefined}
      />
    ))}
  </AvatarGroup>
  <div class="block-social-proof-label__text">
    <p class="block-social-proof-label__headline">Joined by 2,411 developers this week</p>
    <p class="block-social-proof-label__sub">See why teams choose this stack for production Astro sites.</p>
  </div>
</div>

<style is:global>
  .block-social-proof-label { display: flex; align-items: center; gap: var(--ui-space-4); flex-wrap: wrap; }
  .block-social-proof-label__text { display: flex; flex-direction: column; gap: var(--ui-space-1); }
  .block-social-proof-label__headline { margin: 0; font-weight: var(--ui-font-semibold); color: var(--ui-foreground); font-size: var(--ui-text-base); }
  .block-social-proof-label__sub { margin: 0; color: var(--ui-muted-foreground); font-size: var(--ui-text-sm); }
</style>`;
