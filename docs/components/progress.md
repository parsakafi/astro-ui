# Progress

Zero-JS progress indicator. Bar (linear) or circle (circular) variant, determinate (with `value`) or indeterminate (no
`value`). Token-driven color and size.

```astro
---
import { Progress } from "@parsakafi/astro-ui";
---
<!-- Determinate bar -->
<Progress value={0} label="0%" showValue />
<Progress value={25} label="25%" showValue />
<Progress value={50} label="50%" showValue />
<Progress value={75} label="75%" showValue />
<Progress value={100} label="100%" showValue />

<!-- Bar colors -->
<Progress value={33} color="primary" />
<Progress value={33} color="secondary" />
<Progress value={33} color="success" />
<Progress value={33} color="warning" />
<Progress value={33} color="error" />
<Progress value={33} color="info" />
<Progress value={33} color="muted" />

<!-- Dynamic color: hue follows the value (error → success) -->
<Progress value={10} color="dynamic" label="10%" showValue />
<Progress value={50} color="dynamic" label="50%" showValue />
<Progress value={100} color="dynamic" label="100%" showValue />

<!-- Indeterminate (no value) -->
<Progress label="Indeterminate" />

<!-- Circle variant -->
<Progress value={60} variant="circle" size="sm" showValue />
<Progress value={60} variant="circle" size="md" showValue />
<Progress value={60} variant="circle" size="lg" showValue />
<Progress value={60} variant="circle" size="xl" showValue />
<Progress value={60} variant="circle" size="2xl" showValue />

<!-- Circle colors -->
<Progress value={40} variant="circle" color="primary" size="md" showValue />
<Progress value={40} variant="circle" color="error" size="md" showValue />
<Progress value={40} variant="circle" color="success" size="md" showValue />
<Progress value={40} variant="circle" color="warning" size="md" showValue />
<Progress value={40} variant="circle" color="info" size="md" showValue />

<!-- Sizes (bar) -->
<Progress value={10} size="xs" label="xs" showValue />
<Progress value={20} size="sm" label="sm" showValue />
<Progress value={30} size="lg" label="lg" showValue />
<Progress value={40} size="xl" label="xl" showValue />
<Progress value={50} size="2xl" label="2xl" showValue />
```

## Props

| Prop           | Type                                                                                  | Default   | Notes                                           |
|----------------|---------------------------------------------------------------------------------------|-----------|-------------------------------------------------|
| `value`        | `number`                                                                              | —         | filled percentage 0–100; omit for indeterminate |
| `variant`      | `bar \| circle`                                                                       | `bar`     | linear track or circular ring                   |
| `size`         | `xs \| sm \| md \| lg \| xl \| 2xl`                                                   | `md`      | track/ring thickness + label size               |
| `color`        | `primary \| secondary \| success \| warning \| error \| info \| muted \| dynamic` | `primary` | fill/stroke color; `dynamic` maps the value onto an error → success hue |
| `label`        | `string`                                                                              | —         | optional label above/beside the track           |
| `showValue`    | `boolean`                                                                             | `false`   | shows the current value as text (e.g. "64%")    |
| `class` / `id` | `string`                                                                              | —         | `class` merged via `cn()`                       |
| `ariaLabel`    | `string`                                                                              | —         | accessible name for the progress region         |

Extra attributes are forwarded. The bar variant forwards to the track `<div>`; the circle variant forwards to the
wrapping `<span>`.

## States

`determinate (value given) · indeterminate (no value) · complete (value === 100)`

## Accessibility

The bar variant uses `role="progressbar"` with `aria-valuenow`, `aria-valuemin="0"`, `aria-valuemax="100"`, and
`aria-label` (or `aria-labelledby` when `label` is set). The circle variant uses `role="progressbar"` on the wrapper
with the same ARIA attributes. When `showValue` is true, the numeric value is also rendered as visible text.

## Theming / customization

Token-driven: `--ui-muted` track background, `--ui-primary`/`--ui-success`/etc. fill, `--ui-radius-full` for rounded
track ends. Circle stroke uses `stroke-current` so it inherits the text color set by the variant. Tailwind:
`<Progress class="w-full">` on the bar, `<Progress class="size-24">` on the circle wrapper.

## JavaScript requirements

**JavaScript required: No.** The value is rendered server-side. For live progress updates, the consumer re-renders the
component with a new `value` (e.g. via an Astro island or a page navigation). No client-side animation loop is shipped.

`color="dynamic"` is still CSS-only: the fill width and hue are derived from `--aui-progress-percent` with the CSS
`progress()` function (Baseline 2026). To animate a bar yourself, write that one custom property (and keep
`aria-valuenow` in sync) instead of re-rendering:

```js
const bar = document.getElementById("upload");
bar.style.setProperty("--aui-progress-percent", "82");
bar.setAttribute("aria-valuenow", "82");
```

Browsers without `progress()` keep the plain token fill and a width derived from the same variable, so the bar still
tracks the value — only the hue ramp is lost.
