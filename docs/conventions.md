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
| Scale     | `size`                          | `sm \| md \| lg` (+ `icon`, `xl` where apt) |
| Disabled  | `disabled`                      | boolean (never `isDisabled`)                |
| Loading   | `loading`                       | boolean + `aria-busy`                       |
| Invalid   | `invalid`                       | boolean → `aria-invalid` (forms)            |
| Override  | `class`                         | merged last via `cn()`, never discarded     |
| Identity  | `id`                            | forwarded as-is                             |
| Label     | `ariaLabel` / `ariaDescribedby` | camelCase mirrors of aria attrs             |
| Label for | `for`                           | Label's `for` (matches control `id`)        |

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
  SemVer: removed/renamed props, changed markup, removed variants or
  tokens → major bump (stable since `1.0.0`).
