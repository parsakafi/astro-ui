# Label, Input, Textarea, Checkbox, Radio, Select & Switch

Zero-JS form controls. Native elements + token states; validation display
is server/form-driven via `invalid` — no JS shipped.

```astro
---
import { Label, Input, Textarea, Select, Switch, Checkbox, Radio } from "astro-ui";
---
<Label for="email" required>Email</Label>
<Input id="email" name="email" type="email" ariaDescribedby="email-hint" required />
<p id="email-hint">We never share your email.</p>

<Label for="bio">Bio</Label>
<Textarea id="bio" name="bio" rows={4} maxlength={280} placeholder="Tell us about yourself" />

<Label for="fruit" required>Fruit</Label>
<Select id="fruit" name="fruit" placeholder="Choose a fruit" required>
  <option value="apple">Apple</option>
  <option value="pear">Pear</option>
</Select>

<Input id="username" invalid ariaDescribedby="username-error" />
<p id="username-error">Username is taken.</p>

<fieldset>
  <legend>Notifications</legend>
  <Checkbox name="news" checked>Email me news</Checkbox>
  <Checkbox name="digest" disabled>Weekly digest</Checkbox>
</fieldset>

<fieldset>
  <legend>Plan</legend>
  <Radio name="plan" value="free" checked>Free</Radio>
  <Radio name="plan" value="pro">Pro</Radio>
</fieldset>

<Switch name="wifi" checked>Wi-Fi</Switch>
```

## Props — Label

| Prop       | Type       | Default | Notes                       |
|------------|------------|---------|-----------------------------|
| `for`      | `string`   | —       | must match control `id`     |
| `required` | `boolean`  | `false` | visual `*` marker only      |
| `disabled` | `boolean`  | `false` | dims label to match control |
| `size`     | `sm \| md` | `md`    |                             |

## Props — Input

| Prop                                           | Type                        | Default | Notes                                  |
|------------------------------------------------|-----------------------------|---------|----------------------------------------|
| `type`                                         | valid HTML input type union | `text`  | constrained by design (typo-proof)     |
| `name` / `value` / `placeholder`               | `string`                    | —       | native                                 |
| `min` / `max` / `step`                         | `string \| number`          | —       | native bounds (number, date, range, …) |
| `minlength` / `maxlength`                      | `number`                    | —       | native                                 |
| `accept` / `autocomplete` / `pattern` / `list` | `string`                    | —       | native (`list` = datalist id)          |
| `multiple`                                     | `boolean`                   | `false` | native (email, file)                   |
| `required` / `disabled` / `readonly`           | `boolean`                   | `false` | native                                 |
| `invalid`                                      | `boolean`                   | `false` | error border + `aria-invalid`          |
| `size`                                         | `sm \| md \| lg`            | `md`    |                                        |
| `ariaLabel` / `ariaDescribedby`                | `string`                    | —       | hint/error wiring                      |
| `class` / `id`                                 | `string`                    | —       |                                        |

States: `default · focus (ring) · disabled · readonly · invalid`.

Supported `type` values (each renders the platform-native control):
`text · email · password · number · search · tel · url · date · time ·
datetime-local · month · week · color · file · range · hidden`.
Extra native attributes (`min`, `max`, `step`, `accept`, `multiple`,
`autocomplete`, …) forward via `...rest` — see the playground's
input-type showcase.

## Props — Textarea

Same states as Input, plus:

| Prop                                       | Type                                     | Default    | Notes                                     |
|--------------------------------------------|------------------------------------------|------------|-------------------------------------------|
| `value`                                    | `string \| number`                       | —          | rendered as the initial content (escaped) |
| `rows`                                     | `number`                                 | `4`        | native visible-line count                 |
| `minlength` / `maxlength` / `autocomplete` | `number` / `number` / `string`           | —          | native                                    |
| `resize`                                   | `none \| vertical \| horizontal \| both` | `vertical` | CSS resize handle                         |
| `size`                                     | `sm \| md \| lg`                         | `md`       | padding + font scale                      |

