# Spinner

Zero-JS loading indicator. CSS-only animated ring with an accessible label. Used inside `Button` (loading state) and
standalone for page-level or region-level loading states.

```astro
---
import { Spinner } from "astro-ui";
---
<!-- Default -->
<Spinner />

<!-- Sizes -->
<Spinner size="xs" />
<Spinner size="sm" />
<Spinner size="md" />
<Spinner size="lg" />
<Spinner size="xl" />
<Spinner size="2xl" />

<!-- Colors -->
<Spinner variant="primary" />
<Spinner variant="secondary" />
<Spinner variant="muted" />
<Spinner variant="error" />
<Spinner variant="success" />
<Spinner variant="warning" />
<Spinner variant="info" />
<Spinner variant="inherit" />

<!-- With visible label -->
<Spinner label="Loading results…" />

<!-- Inline with text -->
<span style="display:inline-flex;align-items:center;gap:var(--ui-space-2)">
  <Spinner size="sm" />
  <span>Saving…</span>
</span>
```

## Props

| Prop           | Type                                                                                    | Default     | Notes                                               |
|----------------|-----------------------------------------------------------------------------------------|-------------|-----------------------------------------------------|
| `size`         | `xs \| sm \| md \| lg \| xl \| 2xl`                                                     | `md`        | ring diameter                                       |
| `label`        | `string`                                                                                | `"Loading"` | accessible label (rendered as visually-hidden text) |
| `variant`      | `inherit \| primary \| secondary \| muted \| error \| success \| warning \| info` | `primary`   | ring color                                          |
| `class` / `id` | `string`                                                                                | —           | `class` merged via `cn()`                           |

Extra attributes are forwarded to the wrapper `<span>`.

## States

`spinning (CSS animation) · labeled (visible text) · unlabeled (sr-only text)`

## Accessibility

The spinner uses `role="status"` with a visually-hidden label inside a `.aui-sr-only` span. Screen readers announce the
label (e.g. "Loading results") when the spinner appears. For live regions that update frequently, pair with
`aria-live="polite"` on a parent element. The spinner itself does not block interaction — consumers should disable the
UI it represents.

## Theming / customization

Token-driven: `--ui-primary`/`--ui-success`/etc. for the ring stroke (via `stroke-current` + color set on the wrapper),
`--ui-radius-full`. Animation is a CSS rotate + opacity pulse. Tailwind: `<Spinner class="text-blue-500">` to override
the color.

## JavaScript requirements

**JavaScript required: No.** The spinner is a pure CSS animation. Clients control when it appears by toggling the
`loading` prop on `Button` or conditionally rendering the `Spinner` component.
