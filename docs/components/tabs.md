# Tabs

Tabbed content switcher following the WAI-ARIA tabs pattern — the
Astro-first answer to Tabs (line / card / segmented styles).
The tab list renders server-side from the `items` prop with the initial
tab pre-selected; panel content composes through the default slot, each
child carrying `data-tab="<value>"`. Click-to-select and arrow-key
navigation (automatic activation) come from a small scoped inline script.

```astro
---
import { Tabs } from "@parsakafi/astro-ui";
---

<Tabs
  id="settings"
  ariaLabel="Settings"
  items={[
    { value: "account", label: "Account" },
    { value: "billing", label: "Billing" },
    { value: "team", label: "Team", disabled: true },
  ]}
  defaultValue="billing"
>
  <div data-tab="account">Account panel.</div>
  <div data-tab="billing">Billing panel.</div>
  <div data-tab="team">Team panel (unavailable).</div>
</Tabs>

<!-- Variants -->
<Tabs id="t-pill" ariaLabel="Views" variant="pill" items={items}>
  <div data-tab="a">…</div>
</Tabs>
<Tabs id="t-card" ariaLabel="Views" variant="card" items={items}>
  <div data-tab="a">…</div>
</Tabs>

<!-- Sizes -->
<Tabs id="t-xs" ariaLabel="Views" size="xs" items={items}>…</Tabs>
<Tabs id="t-xl" ariaLabel="Views" size="xl" items={items}>…</Tabs>

<!-- Vertical -->
<Tabs id="t-v" ariaLabel="Views" orientation="vertical" items={items}>
  <div data-tab="a">…</div>
</Tabs>

<!-- Index fallback: children without data-tab map to item order -->
<Tabs id="t-plain" ariaLabel="Views" items={items}>
  <div>First panel.</div>
  <div>Second panel.</div>
</Tabs>
```

Without JavaScript the tab list still renders and every panel stays
visible, so SSR output remains fully meaningful — the script only
progressively enhances (hides inactive panels, wires selection).

Listening to tab changes needs no custom event system — attach a native
listener in the consuming app (see `docs/events.md`):

```astro
<script>
  document
    .querySelector('#settings [role="tablist"]')
    ?.addEventListener("click", (event) => {
      const tab = (event.target as HTMLElement).closest('[role="tab"]');
      console.log("selected:", tab?.getAttribute("aria-controls"));
    });
</script>
```

## Props

| Prop               | Type                            | Default                | Notes                                                                 |
|--------------------|---------------------------------|------------------------|-----------------------------------------------------------------------|
| `items`            | `{ value; label; disabled? }[]` | —                      | **required**: tabs in display order; `value` matches panel `data-tab` |
| `defaultValue`     | `string`                        | first non-disabled tab | initial selection; unknown/disabled values fall back                  |
| `variant`          | `line \| pill \| card`          | `line`                 | underline, filled pill, segmented card                                |
| `size`             | `xs \| sm \| md \| lg \| xl`    | `md`                   | tab padding + font scale                                              |
| `orientation`      | `horizontal \| vertical`        | `horizontal`           | vertical stacks the list beside the panels                            |
| `ariaLabel`        | `string`                        | —                      | accessible name for the tab list (recommended)                        |
| `class` / `id`     | `string`                        | —                      | `class` merged via `cn()`; `id` prefixes generated tab/panel ids      |
| `items[].disabled` | `boolean`                       | `false`                | skipped by keyboard navigation, not selectable                        |

Extra attributes are forwarded to the root element.

### Slots

| Slot    | Notes                                                                                                  |
|---------|--------------------------------------------------------------------------------------------------------|
| default | Panel children. Each child should carry `data-tab="<value>"`; children without it map to `items` order |

Panels are upgraded client-side to `role="tabpanel"` with automatic
`id` (`{id}-panel-{value}`) and `aria-labelledby` (`{id}-tab-{value}`)
wiring. Pass `id` whenever more than one tab group lives on the page so
the generated ids stay unique.

## States

`selected · unselected · disabled · hover · focus-visible`. Inactive
panels carry the native `hidden` attribute (explicit `display: none`
guard included so resets can never reveal them).

## Accessibility

- Full WAI-ARIA tabs pattern: `tablist` / `tab` / `tabpanel`,
  `aria-selected`, roving `tabindex` (one tab stop per group),
  `aria-controls` / `aria-labelledby` linkage.
- Keyboard (automatic activation — focus moves and selects together):
  Arrow keys (Left/Right horizontal, Up/Down vertical; Left/Right flip
  in RTL), Home/End jump to first/last, wrapping at the ends. Disabled
  tabs are skipped. Enter/Space activate via native button behavior.
- SSR renders the initial tab as `aria-selected="true"` /
  `tabindex="0"`; inactive panels are hidden on script init.
- Name the group with `ariaLabel` (e.g. `"Settings"`), not just the
  individual tabs. Panels are focusable (`tabindex="0"`) so keyboard
  users can scroll long content.
- Playwright keyboard spec lives in `web/tests/e2e/tabs.spec.ts`
  (role-based locators: click selection, arrow navigation, Home/End,
  disabled-tab skipping).

## Theming / customization

Token-driven: `--ui-primary` active line/pill, `--ui-muted` /
`--ui-background` card surface, `--ui-border` rules,
`--ui-muted-foreground` idle labels, `--ui-ring` focus rings,
`--ui-radius-md/lg`, `--ui-shadow-sm` card thumb. Direction-safe:
logical properties throughout (indicator uses `border-block-end` /
`border-inline-start`, so RTL mirrors automatically). Tailwind:
`<Tabs class="w-full">` on the root.

## JavaScript requirements

**JavaScript required: Yes — scoped inline script, no island needed.**
The component ships its own `<script>` (click + arrow-key handling with
automatic activation, panel wiring, `astro:after-swap` re-init); the app
adds nothing. Recommended hydration: none — the inline script is
sufficient and runs on every instance via `data-aui-tabs`.
