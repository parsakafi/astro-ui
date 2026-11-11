# Lightbox

Accessible image/video/iframe gallery overlay built on the native
`<dialog>` element for modality, focus containment, and Escape-to-close.
Gallery navigation — prev/next, keyboard arrows, indicator dots, and an
optional counter — is handled by one scoped inline script that ships with
the component; opening needs one app-level `showModal()` call.

## Usage

```astro
---
import { Button, Lightbox, LightboxItem } from "astro-ui";
---
<Button id="open-gallery">View gallery</Button>

<Lightbox
  id="gallery"
  group="vacation"
  navigation
  showCounter
  indicators
  previousLabel="Previous photo"
  nextLabel="Next photo"
>
  <LightboxItem src="/img/a.jpg" alt="Sunset over water" caption="Beach sunset" />
  <LightboxItem src="/img/b.jpg" alt="Mountain trail" caption="Summit view" />
  <LightboxItem
    src="/vid/c.mp4"
    type="video"
    poster="/img/c-poster.jpg"
    caption="Time-lapse of the stars"
    captionDescription="Filmed over 4 hours in the desert."
  />
  <LightboxItem
    src="https://www.youtube.com/embed/dQw4w9W9XgCQ"
    type="iframe"
    caption="Reference video"
  />

  <h2 slot="title">Photo gallery: Vacation 2025</h2>
  <p slot="description">Use ← → arrows or swipe to navigate.</p>
</Lightbox>

<script>
  // App-level trigger (required to open — the component ships no opener).
  document.getElementById("open-gallery")?.addEventListener("click", () => {
    (document.getElementById("aui-lightbox-gallery") as HTMLDialogElement)?.showModal();
  });

  // Backdrop click to close (Escape and × are native).
  (document.getElementById("aui-lightbox-gallery") as HTMLDialogElement | null)?.addEventListener("click", (event) => {
    const dialog = event.currentTarget as HTMLDialogElement;
    if (event.target === dialog) dialog.close();
  });
</script>
```

## Gallery groups

Assign the same `group` string to several lightboxes to sync their active
index across instances:

```astro
<Lightbox id="lb-a" group="tour"> … </Lightbox>
<Lightbox id="lb-b" group="tour"> … </Lightbox>
```

Both lightboxes will now open to the same active index and stay in sync if
either is advanced — useful for thumbnail + main‑view layouts.

## Media detection

When `type` is omitted on `LightboxItem`, the component infers the media
type from the `src` extension:

| Extension(s)            | Inferred type |
|-------------------------|---------------|
| `jpg jpeg png gif webp avif svg` | `image`  |
| `mp4 webm ogv ogg mov`          | `video`  |
| `html php`                      | `iframe` |
| YouTube / Vimeo URL             | `iframe` |

Override with `type="image" | "video" | "iframe"` when auto-detection
doesn't fit.

## Props (`Lightbox`)

| Prop                | Type                       | Default     | Notes                                          |
|---------------------|----------------------------|-------------|------------------------------------------------|
| `id`                | `string`                   | **required** | Used for the DOM id and aria ids               |
| `group`             | `string`                   | —           | Gallery group name for sync                    |
| `ariaLabel`         | `string`                   | —           | Explicit accessible name                       |
| `ariaDescribedby`   | `string`                   | auto        | Override the description target                |
| `showClose`         | `boolean`                  | `true`      | Renders the native × close button              |
| `closeLabel`        | `string`                   | `Close lightbox` | Accessible label for ×                      |
| `navigation`        | `boolean`                  | `true`      | Prev/next buttons                               |
| `previousLabel`     | `string`                   | `Previous image` |                                    |
| `nextLabel`         | `string`                   | `Next image` |                                           |
| `showCounter`       | `boolean`                  | `false`     | Shows "1 / 5"                                   |
| `counterLabel`      | `string`                   | `Image`     | E.g. "Slide" → "Slide 1 of 5"                   |
| `indicators`        | `boolean`                  | `false`     | Renders a dot per item                          |
| `allowAutoplay`     | `boolean`                  | `false`     | Auto-plays videos when active                  |
| `allowFullscreen`   | `boolean`                  | `true`      | Adds `allowfullscreen` to `<video>`/`<iframe>` |
| `duration`          | `number` (ms)              | `400`       | Scroll transition duration                    |
| `keyboard`          | `boolean`                  | `true`      | ArrowLeft / ArrowRight navigation              |
| `class`             | `string`                   | —           | Merged via `cn()`                                |

Slots: `title`, `description`, default (items), `count` (footer counter
total). Extra attributes forward to `<dialog>`.

## Props (`LightboxItem`)

| Prop             | Type                          | Default | Notes                              |
|------------------|-------------------------------|---------|------------------------------------|
| `src`            | `string`                      | **req** | Media URL                         |
| `alt`            | `string`                      | `""`    | `<img alt>` for images            |
| `type`           | `"image" \| "video" \| "iframe"` | auto | Force a media type               |
| `caption`        | `string`                      | —       | Overlay caption title             |
| `captionDescription` | `string`                 | —       | Subtitle under caption            |
| `poster`         | `string`                      | —       | Poster for videos                 |
| `allowFullscreen`| `boolean`                     | `true`  | Forwards `allowfullscreen`        |
| `class`          | `string`                      | —       | Merged via `cn()`                 |
| `id`             | `string`                      | —       | Element id                        |
| `…rest`          | `[key: string]: unknown`      | —       | Spread onto root `<div>`           |

## Accessibility

- Uses native `<dialog>` semantics (`role="document"` inside) — Tab cycles
  within the modal, Escape closes, focus returns to the trigger.
- Gallery items are scroll-snap targets (`aria-roledescription="slide"`,
  `aria-hidden` toggling on the inactive set).
- Keyboard: `ArrowLeft` / `ArrowRight` move the gallery when focus is
  inside the dialog; Escape is handled by the platform.
- The counter uses `aria-live="polite"` so screen readers announce the
  index change.
- Indicator dots use `role="tab"` inside a `role="tablist"`.
- `prefers-reduced-motion` disables smooth scroll on the content rail.

## JavaScript requirements

**JavaScript required: Yes** — trigger (`showModal()`) **plus** the scoped
gallery script that ships inside `Lightbox.astro`. The script handles
media detection, prev/next buttons, keyboard arrows, indicator dots,
counter sync, and group synchronization. No external runtime dependency.
