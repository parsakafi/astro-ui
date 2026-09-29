# Changelog

All notable changes to this project are documented here.
Format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/);
versioning follows [SemVer](https://semver.org/).

## [1.0.0] — 2026-09-24

First stable release. Every current component ships together in this version.

### Added

- Foundation: semantic design tokens (`tokens.css`), base styles (`base.css`), `data-theme` light/dark/system theming,
  `cn()` utility.
- General: `Button` (11 variants incl. `solid`/`soft`/`dashed`/`plain`/`pure`,
  8 theme colors via `color`, 7 sizes `xs`→`2xl` + `icon`, `invalid`
  error state with `aria-invalid`), `Clipboard`, `Kbd`.
- Layout: `Accordion`, `Card`, `Separator`.
- Navigation: `Breadcrumb`, `Pagination`, `Stepper`, `Tabs`.
- Forms: `Checkbox`, `Input`, `Label`, `Radio`, `Rating`, `Select`,
  `Slider`, `Switch`, `Textarea`.
- Data display: `Avatar`, `Badge`, `Empty`, `Progress`, `Table`, `Tag`.
- Feedback: `Alert`, `Skeleton`, `Spinner`, `Toast`.
- Overlay: `Dialog`, `Tooltip`.
- `Dialog`: first JS-required component — modal built on native
  `<dialog>` (platform modality, backdrop, focus containment, Escape,
  focus return), title/description/footer slots, automatic
  `aria-labelledby`/`aria-describedby` wiring from `id`, zero-JS
  `method="dialog"` close paths, `sm`/`md`/`lg` sizes. The component
  ships zero JS; the app owns a `showModal()` trigger recipe.
- Package surface: root + per-component subpath ESM exports, no runtime
  dependencies.
- Tests: Vitest unit (utils, tokens) + static component contracts;
  Playwright keyboard/dismissal spec for `Dialog`.
- Docs: ADR-001, conventions, theming, Tailwind interop, events,
  accessibility, per-component pages, and the full docs site (catalog, releases, playground, states).
- Playground: `demo/` Astro app (Tailwind, theme toggle, all components),
  including a per-type `Input` showcase covering all 16 native types (incl. `hidden`) demonstrating `...rest` forwarding
  (`min`/`max`/`step`/`accept`).
- CI: install → Biome → `astro check` → tests → demo build.
- Repo files: README, CONTRIBUTING, SECURITY, LICENSE (MIT).

### Removed (breaking vs. the old template)

- Legacy `MyComponent`, template `Card`/`Button` (`isDisabled`, string
  `onclick`, hard-coded palette), and the SCSS pipeline. Migration:
  adopt the new typed props (`disabled`, `variant`, `size`) and
  `tokens.css`.
