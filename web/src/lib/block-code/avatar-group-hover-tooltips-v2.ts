/** avatar-group-hover-tooltips-v2 block — copy-paste-ready Astro markup. */
export const codeAvatarGroupHoverTooltipsV2 = `---
import { Avatar, AvatarGroup, Tooltip } from "astro-ui";
---

<div class="block-avatar-hover-tooltip">
  <AvatarGroup hover>
    {[
      { name: "Ada Lovelace", img: "47" },
      { name: "Grace Hopper", img: "45" },
      { name: "Alan Turing", img: "12" },
      { name: "Edsger Dijkstra", img: "60" },
      { name: "Barbara Liskov", img: "33" },
    ].map((a) => (
      <Tooltip ariaLabel={a.name} placement="bottom" variant="light">
        <Fragment slot="content">{a.name}</Fragment>
        <Avatar
          name={a.name}
          src={"https://i.pravatar.cc/150?img=" + a.img}
          ring={a.name === "Alan Turing" ? "success" : a.name === "Barbara Liskov" ? "primary" : undefined}
          status={a.name === "Ada Lovelace" ? "online" : undefined}
        />
      </Tooltip>
    ))}
    <Fragment slot="count">+3</Fragment>
  </AvatarGroup>
</div>

<style is:global>
  .block-avatar-hover-tooltip { display: inline-flex; }
  /* AvatarGroup hover spread + per-avatar tooltip on hover/focus. */
</style>`;
