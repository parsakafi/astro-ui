/** avatar-group-hover-tooltips block — copy-paste-ready Astro markup. */
export const codeAvatarGroupHoverTooltips = `---
import { Avatar, AvatarGroup, Tooltip } from "astro-ui";
---

<AvatarGroup hover>
  {[
    { name: "Ada Lovelace", img: "47" },
    { name: "Grace Hopper", img: "45" },
    { name: "Alan Turing", img: "12" },
    { name: "Edsger Dijkstra", img: "60" },
  ].map((a) => (
    <Tooltip ariaLabel={a.name} placement="top">
      <Fragment slot="content">{a.name}</Fragment>
      <Avatar name={a.name} src={"https://i.pravatar.cc/150?img=" + a.img} />
    </Tooltip>
  ))}
  <Fragment slot="count">+2</Fragment>
</AvatarGroup>

<style is:global>
  /* AvatarGroup hover spread is built into the component; tooltips show on hover. */
</style>`;
