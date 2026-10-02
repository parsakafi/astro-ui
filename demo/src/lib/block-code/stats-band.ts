/** stats-band block — copy-paste-ready Astro markup. */
export const codeStatsBand = `---
import { Card, Badge, Progress } from "astro-ui";
---

<div class="block-canvas-grid">
  {[
    { label: "Downloads / month", value: "48.2k", progress: 72, badge: { text: "+12%", variant: "success" as const } },
    { label: "GitHub stars", value: "3,214", progress: 58, badge: { text: "+3.1%", variant: "success" as const } },
    { label: "Open issues", value: "27", progress: 18, badge: { text: "stable", variant: "info" as const } },
  ].map((stat) => (
    <Card>
      <div class="block-stat">
        <div class="block-stat-head">
          <span class="block-stat-label">{stat.label}</span>
          <Badge variant={stat.badge.variant} size="sm">{stat.badge.text}</Badge>
        </div>
        <span class="block-stat-value">{stat.value}</span>
        <Progress value={stat.progress} />
      </div>
    </Card>
  ))}
</div>

<style is:global>
  .block-canvas-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr)); gap: var(--ui-space-4); }
  .block-stat { display: grid; gap: var(--ui-space-2); }
  .block-stat-head { display: flex; align-items: center; justify-content: space-between; gap: var(--ui-space-2); }
  .block-stat-label { font-size: var(--ui-text-sm); color: var(--ui-muted-foreground); }
  .block-stat-value { font-size: var(--ui-text-2xl); font-weight: var(--ui-font-semibold); letter-spacing: -0.02em; }
</style>`;
