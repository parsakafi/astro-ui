# Changelog

All notable changes to this project are documented here.
Format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/);
versioning follows [SemVer](https://semver.org/).

## [Unreleased]

## [0.1.1] - 2026-11-12

### Added

- `Progress color="dynamic"`: the fill hue follows the value itself (a `--ui-error` → `--ui-success` mix) using the CSS `progress()` function. The width is derived from the same `--aui-progress-percent` custom property, so writing that one value moves the bar and its colour together. Pure CSS; browsers without `progress()` keep the token fill and a plain width.

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
