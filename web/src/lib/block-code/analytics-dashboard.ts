/** analytics-dashboard block — copy-paste-ready Astro markup. */
export const codeAnalyticsDashboard = `---
import { Card, Chart, Badge, Button, Tabs } from "astro-ui";
---

<div class="dash">
  {/* KPI row: value + trend badge per metric */}
  <div class="dash__kpis">
    <Card size="sm">
      <div class="dash__kpi">
        <span class="dash__kpi-label">Active users</span>
        <span class="dash__kpi-value">24,803</span>
        <Badge variant="success" size="sm">+12.4%</Badge>
      </div>
    </Card>
    <Card size="sm">
      <div class="dash__kpi">
        <span class="dash__kpi-label">Sessions</span>
        <span class="dash__kpi-value">108,392</span>
        <Badge variant="success" size="sm">+8.1%</Badge>
      </div>
    </Card>
    <Card size="sm">
      <div class="dash__kpi">
        <span class="dash__kpi-label">Bounce rate</span>
        <span class="dash__kpi-value">31.6%</span>
        <Badge variant="destructive" size="sm">+2.3%</Badge>
      </div>
    </Card>
    <Card size="sm">
      <div class="dash__kpi">
        <span class="dash__kpi-label">Avg. session</span>
        <span class="dash__kpi-value">4m 12s</span>
        <Badge variant="muted" size="sm">stable</Badge>
      </div>
    </Card>
  </div>

  {/* Charts: engagement trend + traffic mix */}
  <div class="dash__charts">
    <Card class="dash__engagement">
      <div class="dash__panel-head">
        <div>
          <h3 class="dash__panel-title">Engagement</h3>
          <p class="dash__panel-sub">Daily active users</p>
        </div>
      </div>
      {/* Range switcher: dissolved into the card grid via display:contents
          (dash__range) — tablist row, then the active chart below. */}
      <Tabs
        class="dash__range"
        variant="pill"
        size="xs"
        ariaLabel="Date range"
        defaultValue="7d"
        items={[
          { value: "7d", label: "7d" },
          { value: "30d", label: "30d" },
          { value: "90d", label: "90d" },
        ]}
      >
        <div data-tab="7d">
          <Chart
            type="area"
            curve
            gradient
            height={220}
            labels={["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]}
            series={[
              { name: "This week", data: [4200, 5100, 4800, 6400, 7200, 5900, 8100] },
              { name: "Last week", data: [3800, 4200, 4500, 4800, 5200, 6100, 7000] },
            ]}
          />
        </div>
        <div data-tab="30d">
          <Chart
            type="area"
            curve
            gradient
            height={220}
            labels={["W1", "W2", "W3", "W4"]}
            series={[
              { name: "This month", data: [31500, 34200, 32800, 38900] },
              { name: "Last month", data: [28400, 30100, 31900, 33400] },
            ]}
          />
        </div>
        <div data-tab="90d">
          <Chart
            type="area"
            curve
            gradient
            height={220}
            labels={["May", "Jun", "Jul"]}
            series={[
              { name: "This quarter", data: [121000, 134600, 147200] },
              { name: "Last quarter", data: [108300, 115900, 124100] },
            ]}
          />
        </div>
      </Tabs>
    </Card>
    <Card>
      <div class="dash__panel-head">
        <div>
          <h3 class="dash__panel-title">Traffic sources</h3>
          <p class="dash__panel-sub">Share of sessions</p>
        </div>
      </div>
      <Chart
        type="donut"
        gradient
        height={220}
        labels={["Direct", "Search", "Social", "Referral"]}
        series={[{ name: "Share", data: [435, 286, 151, 96] }]}
      />
    </Card>
  </div>
</div>

<style is:global>
  .dash { display: grid; gap: var(--ui-space-4); }
  .dash__kpis { display: grid; grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr)); gap: var(--ui-space-3); }
  .dash__kpi { display: grid; gap: var(--ui-space-1); justify-items: start; }
  .dash__kpi-label { color: var(--ui-muted-foreground); font-size: var(--ui-text-xs); font-weight: var(--ui-font-medium); }
  .dash__kpi-value { color: var(--ui-foreground); font-size: var(--ui-text-2xl); font-weight: var(--ui-font-semibold); letter-spacing: -0.02em; font-variant-numeric: tabular-nums; }
  .dash__charts { display: grid; grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr)); gap: var(--ui-space-3); }
  .dash__panel-head { display: flex; align-items: start; justify-content: space-between; gap: var(--ui-space-2); margin-block-end: var(--ui-space-3); }
  .dash__panel-title { margin: 0; color: var(--ui-foreground); font-size: var(--ui-text-md); font-weight: var(--ui-font-semibold); }
  .dash__panel-sub { margin: 0; color: var(--ui-muted-foreground); font-size: var(--ui-text-xs); }
  .dash__range { display: contents; }
  .dash__engagement .aui-tabs__panels { display: grid; }
</style>`;