## Props — Checkbox

Same boolean set (`checked`, `required`, `disabled`, `invalid`) plus
`name`/`value`/`size` (`sm|md`). The whole row is a native `<label>`;
the visual box is `aria-hidden`, the real input stays focusable.

## Props — Radio

Same API as Checkbox (`name`/`value`/`checked`/`required`/`disabled`/
`invalid`/`size`). Radios in one group share `name`; arrow keys move
within the group natively. Always group with `fieldset`/`legend`.
Note: `invalid` renders a visual error ring only — `aria-invalid` is not
permitted on the radio role, so pair it with `ariaDescribedby` error text.

## Props — Select

Native `<select>` (not a custom listbox — see below). Options compose as
`<option>`/`<optgroup>` children; preselect server-side with `selected`.

| Prop                            | Type             | Default | Notes                                                               |
|---------------------------------|------------------|---------|---------------------------------------------------------------------|
| `name`                          | `string`         | —       | native                                                              |
| `placeholder`                   | `string`         | —       | first disabled option (auto-selected until user picks)              |
| `multiple`                      | `boolean`        | `false` | multi-line listbox; native chrome, chevron hidden                   |
| `required` / `disabled`         | `boolean`        | `false` | native                                                              |
| `invalid`                       | `boolean`        | `false` | error border + `aria-invalid`                                       |
| `size`                          | `sm \| md \| lg` | `md`    | same heights as Input                                               |
| `ariaLabel` / `ariaDescribedby` | `string`         | —       | hint/error wiring                                                   |
| `class` / `id`                  | `string`         | —       | `class` applies to the wrapper (width utilities like `w-full` work) |

Extra attributes (`autocomplete`, `data-*`, …) are forwarded
to the `<select>`; multi-line selects keep native chrome (custom chevron
hidden automatically).

States: `default · focus (ring) · disabled · invalid`.

## Props — Switch

Native checkbox with `role="switch"` (not a button + JS state). The whole
row is a native `<label>`; the visual track is `aria-hidden`, the real
input stays focusable and announces On/Off.

| Prop                            | Type       | Default | Notes                          |
|---------------------------------|------------|---------|--------------------------------|
| `name` / `value`                | `string`   | —       | native form participation      |
| `checked`                       | `boolean`  | `false` | initial server-rendered state  |
| `required` / `disabled`         | `boolean`  | `false` | native                         |
| `invalid`                       | `boolean`  | `false` | error outline + `aria-invalid` |
| `size`                          | `sm \| md` | `md`    | same scale as Checkbox         |
| `ariaLabel` / `ariaDescribedby` | `string`   | —       | hint/error wiring              |
| `class` / `id`                  | `string`   | —       |                                |

States: `off · on · focus-visible (ring) · disabled · invalid`.

Use Switch for settings that take effect immediately (Wi-Fi, dark mode);
use Checkbox for multi-select lists and agreements.

## Accessibility

- Always associate labels (`for`/`id`); group checkboxes and radios in
  `fieldset`/`legend`.
- Wire hints/errors with `aria-describedby` + matching ids.
- `invalid` sets `aria-invalid`; error text must be present in the DOM.
- Radio groups: same `name` per group, one `legend` describing the
  choice; arrow-key navigation is native.
- Select keyboard support is native (arrows, Home/End, type-ahead,
  Escape, Enter) and screen-reader behavior is platform-provided — no
  ARIA authoring needed. A custom listbox variant (with JS focus
  management) is explicitly deferred; see ADR-001 D6.
- Switch keyboard support is native Tab/Space via the real input;
  `role="switch"` makes screen readers announce On/Off instead of
  checked/unchecked. Never replicate with a `<div>` + click handler.

## Theming / customization

`--ui-input` borders, `--ui-ring` focus, `--ui-error` invalid,
`--ui-primary` checked box / switch track, `--ui-muted-foreground` chevron.

## JS requirements

**JavaScript required: No.**
