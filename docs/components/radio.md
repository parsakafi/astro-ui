# Radio

Zero-JS single-choice control. Native `<input type="radio">` wrapped in a `<label>` so the entire row is clickable with
correct semantics. Radios in one group share `name`; `checked` sets the initial server-rendered state; selection is
native browser behavior (arrows move within the group, Tab enters it).

```astro
---
import { Radio, Label } from "astro-ui";
---
<fieldset>
  <legend>Plan</legend>
  <Radio name="plan" value="free" checked>Free</Radio>
  <Radio name="plan" value="pro">Pro</Radio>
  <Radio name="plan" value="enterprise" disabled>Enterprise (unavailable)</Radio>
</fieldset>

<!-- Sizes -->
<Radio name="r-xs" value="xs" size="xs">xs</Radio>
<Radio name="r-sm" value="sm" size="sm">sm</Radio>
<Radio name="r-md" value="md" size="md" checked>md</Radio>
<Radio name="r-lg" value="lg" size="lg">lg</Radio>
<Radio name="r-xl" value="xl" size="xl">xl</Radio>

<!-- Colors -->
<Radio name="c" value="destructive" variant="destructive">Destructive</Radio>
<Radio name="c" value="success" variant="success">Success</Radio>
<Radio name="c" value="warning" variant="warning">Warning</Radio>
<Radio name="c" value="info" variant="info">Info</Radio>
<Radio name="c" value="secondary" variant="secondary">Secondary</Radio>
<Radio name="c" value="muted" variant="muted">Muted</Radio>
```

## Props

| Prop              | Type                                                                                    | Default   | Notes                                                                   |
|-------------------|-----------------------------------------------------------------------------------------|-----------|-------------------------------------------------------------------------|
| `name`            | `string`                                                                                | —         | native `name`; radios sharing a name form a group                       |
| `value`           | `string`                                                                                | —         | native `value`                                                          |
| `checked`         | `boolean`                                                                               | `false`   | initial selected state (server-rendered)                                |
| `required`        | `boolean`                                                                               | `false`   | native `required`                                                       |
| `disabled`        | `boolean`                                                                               | `false`   | native `disabled`                                                       |
| `invalid`         | `boolean`                                                                               | `false`   | visual error ring; pair with `aria-describedby` pointing at error text  |
| `size`            | `xs \| sm \| md \| lg \| xl`                                                            | `md`      | control + label spacing scale                                           |
| `variant`         | `primary \| secondary \| muted \| destructive \| success \| warning \| info \| inherit` | `primary` | ring + dot color                                                        |
| `class` / `id`    | `string`                                                                                | —         | `class` merged via `cn()`                                               |
| `ariaLabel`       | `string`                                                                                | —         | when set, the slot content is hidden from AT (use for icon-only radios) |
| `ariaDescribedby` | `string`                                                                                | —         | hint/error text id                                                      |

Extra attributes (`data-*`, `aria-*`, `form*`, …) are forwarded to the `<label>` element.

### Slots

| Slot    | Notes                             |
|---------|-----------------------------------|
| default | Label content (text, icons, etc.) |

## States

`unchecked · checked · disabled · invalid`

Invalid state is visual (error ring) — pair with `aria-describedby` pointing at error text, since `aria-invalid` is not
allowed on the radio role.

## Accessibility

Native radio semantics. Group related radios in a `<fieldset>` with a `<legend>`. Keyboard: Tab moves into the group,
arrow keys move between options, Space selects. Always label the group with `<legend>`, not just individual radios.

## Theming / customization

Token-driven: `--ui-foreground` text, `--ui-ring` focus ring, `--ui-radius-full` for the radio circle, variant colors
from `--ui-primary`, `--ui-success`, `--ui-warning`, `--ui-error`, `--ui-info`, `--ui-secondary-foreground`,
`--ui-muted-foreground`, `--ui-carbon`. Tailwind: `<Radio class="w-full">` on the wrapping label.

## JavaScript requirements

**JavaScript required: No.** Selection is native browser behavior.
