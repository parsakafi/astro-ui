# Accessibility Standards

Accessibility is a release gate: no public component merges without the
a11y review in its Definition of Done.

## Baseline (applies to every component)

- Semantic HTML first: `<button>`, `<a>`, `<article>`, `<hr>`, `<label>`,
  `<input>` — no `<div onclick>`. ARIA only where semantics fall short.
- Visible focus via `:focus-visible` rings driven by `--ui-ring`
  (provided by `base.css`; Checkbox draws its own for the custom box).
- `prefers-reduced-motion` honored globally (`base.css`); animations in
  Spinner/Skeleton/Button-loading are decorative and suppressed.
- Color contrast: token pairs (`*-foreground` on base) target WCAG AA.
  Status Badges/Alerts never rely on color alone (text label + icon).
- SSR output must be fully meaningful without JS (zero-JS guarantee).

## Per-component behavior (MVP)

| Component   | Semantics                                                                                                                                                                                                                                                       |
|-------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Button      | native `<button>`/`<a>`; `disabled` or `aria-disabled`; `aria-busy` + spinner when `loading`; `aria-invalid` when `invalid`                                                                                                                                     |
| Badge       | plain `<span>`; context via `ariaLabel` when the number alone is ambiguous                                                                                                                                                                                      |
| Card        | `<article>` (or `as`); heading hierarchy owned by consumer content                                                                                                                                                                                              |
| Avatar      | `role="img"` + label; `alt=""` on `<img>` when wrapper is labelled (no double announcement)                                                                                                                                                                     |
| Alert       | `role="alert"` for errors, `role="status"` otherwise; overridable                                                                                                                                                                                               |
| Spinner     | `role="status"` + sr-only label (default "Loading")                                                                                                                                                                                                             |
| Skeleton    | `aria-hidden`; container should carry `aria-busy="true"` + live region                                                                                                                                                                                          |
| Separator   | `<hr>` horizontal; `role="separator"` + `aria-orientation` vertical                                                                                                                                                                                             |
| Label/Input | native association via `for`/`id`; `aria-invalid` + `aria-describedby` for errors/hints                                                                                                                                                                         |
| Checkbox    | native input (stays in tab order; custom box is `aria-hidden`); group with `fieldset`/`legend`                                                                                                                                                                  |
| Dialog      | native `<dialog>`: automatic `aria-labelledby`/`aria-describedby` from `id`; platform focus containment + Escape + focus return; Playwright spec covers open/close/focus                                                                                        |
| Tabs        | WAI-ARIA tabs pattern: `tablist`/`tab`/`tabpanel`, `aria-selected`, roving `tabindex`, `aria-controls`/`aria-labelledby` from `id`; automatic activation (arrows/Home/End, RTL-aware, disabled skipped); Playwright keyboard spec covers selection + navigation |

## Testing

- Automated: contract tests assert roles/attributes conventions;
  `astro check` types ARIA props. JS-required components additionally
  carry a Playwright spec (`demo/tests/e2e/`, role-based locators).
- Manual checklist per component doc: Tab / Shift+Tab reachability,
  Enter/Space activation, screen-reader announcement, 200% zoom,
  forced-colors + dark theme, reduced motion.
- Future interactive components additionally require:
  focus trap + restoration, Escape handling, arrow-key navigation,
  and Playwright keyboard tests before merge.
