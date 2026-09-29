# ADR-001: AstroUI Foundation Architecture

Status: Accepted · Date: 2026-09-18 · Deciders: AstroUI maintainers

## Context

AstroUI is an Astro-first UI component library. The prior codebase was the
default Astro "component template" (3 unrelated demo components, SCSS
variables, inconsistent props such as `isDisabled` and string `onclick`).
We needed a coherent system: consistent APIs, theming, accessibility,
SSR safety, zero-JS defaults, and a path to future framework adapters —
without over-engineering a v0.1.

Research inputs (in `/resource`): shadcn (composition + source-distribution
model), Radix/base-ui (a11y behavior ownership), daisyUI (semantic tokens +
`data-theme`), Tailwind (utility interop), Biome (lint/format).

## Decisions

### 1. Ship `.astro` source, no build step (D1)

The npm package publishes `src/**/*.astro` + plain CSS directly. Rationale:

- Astro consumes `.astro` source natively; compiling to JS components would
  add a runtime and break Astro slot/hydration semantics.
- Tree-shaking falls out naturally: named ESM re-exports in `index.ts`
  plus per-component subpath exports (`astro-ui/button`).
- Keeps the door open for a future shadcn-style CLI (`add button` copies
  the same source files) with zero rewrite.

### 2. Zero-JS by default; app owns hydration (D2)

Most components are static: no `<script>`, no `client:*` directives
inside the library. Interactive behavior that cannot come from the
platform (dismissing alerts, dialog triggers, theme toggling) is
documented as app-level recipes using native events or Astro islands.
The exceptions prove the rule: Dialog leans on the native `<dialog>`
(only an app-level `showModal()` trigger is needed), while Toaster and
Tabs ship their own scoped inline `<script>` because their behavior (toast stacking/timing, tab selection + arrow-key
navigation) has no
zero-JS platform equivalent. The library never emits `client:*`
hydration directives itself.

### 3. Semantic CSS custom-property tokens (D3)

`src/styles/tokens.css` is the single source of truth (`--ui-*`).
Components reference tokens only — verified by contract test (no hex
literals in component `<style>`). Themes work by variable override:

- `<html data-theme="dark">` forces dark, `"light"` forces light,
- no attribute follows `prefers-color-scheme`.

This gives multi-brand support for free and makes future React/Vue
adapters trivially theme-compatible (same CSS file).

### 4. Tailwind-compatible, not Tailwind-dependent (D4)

Core has zero CSS dependencies. Interop is via the `class` prop merged
with `cn()`: consumers pass Tailwind utilities (`class="w-full md:w-auto"`).
A dedicated `@astroui/tailwind` preset package is deferred until demand (section: "Future packages").

### 5. Composition via Astro slots, not compound components (D5)

Astro has no `Card.Header` subcomponent model, so `Card` uses named slots (`header`/`footer`) + default slot. Icon
support is slot-based too (`<Button><ArrowRight/> Continue</Button>`) — no icon-provider coupling.

### 6. a11y ownership without a headless dependency (D6)

For the static MVP set, accessibility = semantic HTML + correct ARIA roles (alert/status, img labels,
aria-invalid/disabled/busy) + focus-visible +
reduced-motion. Interactive components (Dialog, Tabs, …) each implement
keyboard support, focus management, and Playwright keyboard tests per
`docs/accessibility.md`. Radix/base-ui remain reference
implementations, not dependencies.

### 7. Tooling: Biome + Vitest + astro check (D7)

- Biome formats/lints `.ts` (it cannot parse `.astro`; those are covered
  by `astro check` + contract tests).
- Vitest: unit tests (utils, tokens) + static contract tests (every
  component file must satisfy API/SSR/token/zero-JS rules).
- SSR proof: the `demo/` Astro app consumes the real package and builds
  in CI. Browser/axe/Playwright tests are scaffolded for Phase 4+
  interactive components.

## Consequences

- Consumers must import `astro-ui/tokens.css` once (documented; missing
  import degrades to unstyled but functional markup).
- `type` prop on Input is a constrained union, not free `string` — valid
  HTML only, by design.
- Version follows SemVer from `1.0.0` (first stable release covering
  every component; § Versioning).

## Future packages (not now)

`@astroui/tailwind` (preset), `@astroui/cli` (`init`/`add`),
framework adapters (React/Vue wrappers over the same tokens + a11y spec).
