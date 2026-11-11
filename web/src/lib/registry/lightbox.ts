import {type ComponentMeta, t} from "./types";

export const lightbox: ComponentMeta = {
    slug: "lightbox",
    name: "Lightbox",
    description: "Accessible image/video/iframe gallery overlay with arrows, counter, and indicators.",
    overview:
        "Lightbox is an accessible image, video, and iframe gallery overlay. It is built on the native &lt;dialog&gt; element, so modality, focus containment, Escape, and focus return all come from the platform, while one scoped inline script ships with the component to drive the gallery: prev/next arrows, keyboard arrows, indicator dots, a live counter, and cross-instance group sync. Opening needs a single app-level showModal() call; items are LightboxItem children whose media type (image, video, iframe) is inferred from the source URL and overridable per item.",
    importPath: "astro-ui",
    exportName: "Lightbox",
    category: "overlay",
    js: true,
    usage:
        `---\nimport { Button, Lightbox, LightboxItem } from "astro-ui";\n---\n\n<Button id="open-gallery">View gallery</Button>\n<Lightbox id="gallery" showCounter indicators>\n  <LightboxItem src="/img/a.jpg" alt="Sunset" caption="Beach sunset" />\n  <LightboxItem src="/img/b.jpg" alt="Trail" caption="Summit view" />\n  <h2 slot="title">Photo gallery</h2>\n  <p slot="description">Use ← → arrows or swipe to navigate.</p>\n</Lightbox>\n<script>\n  document.getElementById("open-gallery")?.addEventListener("click", () =>\n    document.getElementById("aui-lightbox-gallery")?.showModal());\n</script>`,
    features: [
        "Native <dialog>: focus containment, Escape, focus return",
        "Prev/next arrows, keyboard arrows, indicator dots",
        "Live \"1 / 5\" counter with aria-live announcements",
        "Group sync: several lightboxes share one active index",
        "LightboxItem auto-detects image / video / iframe media",
        "Backdrop click, × button, and Esc close with zero extra code",
    ],
    a11y: [
        "Native `<dialog>` semantics: modal focus containment, Escape-to-close, focus return",
        "Inactive slides get `aria-hidden`; slides carry `aria-roledescription=\"slide\"`",
        "Counter is `aria-live=\"polite\"` so index changes are announced",
        "Indicator dots are `role=\"tab\"` inside a `role=\"tablist\"`",
        "`prefers-reduced-motion` disables smooth gallery scrolling",
    ],
    demos: [
        {
            id: "gallery",
            title: "Image gallery",
            code: `<Button id="open-gallery">View gallery</Button>

<Lightbox id="gallery" showCounter indicators counterLabel="Photo">
  <LightboxItem src="/demo/lightbox/aurora.svg" alt="Aurora over mountains"
    caption="Aurora borealis" captionDescription="Long exposure, Tromsø." />
  <LightboxItem src="/demo/lightbox/dunes.svg" alt="Desert dunes" caption="Dunes at dusk" />
  <LightboxItem src="/demo/lightbox/metro.svg" alt="Metro platform" caption="Night transit" />
  <h2 slot="title">Travel gallery</h2>
  <p slot="description">Use the arrows or the ← → keys to browse.</p>
</Lightbox>

<script>
  document.getElementById("open-gallery")?.addEventListener("click", () =>
    document.getElementById("aui-lightbox-gallery")?.showModal());
</script>`,
        },
        {
            id: "programmatic",
            title: "Programmatic control",
            code: `<Button id="open-tour">Open at slide 2</Button>

<Lightbox id="tour" ariaLabel="Product tour">
  <LightboxItem src="/demo/lightbox/aurora.svg" alt="Slide one" caption="Step 1" />
  <LightboxItem src="/demo/lightbox/dunes.svg" alt="Slide two" caption="Step 2" />
  <LightboxItem src="/demo/lightbox/metro.svg" alt="Slide three" caption="Step 3" />
</Lightbox>

<script>
  const tour = document.getElementById("aui-lightbox-tour");
  document.getElementById("open-tour")?.addEventListener("click", () => {
    tour?.showModal();
    // Open on a specific slide…
    tour?.dispatchEvent(new CustomEvent("lightbox:set", {detail: {index: 1}}));
    // …or step remotely: dispatch({action: "next"} / {action: "prev"}).
  });
</script>`,
        },
        {
            id: "thumbnail",
            title: "Thumbnail trigger",
            code: `<Lightbox id="preview" ariaLabel="Image preview">
  <LightboxItem src="/demo/lightbox/aurora.svg" alt="Aurora over mountains" caption="Aurora borealis" />
  <LightboxItem src="/demo/lightbox/dunes.svg" alt="Desert dunes" caption="Dunes at dusk" />
  <LightboxItem src="/demo/lightbox/metro.svg" alt="Metro platform" caption="Night transit" />
</Lightbox>

<!-- Thumbnails: clicking one opens the lightbox on that image, full size -->
<div class="thumbs">
  <button data-thumb="0" aria-label="Open: Aurora borealis">
    <img src="/demo/lightbox/aurora.svg" alt="" />
  </button>
  <button data-thumb="1" aria-label="Open: Dunes at dusk">
    <img src="/demo/lightbox/dunes.svg" alt="" />
  </button>
  <button data-thumb="2" aria-label="Open: Night transit">
    <img src="/demo/lightbox/metro.svg" alt="" />
  </button>
</div>

<script>
  const lb = document.getElementById("aui-lightbox-preview");
  document.querySelectorAll("[data-thumb]").forEach((btn) => {
    btn.addEventListener("click", () => {
      lb?.showModal();
      lb?.dispatchEvent(
        new CustomEvent("lightbox:set", {detail: {index: Number(btn.dataset.thumb)}}),
      );
    });
  });
</script>`,
        },
    ],
    props: [
        t("id", "string", "required", "Dialog DOM id (`aui-lightbox-<id>`) and aria target ids."),
        t("group", "string", "—", "Links several Lightbox instances into one synchronized gallery."),
        t("navigation", "boolean", "true", "Prev/next buttons."),
        t("showClose", "boolean", "true", "Native × close button."),
        t("showCounter", "boolean", "false", "Shows the live \"1 / 5\" counter."),
        t("counterLabel", "string", '"Image"', "Counter word, e.g. \"Photo\" → \"Photo 1 of 3\"."),
        t("indicators", "boolean", "false", "One clickable dot per item."),
        t("allowAutoplay", "boolean", "false", "Auto-plays videos when they become active."),
        t("duration", "number", "400", "Gallery scroll transition duration in ms."),
        t("keyboard", "boolean", "true", "ArrowLeft/ArrowRight navigation."),
        t("class", "string", "—", "Merged via cn()."),
    ],
    slots: [
        {name: "default", description: "LightboxItem gallery items."},
        {name: "title", description: "Dialog heading (wired to aria-labelledby)."},
        {name: "description", description: "Helper text (wired to aria-describedby)."},
        {name: "count", description: "Custom counter total (auto-filled from item count)."},
    ],
    faq: [
        {
            q: "How do I open it?",
            a: "The component ships no opener by design: call document.getElementById('aui-lightbox-<id>').showModal() from your own button. This keeps the trigger fully under app control.",
        },
        {
            q: "How does media type detection work?",
            a: "LightboxItem infers image (jpg/png/webp/avif/gif/svg), video (mp4/webm/ogv/mov), or iframe (html/php, YouTube/Vimeo URLs) from the src, and accepts an explicit type override.",
        },
        {
            q: "Can two lightboxes stay in sync?",
            a: "Yes — give them the same group name; advancing one updates the other's active index, useful for thumbnail + main-view layouts.",
        },
    ],
    since: "0.1.0",
    related: ["dialog", "carousel", "attachment"],
};
