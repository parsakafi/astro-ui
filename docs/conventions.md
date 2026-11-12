# Conventions

Single source of truth for naming. Enforced partly by
`tests/contracts/components.test.ts`; the rest by review.

## Components

- `PascalCase` file + export: `Button.astro` → `Button`.
- One component per file. Props live in an exported `Props` interface
  at the top of the file's frontmatter.
- CSS classes use the `aui-` prefix + BEM-ish modifiers:
  `aui-btn`, `aui-btn--primary`, `aui-btn__spinner`.

## Props (consistent vocabulary — no synonyms)

| Concept   | Prop name                       | Values / notes                              |
|-----------|---------------------------------|---------------------------------------------|
| Style     | `variant`                       | per-component union, e.g. Button variants   |
| Color     | `color`                         | `primary \| secondary \| error \| success \| warning \| info \| carbon \| accent` |
| Scale     | `size`                          | `xs \| sm \| md \| lg \| xl` (+ `icon`, `2xl` where apt) |
| Shape     | `shape`                         | `rounded \| square \| circle \| pill`       |
| Disabled  | `disabled`                      | boolean (never `isDisabled`)                |
| Loading   | `loading`                       | boolean + `aria-busy`                       |
| Invalid   | `invalid`                       | boolean → visual state + `aria-invalid` where the role supports it |
| Override  | `class`                         | merged last via `cn()`, never discarded     |
| Identity  | `id`                            | forwarded as-is                             |
| Label     | `ariaLabel` / `ariaDescribedby` | camelCase mirrors of aria attrs; a native `aria-label` wins when both are set |
| Localize  | `labels` (Chart: `uiLabels`)    | partial object merged over English defaults  |
| Label for | `for`                           | Label's `for` (matches control `id`)        |

Red is `error` everywhere — prop values, CSS modifiers, and the
`--ui-error*` tokens all use one word. Lifecycle values such as
`toast({ type: "error" })`, `state="error"`, and the `Field` error slot
already spoke that language; there is no second name for the same red.

Never introduce `theme`, `style`, `colorScheme`, `isDisabled`, or string
event-handler props (`onclick="..."`). Behavior attaches via native DOM
events in the consuming app — see `docs/events.md`.

## Slots

- Default slot = primary content/children.
- Named slots where structure is fixed: Card `header`/`footer`,
  Alert `title`. Icons are passed as default-slot children.
- Check `Astro.slots.has("…")` before rendering slot wrappers so empty
  slots emit no markup.

## CSS variables

- Public tokens: `--ui-*` in `src/styles/tokens.css` only.
- Components use `var(--ui-*)`; never define global `--ui-*` names.
- Component-private variables (if ever needed): `--aui-<comp>-*`,
  scoped to the component selector.
- Every `--ui-*` reference must exist in `tokens.css` — enforced by the
  contract test, so typos fail the build instead of silently falling back.
- Color values live in tokens only. Component files may not contain raw
  `#hex`, `rgb()`, or `hsl()` values.
- Buttons and text controls read the shared `--ui-control-*` scale
  rather than re-declaring heights and paddings locally.

## Focus

- Style keyboard focus with `:focus-visible` and the shared ring tokens
  (`--ui-focus-ring-width`, `--ui-focus-ring-offset`, `--ui-ring`).
- Composite widgets (InputGroup, Slider dial, hover surfaces) may use
  `:focus-within` or `:has(:focus-visible)` on the wrapper.
- Bare `:focus` is not allowed: it paints on mouse clicks and drifts
  from the keyboard ring.

## Scoped styles vs slots (Astro gotcha)

Astro appends the scope id to **both** sides of a selector, but slotted
content belongs to the consumer and never carries it. Any rule reaching
into a slot must use `:global()` on the consumer side, or it compiles
to something that silently matches nothing:

```css
/* BROKEN — compiles to …[data-cid] > div[data-cid], matches no slot child */
.aui-dialog__footer > div:not([class]) { display: contents; }

/* CORRECT — compiles to …[data-cid] > div:not([class]) */
.aui-dialog__footer > :global(div:not([class])) { display: contents; }
```

Keep `:global()` confined to the rightmost (consumer) part only, so the
rule stays scoped to this component's subtree.

## Utilities & events

- `cn()` for class merging; keep it dependency-free.
- No custom event system: components emit native DOM events (`click`, `submit`, `change`). Document listener recipes per
  component.

## Commits & versioning

- Conventional Commits (`feat:`, `fix:`, `docs:`, `refactor:`, `test:`,
  `chore:`). Breaking changes (`feat!:` / `BREAKING CHANGE:`) follow
  SemVer. While the package is pre-1.0 (`0.x`), removed/renamed props,
  changed markup, and removed variants or tokens bump the **minor**;
  after `1.0.0` they bump the major.
