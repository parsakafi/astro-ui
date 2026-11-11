# Card

Zero-JS content container (`<article>` by default) built for composition —
no `title`/`footer` props by design.

```astro
---
import { Card } from "@parsakafi/astro-ui";
---
<Card>
  <h2 slot="header">Title</h2>
  <p>Body content.</p>
  <div slot="footer">Actions</div>
</Card>
```

## Props

| Prop           | Type                          | Default   | Notes                                |
|----------------|-------------------------------|-----------|--------------------------------------|
| `as`           | `article \| section \| div`   | `article` | semantic wrapper                     |
| `variant`      | `default \| outline \| ghost` | `default` | `ghost` removes border+shadow        |
| `class` / `id` | `string`                      | —         | merged via `cn()`                    |
| `ariaLabel`    | `string`                      | —         | when the card needs a landmark label |

Slots: `header`, default (content), `footer`. Empty named slots render
no wrapper markup (`Astro.slots.has` guard).

## Accessibility

Landmark semantics come from `as` + consumer headings. Keep heading
order intact inside cards; don't skip levels.

## Theming / customization

`--ui-border`, `--ui-shadow-sm`, `--ui-radius-lg`, `--ui-muted` footer.
Tailwind: `<Card class="max-w-md">`.

## JS requirements

**JavaScript required: No.**
