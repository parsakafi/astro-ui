# AstroUI Playground (`demo/`)

Manual-verification Astro app that consumes the real `astro-ui` package (`"astro-ui": "../astro-ui"` — never source
imports).

- `/` — landing + install snippet.
- `/playground` — all MVP components: variants, sizes, states, form
  composition, zero-JS form, theme toggle, responsive layout.

## Commands

| Command           | Action                                                       |
|-------------------|--------------------------------------------------------------|
| `npm install`     | Installs dependencies                                        |
| `npm run dev`     | Dev server at `localhost:4321`                               |
| `npm run build`   | Typechecks (`astro check`) + static build — the CI SSR proof |
| `npm run preview` | Preview the production build                                 |

## What's wired

- Tailwind v3 via `@astrojs/tailwind` (`tailwind.config.cjs` includes the
  library path for future `@apply` use).
- `astro-ui/tokens.css` + `astro-ui/base.css` imported once in
  `src/layouts/Layout.astro`.
- Theme toggle (`light`/`dark`, `localStorage`-persisted, SSR-guarded) —
  the reference recipe for `data-theme` theming.
- E2E scaffold in `tests/e2e` + `playwright.config.ts` (excluded from
  typecheck until `@playwright/test` is installed; see config header).
