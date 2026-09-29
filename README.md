# AstroUI

Astro-first, zero-JS-by-default, accessible UI components with semantic
design tokens. Dark mode, Tailwind interop, SSR-safe, tree-shakable, typed.

- Website: https://astroui.ir · Docs: `docs/` · Playground: `../demo`
- Status: `1.0.0` stable

## Install

```bash
npm install astro-ui
```

One-time style import in your layout:

```astro
---
import "astro-ui/tokens.css"; // required — semantic tokens + themes
import "astro-ui/base.css";   // optional — focus rings, sr-only, reduced motion
import { Button, Card } from "astro-ui";
---
<Button variant="primary" size="lg">Get Started</Button>
```

Individual entry points also work (better tree-shaking signals):

```ts
import Button from "astro-ui/button";
```

## Components (MVP — all zero-JS)

| Component                                               | Import                                  | Docs                                  |
|---------------------------------------------------------|-----------------------------------------|---------------------------------------|
|                                                         | Link                                    | `astro-ui/link`                       | `docs/components/link.md` |
|                                                         | Button                                  | `astro-ui` / `astro-ui/button`        | `docs/components/button.md` |
| Badge                                                   | `astro-ui/badge`                        | `docs/components/badge.md`            |
| Card                                                    | `astro-ui/card`                         | `docs/components/card.md`             |
| Avatar                                                  | `astro-ui/avatar`                       | `docs/components/avatar.md`           |
| Alert                                                   | `astro-ui/alert`                        | `docs/components/alert.md`            |
| Spinner, Skeleton                                       | `astro-ui/spinner`, `astro-ui/skeleton` | `docs/components/spinner-skeleton.md` |
| Separator                                               | `astro-ui/separator`                    | `docs/components/separator.md`        |
| Label, Input, Textarea, Checkbox, Radio, Select, Switch | `astro-ui/label` …                      | `docs/components/forms.md`            |
| Dialog                                                  | `astro-ui/dialog`                       | `docs/components/dialog.md`           |

Consistent API: `variant · size · disabled · loading · invalid · class · id`.
Composition over props (`Card` slots, icon children, dialog title/footer slots).
Every doc page states its JavaScript requirement — Dialog is the first **Yes** (app-level `showModal()` trigger only;
the component ships zero JS).

## Theming

`<html data-theme="dark">` forces dark, `"light"` forces light, no
attribute follows the OS. Override any `--ui-*` token for custom brands —
see `docs/theming.md`. Tailwind composes via `class` — see
`docs/tailwind.md`.

## Development

```bash
npm install
npm run check   # astro typecheck
npm run lint    # biome
npm test        # 134 unit + contract tests
```

Playground: `../demo` (`npm run dev`). Full guide: `CONTRIBUTING.md`.
Architecture: `docs/ADR-001-architecture.md`. Security: `SECURITY.md`.
Changelog: `CHANGELOG.md`. License: MIT.
