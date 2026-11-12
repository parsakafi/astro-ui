import {type ComponentMeta, t, common} from "./types";

export const carousel: ComponentMeta = {
    slug: "carousel",
    name: "Carousel",
    description: "Accessible scroll-snap slide deck with buttons, counter, drag, and vertical layout.",
    overview:
        "Carousel is a native scroll container with CSS scroll-snap — scrolling IS the interaction, so touch, trackpad, and drag all work with no positioning math. Prev/next buttons and an optional counter ride the header row; a small scoped script syncs the active slide on scroll, wires buttons, and adds ArrowLeft/ArrowRight (\u2191/\u2193 vertical) navigation with optional loop wrap. Slides are CarouselSlide wrappers around any content, each announced as \u201cx of y\u201d. variant=\"multiple\" shows a peek layout sized via slideBasis. A bubbling carousel:change event fires on move, and carousel:set ({index} or {action}) drives it programmatically.",
    importPath: "@parsakafi/astro-ui",
    exportName: "Carousel",
    category: "general",
    js: true,
    usage:
        `---\nimport { Carousel, CarouselSlide } from "@parsakafi/astro-ui";\n---\n\n<Carousel label="Featured cards">\n  <CarouselSlide><div class="card">1</div></CarouselSlide>\n  <CarouselSlide><div class="card">2</div></CarouselSlide>\n  <CarouselSlide><div class="card">3</div></CarouselSlide>\n</Carousel>`,
    features: [
        "Native scroll-snap: touch, trackpad, and drag work with zero positioning code",
        "Prev/next buttons, optional \u201c1 / 5\u201d counter, optional loop wrap",
        "Overlay prev/next arrows floating on the slide edges (controlsPlacement=\"overlay\")",
        "Dot indicators under the deck — click to jump, active dot tracks the scroll",
        "Per-slide captions (title + description) overlaid on the slide's lower edge",
        "Autoplay with a configurable interval; pauses on hover and focus",
        "Keyboard navigation when the scroll container is focused; slides announced as \u201cx of y\u201d",
        "Horizontal and vertical orientations; single and multiple (peek) variants",
        "Programmatic API via carousel:set; carousel:change fires on every move",
        "snapType mandatory/proximity, custom gap and slide basis",
    ],
    a11y: [
        "Root is role=region with aria-roledescription=carousel and a required accessible name",
        "Slides carry aria-roledescription=slide and \u201cx of y\u201d aria-labels via the script",
        "Scroll container is tabindex=0 so keyboard users can reach slide navigation",
        "Buttons carry explicit aria-labels; counter is live text",
        "Reduced motion: scrollIntoView respects the browser's behavior setting",
    ],
    demos: [
        {
            id: "horizontal",
            title: "Horizontal single",
            code: `<Carousel label="Horizontal single cards" style="inline-size:min(100%,28rem)">\n  <CarouselSlide><div class="aui-carousel-demo-card">1</div></CarouselSlide>\n  <CarouselSlide><div class="aui-carousel-demo-card">2</div></CarouselSlide>\n  <CarouselSlide><div class="aui-carousel-demo-card">3</div></CarouselSlide>\n  <CarouselSlide><div class="aui-carousel-demo-card">4</div></CarouselSlide>\n  <CarouselSlide><div class="aui-carousel-demo-card">5</div></CarouselSlide>\n</Carousel>`,
        },
        {
            id: "multiple",
            title: "Horizontal multiple (peek)",
            code: `<Carousel\n  label="Horizontal multiple cards"\n  variant="multiple"\n  slideBasis="50%"\n  showCounter={false}\n  style="inline-size:min(100%,34rem)"\n>\n  <CarouselSlide><div class="aui-carousel-demo-card">1</div></CarouselSlide>\n  <CarouselSlide><div class="aui-carousel-demo-card">2</div></CarouselSlide>\n  <CarouselSlide><div class="aui-carousel-demo-card">3</div></CarouselSlide>\n  <CarouselSlide><div class="aui-carousel-demo-card">4</div></CarouselSlide>\n</Carousel>\n<!-- slideBasis sizes each slide; gap sets the space between -->`,
        },
        {
            id: "vertical",
            title: "Vertical single",
            code: `<Carousel\n  label="Vertical cards"\n  orientation="vertical"\n  showCounter={false}\n  contentClass="block-size:14rem"\n  style="inline-size:min(100%,24rem)"\n>\n  <CarouselSlide><div class="aui-carousel-demo-card" style="block-size:100%">1</div></CarouselSlide>\n  <CarouselSlide><div class="aui-carousel-demo-card" style="block-size:100%">2</div></CarouselSlide>\n  <CarouselSlide><div class="aui-carousel-demo-card" style="block-size:100%">3</div></CarouselSlide>\n</Carousel>\n<!-- give the content a fixed block-size; slides fill it -->`,
        },
        {
            id: "loop",
            title: "Looping",
            code: `<Carousel label="Looping cards" loop style="inline-size:min(100%,28rem)">\n  <CarouselSlide><div class="aui-carousel-demo-card">1</div></CarouselSlide>\n  <CarouselSlide><div class="aui-carousel-demo-card">2</div></CarouselSlide>\n  <CarouselSlide><div class="aui-carousel-demo-card">3</div></CarouselSlide>\n</Carousel>\n\n<script>\n  // Programmatic API + change event:\n  const c = document.getElementById("my-carousel");\n  c.addEventListener("carousel:change", (e) => console.log(e.detail.index));\n  c.dispatchEvent(new CustomEvent("carousel:set", {detail: {action: "next"}}));\n<\\/script>`,
        },
        {
            id: "overlay-arrows",
            title: "Overlay arrows",
            code: `<Carousel\n  label="Overlay arrow cards"\n  controlsPlacement="overlay"\n  showCounter={false}\n  loop\n  style="inline-size:min(100%,28rem)"\n>\n  <CarouselSlide><div class="aui-carousel-demo-card">1</div></CarouselSlide>\n  <CarouselSlide><div class="aui-carousel-demo-card">2</div></CarouselSlide>\n  <CarouselSlide><div class="aui-carousel-demo-card">3</div></CarouselSlide>\n</Carousel>\n<!-- controlsPlacement="overlay" floats the arrows on the slide edges -->`,
        },
        {
            id: "indicators",
            title: "With indicators",
            code: `<Carousel\n  label="Indicator cards"\n  indicators\n  showCounter={false}\n  loop\n  style="inline-size:min(100%,28rem)"\n>\n  <CarouselSlide><div class="aui-carousel-demo-card">1</div></CarouselSlide>\n  <CarouselSlide><div class="aui-carousel-demo-card">2</div></CarouselSlide>\n  <CarouselSlide><div class="aui-carousel-demo-card">3</div></CarouselSlide>\n</Carousel>\n<!-- indicators render one dot per slide; click jumps, the active\n     dot tracks scrolling in both directions -->`,
        },
        {
            id: "captions",
            title: "With captions",
            code: `<Carousel\n  label="Captioned slides"\n  controlsPlacement="overlay"\n  indicators\n  showCounter={false}\n  loop\n  style="inline-size:min(100%,28rem)"\n>\n  <CarouselSlide caption="First slide" captionDescription="A short description over the image.">\n    <div class="aui-carousel-demo-card">1</div>\n  </CarouselSlide>\n  <CarouselSlide caption="Second slide" captionDescription="Captions can carry a muted description too.">\n    <div class="aui-carousel-demo-card">2</div>\n  </CarouselSlide>\n  <CarouselSlide caption="Third slide">\n    <div class="aui-carousel-demo-card">3</div>\n  </CarouselSlide>\n</Carousel>\n<!-- caption + captionDescription render an overlay bar across the\n     slide's lower edge; a named caption slot takes custom markup -->`,
        },
        {
            id: "autoplay",
            title: "Autoplay",
            code: `<Carousel\n  label="Autoplaying cards"\n  autoplay\n  interval={5000}\n  autoplayToggle="corner"\n  controls={false}\n  showCounter={false}\n  style="inline-size:min(100%,28rem)"\n>\n  <CarouselSlide><div class="aui-carousel-demo-card">1</div></CarouselSlide>\n  <CarouselSlide><div class="aui-carousel-demo-card">2</div></CarouselSlide>\n  <CarouselSlide><div class="aui-carousel-demo-card">3</div></CarouselSlide>\n  <CarouselSlide><div class="aui-carousel-demo-card">4</div></CarouselSlide>\n</Carousel>\n<!-- autoplay advances every interval ms (implies loop). It pauses on\n     hover and focus, stops permanently after manual navigation, and\n     respects prefers-reduced-motion. autoplayToggle="corner" pins a\n     circular pause/play button to the slides' top-right corner whose\n     ring fills over the interval \u2014 a visible clock to the next slide.\n     UX guidance: 5 slides or fewer, 5\u20137s per slide, and don't autoplay\n     on touch devices -->`,
        },
    ],
    props: [
        t("label", "string", `"Carousel"`, "Accessible name for the carousel region."),
        t("orientation", `"horizontal" | "vertical"`, `"horizontal"`, "Scroll axis."),
        t("variant", `"single" | "multiple"`, `"single"`, "One slide per snap, or a peek layout sized via slideBasis."),
        t("loop", "boolean", "false", "Wrap navigation from the last slide to the first and back."),
        t("defaultIndex", "number", "0", "Zero-based slide shown initially."),
        t("controls", "boolean", "true", "Show the prev/next buttons."),
        t("controlsPlacement", `"header" | "overlay"`, `"header"`, "Buttons in the header row or floating over the slide edges."),
        t("indicators", "boolean", "false", "One dot per slide; click jumps, the active dot tracks the scroll."),
        t("autoplay", "boolean", "false", "Auto-advance on an interval (implies loop); pauses on hover/focus and under reduced motion."),
        t("interval", "number", "4000", "Autoplay delay in milliseconds (min 1000)."),
        t("showCounter", "boolean", "horizontal+single", "Show the \u201c1 / 5\u201d counter."),
        t("counterLabel", "string", `"Slide"`, "Word used in the counter's aria-label."),
        t("previousLabel / nextLabel", "string", `"Previous slide" / "Next slide"`, "Accessible labels for the buttons."),
        t("labels", `{ previous?, next?, pause?, resume?, counter? }`, "-", "Translate the built-in control names; explicit *Label props still win."),
        t("snapType", `"mandatory" | "proximity"`, `"mandatory"`, "Scroll-snap strictness."),
        t("contentClass", "string", "\u2014", "Classes for the scroll container (e.g. fixed height for vertical)."),
        t("slideBasis", "string", "100% / 50%", "Slide size for variant=\"multiple\" (any flex-basis value)."),
        t("gap", "string", "token", "Space between slides (any CSS gap value)."),
        ...common(false),
    ],
    faq: [
        {
            q: "Why scroll-snap instead of transform math?",
            a: "The browser owns the physics: touch momentum, trackpad inertia, rtl, and resize all behave natively, and the script only syncs state. Transform-based carousels re-implement all of that and usually get drag wrong.",
        },
        {
            q: "How do I drive it from outside?",
            a: "Dispatch carousel:set on the root with {index: 2} or {action: 'next'}. Listen for carousel:change to sync external UI like dot indicators.",
        },
    ],
    since: "0.1.0",
    related: ["button", "card", "scroll-area"],
};
