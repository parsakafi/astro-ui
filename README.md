# AstroUI

Astro-first, zero-JS-by-default, accessible UI components with semantic
design tokens. Dark mode, Tailwind interop, SSR-safe, tree-shakable, typed.

- Website: https://astroui.ir · Docs: `docs/` · Playground: `../web`
- Status: `0.1.0` — first public release

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

## Theming

`<html data-theme="dark">` forces dark, `"light"` forces light, no
attribute follows the OS. Override any `--ui-*` token for custom brands —
see `docs/theming.md`. Tailwind composes via `class` — see
`docs/tailwind.md`.

## Development

```bash
npm install
npm run check   # astro typecheck (library + docs site)
npm run lint    # biome + eslint
npm test        # Vitest unit, contract, and docs tests
```

Playground: `../web` (`npm run dev`). Full guide: `CONTRIBUTING.md`.
Architecture: `docs/ADR-001-architecture.md`. Security: `SECURITY.md`.
Changelog: `CHANGELOG.md`. License: MIT.
