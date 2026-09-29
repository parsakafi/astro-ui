# Spinner & Skeleton

Zero-JS loading indicators (pure CSS animation; reduced-motion safe).

```astro
---
import { Spinner, Skeleton } from "astro-ui";
---
<Spinner label="Loading results" />

<div aria-busy="true">
  <Skeleton variant="circle" />
  <Skeleton variant="text" />
  <Skeleton variant="rect" height="6rem" />
</div>
```

## Props — Spinner

| Prop           | Type             | Default   |
|----------------|------------------|-----------|
| `size`         | `sm \| md \| lg` | `md`      |
| `label`        | `string`         | `Loading` |
| `class` / `id` | `string`         | —         |

## Props — Skeleton

| Prop               | Type                     | Default | Notes                    |
|--------------------|--------------------------|---------|--------------------------|
| `variant`          | `text \| rect \| circle` | `text`  |                          |
| `width` / `height` | CSS length `string`      | —       | e.g. `"12rem"`, `"48px"` |
| `class` / `id`     | `string`                 | —       |                          |

## Accessibility

Spinner: `role="status"` + screen-reader label. Skeleton: `aria-hidden`
(place `aria-busy="true"` + a live region on the loading container).

## Theming / customization

`--ui-primary` (spinner), `--ui-muted` (skeleton pulse), pulse/spin
durations respect `prefers-reduced-motion` via `base.css`.

## JS requirements

**JavaScript required: No.**
