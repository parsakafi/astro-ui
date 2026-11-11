# Input

Zero-JS text control. Native `<input>` with token-driven states (focus ring, invalid, disabled, readonly). Compose with
`Label` + hint/error text; wire them with `id` / `aria-describedby`.

```astro
---
import { Input, Label } from "astro-ui";
---
<Label for="email">Email</Label>
<Input id="email" type="email" placeholder="you@example.com" aria-describedby="email-hint" />
<p id="email-hint" class="demo-hint">We never share your email.</p>

<!-- Variants -->
<Input variant="primary" placeholder="Primary border" />
<Input variant="secondary" placeholder="Secondary border" />
<Input variant="muted" placeholder="Muted border" />
<Input variant="error" placeholder="Error border" />
<Input variant="success" placeholder="Success border" />
<Input variant="warning" placeholder="Warning border" />
<Input variant="info" placeholder="Info border" />

<!-- Sizes -->
<Input size="xs" placeholder="xs" />
<Input size="sm" placeholder="sm" />
<Input size="md" placeholder="md" />
<Input size="lg" placeholder="lg" />
<Input size="xl" placeholder="xl" />

<!-- States -->
<Input disabled placeholder="Disabled" />
<Input readonly value="Read-only value" />
<Input invalid aria-describedby="input-error" value="bad-input" />
<p id="input-error" class="demo-hint">This field has an error.</p>

<!-- Explicit style forwarding -->
<Input style="max-width:20rem" placeholder="Constrained width via style" />

<!-- Every native type -->
<Input type="search" placeholder="Search..." />
<Input type="password" value="s3cret" />
<Input type="number" min={1} max={10} step={1} value={3} />
<Input type="date" value="2026-09-18" />
<Input type="color" value="#2563eb" />
<Input type="file" accept="image/*" />
<Input type="range" min={0} max={100} value={40} />
```

## Props

| Prop                      | Type                                                                                                                                                 | Default   | Notes                                    |
|---------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|------------------------------------------|
| `type`                    | `text \| email \| password \| number \| search \| tel \| url \| date \| time \| datetime-local \| month \| week \| color \| file \| range \| hidden` | `text`    | constrained to valid HTML input types    |
| `name`                    | `string`                                                                                                                                             | —         | native `name`                            |
| `value`                   | `string \| number`                                                                                                                                   | —         | controlled value                         |
| `placeholder`             | `string`                                                                                                                                             | —         | native `placeholder`                     |
| `min` / `max` / `step`    | `string \| number`                                                                                                                                   | —         | numeric/date bounds                      |
| `minlength` / `maxlength` | `number`                                                                                                                                             | —         | length constraints                       |
| `accept`                  | `string`                                                                                                                                             | —         | file input accept                        |
| `autocomplete`            | `string`                                                                                                                                             | —         | native autocomplete token                |
| `pattern`                 | `string`                                                                                                                                             | —         | native pattern                           |
| `list`                    | `string`                                                                                                                                             | —         | datalist id                              |
| `multiple`                | `boolean`                                                                                                                                            | `false`   | file/input multiple                      |
| `required`                | `boolean`                                                                                                                                            | `false`   | native `required`                        |
| `disabled`                | `boolean`                                                                                                                                            | `false`   | native `disabled`                        |
| `readonly`                | `boolean`                                                                                                                                            | `false`   | native `readonly`                        |
| `invalid`                 | `boolean`                                                                                                                                            | `false`   | visual error ring + `aria-invalid`       |
| `size`                    | `xs \| sm \| md \| lg \| xl`                                                                                                                         | `md`      | height + padding scale                   |
| `variant`                 | `inherit \| primary \| secondary \| muted \| error \| success \| warning \| info`                                                              | `inherit` | border color                             |
| `class` / `id`            | `string`                                                                                                                                             | —         | `class` merged via `cn()`                |
| `ariaLabel`               | `string`                                                                                                                                             | —         | accessible name (when no visible label)  |
| `ariaDescribedby`         | `string`                                                                                                                                             | —         | hint/error text id                       |
| `style`                   | `string`                                                                                                                                             | —         | inline styles forwarded to the `<input>` |

Extra attributes (`data-*`, `aria-*`, form attributes, `formaction`, …) are forwarded to the `<input>`.

## States

`default · hover · focus-visible · active · disabled · readonly · invalid`

## Accessibility

Native input semantics. Always pair with a `<Label for="…">` or `aria-label`. Use `aria-describedby` for hint/error
text. `aria-invalid` is set automatically when `invalid` is true.

## Theming / customization

Token-driven: `--ui-foreground`, `--ui-background`, `--ui-input` border, `--ui-ring` focus, `--ui-radius-md`, size via
`--ui-text-*` and padding. Variants change the border color. Tailwind: `<Input class="w-full">`.

## JavaScript requirements

**JavaScript required: No.** All behavior is native browser. Validation display is server/form-driven via `invalid` — no
JS shipped.
