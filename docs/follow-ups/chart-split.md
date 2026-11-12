# Follow-up: split `Chart.astro` by chart family

**Status:** deferred from 0.2.0 · **Tracking:** create a GitHub issue with this text

## Why

`src/components/data-display/Chart.astro` is ~4,700 lines: shared scales and
geometry, 20 chart types, the fallback data table, and per-type CSS all live in
one file. It is the largest source of review friction (diff noise, slow
type-check, risky edits) and the hardest file for both humans and agents to
navigate.

## Scope (when scheduled)

1. Extract shared primitives — `W`/`PAD`, scale helpers, `format`, `colorAt`,
   the uid seed, and the fallback table — into private modules under
   `src/components/data-display/chart/`.
2. Extract renderers per family: cartesian (bar/line/area/combo/scatter),
   circular (pie/donut/pie3d/rose/gauge/radial), and matrix (heatmap/cohort/
   terrain/map/treemap/funnel/boxplot/histogram).
3. Keep the public API unchanged: one `Chart` export with the same props,
   `<style>` scope behavior, and documented subpath (`./chart`).
4. Keep zero runtime dependencies and the existing zero-JS/no-JS split.

## Constraints

- No visual or DOM changes: the existing contract tests and Chromium visual
  baselines must pass unchanged.
- Scoped styles must stay reachable from the rendered markup — Astro only
  emits a `<style>` block that belongs to the component file, so extracted
  markup must either stay in `Chart.astro` or move its styles with it.
- `astro check`, `npm run lint`, `npm test`, and `npm run check:pack` green.

## Acceptance criteria

- `Chart.astro` under ~1,000 lines.
- Every extracted module has a single responsibility and no public exports.
- No change to the generated tarball's public entry points.
- Full suite and visual baselines pass; tarball size does not grow.

## Out of scope

New chart types, new props, and theming changes. This is a structural refactor
only.
