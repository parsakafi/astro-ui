# Label

Zero-JS form label. Native `<label>` associated with a control via `for` (matching the control's `id`). Supports
`required` indicator, disabled styling, and two sizes.

```astro
---
import { Label, Input } from "@parsakafi/astro-ui";
---
<Label for="name">Full name</Label>
<Input id="name" name="name" />

<!-- Required indicator -->
<Label for="email" required>Email address</Label>
<Input id="email" type="email" required />

<!-- Sizes -->
<Label for="a" size="sm">Small label</Label>
<Input id="a" />
<Label for="b" size="md">Medium label (default)</Label>
<Input id="b" />

<!-- Disabled style (mirror the control state) -->
<Label for="c" disabled>Disabled field</Label>
<Input id="c" disabled />
```

## Props

| Prop           | Type       | Default | Notes                                                      |
|----------------|------------|---------|------------------------------------------------------------|
| `for`          | `string`   | —       | must match the control's `id`                              |
| `required`     | `boolean`  | `false` | shows a required indicator (asterisk) after the label text |
| `disabled`     | `boolean`  | `false` | visual disabled style (mirrors the control)                |
| `size`         | `sm \| md` | `md`    | text size                                                  |
| `class` / `id` | `string`   | —       | `class` merged via `cn()`                                  |

Extra attributes are forwarded to the `<label>` element.

### Slots

| Slot    | Notes                                                                          |
|---------|--------------------------------------------------------------------------------|
| default | Label text content. The required indicator is appended after the slot content. |

## States

`default · required · disabled`

The required indicator is a visual token (asterisk) — always enforce requiredness on the actual form control with the
native `required` attribute.

## Accessibility

Native `<label>` semantics. The `for` attribute associates the label with its control, enabling click-to-focus and
screen-reader announcements. Never use a `<label>` without associating it with a control.

## Theming / customization

Token-driven: `--ui-foreground` text, `--ui-font-medium`, `--ui-text-xs`/`--ui-text-sm` for sizes. The required
indicator uses `--ui-foreground`. Tailwind: `<Label class="text-base">`.

## JavaScript requirements

**JavaScript required: No.**
