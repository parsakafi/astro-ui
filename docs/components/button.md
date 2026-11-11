# Button

Zero-JS action trigger. Renders `<button>`, or `<a>` when `href` is set.

```astro
---
import { Button } from "@parsakafi/astro-ui";
---
<Button variant="primary" size="md">Get Started</Button>
<Button href="/docs" variant="outline">Read docs</Button>
<Button loading loadingIcon="dots">saving…</Button>
<Button invalid>Invalid action</Button>

<!-- theme color + solid/soft -->
<Button color="success">Approve</Button>
<Button variant="soft" color="warning">Pending</Button>
<Button variant="solid" color="accent">Upgrade</Button>
<Button variant="outline" color="info">Details</Button>

<!-- shape + shadow -->
<Button variant="primary" shape="rounded" shadow="md">Pill with shadow</Button>
<Button variant="outline" shape="circle" size="icon" ariaLabel="Close">
  <svg slot="leading" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16">
    <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</Button>

<!-- loading positions -->
<Button loading loadingPosition="center" loadingText="Saving…">
  Save changes
</Button>
<Button variant="ghost">
  <svg slot="leading" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16">
    <path d="M2 5l9 7-9 7" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
  Back
</Button>
<Button variant="secondary">
  Next
  <svg slot="trailing" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16">
    <path d="M2 2l12 12M14 2l-12 12" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</Button>
```

## Props

| Prop                                                 | Type                                                                                                          | Default   | Notes                                                                                                                            |
|------------------------------------------------------|---------------------------------------------------------------------------------------------------------------|-----------|----------------------------------------------------------------------------------------------------------------------------------|
| `variant`                                            | `primary \| secondary \| outline \| ghost \| error \| link \| solid \| dashed \| soft \| plain \| pure` | `primary` | `primary`/`secondary`/`error` are solid shorthands; `solid`/`soft` take `color`                                            |
| `color`                                              | `primary \| secondary \| error \| success \| warning \| info \| carbon \| accent`                       | —         | theme color for `solid`/`soft` and tinted outline-style variants; explicit `color` on a legacy variant re-resolves it as `solid` |
| `size`                                               | `xs \| sm \| md \| lg \| xl \| 2xl \| icon`                                                                   | `md`      | `icon` = square target (pairs with `xs`/`xl`/`2xl`)                                                                              |
| `type`                                               | `button \| submit \| reset`                                                                                   | `button`  | buttons only; not forwarded to `<a>`                                                                                             |
| `href`                                               | `string`                                                                                                      | —         | when set, renders `<a>` instead of `<button>`                                                                                    |
| `name` / `value`                                     | `string`                                                                                                      | —         | native form participation, buttons only                                                                                          |
| `form` / `formAction` / `formEnctype` / `formTarget` | `string`                                                                                                      | —         | associate with / override a form, buttons only                                                                                   |
| `formMethod`                                         | `get \| post \| dialog`                                                                                       | —         | buttons only (`dialog` closes `<dialog>` natively)                                                                               |
| `formNoValidate`                                     | `boolean`                                                                                                     | `false`   | buttons only                                                                                                                     |
| `disabled`                                           | `boolean`                                                                                                     | `false`   | native `disabled` (button) / `aria-disabled` (link)                                                                              |
| `loading`                                            | `boolean`                                                                                                     | `false`   | disables + shows CSS spinner + `aria-busy`                                                                                       |
| `invalid`                                            | `boolean`                                                                                                     | `false`   | error border + red focus ring + `aria-invalid`                                                                                   |
| `shape`                                              | `auto \| rounded \| square \| circle`                                                                         | `auto`    | corner shape; `rounded` = full radius, `square` = sharp, `circle` = full radius (use with `size="icon"` for a true circle)       |
| `shadow`                                             | `none \| sm \| md \| lg`                                                                                      | `none`    | box-shadow token                                                                                                                 |
| `fitContent`                                         | `boolean`                                                                                                     | `false`   | when true, button fits its content width                                                                                         |
|                                                      | `loadingPosition`                                                                                             | `start    | center                                                                                                                           | end` | `start` | where the spinner appears relative to content |
|                                                      | `loadingText`                                                                                                 | `string`  | —                                                                                                                                | shown in place of content when `loadingPosition` is `center` |
|                                                      | `loadingIcon`                                                                                                 | `ring     | dots                                                                                                                             | pulse | spin` | `ring` | visual style of the loading spinner; `ring` = bordered ring, `dots` = bouncing dots, `pulse` = rotating arc, `spin` = solid rotating square |
|                                                      | `class` / `id`                                                                                                | `string`  | —                                                                                                                                | `class` merged via `cn()` |
| `ariaLabel`                                          | `string`                                                                                                      | —         | icon-only buttons MUST set this                                                                                                  |
| `rel` / `target`                                     | `string`                                                                                                      | —         | links only                                                                                                                       |

### Slots

| Slot       | Notes                                    |
|------------|------------------------------------------|
| default    | Button content (text, icons, etc.)       |
| `leading`  | Rendered before the default slot content |
| `trailing` | Rendered after the default slot content  |

Extra attributes (`data-*`, `aria-*`, …) are forwarded. The button also emits `data-normal=""` when not disabled and
`data-disabled=""` when disabled, for consumer CSS hooks.

## States

`default · hover · focus-visible · active · disabled · loading · invalid`.

`link` variant inherits text flow (auto height, underline).
Color-tinted variants also emit `data-color` for consumer CSS hooks.

## Accessibility

Native semantics; keyboard = native Tab/Enter/Space. Icon-only buttons
require `ariaLabel`. Loading announces via `aria-busy`. `invalid` sets
`aria-invalid` — pair with error text in the DOM (`aria-describedby`).
Leading/trailing
slots are announced in DOM order by assistive technology.

## Theming / customization

Token-driven (`--ui-primary`, `--ui-success`, `--ui-ring`, `--ui-radius-md`, …).
Use `color` to pick a theme color on solid/soft/outlined styles without
hand-written classes. Tailwind: `<Button class="w-full md:w-auto">`.

## JS requirements

**JavaScript required: No.** Attach listeners app-side (see `docs/events.md`); forms work with zero JS.
