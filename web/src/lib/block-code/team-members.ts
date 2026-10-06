/** team-members block — copy-paste-ready Astro markup. */
export const codeTeamMembers = `---
import { Card, Avatar, Badge, Button } from "astro-ui";
---

<Card>
  <h3 slot="header">Members</h3>
  <ul class="block-team">
    {[
      { name: "Parsa M", role: "Owner", badge: "owner" },
      { name: "Devin V", role: "Maintainer", badge: "maintainer" },
      { name: "Robin H", role: "Contributor", badge: "member" },
    ].map((member) => (
      <li class="block-team-row">
        <Avatar name={member.name} size="sm" />
        <span class="block-team-name">{member.name}</span>
        <Badge
          variant={member.badge === "owner" ? "primary" : member.badge === "maintainer" ? "info" : "muted"}
          size="sm"
        >
          {member.badge}
        </Badge>
        <span class="block-team-role">{member.role}</span>
      </li>
    ))}
  </ul>
  <Button slot="footer" variant="outline" size="sm">Invite member</Button>
</Card>

<style is:global>
  .block-team { display: grid; gap: var(--ui-space-2); margin: 0; padding: 0; list-style: none; }
  .block-team-row { display: flex; align-items: center; gap: var(--ui-space-3); padding: var(--ui-space-2) 0; }
  .block-team-name { font-size: var(--ui-text-sm); font-weight: var(--ui-font-medium); }
  .block-team-role { margin-inline-start: auto; font-size: var(--ui-text-xs); color: var(--ui-muted-foreground); }
</style>`;
