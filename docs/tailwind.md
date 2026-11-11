# Tailwind CSS Interop

The library has **no Tailwind dependency**. Interop is one-directional:
your Tailwind utilities compose with components through the `class` prop,
which is always merged (never replaced) via `cn()`.

```astro
---
import { Button, Card } from "@parsakafi/astro-ui";
---
<Button class="w-full md:w-auto">Continue</Button>
<Card class="max-w-md shadow-xl">…</Card>
```

## Setup (consumer app)

1. Install + configure Tailwind normally in your Astro app (the `web/` playground shows `@astrojs/tailwind` v3 wiring).
2. Import library tokens once in your layout:
   `import "@parsakafi/astro-ui/tokens.css";`
3. Include the package in Tailwind's `content` globs only if you use
   `aui-*` classes in `@apply` (not otherwise needed):
   `content: ["./src/**/*.{astro,ts}", "./node_modules/@parsakafi/astro-ui/src/**/*.{astro,ts}"]`

## Notes & limits

- Component variant classes (`aui-btn--primary`, …) come first in the
  class list; your utilities come last. For conflicting declarations,
  normal CSS cascade/source-order applies — put your overrides in a
  later layer/file, or use more specific selectors.
- `cn()` intentionally does not resolve conflicting Tailwind classes (no `tailwind-merge`) to keep the library
  dependency-free. If your
  app wants conflict resolution, wrap components in your own layer.
- A future `@astroui/tailwind` preset (token → `theme.extend` mapping)
  is planned but explicitly out of scope for now (see ADR-001).
