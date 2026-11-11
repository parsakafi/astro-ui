# Select

Zero-JS dropdown control built on the native `<select>`. Deliberately NOT a custom listbox: the native control gives
full keyboard support (arrows, Home/End, type-ahead, Escape), platform screen-reader behavior, form participation, and
SSR safety with no client JavaScript.

```astro
---
import { Select, Label } from "astro-ui";
---
<Label for="fruit">Favorite fruit</Label>
<Select id="fruit" name="fruit" placeholder="Choose a fruit" aria-describedby="fruit-hint" required>
  <option value="apple">Apple</option>
  <option value="pear" selected>Pear (preselected server-side)</option>
  <option value="fig" disabled>Fig (unavailable)</option>
</Select>
<p id="fruit-hint" class="demo-hint">Native select: full keyboard support, zero JS.</p>

<!-- Variants -->
<Select placeholder="Primary" variant="primary" style="max-width:14rem">
  <option>Option A</option>
</Select>
<Select placeholder="Secondary" variant="secondary" style="max-width:14rem">
  <option>Option B</option>
</Select>
<Select placeholder="Muted" variant="muted" style="max-width:14rem">
  <option>Option C</option>
</Select>
<Select placeholder="Error" variant="error" style="max-width:14rem">
  <option>Remove</option>
</Select>

<!-- Sizes -->
<Select size="xs" placeholder="xs"><option>xs</option></Select>
<Select size="sm" placeholder="sm"><option>sm</option></Select>
<Select size="md" placeholder="md"><option>md</option></Select>
<Select size="lg" placeholder="lg"><option>lg</option></Select>
<Select size="xl" placeholder="xl"><option>xl</option></Select>

<!-- States -->
<Select placeholder="Disabled" disabled><option>...</option></Select>
<Select placeholder="Invalid" invalid aria-describedby="sel-error"><option>...</option></Select>
<p id="sel-error" class="demo-hint">Please select an option.</p>

<!-- Multiple (native multi-select) -->
<Select multiple placeholder="Pick several" style="max-width:14rem;height:8rem">
  <option>Alpha</option>
  <option>Beta</option>
  <option>Gamma</option>
</Select>

<!-- Explicit style forwarding -->
<Select style="max-width:18rem" placeholder="Custom width">
  <option>Item</option>
</Select>
```

## Props

| Prop              | Type                                                                                    | Default   | Notes                                                      |
|-------------------|-----------------------------------------------------------------------------------------|-----------|------------------------------------------------------------|
| `name`            | `string`                                                                                | —         | native `name`                                              |
| `placeholder`     | `string`                                                                                | —         | native `placeholder` (shown when no option is selected)    |
| `required`        | `boolean`                                                                               | `false`   | native `required`                                          |
| `disabled`        | `boolean`                                                                               | `false`   | native `disabled`                                          |
| `invalid`         | `boolean`                                                                               | `false`   | visual error ring + `aria-invalid`                         |
| `multiple`        | `boolean`                                                                               | `false`   | native multi-select (native chrome, custom chevron hidden) |
| `style`           | `string`                                                                                | —         | inline styles forwarded to the `<select>`                  |
| `size`            | `xs \| sm \| md \| lg \| xl`                                                            | `md`      | height + padding scale                                     |
| `variant`         | `inherit \| primary \| secondary \| muted \| error \| success \| warning \| info` | `inherit` | border color                                               |
| `class` / `id`    | `string`                                                                                | —         | `class` merged via `cn()`                                  |
| `ariaLabel`       | `string`                                                                                | —         | accessible name (when no visible label)                    |
| `ariaDescribedby` | `string`                                                                                | —         | hint/error text id                                         |

### Slots

| Slot    | Notes                                |
|---------|--------------------------------------|
| default | `<option>` and `<optgroup>` children |

Extra attributes are forwarded to the `<select>` element.

## States

`default · open (native) · disabled · invalid · multiple (native chrome)`

## Accessibility

Native `<select>` semantics. Always pair with a `<Label for="…">` or `aria-label`. Use `aria-describedby` for hint/error
text. Full keyboard support comes from the platform: arrows navigate options, Home/End jump to first/last, typing
filters, Escape closes the dropdown.

## Theming / customization

Token-driven: `--ui-foreground` text, `--ui-background` surface, `--ui-input` border, `--ui-ring` focus,
`--ui-radius-md`, `--ui-text-*` for sizes. Variants change the border color. The custom chevron is hidden in multiple
mode (native chrome takes over). Tailwind: `<Select class="w-full">`.

## JavaScript requirements

**JavaScript required: No.** A custom listbox would require JS focus management and is deferred until the
interactive-component phase. The native control is the zero-JS answer today.
