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

See the `demo/` playground header for a working toggle (with
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

Token inventory: colors (`primary`, `secondary`, `background`,
`foreground`, `muted/-foreground`, `border`, `input`, `ring`, `success`,
`warning`, `error`, `info` + `-muted` surfaces), typography, spacing
scale, radius (`none–full`), shadows (`sm–xl`), transitions, z-index (`dropdown/dialog/popover/toast/tooltip`),
focus-ring width/offset.

## Rules

1. Components must use `var(--ui-*)` — enforced by contract test (no hex literals in component styles).
2. New themes add selectors + variables only; never fork components.
3. Removing/renaming a token is a breaking change — document migration
   in `CHANGELOG.md`.
