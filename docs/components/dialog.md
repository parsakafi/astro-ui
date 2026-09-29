# Dialog

Modal window built on the native `<dialog>` element — the Astro-first
answer to dialog family (Trigger / Overlay / Popup / Title /
Description / Close). Structure comes from slots; modality, `::backdrop`,
focus containment, Escape-to-close, and focus return come from the
platform instead of a headless runtime.

## Usage

```astro
---
import { Button, Dialog } from "astro-ui";
---
<Button id="open-prefs">Preferences</Button>

<Dialog id="prefs">
  <h2 slot="title">Preferences</h2>
  <p slot="description">These settings apply to this device only.</p>
  <p>Dialog body goes here.</p>
  <div slot="footer">
    <form method="dialog">
      <Button value="cancel">Cancel</Button>
    </form>
    <Button type="submit" form="prefs-form">Save</Button>
  </div>
</Dialog>

<script>
  // App-level trigger (the only JS a modal dialog inherently needs).
  document.getElementById("open-prefs")?.addEventListener("click", () => {
    (document.getElementById("prefs") as HTMLDialogElement)?.showModal();
  });

  // Optional: close when the backdrop itself is clicked.
  // (Escape, the × button, and method="dialog" forms close natively.)
  document.getElementById("prefs")?.addEventListener("click", (event) => {
    const dialog = event.currentTarget as HTMLDialogElement;
    if (event.target === dialog) dialog.close();
  });
</script>
```

Closing needs no JavaScript: the built-in × button, any
`<form method="dialog">` button, and Escape all dismiss natively, and
focus returns to the trigger automatically.

## Props

| Prop                                 | Type             | Default        | Notes                                                                           |
|--------------------------------------|------------------|----------------|---------------------------------------------------------------------------------|
| `size`                               | `sm \| md \| lg` | `md`           | panel widths 24 / 32 / 42rem                                                    |
| `id`                                 | `string`         | —              | **recommended**: enables automatic title/description labelling + trigger wiring |
| `ariaLabel`                          | `string`         | —              | explicit name (skips automatic `aria-labelledby`)                               |
| `ariaLabelledby` / `ariaDescribedby` | `string`         | auto           | override the automatic targets                                                  |
| `showClose`                          | `boolean`        | `true`         | native zero-JS × button (`form method="dialog"`)                                |
| `closeLabel`                         | `string`         | `Close dialog` | accessible label for the × button                                               |
| `class`                              | `string`         | —              | merged via `cn()`                                                               |

Slots: `title`, `description`, default (body), `footer` (right-aligned,
single-row action row, omitted when empty). `<form>` wrappers in the
footer (e.g. `method="dialog"` close actions) are flattened with
`display: contents` so all buttons share one row with even gaps.
Extra attributes forward to `<dialog>`.

## States

`closed · open · closing (native)`. No entry animation in v1 — the panel
appears instantly, which is also the reduced-motion-safe default.

## Accessibility

- Accessible naming is automatic when `id` is set: the title and
  description slots receive `{id}-title` / `{id}-description` and the
  dialog points at them. Without `id`, pass `ariaLabel` explicitly —
  an unnamed dialog is an a11y failure.
- Keyboard: Tab cycles inside the modal (platform-trapped), Escape
  closes, focus returns to the trigger. No arrow-key model needed.
- Keep one heading (`h2` recommended) in the title slot; don't put
  autofocus-heavy flows (e.g. command palettes) here yet — that needs
  the future focus-management utilities.

## Theming / customization

`--ui-background` panel, `--ui-border`, `--ui-radius-lg`,
`--ui-shadow-xl`; backdrop is a fixed `rgb(0 0 0 / 0.5)` scrim like the
reference libraries. Sizes respond down to mobile via
`max-width: calc(100% - 2rem)`.

## JavaScript requirements

**JavaScript required: Yes — app-level trigger only.** The component
ships zero JS and zero hydration directives; the app calls `showModal()`
(plus the optional backdrop-dismiss snippet above). Recommended
hydration: none — a plain inline `<script>` is sufficient.
