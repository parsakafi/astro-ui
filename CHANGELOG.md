# Changelog

All notable changes to this project are documented here.
Format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/);
versioning follows [SemVer](https://semver.org/).

## [Unreleased]

## [0.2.0] - 2026-11-12

Addresses the 0.1.x review: published-package gaps, WCAG AA contrast,
accessible names, localization hooks, and the toast live region.

### Added

- `./progress` subpath export. It was missing from `package.json#exports`
  even though the component shipped, so `import Progress from
  "@parsakafi/astro-ui/progress"` failed while the barrel import worked.
- Dedicated `--ui-primary-text`, `--ui-success-text`, `--ui-warning-text`,
  `--ui-error-text`, and `--ui-info-text` tokens for colored text on
  neutral/muted surfaces, in the light, explicit dark, and
  `prefers-color-scheme` dark blocks.
- `Progress width` (any CSS length) for bar and circle, plus accessible-name
  resolution from `ariaLabel`/`label`/native `aria-label`.
- `Progress color="dynamic"`: the fill hue follows the value itself (a
  `--ui-error` → `--ui-success` mix) using the CSS `progress()` function. The
  width is derived from the same `--aui-progress-percent` custom property, so
  writing that one value moves the bar and its colour together. Pure CSS;
  browsers without `progress()` keep the token fill and a plain width.
- Partial `labels` props on Pagination, Carousel, DatePicker, Autocomplete,
  Combobox, Textarea, and Lightbox, and `uiLabels` on Chart (zoom toolbar and
  fallback-table headers). Omitted keys keep their English defaults.
  DatePicker's `labels` now also types its existing `today`/`clear` strings.
- `scripts/check-pack.mjs` (`npm run check:pack`): fails when source-only
  paths leak into the tarball, an export target is not shipped, or the
  package exceeds its file/size budget.
- Tests: export-map parity and Node self-resolution (`tests/exports.test.ts`),
  WCAG contrast pairs for every theme block (`tests/contrast.test.ts`),
  accessible-name precedence (`tests/a11y/aria-label.test.ts`), one live
  region in Toaster (`tests/a11y/toaster-live-region.test.ts`), and label
  merging (`tests/i18n/labels.test.ts`, `tests/unit/i18n.test.ts`).
- CI: tarball verification and an `astro-peer` job that typechecks and tests
  against both Astro 7.0.0 (peer floor) and the current dev version.

### Changed

- **Breaking:** `Button` now defaults to `type="button"` instead of
  `type="submit"`. Submit buttons must say so explicitly. This prevents a
  component dropped into an existing form from submitting it accidentally.
- **Breaking (visual):** the contrast-safe palette changes dark brand colors
  (`--ui-primary` `#b845ed` → `#a63be0`, hover `#d06cf5` → `#9333c9`) and the
  light hover (`#b845ed` → `#9b30d6`), and component text now uses the
  `-text` tokens. Custom themes that hard-coded the old values will not
  inherit the fix.
- **Breaking (package contents):** `src/styles-scss/`, `src/pages/`, and the
  repo-only `src/env.d.ts` ambient reference are no longer published, and
  `sideEffects` is limited to CSS. Import `@parsakafi/astro-ui/toast.css`
  (not the `.scss` source).
- `ariaLabel` resolution now prefers the native `aria-label` when both are
  supplied; previously an explicit rendered `aria-label` could blank the
  native attribute. Dialogs skip automatic `aria-labelledby` when an explicit
  name is resolved.
- `Chart` fallback-table headers and zoom controls render through
  `uiLabels`; the same English defaults apply when the prop is omitted.
- Toaster renders exactly one `aria-live="polite"` stack, and only when
  notifications exist; `aria-live` is no longer emitted unconditionally.
- `Table` styles raw `th`/`td` elements as well as the BEM classes and uses
  `text-align: inherit` so consumer markup looks like the component markup.
- Peer range widened from `^7.3.3` to `>=7.0.0 <8.0.0`.
- Biome no longer reports unused imports in `.astro` files (its frontmatter
  view cannot see template usage); ESLint keeps the template-aware check.

### Fixed

- Colored text on neutral surfaces now meets WCAG AA in both themes. The
  previous `*-foreground` reuse failed on muted/soft backgrounds; the
  `-text` pair is asserted in `tests/contrast.test.ts`.
- `Progress` bar and circle expose the task name to assistive technology
  (`ariaLabel`, `label`, or the default "Progress"), and the bar honours a
  custom width.
- `Badge` gives labelled instances `role="img"`, so `ariaLabel` is valid on
  the span instead of being a prohibited attribute.
- `Combobox`'s trigger is always named: `ariaLabel`, then the committed
  option label, then the placeholder.
- `Command` option buttons now have ids, and `aria-activedescendant` points
  at the highlighted option instead of its value.
- `Checkbox indeterminate` sets the native `indeterminate` property (inline,
  only for those instances) so the mixed state matches `aria-checked`.
- Toaster's duplicated live regions caused repeated announcements; only one
  stack is live now.
- README examples use the recommended subpath imports, qualify the barrel
  tree-shaking claim, and link to the canonical site and GitHub URLs.

### Deferred

- Splitting `Chart.astro` by chart family is tracked in
  [`docs/follow-ups/chart-split.md`](./docs/follow-ups/chart-split.md). It is a
  large structural refactor with visual-baseline risk; the public API and
  behavior in 0.2.0 are unchanged.
- Astro 6 is not supported or tested. The peer range starts at 7.0.0 because
  the component code targets Astro 7 APIs.

### Migration

| Area | Before | After | Action |
| --- | --- | --- | --- |
| Button type | defaulted to `submit` | defaults to `button` | Add `type="submit"` to buttons inside forms, including `<form method="dialog">` close buttons. |
| Colored text | `--ui-primary`, `--ui-success`, etc. and `*-foreground` on muted surfaces | `--ui-*-text` on neutral surfaces; `*-foreground` only on solid fills | If you themed text with `-foreground` on a muted background, switch to the matching `-text` token. |
| Dark brand | `#b845ed` / `#d06cf5` | `#a63be0` / `#9333c9` | Re-check custom brand overrides against white text. |
| Accessible name | camelCase `ariaLabel` could override native `aria-label` | native `aria-label` wins | No change needed unless you relied on the alias winning. |
| Localization | per-component `*Label` props only | partial `labels` (Chart: `uiLabels`) merged over defaults | Add `labels={{ … }}`; existing explicit `*Label` props still win. |
| Package contents | `src/styles-scss/*.scss` published | SCSS and pages excluded; CSS only | Import `@parsakafi/astro-ui/toast.css`. |
| Progress | bar width fixed at 100% | `width` prop + accessible name | Pass `width`/`ariaLabel` only if you need the new behavior. |
| Astro peer | `^7.3.3` | `>=7.0.0 <8.0.0` | Upgrade Astro 7.x freely; Astro 6 is still unsupported. |


## [0.1.0] - 2026-11-11

First public release. The package ships as `0.1.0` (pre-1.0) so the API
can settle in public before the project commits to full SemVer stability
guarantees.

### Added

- Foundation: semantic design tokens (`tokens.css`), base styles (`base.css`), `data-theme` light/dark/system theming, `cn()` and `uid()` utilities, and root + per-component ESM subpath exports with no runtime dependencies.
- 64 catalog components across 7 categories (81 `.astro` files including sub-components): 43 render pure server-side HTML and 21 add a small scoped script.
- General (7): Button, ButtonGroup, Command, Carousel, Clipboard, Kbd, Link.
- Data display (11): Badge, Avatar, Attachment, BeforeAfter, Table, Progress, Bubble, Chart, Empty, Tag, Timeline.
- Layout (7): Card, AspectRatio, ScrollArea, Separator, Accordion, Collapsible, StickySurface.
- Feedback (6): Alert, Spinner, Skeleton, Toast, Banner, NotificationCenter.
- Forms (18): Autocomplete, Combobox, Label, Field, Input, InputGroup, Textarea, Select, Checkbox, Radio, Switch, Toggle, ToggleGroup, RadioGroup, Rating, Slider, DatePicker, TimePicker.
- Navigation (7): Tabs, Breadcrumb, Pagination, Stepper, Tree, Navbar, Sidebar.
- Overlay (8): Dialog, AlertDialog, Sheet, Tooltip, Popover, HoverCard, Lightbox, Menu.
- Native-first interactive behavior: Dialog, AlertDialog, and Sheet on `<dialog>`; Accordion and Collapsible on `<details>`; Tabs, Menu, Tree, and Combobox with WAI-ARIA roles and scoped keyboard scripts.
- Shared `--ui-control-*` scale (height, inline padding, radius) used by Button, Input, Select, Textarea, and InputGroup so controls align on a row.
- Missing semantic tokens: `--ui-card`, `--ui-backdrop`, `--ui-backdrop-strong`, `--ui-progress-stripe`, `--ui-shadow-color`, `--ui-rating-1…5`, `--ui-text-3xl`, `--ui-space-0-5`, `--ui-space-7`, and `--ui-transition-delay`.
- Docs site (`web/`): component catalog, per-component pages (props, slots, accessibility, theming, JS cost), live demos, 25 composed blocks, token playground, and guides for theming, styling, RTL, events, and Tailwind.
- Tests: Vitest unit and static component contracts, drift checks for tokens and prop vocabulary, Playwright interaction specs, and Chromium light/dark visual baselines.
- Release tooling: `gen-docs` (registry → content markdown) and `audit-demo-ids` (registry ↔ demo wiring check).
- Repo files: README, CONTRIBUTING, SECURITY, LICENSE (MIT).

### Changed

- The canonical brand color is Astro violet: `#881abd` light / `#b845ed` dark, with hover `#b845ed` / `#d06cf5`; `--ui-ring` follows the brand primary in both themes.
- The semantic red value is `error` everywhere — `variant="error"`, `color="error"`, `ring="error"`, and `.aui-*-error` modifiers resolve to the `--ui-error*` tokens, matching `toast.error()`, `Attachment state="error"`, and the `Field` error slot.
- Button `shape` accepts `rounded | square | circle | pill` (default `rounded`).
- Component-private CSS variables use the `--aui-*` prefix so they never collide with public `--ui-*` tokens.
- Keyboard focus uses a `:focus-visible` outline driven by the focus-ring tokens instead of a `box-shadow` ring.
- Every component declares `since: 0.1.0`, the first public release.

### Fixed

- Dialog, Lightbox, Sheet, and AlertDialog backdrops, Progress stripes, Carousel shadows, and Chart SVG shadows resolve through tokens instead of hard-coded colors.
- ScrollArea exposes a labelled `region`; LightboxItem accepts `captions` and `captionsLang` for video tracks.
- The docs build no longer warns about Astro `:global()` selectors in the plain stylesheet.
