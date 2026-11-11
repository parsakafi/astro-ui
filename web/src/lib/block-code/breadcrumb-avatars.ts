/** breadcrumb-avatars block — copy-paste-ready Astro markup. */
export const codeBreadcrumbAvatars = `---
import { Breadcrumb, Avatar } from "@parsakafi/astro-ui";
---

<Breadcrumb separator="chevron" ariaLabel="Team breadcrumb">
  <span class="aui-breadcrumb__item">
    <a class="aui-breadcrumb__link" href="#">
      <Avatar name="Acme Design" size="xs" />
      Acme Design
    </a>
  </span>
  <span class="aui-breadcrumb__item">
    <a class="aui-breadcrumb__link" href="#">
      <Avatar name="Ada Lovelace" size="xs" />
      Ada Lovelace
    </a>
  </span>
  <span class="aui-breadcrumb__item">
    <span class="aui-breadcrumb__current" aria-current="page">
      <Avatar name="Grace Hopper" size="xs" status="online" />
      Grace Hopper
    </span>
  </span>
</Breadcrumb>`;
