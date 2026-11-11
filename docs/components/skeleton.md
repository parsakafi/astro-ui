# Skeleton

Zero-JS placeholder for content that is loading or not yet available. Renders a gray block in one of three shapes (text
line, rectangle, circle). Animates by default with a pulse effect; disable with `animated={false}` for static
placeholders.

```astro
---
import { Skeleton } from "@parsakafi/astro-ui";
---
<!-- Text lines -->
<div style="display:flex;flex-direction:column;gap:var(--ui-space-2)">
  <Skeleton width="60%" />
  <Skeleton width="80%" />
  <Skeleton width="45%" />
</div>

<!-- Circle -->
<div style="display:flex;align-items:center;gap:var(--ui-space-3)">
  <Skeleton variant="circle" width="2.5rem" height="2.5rem" />
  <div style="display:flex;flex-direction:column;gap:var(--ui-space-1)">
    <Skeleton width="50%" />
    <Skeleton width="70%" />
  </div>
</div>

<!-- Rectangle (card preview) -->
<div style="border:1px solid var(--ui-border);border-radius:var(--ui-radius-lg);padding:var(--ui-space-4);display:flex;flex-direction:column;gap:var(--ui-space-3)">
  <Skeleton variant="rect" width="100%" height="120px" />
  <Skeleton width="60%" />
  <Skeleton width="80%" />
  <div slot="footer" style="display:flex;justify-content:space-between;margin-top:var(--ui-space-2)">
    <Skeleton width="80px" height="24px" />
    <Skeleton width="60px" height="24px" />
  </div>
</div>

<!-- Sizes -->
<Skeleton size="xs" />
<Skeleton size="sm" />
<Skeleton size="md" />
<Skeleton size="lg" />
<Skeleton size="xl" />
<Skeleton size="2xl" />

<!-- Static (no animation) -->
<Skeleton width="100%" height="1rem" animated={false} />
```

## Props

| Prop           | Type                                | Default | Notes                                                                |
|----------------|-------------------------------------|---------|----------------------------------------------------------------------|
| `variant`      | `text \| rect \| circle`            | `text`  | shape: text line, rectangle, or circle                               |
| `width`        | `string`                            | —       | CSS width (e.g. "60%", "120px"); defaults to shape's intrinsic width |
| `height`       | `string`                            | —       | CSS height; for `text` variant, intrinsic height from size is used   |
| `size`         | `xs \| sm \| md \| lg \| xl \| 2xl` | `md`    | intrinsic size for `rect` and `circle` variants                      |
| `animated`     | `boolean`                           | `true`  | pulse animation; set `false` for static placeholders                 |
| `class` / `id` | `string`                            | —       | `class` merged via `cn()`                                            |

Extra attributes are forwarded to the skeleton element.

## States

`loading (animated pulse) · static (no animation) · text · rect · circle`

## Accessibility

Skeletons are decorative placeholders — set `aria-hidden="true"` on the wrapper (done automatically) so screen readers
skip them. When the real content loads, replace the skeleton with the actual content. Do not use skeletons to represent
error states or empty results; use an empty-state message instead.

## Theming / customization

Token-driven: `--ui-muted` background, `--ui-radius-md` (text/rect) or `--ui-radius-full` (circle). Animation uses a CSS
opacity pulse. Tailwind: `<Skeleton class="w-full h-4">`.

## JavaScript requirements

**JavaScript required: No.** The skeleton is a pure visual placeholder; swapping it for real content is handled by the
consumer's rendering model (Astro islands, page navigation, etc.).
