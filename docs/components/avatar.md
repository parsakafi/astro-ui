# Avatar

Zero-JS identity image with initials fallback. Framework-agnostic: pass
any `<img>`-compatible `src`.

```astro
---
import { Avatar } from "astro-ui";
---
<Avatar src="/users/ada.jpg" name="Ada Lovelace" size="lg" />
<Avatar name="Ada Lovelace" />
```

## Props

| Prop           | Type                   | Default             | Notes                                        |
|----------------|------------------------|---------------------|----------------------------------------------|
| `src`          | `string`               | —                   | omit to render initials fallback             |
| `alt`          | `string`               | `"<name>'s avatar"` | set `""` only if wrapper has `ariaLabel`     |
| `name`         | `string`               | `""`                | drives initials (first letters, max 2) + alt |
| `size`         | `sm \| md \| lg \| xl` | `md`                | 2rem → 4rem circles                          |
| `class` / `id` | `string`               | —                   | merged via `cn()`                            |
| `ariaLabel`    | `string`               | —                   | e.g. when avatar is a button's icon          |

Images use `loading="lazy"` + `object-fit: cover`.

## Accessibility

Wrapper has `role="img"` with a label; inner `<img>` gets `alt=""` when
the wrapper is labelled to avoid double announcement.

## Theming / customization

`--ui-muted` fallback surface, `--ui-radius-full`.

## JS requirements

**JavaScript required: No.**
