# Link

Semantic anchor with smart defaults for external links, disabled state, and
View Transitions support.

Renders an `<a>`. Zero-JS — attach navigation behavior via framework islands
or inline scripts when needed (e.g. `history.replaceState` for `replace`).

```astro
---
import { Link } from "@parsakafi/astro-ui";
---
<Link href="/docs">Read the docs</Link>
<Link href="https://example.com" external>External site</Link>
<Link href="/settings" replace>Replace history</Link>
<Link href="/chevron" icon="chevron">With chevron</Link>
<Link href="/arrow" icon="arrow">With arrow</Link>
<Link href="/external" icon="external">Opens externally</Link>
<Link href="/report" icon="download" download>Download report</Link>

<!-- color variants -->
<Link href="/primary" color="primary">Primary</Link>
<Link href="/muted" color="muted">Muted</Link>
<Link href="/error" color="error">Error</Link>
<Link href="/success" color="success">Success</Link>
<Link href="/warning" color="warning">Warning</Link>

<!-- no underline -->
<Link href="/none" underline={false}>No underline</Link>

<!-- block -->
<Link href="/block" block>Full-width link</Link>

<!-- disabled -->
<Link href="/gone" disabled>Removed (dimmed, non-interactive)</Link>

<!-- view transitions -->
<Link href="/transition" viewTransition>Animated transition</Link>
```

## Props

| Prop             | Type                                                                                          | Default     | Notes                                                                                                                                                                 |
|------------------|-----------------------------------------------------------------------------------------------|-------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `href`           | `string`                                                                                      | —           | URL for the anchor. Omit with `disabled` for a non-interactive placeholder.                                                                                           |
| `disabled`       | `boolean`                                                                                     | `false`     | Renders text with `aria-disabled="true"`, no pointer events.                                                                                                          |
| `external`       | `boolean`                                                                                     | `false`     | Sets `target="_blank"` + `rel="noopener noreferrer"` unless `rel` or `noRel` is set.                                                                                  |
| `target`         | `string`                                                                                      | —           | Browsing context. `"_blank"` implies `external` behavior for `rel`.                                                                                                   |
| `rel`            | `string`                                                                                      | —           | Relationship metadata. When `external` or `target="_blank"` and not set, defaults to `"noopener noreferrer"`.                                                         |
| `noRel`          | `boolean`                                                                                     | `false`     | When true, omits the `rel` attribute entirely (overrides the external default).                                                                                       |
| `replace`        | `boolean`                                                                                     | `false`     | Hints at `history.replaceState` navigation. Consumers implement the JS side (see `docs/events.md`).                                                                   |
| `viewTransition` | `boolean`                                                                                     | `false`     | Hints at the [View Transitions API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API). Consumers call `document.startViewTransition()` on click. |
| `prefetch`       | `boolean`                                                                                     | `false`     | Behavioral hint only. Consumers add `<link rel="prefetch">` or equivalent for real prefetch.                                                                          |
| `prefetchOn`     | `"visibility" \| "interaction"`                                                               | —           | Behavioral hint for when prefetch should trigger (consumer implementation).                                                                                           |
| `icon`           | `"arrow" \| "chevron" \| "external" \| "download"`                                            | —           | Inline SVG icon rendered before the link text.                                                                                                                        |
| `size`           | `"sm" \| "md" \| "lg"`                                                                        | `"md"`      | Text size + line-height.                                                                                                                                              |
| `underline`      | `boolean`                                                                                     | `true`      | When false, `text-decoration: none`.                                                                                                                                  |
| `color`          | `"primary" \| "secondary" \| "muted" \| "error" \| "success" \| "warning" \| "inherit"` | `"primary"` | Link color + hover treatment. `inherit` uses the parent color.                                                                                                        |
| `block`          | `boolean`                                                                                     | `false`     | Full inline width.                                                                                                                                                    |
| `loading`        | `boolean`                                                                                     | `false`     | Dimmed, `cursor: wait`. Use with `loadingText` to replace content during pending navigation.                                                                          |
| `loadingText`    | `string`                                                                                      | —           | Replaces slot content when `loading` is true.                                                                                                                         |
| `class` / `id`   | `string`                                                                                      | —           | `class` merged via `cn()`.                                                                                                                                            |
| `ariaLabel`      | `string`                                                                                      | —           | Accessible name for icon-only links (required when no text content).                                                                                                  |
| `ariaCurrent`    | `"page" \| "step" \| "location" \| "date" \| "true" \| "false"`                               | —           | Value for `aria-current` (e.g. active route indicator).                                                                                                               |
| `download`       | `string \| boolean`                                                                           | —           | `true` hints at download; a string sets the filename.                                                                                                                 |
| `hreflang`       | `string`                                                                                      | —           | Language of the linked resource.                                                                                                                                      |
| `ping`           | `string`                                                                                      | —           | Space-separated list of URLs to ping on click.                                                                                                                        |
| `referrerPolicy` | `string`                                                                                      | —           | Referrer policy for the navigation.                                                                                                                                   |

### Extra attributes

`data-*` and `aria-*` attributes are forwarded. The link emits:

- `data-aui-link` — component marker
- `data-disabled=""` — when disabled
- `data-href=""` — when an href is present and not disabled
- `data-prefetch=""` — when `prefetch` is true
- `data-replace=""` — when `replace` is true
- `data-view-transition=""` — when `viewTransition` is true

## States

`default · hover · focus-visible · disabled · loading`.

Hover treatment per color:

- **primary**: darkens to `--ui-primary-hover`, tints background `--ui-secondary`
- **secondary**: uses `--ui-secondary-foreground` + `--ui-secondary-hover` background
- **muted**: lifts to `--ui-foreground` + `--ui-secondary` background
- **error / success / warning**: filter `brightness(0.92)`
- **inherit**: adopts `--ui-foreground` + `--ui-secondary` background

## Accessibility

Native `<a>` semantics. `aria-disabled` on disabled links.
`aria-current` set via prop for active-route indicators.
Icon-only links require `ariaLabel`. Inline SVG icons are `aria-hidden`.
Focus ring uses `--ui-ring` + `--ui-focus-ring-width`/`--ui-focus-ring-offset` tokens.

## Theming / customization

Token-driven: colors via `--ui-primary`, `--ui-primary-hover`, `--ui-secondary`, etc.
Underline color follows the link's color token.
Tailwind: `<Link class="text-base font-medium">`.

## JS requirements

**JavaScript required: No.** The `replace` and `viewTransition` props are _hints_ — they render as `data-*` attributes
that a consumer island or inline
script reads to call `history.replaceState` or `document.startViewTransition()`.
See `docs/events.md` for the pattern.
