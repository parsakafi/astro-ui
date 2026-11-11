---
slug: "lightbox"
name: "Lightbox"
description: >-
  Accessible image/video/iframe gallery overlay with arrows, counter, and indicators.
category: overlay
importPath: "astro-ui"
exportName: "Lightbox"
js: true
since: "0.1.0"
isNew: false
related: ["dialog", "carousel", "attachment"]
features:
  - "Native <dialog>: focus containment, Escape, focus return"
  - "Prev/next arrows, keyboard arrows, indicator dots"
  - "Live \"1 / 5\" counter with aria-live announcements"
  - "Group sync: several lightboxes share one active index"
  - "LightboxItem auto-detects image / video / iframe media"
  - "Backdrop click, × button, and Esc close with zero extra code"
a11y:
  - "Native `<dialog>` semantics: modal focus containment, Escape-to-close, focus return"
  - "Inactive slides get `aria-hidden`; slides carry `aria-roledescription=\"slide\"`"
  - "Counter is `aria-live=\"polite\"` so index changes are announced"
  - "Indicator dots are `role=\"tab\"` inside a `role=\"tablist\"`"
  - "`prefers-reduced-motion` disables smooth gallery scrolling"
usage: |-
  ---
  import { Button, Lightbox, LightboxItem } from "astro-ui";
  ---
  
  <Button id="open-gallery">View gallery</Button>
  <Lightbox id="gallery" showCounter indicators>
    <LightboxItem src="/img/a.jpg" alt="Sunset" caption="Beach sunset" />
    <LightboxItem src="/img/b.jpg" alt="Trail" caption="Summit view" />
    <h2 slot="title">Photo gallery</h2>
    <p slot="description">Use ← → arrows or swipe to navigate.</p>
  </Lightbox>
  <script>
    document.getElementById("open-gallery")?.addEventListener("click", () =>
      document.getElementById("aui-lightbox-gallery")?.showModal());
  </script>
demoIds: ["gallery", "programmatic", "thumbnail"]
props:
  - name: "id"
    type: "string"
    def: "required"
    description: "Dialog DOM id (`aui-lightbox-<id>`) and aria target ids."
  - name: "group"
    type: "string"
    def: "—"
    description: "Links several Lightbox instances into one synchronized gallery."
  - name: "navigation"
    type: "boolean"
    def: "true"
    description: "Prev/next buttons."
  - name: "showClose"
    type: "boolean"
    def: "true"
    description: "Native × close button."
  - name: "showCounter"
    type: "boolean"
    def: "false"
    description: "Shows the live \"1 / 5\" counter."
  - name: "counterLabel"
    type: "string"
    def: "\"Image\""
    description: "Counter word, e.g. \"Photo\" → \"Photo 1 of 3\"."
  - name: "indicators"
    type: "boolean"
    def: "false"
    description: "One clickable dot per item."
  - name: "allowAutoplay"
    type: "boolean"
    def: "false"
    description: "Auto-plays videos when they become active."
  - name: "duration"
    type: "number"
    def: "400"
    description: "Gallery scroll transition duration in ms."
  - name: "keyboard"
    type: "boolean"
    def: "true"
    description: "ArrowLeft/ArrowRight navigation."
  - name: "class"
    type: "string"
    def: "—"
    description: "Merged via cn()."
slots:
  - name: "default"
    description: "LightboxItem gallery items."
  - name: "title"
    description: "Dialog heading (wired to aria-labelledby)."
  - name: "description"
    description: "Helper text (wired to aria-describedby)."
  - name: "count"
    description: "Custom counter total (auto-filled from item count)."
faq:
  - q: "How do I open it?"
    a: "The component ships no opener by design: call document.getElementById('aui-lightbox-<id>').showModal() from your own button. This keeps the trigger fully under app control."
  - q: "How does media type detection work?"
    a: "LightboxItem infers image (jpg/png/webp/avif/gif/svg), video (mp4/webm/ogv/mov), or iframe (html/php, YouTube/Vimeo URLs) from the src, and accepts an explicit type override."
  - q: "Can two lightboxes stay in sync?"
    a: "Yes — give them the same group name; advancing one updates the other's active index, useful for thumbnail + main-view layouts."
---

Lightbox is an accessible image, video, and iframe gallery overlay. It is built on the native &lt;dialog&gt; element, so modality, focus containment, Escape, and focus return all come from the platform, while one scoped inline script ships with the component to drive the gallery: prev/next arrows, keyboard arrows, indicator dots, a live counter, and cross-instance group sync. Opening needs a single app-level showModal() call; items are LightboxItem children whose media type (image, video, iframe) is inferred from the source URL and overridable per item.
