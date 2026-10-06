# Contributing

Thanks for helping build AstroUI. The bar is: **Astro-first, zero-JS by
default, accessible by default, composable, customizable without fighting
the framework.**

## Local development

```bash
cd astro-ui
npm install
npm run check     # astro typecheck (covers .astro files)
npm run lint      # biome lint+format check (.ts; .astro via check/tests)
npm test          # vitest unit + contract tests
cd ../web
npm install
npm run dev       # playground at http://localhost:4321
```

The playground consumes the real package (`"astro-ui": "../astro-ui"`),
so library edits show up on refresh.

## Adding a component (Definition of Done)

- [ ] Typed `Props` following `docs/conventions.md` (`variant`, `size`,
  `disabled`, `class`, `id` — no synonyms)
- [ ] Semantic HTML; ARIA only where native semantics fall short
- [ ] Token-driven styles (`var(--ui-*)`, no hard-coded values)
- [ ] `class` merged via `cn()`; useful attrs forwarded, invalid ones not
- [ ] Dark mode + responsive + reduced-motion verified in playground
- [ ] SSR-safe (no unguarded `window`/`document`); zero client JS unless
  the component genuinely needs it (then document hydration + cost)
- [ ] Keyboard behavior where applicable + a11y review
- [ ] Contract-test expectations still green (`npm test`)
- [ ] Doc page under `docs/components/` (usage, props, states, a11y,
  theming, JS requirements) + playground example
- [ ] Exported from `index.ts` + `package.json` subpath

## Commits & releases

- Conventional Commits (`feat:`, `fix:`, `docs:`, …). Breaking changes
  use `feat!:`/`fix!:` + `BREAKING CHANGE:` footer and a CHANGELOG entry
  with migration notes.
- Since `1.0.0`, prop/markup/token removals and renames are major
  releases; additive changes are minor; fixes are patch.

## Security

See `SECURITY.md` — report privately, never in a public issue.
