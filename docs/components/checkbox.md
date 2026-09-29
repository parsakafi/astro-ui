# Checkbox

Zero-JS boolean control. Native `<input type="checkbox">` wrapped in a `<label>` so the entire row is clickable with
correct semantics. `checked` sets the initial server-rendered state; toggling is native browser behavior.

```astro
---
import { Checkbox, Label } from "astro-ui";
---
<fieldset>
  <legend>Notifications</legend>
  <Checkbox name="news" variant="primary" checked>Email me news</Checkbox>
  <Checkbox name="digest" variant="secondary">Weekly digest</Checkbox>
  <Checkbox name="sms" disabled>SMS (unavailable)</Checkbox>
  <Checkbox name="promo" indeterminate label="Promo (indeterminate)" />
</fieldset>

<!-- Shape + orientation -->
<Checkbox name="a" shape="rounded" checked label="Rounded" />
<Checkbox name="b" shape="square" checked label="Square" />
<Checkbox name="c" orientation="vertical" checked label="Vertical layout" />

<!-- Colors -->
<Checkbox name="x" variant="destructive" checked label="Destructive" />
<Checkbox name="y" variant="success" checked label="Success" />
<Checkbox name="z" variant="warning" checked label="Warning" />
<Checkbox name="i" variant="info" checked label="Info" />
```

## Props

| Prop              | Type                                                                                    | Default      | Notes                                                                                                                |
|-------------------|-----------------------------------------------------------------------------------------|--------------|----------------------------------------------------------------------------------------------------------------------|
| `name`            | `string`                                                                                | —            | native `name` attribute                                                                                              |
| `value`           | `string`                                                                                | —            | native `value` attribute                                                                                             |
| `checked`         | `boolean`                                                                               | `false`      | initial checked state (server-rendered)                                                                              |
| `required`        | `boolean`                                                                               | `false`      | native `required`                                                                                                    |
| `disabled`        | `boolean`                                                                               | `false`      | native `disabled`                                                                                                    |
| `invalid`         | `boolean`                                                                               | `false`      | visual error ring; set `aria-describedby` to point at error text                                                     |
| `size`            | `xs \| sm \| md \| lg \| xl`                                                            | `md`         | control + label spacing scale                                                                                        |
| `variant`         | `primary \| secondary \| muted \| destructive \| success \| warning \| info \| inherit` | `primary`    | check color + border color                                                                                           |
| `shape`           | `square \| rounded`                                                                     | `square`     | `rounded` = full-radius check box                                                                                    |
| `orientation`     | `horizontal \| vertical`                                                                | `horizontal` | label layout direction                                                                                               |
| `indeterminate`   | `boolean`                                                                               | `false`      | visual mixed state (`aria-checked="mixed"`); the live indeterminate state requires client JS if you need it to react |
| `label`           | `string`                                                                                | —            | short label rendered after the box; slot content takes precedence                                                    |
| `class` / `id`    | `string`                                                                                | —            | `class` merged via `cn()`                                                                                            |
| `ariaLabel`       | `string`                                                                                | —            | when set, the label slot content is hidden from AT (use for icon-only checkboxes)                                    |
| `ariaDescribedby` | `string`                                                                                | —            | points at hint/error text                                                                                            |

### Slots

| Slot    | Notes                                                                      |
|---------|----------------------------------------------------------------------------|
| default | Label content (text, icons, etc.). When absent, the `label` prop is shown. |

Extra attributes (`data-*`, `aria-*`, `form*`, …) are forwarded to the `<label>` element.

## States

`unchecked · checked · indeterminate (visual) · disabled · invalid`

Indeterminate is purely visual in the zero-JS model: the checkmark hidden and `aria-checked="mixed"` is set, but the
actual indeterminate state of the native control still requires a tiny bit of client JS if you need it to toggle with
user interaction. The visual + a11y foundation is here.

## Accessibility

Native checkbox semantics. Keyboard: Tab to the control, Space to toggle. Group related checkboxes in a `<fieldset>`
with a `<legend>`. The `indeterminate` prop sets `aria-checked="mixed"` for screen readers. Invalid state is visual
only — pair with `aria-describedby` pointing at the error message.

## Theming / customization

Token-driven: `--ui-foreground` text, `--ui-ring` focus ring, `--ui-radius-*` for shape, variant colors from
`--ui-primary`, `--ui-success`, `--ui-warning`, `--ui-error`, `--ui-info`, `--ui-secondary-foreground`,
`--ui-muted-foreground`, `--ui-carbon`. Tailwind: `<Checkbox class="w-full">` on the wrapping label.

## JavaScript requirements

**JavaScript required: No.** Toggling is native browser behavior. The indeterminate visual state is server-rendered;
making it react to user interaction requires client JS.
