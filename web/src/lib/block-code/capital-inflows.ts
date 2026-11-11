/** capital-inflows block — copy-paste-ready Astro markup. */
export const codeCapitalInflows = `---
import { Card, Chart, Badge, Button, Avatar } from "@parsakafi/astro-ui";
---

<div class="capital">
  <Card class="capital__card">
    <div class="capital__head">
      <h3 class="capital__title">Capital Inflows</h3>
      <Button variant="outline" size="sm">Top 3 Funds <span aria-hidden="true">⌄</span></Button>
    </div>
    <p class="capital__total">
      $12.7M
      <Badge variant="success" size="sm">↗ $425k</Badge>
    </p>
    <Chart
      type="hbar"
      stack
      legend={false}
      labels={["WaveMark Capital", "Envato Finances", "QBridge Tech"]}
      series={[
        { name: "WaveMark Capital", data: [7652000], color: "var(--ui-success)" },
        { name: "Envato Finances", data: [3879100], color: "var(--ui-warning)" },
        { name: "QBridge Tech", data: [1248600], color: "var(--ui-error)" },
      ]}
    />
    <ul class="capital__rows">
      {["WaveMark Capital", "Envato Finances", "QBridge Tech"].map((fund: string, i: number) => (
        <li class="capital__row">
          <Avatar name={fund} size="sm" />
          <span class="capital__fund">{fund}</span>
          <span class="capital__right">
            <span class="capital__cap">Capital In</span>
            <span class="capital__val">{["$7,652,000", "$3,879,100", "$1,248,600"][i]}</span>
          </span>
        </li>
      ))}
    </ul>
  </Card>
</div>

<style is:global>
  .capital { display: grid; justify-items: center; }
  .capital__card { inline-size: min(34rem, 100%); }
  .capital__head { display: flex; align-items: center; justify-content: space-between; gap: var(--ui-space-2); padding-block-end: var(--ui-space-2); border-block-end: 1px solid var(--ui-border); }
  .capital__title { margin: 0; color: var(--ui-foreground); font-size: var(--ui-text-md); font-weight: var(--ui-font-semibold); }
  .capital__total { display: flex; align-items: center; gap: var(--ui-space-2); margin: var(--ui-space-3) 0 var(--ui-space-2); color: var(--ui-foreground); font-size: 1.75rem; line-height: 1.1; font-weight: var(--ui-font-semibold); font-variant-numeric: tabular-nums; }
  .capital__rows { display: grid; margin: var(--ui-space-3) 0 0; padding: 0; list-style: none; }
  .capital__row { display: flex; align-items: center; gap: var(--ui-space-2); padding: var(--ui-space-2) 0; }
  .capital__row + .capital__row { border-block-start: 1px solid var(--ui-border); }
  .capital__fund { color: var(--ui-foreground); font-size: var(--ui-text-md); font-weight: var(--ui-font-medium); }
  .capital__right { display: grid; justify-items: end; margin-inline-start: auto; }
  .capital__cap { color: var(--ui-muted-foreground); font-size: var(--ui-text-xs); }
  .capital__val { color: var(--ui-foreground); font-size: var(--ui-text-md); font-variant-numeric: tabular-nums; }
</style>`;
