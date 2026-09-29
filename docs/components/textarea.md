# Textarea

Zero-JS multi-line text control. Native `<textarea>` with the same token-driven states as `Input` (focus ring, invalid,
disabled, readonly). Compose with `Label` + hint/error text; wire them with `id` / `aria-describedby`.

```astro
---
import { Textarea, Label } from "astro-ui";
---
<Label for="bio">Bio</Label>
<Textarea id="bio" name="bio" rows={4} maxlength={280} placeholder="Tell us about yourself…" aria-describedby="bio-hint" />
<p id="bio-hint" class="demo-hint">Max 280 characters.</p>

<!-- Variants -->
<Textarea variant="primary" placeholder="Primary border" />
<Textarea variant="secondary" placeholder="Secondary border" />
<Textarea variant="muted" placeholder="Muted border" />
<Textarea variant="destructive" placeholder="Destructive border" />
<Textarea variant="success" placeholder="Success border" />
<Textarea variant="warning" placeholder="Warning border" />
<Textarea variant="info" placeholder="Info border" />

<!-- Sizes -->
<Textarea size="xs" placeholder="xs" />
<Textarea size="sm" placeholder="sm" />
<Textarea size="md" placeholder="md" />
<Textarea size="lg" placeholder="lg" />
<Textarea size="xl" placeholder="xl" />

<!-- States -->
<Textarea disabled placeholder="Disabled" />
<Textarea readonly value="Read-only content" />
<Textarea invalid aria-describedby="ta-error" value="bad input" />
<p id="ta-error" class="demo-hint">This field has an error.</p>

<!-- Character counter -->
<Textarea showCount maxlength={100} placeholder="Type here… (counter shown)" />

<!-- Clearable (visual affordance; clearing needs JS) -->
<Textarea clearable value="Clearable text" placeholder="Click the × to clear" />

<!-- Counter badge -->
<Textarea counter maxlength={50} placeholder="With counter badge" />

<!-- Resize behavior -->
<Textarea resize="none" rows={3} placeholder="No resize" />
<Textarea resize="vertical" rows={3} placeholder="Vertical only" />
<Textarea resize="horizontal" rows={3} placeholder="Horizontal only" />
<Textarea resize="both" rows={3} placeholder="Both directions" />

<!-- Max rows / min rows (clamps autosize) -->
<Textarea maxRows={6} minRows={2} placeholder="Clamped autosize" />
```

## Props

| Prop                      | Type                                                                                    | Default    | Notes                                                                          |
|---------------------------|-----------------------------------------------------------------------------------------|------------|--------------------------------------------------------------------------------|
| `name`                    | `string`                                                                                | —          | native `name`                                                                  |
| `value`                   | `string \| number`                                                                      | —          | controlled value                                                               |
| `placeholder`             | `string`                                                                                | —          | native `placeholder`                                                           |
| `rows`                    | `number`                                                                                | `4`        | native `rows` (initial visible lines)                                          |
| `minlength` / `maxlength` | `number`                                                                                | —          | length constraints                                                             |
| `autocomplete`            | `string`                                                                                | —          | native autocomplete token                                                      |
| `required`                | `boolean`                                                                               | `false`    | native `required`                                                              |
| `disabled`                | `boolean`                                                                               | `false`    | native `disabled`                                                              |
| `readonly`                | `boolean`                                                                               | `false`    | native `readonly`                                                              |
| `invalid`                 | `boolean`                                                                               | `false`    | visual error ring + `aria-invalid`                                             |
| `size`                    | `xs \| sm \| md \| lg \| xl`                                                            | `md`       | height + padding + font scale                                                  |
| `variant`                 | `inherit \| primary \| secondary \| muted \| destructive \| success \| warning \| info` | `inherit`  | border color                                                                   |
| `showCount`               | `boolean`                                                                               | `false`    | when `maxlength` is set, show a "count / max" line below the textarea          |
| `clearable`               | `boolean`                                                                               | `false`    | visual affordance (shows a clear button area); actual clearing needs client JS |
| `counter`                 | `boolean`                                                                               | `false`    | shows a counter badge in the bottom-right corner (useful with `maxlength`)     |
| `maxRows` / `minRows`     | `number`                                                                                | —          | clamp the textarea's row count (used by autosize consumers)                    |
| `resize`                  | `none \| vertical \| horizontal \| both`                                                | `vertical` | native `resize` behavior; ignored when `maxRows`/`minRows` autosize is active  |
| `class` / `id`            | `string`                                                                                | —          | `class` merged via `cn()`                                                      |
| `ariaLabel`               | `string`                                                                                | —          | accessible name (when no visible label)                                        |
| `ariaDescribedby`         | `string`                                                                                | —          | hint/error text id                                                             |

Extra attributes (`data-*`, `aria-*`, `form*`, …) are forwarded to the `<textarea>`.

### Slots

This component has no named slots. The `value` prop sets the content.

## States

`default · hover · focus-visible · active · disabled · readonly · invalid · counter-visible · clearable`

## Accessibility

Native textarea semantics. Always pair with a `<Label for="…">` or `aria-label`. Use `aria-describedby` for hint/error
text. `aria-invalid` is set automatically when `invalid` is true. The `showCount` and `counter` features are visual
only — the native `maxlength` attribute enforces the limit.

## Theming / customization

Token-driven: `--ui-foreground` text, `--ui-background` surface, `--ui-input` border, `--ui-ring` focus,
`--ui-radius-md`, `--ui-text-*` for sizes. Variants change the border color. Tailwind: `<Textarea class="w-full">`.

## JavaScript requirements

**JavaScript required: No.** All state is native browser. The `clearable` prop is a visual affordance only — actually
clearing the value requires a client-side handler (e.g. an Astro island). The `showCount`/`counter` display is
server-rendered based on the initial `value`; live character counting requires client JS.
