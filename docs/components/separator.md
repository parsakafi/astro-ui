# Separator

Zero-JS thematic break. Horizontal renders `<hr>`; vertical renders
`<div role="separator">` (an `<hr>` cannot be vertical).

```astro
---
import { Separator } from "@parsakafi/astro-ui";
---
<Separator />
<Separator orientation="vertical" label="Separates filters from results" />
```

## Props

| Prop           | Type                     | Default      | Notes                                    |
|----------------|--------------------------|--------------|------------------------------------------|
| `orientation`  | `horizontal \| vertical` | `horizontal` |                                          |
| `label`        | `string`                 | —            | accessible name when it delimits regions |
| `class` / `id` | `string`                 | —            | merged via `cn()`                        |

## Accessibility

Vertical separators expose `aria-orientation="vertical"`. Decorative
separators need no label; meaningful ones get one.

## Theming / customization

`--ui-border` line, `--ui-space-4` rhythm.

## JS requirements

**JavaScript required: No.**
