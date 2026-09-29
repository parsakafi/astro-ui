# Badge

Zero-JS status/count label (`<span>`). Never color-only: always include a
text label alongside any dot/count.

```astro
---
import { Badge } from "astro-ui";
---
<Badge variant="success">Active</Badge>
<Badge variant="error" ariaLabel="5 unread messages">5</Badge>
```

## Props

| Prop           | Type                                                                              | Default   | Notes                   |
|----------------|-----------------------------------------------------------------------------------|-----------|-------------------------|
| `variant`      | `primary \| secondary \| outline \| success \| warning \| error \| info \| muted` | `primary` |                         |
| `size`         | `sm \| md`                                                                        | `md`      |                         |
| `class` / `id` | `string`                                                                          | —         | merged via `cn()`       |
| `ariaLabel`    | `string`                                                                          | —         | context for bare counts |

## States

Static; hover/focus styles intentionally absent (non-interactive).

## Accessibility

Plain inline `<span>`. For counts, add `ariaLabel` ("5 unread messages")
so screen readers get context.

## Theming / customization

`--ui-*-muted` surfaces + matching border/text tokens; dark-mode ready.

## JS requirements

**JavaScript required: No.**
