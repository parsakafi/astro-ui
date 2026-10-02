# Design principles

What every component in this library must satisfy, and where each
rule is enforced. New components should read this alongside
`docs/conventions.md` before opening a PR.

1. **Zero JS by default.** Components render server-side and ship no
   client runtime. JavaScript is allowed only as a scoped `<script>`
   where interaction genuinely needs it (dialog focus, carousel
   motion, toast timers). Enforced by
   `tests/contracts/components.test.ts` (no `client:*` directives, no
   inline handlers, no unguarded browser globals outside scripts).

2. **Tokens are the API.** No hard-coded colors, spacing, or type in
   component styles — everything reads `--ui-*` from
   `src/styles/tokens.css`. Theming is variable override, never a
   config file or a component prop (the `theme`/`colorScheme` prop
   names are banned by the contracts test). Dark mode is the same
   tokens under `[data-theme="dark"]`.

3. **Accessibility is structural, not a layer.** Semantic elements,
   WAI-ARIA patterns where native elements fall short (see
   `docs/accessibility.md`), visible focus, and a screen-reader path
   for every data visualization. Every component documents its JS
   requirement in its header comment so consumers know the cost.

4. **Small composable primitives.** One component per file, slots for
   structure (`header`/`footer`, `title`), `class` merging via `cn()`
   for escape hatches — never a prop for every CSS knob. See
   `docs/conventions.md` for the shared prop vocabulary.

5. **Docs live next to code, checked by tests.** Props are typed
   `Props` interfaces with JSDoc; header comments state behavior and
   JS requirements. `tests/contracts/` asserts the whole set stays
   consistent (exports, tokens, SSR safety, markup rules), so drift
   fails the build instead of rotting silently.

6. **Framework-agnostic output.** Plain `.astro` + CSS, no client
   framework bundled. Interactive components work as Astro islands or
   vanilla DOM; behavior attaches via native events (`docs/events.md`).

## Deliberate divergences

- **Category folders, not folder-per-component.** Components live in
  `src/components/<category>/` as flat files with a single root
  `index.ts` plus `package.json` subpath exports — one import style
  to learn, tree-shakable by construction.
- **Own naming, not shadcn-aligned.** Classes use the `aui-` prefix
  and props follow `docs/conventions.md` (`variant`, `size`,
  `ariaLabel`) rather than mirroring any external registry.
