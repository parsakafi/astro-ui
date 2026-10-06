/** breadcrumb-project-info block — copy-paste-ready Astro markup. */
export const codeBreadcrumbProjectInfo = `---
import { Breadcrumb, Avatar, Badge } from "astro-ui";
---

<Breadcrumb ariaLabel="Project breadcrumb">
  <span class="aui-breadcrumb__item">
    <a class="aui-breadcrumb__link" href="#">
      <Avatar name="Acme Design" size="xs" variant="primary" />
      Acme Design
    </a>
  </span>
  <span class="aui-breadcrumb__item">
    <a class="aui-breadcrumb__link" href="#">
      <Avatar name="Ada Lovelace" size="xs" status="online" />
      Ada Lovelace
    </a>
  </span>
  <span class="aui-breadcrumb__item">
    <span class="aui-breadcrumb__current" aria-current="page">
      homepage.fig
      <Badge variant="muted" size="sm">v4</Badge>
    </span>
  </span>
</Breadcrumb>`;
