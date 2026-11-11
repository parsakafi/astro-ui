# Theming

All components are styled through semantic tokens in
`src/styles/tokens.css`. Components automatically respond to the active
theme — no per-component dark-mode code exists (or should be added).

## Setup

```astro
---
import "astro-ui/tokens.css"; // required: variables
import "astro-ui/base.css";   // optional: body bg, focus rings, sr-only, reduced motion
---
```

## Selecting a theme

| Markup                      | Result                            |
|-----------------------------|-----------------------------------|
| `<html>` (no attribute)     | follows OS `prefers-color-scheme` |
| `<html data-theme="light">` | always light                      |
| `<html data-theme="dark">`  | always dark                       |

Persisted toggle recipe (app-level JS — the library ships none):

```html
<script is:inline>
  const saved = localStorage.getItem("theme"); // guarded: runs client-side only
  if (saved === "light" || saved === "dark") document.documentElement.dataset.theme = saved;
</script>
```

See the `web/` playground header for a working toggle (with
`localStorage` access isolated to a client-side script, never during SSR).

## Custom themes / multi-brand

Override any `--ui-*` variable under your own selector — no component
source changes:

```css
html[data-theme="acme"] {
  --ui-primary: #7c3aed;
  --ui-primary-hover: #6d28d9;
  --ui-radius-md: 1rem;
}
```

## Semantic color naming

The canonical brand color is Astro violet: `#881abd` in light mode and
`#b845ed` in dark mode (hover `#b845ed` / `#d06cf5`). The focus ring
(`--ui-ring`) follows the brand primary in both themes, so keyboard focus
always reads as part of the brand rather than a generic browser blue.

Red is a semantic *state*, not a color name. Components expose the prop
value `destructive` and resolve it to the `--ui-error*` tokens:

```astro
<Badge variant="destructive">Failed</Badge>
<Button color="destructive">Delete</Button>
<Avatar ring="destructive" />
```

`error` remains valid only where it describes a lifecycle/event, not a
color variant — e.g. `toast({ type: "error" })` and
`<Attachment state="error" />`.

## Token inventory

- **Surfaces:** `background`, `foreground`, `card`, `secondary`,
  `secondary-foreground`, `secondary-hover`, `muted`,
  `muted-foreground`, `border`, `border-width`, `input`, `carbon`,
  `carbon-foreground`.
- **Brand:** `primary`, `primary-foreground`, `primary-hover`, `accent`,
  `accent-foreground`, `ring`.
- **Feedback:** `success`, `warning`, `error`, `info` + `-foreground` and
  `-muted` surfaces.
- **Overlays:** `backdrop`, `backdrop-strong`, `progress-stripe`,
  `shadow-color`.
- **Data viz:** `chart-1…6`, `rating-1…5`.
- **Typography:** `font-sans`, `font-mono`, `text-2xs…3xl`, font weights,
  `leading-none/tight/normal`.
- **Spacing:** `space-0`, `space-0-5`, `space-1…8`, `space-10`,
  `space-12`.
- **Radius & shape:** `radius-none…full`, `corner-shape`.
- **Controls:** `control-height-xs…xl`, `control-padding-xs…xl`,
  `control-radius`.
- **Elevation & motion:** `shadow-sm…xl`, `transition-fast/normal/slow`,
  `transition-delay`.
- **Layering & focus:** `z-dropdown/dialog/popover/toast/tooltip`,
  `focus-ring-width`, `focus-ring-offset`.

## Control scale

Buttons and form controls share one metrics scale so every interactive
element lines up on the same row:

| Size | Height | Inline padding |
|------|--------|----------------|
| `xs` | `--ui-control-height-xs` | `--ui-control-padding-xs` |
| `sm` | `--ui-control-height-sm` | `--ui-control-padding-sm` |
| `md` | `--ui-control-height-md` | `--ui-control-padding-md` |
| `lg` | `--ui-control-height-lg` | `--ui-control-padding-lg` |
| `xl` | `--ui-control-height-xl` | `--ui-control-padding-xl` |

All controls use `--ui-control-radius` for their default corner. Change
the scale once and Button, Input, Select, Textarea, and InputGroup move
together.

## Rules

1. Components must use `var(--ui-*)` — enforced by contract tests. No raw
   `#hex`, `rgb()`, or `hsl()` values anywhere in a component file.
2. Components never declare `--ui-*`; private variables use the
   `--aui-<component>-*` prefix.
3. Interactive elements style keyboard focus with `:focus-visible`, not
   bare `:focus`. Composite widgets may use `:focus-within`/`:has()` on
   the wrapper.
4. New themes add selectors + variables only; never fork components.
5. Removing/renaming a token is a breaking change — document migration
   in `CHANGELOG.md`.
