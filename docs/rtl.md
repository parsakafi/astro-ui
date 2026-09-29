# RTL / Internationalization

AstroUI targets full RTL support in a future release. The groundwork is
already in place: all component styles use **CSS logical properties**, so
mirroring is driven by the document's `dir` attribute with no alternate
stylesheet, no build step, and no per-component overrides.

## Conventions (must-follow for new code)

Use logical properties for anything directional. Never use physical
left/right for layout that should follow reading direction:

| Instead of                | Use                                     |
|---------------------------|-----------------------------------------|
| `margin-left / -right`    | `margin-inline-start / -end`            |
| `padding-left / -right`   | `padding-inline-start / -end`           |
| `left: …` / `right: …`    | `inset-inline-start / inset-inline-end` |
| symmetric side offsets    | `inset-inline: 0`                       |
| `border-left / -right`    | `border-inline-start / -end`            |
| `max-width` (content box) | `max-inline-size`                       |
| `text-align: left/right`  | `text-align: start/end`                 |

Already direction-safe (keep using them):

- Flex/grid `row` + `justify-content: flex-start/end` — follow writing mode
- `gap`, `align-items`, block-axis offsets (`top`, `bottom`)
- `translateY(...)` animations

Deliberately physical (screen-space, not text-space):

- Swipe-to-dismiss transforms in the Toaster (`translateX(±120%)`) — a
  gesture follows the hand/screen, not the reading direction
- Spinner `border-*-color: transparent` cut-outs — rotationally symmetric

## How to enable RTL

No import or build switch. Mirroring follows the standard CSS mechanism:

```html

<html dir="rtl" lang="fa">
```

or per-subtree: `<div dir="rtl">…</div>`.

## Positions and labels

- Toaster `position` values (`"top-left"`, `"bottom-right"`, …) are **logical**: `left` means inline-start and `right`
  means inline-end. An
  RTL document renders `"top-left"` at the physical top-right, mirroring
  the LTR layout — the reading-direction start corner stays the start
  corner.
- Badge `position="top-left|top-right|bottom-left|bottom-right"` props
  follow the same logical mapping.
- Component prop names keep the `-left`/`-right` spelling for API
  stability; only the rendered side is logical. Do not add
  `start`/`end` prop aliases unless a consumer asks.

## Migration status

All 20 components audited for physical directional properties; all
reading-direction-dependent rules converted (Alert, Badge, Dialog, Select,
Progress, Toaster/toast.scss). `base.css` and `tokens.css` contain no
directional rules.

Remaining before the RTL release:

1. Add an RTL demo page and visual tests in `../demo` (e.g. a `/rtl`
   route wrapping the playground in `dir="rtl"`).
2. Verify native `<select>` dropdown alignment under `dir="rtl"` in real
   browsers (Chrome/Firefox/Safari), since the listbox popup is OS chrome.
3. Confirm `Dialog` focus-trap and `Table` column order visually in RTL.
4. Add `:dir()`-based integration tests if a regression slips through.
