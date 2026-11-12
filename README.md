# AstroUI

Astro-first, zero-JS-by-default, accessible UI components with semantic
design tokens. Dark mode, Tailwind interop, SSR-safe, tree-shakable, typed.

- Website: <https://astroui.ir> · Docs: <https://astroui.ir/docs/> ·
  Playground: <https://astroui.ir/blocks/>
- Status: `0.2.0` — current release (see [CHANGELOG.md](./CHANGELOG.md))

## Install

```bash
npm install @parsakafi/astro-ui
```

Astro `>=7.0.0 <8.0.0` is a peer dependency; the library itself has no
runtime dependencies.

One-time style imports in your layout, then import only the components
you use:

```astro
---
import "@parsakafi/astro-ui/tokens.css"; // required — semantic tokens + themes
import "@parsakafi/astro-ui/base.css";   // optional — focus rings, sr-only, reduced motion
import Button from "@parsakafi/astro-ui/button";
import Card from "@parsakafi/astro-ui/card";
---
<Button variant="primary" size="lg">Get Started</Button>
```

Subpath imports are the recommended form: each entry point resolves to a
single component, so the module graph stays minimal. The root barrel
(`import { Button, Card } from "@parsakafi/astro-ui"`) is supported for
convenience, but it pulls every component into the graph before unused
exports are tree-shaken.

## Components

64 catalog components across 7 categories (81 `.astro` files including
sub-components). 43 render pure server-side HTML; 21 add a small scoped
script. Browse the catalog at https://astroui.ir/components/.

| Category     | Components                                                                                                                              |
|--------------|-----------------------------------------------------------------------------------------------------------------------------------------|
| General      | Button, ButtonGroup, Command, Carousel, Clipboard, Kbd, Link                                                                            |
| Data display | Badge, Avatar, Attachment, BeforeAfter, Table, Progress, Bubble, Chart, Empty, Tag, Timeline                        |
| Layout       | Card, AspectRatio, ScrollArea, Separator, Accordion, Collapsible, StickySurface                                                         |
| Feedback     | Alert, Spinner, Skeleton, Toast, Banner, NotificationCenter                                                                             |
| Forms        | Autocomplete, Combobox, Label, Field, Input, InputGroup, Textarea, Select, Checkbox, Radio, Switch, Toggle, ToggleGroup, RadioGroup, Rating, Slider, DatePicker, TimePicker |
| Navigation   | Tabs, Breadcrumb, Pagination, Stepper, Tree, Navbar, Sidebar                                                                            |
| Overlay      | Dialog, AlertDialog, Sheet, Tooltip, Popover, HoverCard, Lightbox, Menu                                                                 |

Consistent API: `variant · size · disabled · loading · invalid · class · id`.
Composition over props (`Card` slots, icon children, dialog title/footer slots).
Every doc page states its JavaScript requirement: 43 components are zero-JS;
the rest ship a small scoped script or an app-level recipe (for example
Dialog's `showModal()` trigger — the component itself ships no JS).

## Localization and accessible names

Components with built-in control text expose a partial `labels` object that
is merged over English defaults, so translating one control never requires
restating the rest:

```astro
<Carousel labels={{ previous: "Vorherige", next: "Nächste" }} />
<DatePicker labels={{ today: "Heute", clear: "Löschen" }} />
```

Chart uses `uiLabels` because `labels` already carries its category data.
Accessible names accept `ariaLabel` (camelCase) or the native `aria-label`;
when both are present the native attribute wins.

## Theming

`<html data-theme="dark">` forces dark, `"light"` forces light, no
attribute follows the OS. Override any `--ui-*` token for custom brands —
see the [styling guide](https://astroui.ir/docs/styling/). Tailwind
composes via `class` — see
[docs/tailwind.md](https://github.com/parsakafi/astro-ui/blob/main/docs/tailwind.md).

## Development

```bash
npm install
npm run check   # astro typecheck (library + docs site)
npm run lint    # biome + eslint
npm test        # Vitest unit, contract, and docs tests
npm run check:pack  # verify the published tarball
```

Playground: [`web/`](./web) (`npm run dev`). Full guide:
[CONTRIBUTING.md](https://github.com/parsakafi/astro-ui/blob/main/CONTRIBUTING.md).
Architecture:
[ADR-001](https://github.com/parsakafi/astro-ui/blob/main/docs/ADR-001-architecture.md).
Security:
[SECURITY.md](https://github.com/parsakafi/astro-ui/blob/main/SECURITY.md).
Changelog: [CHANGELOG.md](./CHANGELOG.md). License: MIT.
