# Switch

Zero-JS on/off toggle. Native `<input type="checkbox" role="switch">` wrapped in a `<label>` so the whole row is
clickable with correct semantics. Screen readers announce "On"/"Off"; keyboard support is native Tab/Space; `checked`
sets the initial server-rendered state; toggling is native browser behavior.

```astro
---
import { Switch, Label } from "astro-ui";
---
<Switch name="wifi" variant="primary" checked>Wi-Fi</Switch>
<Switch name="bluetooth" variant="secondary">Bluetooth</Switch>
<Switch name="airplane" disabled>Airplane mode (disabled)</Switch>
<Switch name="compact" size="sm" variant="muted">Small switch</Switch>
<Switch name="sync" variant="destructive" invalid aria-describedby="sync-error">Sync</Switch>
<p id="sync-error" class="demo-hint">Sync failed — invalid state demo.</p>

<!-- Sizes with label prop -->
<Switch name="xs" size="xs" checked label="xs" />
<Switch name="sm" size="sm" checked label="sm" />
<Switch name="md" size="md" checked label="md" />
<Switch name="lg" size="lg" checked label="lg" />
<Switch name="xl" size="xl" checked label="xl" />

<!-- Shapes -->
<Switch name="square" size="md" shape="square" checked label="Square" />
<Switch name="rounded" size="md" shape="rounded" checked label="Rounded" />

<!-- Colors -->
<Switch name="success" variant="success" checked label="Success" />
<Switch name="warning" variant="warning" checked label="Warning" />
<Switch name="info" variant="info" checked label="Info" />
<Switch name="destructive" variant="destructive" checked label="Destructive" />
```

## Props

| Prop              | Type                                                                                    | Default   | Notes                                                                     |
|-------------------|-----------------------------------------------------------------------------------------|-----------|---------------------------------------------------------------------------|
| `name`            | `string`                                                                                | —         | native `name`                                                             |
| `value`           | `string`                                                                                | —         | native `value`                                                            |
| `checked`         | `boolean`                                                                               | `false`   | initial on state (server-rendered)                                        |
| `required`        | `boolean`                                                                               | `false`   | native `required`                                                         |
| `disabled`        | `boolean`                                                                               | `false`   | native `disabled`                                                         |
| `invalid`         | `boolean`                                                                               | `false`   | visual error state; pair with `aria-describedby` pointing at error text   |
| `size`            | `xs \| sm \| md \| lg \| xl`                                                            | `md`      | track + thumb size scale                                                  |
| `variant`         | `primary \| secondary \| muted \| destructive \| success \| warning \| info \| inherit` | `primary` | checked track color                                                       |
| `shape`           | `rounded \| square`                                                                     | `rounded` | thumb shape; `square` = sharp corners                                     |
| `label`           | `string`                                                                                | —         | short label rendered after the thumb when no slot content is provided     |
| `class` / `id`    | `string`                                                                                | —         | `class` merged via `cn()`                                                 |
| `ariaLabel`       | `string`                                                                                | —         | when set, the slot content is hidden from AT (use for icon-only switches) |
| `ariaDescribedby` | `string`                                                                                | —         | hint/error text id                                                        |

### Slots

| Slot    | Notes                                                               |
|---------|---------------------------------------------------------------------|
| default | Label/content after the switch (takes precedence over `label` prop) |

Extra attributes (`data-*`, `aria-*`, `form*`, …) are forwarded to the `<input>`.

## States

`off · on · disabled · invalid`

## Accessibility

Uses `role="switch"` on the native checkbox for correct screen-reader announcements ("On"/"Off" instead of
"Checked"/"Unchecked"). Keyboard: Tab to the control, Space to toggle. Always pair with a visible label (either the slot
content or the `label` prop). Invalid state is visual — pair with `aria-describedby` pointing at the error message.

## Theming / customization

Token-driven: `--ui-input` off-track background, `--ui-foreground` thumb, `--ui-ring` focus ring, `--ui-radius-full`/
`--ui-radius-sm` for shape, variant colors from `--ui-primary`, `--ui-success`, `--ui-warning`, `--ui-error`,
`--ui-info`, `--ui-secondary-foreground`, `--ui-muted-foreground`, `--ui-carbon`. Tailwind: `<Switch class="ml-2">` on
the wrapping label.

## JavaScript requirements

**JavaScript required: No.** Toggling is native browser behavior. Use Switch for settings that take effect immediately,
and Checkbox for multi-select lists or agreements.
