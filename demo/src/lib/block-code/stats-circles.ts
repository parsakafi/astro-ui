/** stats-circles block — copy-paste-ready Astro markup. */
export const codeStatsCircles = `---
import { Card, Badge, Progress } from "astro-ui";
---

<div class="block-canvas-grid">
  {[
    { label: "Storage used", value: 76, badge: { text: "4.1 GB left", variant: "muted" as const }, color: "primary" as const, size: "lg" as const },
    { label: "Build success", value: 98, badge: { text: "30-day avg", variant: "success" as const }, color: "success" as const, size: "lg" as const },
    { label: "CPU load", value: 41, badge: { text: "normal", variant: "info" as const }, color: "warning" as const, size: "lg" as const },
  ].map((stat) => (
    <Card>
      <div class="block-stat block-stat--circle">
        <div class="block-stat-head">
          <span class="block-stat-label">{stat.label}</span>
          <Badge variant={stat.badge.variant} size="sm">{stat.badge.text}</Badge>
        </div>
        <Progress
          variant="circle"
          value={stat.value}
          color={stat.color}
          size={stat.size}
          label={stat.label + " progress"}
          showValue
        />
      </div>
    </Card>
  ))}
</div>

<style is:global>
  .block-canvas-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr)); gap: var(--ui-space-4); }
  .block-stat { display: grid; gap: var(--ui-space-2); }
  .block-stat--circle { justify-items: center; text-align: center; }
  .block-stat--circle .block-stat-head { inline-size: 100%; }
  .block-stat-head { display: flex; align-items: center; justify-content: space-between; gap: var(--ui-space-2); }
  .block-stat-label { font-size: var(--ui-text-sm); color: var(--ui-muted-foreground); }
</style>`;
