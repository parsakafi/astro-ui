# Alert

Zero-JS feedback message. Role is automatic: `alert` for errors,
`status` otherwise (override with `role`).

```astro
---
import { Alert } from "astro-ui";
---
<Alert variant="success">
  <Fragment slot="title">Saved</Fragment>
  Your changes are live.
</Alert>
```

## Props

| Prop           | Type                                  | Default | Notes                          |
|----------------|---------------------------------------|---------|--------------------------------|
| `variant`      | `info \| success \| warning \| error` | `info`  |                                |
| `role`         | `alert \| status \| none`             | auto    | `none` removes the role        |
| `class` / `id` | `string`                              | —       | merged via `cn()`              |
| `ariaLabel`    | `string`                              | —       | when the message needs a label |

Slots: `title`, default (description).

## Accessibility

Errors use `role="alert"` (immediate announcement); other variants use
polite `role="status"`. Icon is `aria-hidden`. Dismiss buttons are an
app-level recipe — see `docs/events.md`.

## Theming / customization

`--ui-{info,success,warning,error}` borders + `-muted` surfaces.

## JS requirements

**JavaScript required: No** (dismiss/auto-expire needs app JS).
