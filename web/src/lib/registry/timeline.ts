import {type ComponentMeta, t, common} from "./types";

export const timeline: ComponentMeta = {
    slug: "timeline",
    name: "Timeline",
    description: "Ordered event list with markers, connector rails, and time stamps.",
    overview:
        "Timeline is a semantic `<ol>` of events; TimelineItem draws the marker, the connector rail, and the body. Because it is real document order, \"list, 4 items\" announcements and keyboard reading stay correct without any ARIA scaffolding. The rail is drawn by each item and stops at the last one automatically, so reordering or filtering items never leaves a dangling line.",
    importPath: "astro-ui",
    exportName: "Timeline",
    category: "data-display",
    js: false,
    usage:
        `---\nimport { Timeline, TimelineItem } from "astro-ui";\n---\n\n<Timeline ariaLabel="Deployment history">\n  <TimelineItem variant="success">\n    <time slot="time" datetime="2026-10-14T09:12Z">Oct 14 · 09:12</time>\n    <span slot="title">Deploy v2.5.0</span>\n    <span slot="description">Shipped by Ada — 42 files changed.</span>\n  </TimelineItem>\n</Timeline>`,
    features: [
        "Semantic `<ol>` / `<li>` — no list role needed",
        "Marker variants: neutral, primary, success, warning, destructive, info",
        "Optional `active` halo marks the current event",
        "Custom glyphs through the `marker` slot",
        "Two scales (`sm`, `md`) shared by list and items",
        "Rail stops at the last item automatically",
    ],
    a11y: [
        "Ordered list structure announces position and item count",
        "Markers and rails are `aria-hidden` — meaning belongs in the body",
        "Optional `aria-label` names the list (e.g. \"Deployment history\")",
    ],
    demos: [
        {
            id: "deploy",
            title: "Deployment history",
            code: `<Timeline ariaLabel="Deployment history">\n  <TimelineItem variant="success" active>\n    <time slot="time" datetime="2026-10-14T09:12Z">Oct 14 · 09:12</time>\n    <span slot="title">Deploy v2.5.0</span>\n    <span slot="description">Production · 42 files changed · 1m 32s</span>\n  </TimelineItem>\n  <TimelineItem variant="info">\n    <time slot="time" datetime="2026-10-13T17:40Z">Oct 13 · 17:40</time>\n    <span slot="title">Deploy v2.4.3</span>\n    <span slot="description">Hotfix for the billing webhook retry loop.</span>\n  </TimelineItem>\n  <TimelineItem variant="destructive">\n    <time slot="time" datetime="2026-10-13T15:02Z">Oct 13 · 15:02</time>\n    <span slot="title">Rollback v2.4.2</span>\n    <span slot="description">Reverted after a spike in 500s on /api/invoices.</span>\n  </TimelineItem>\n</Timeline>`,
        },
        {
            id: "activity",
            title: "Activity feed with custom markers",
            code: `<Timeline size="sm">\n  <TimelineItem variant="primary">\n    <span slot="marker" aria-hidden="true">✓</span>\n    <time slot="time" datetime="2026-10-14T08:02Z">08:02</time>\n    <span slot="title">Ada approved the pull request</span>\n    <span slot="description">Review took 12 minutes.</span>\n  </TimelineItem>\n  <TimelineItem variant="warning">\n    <span slot="marker" aria-hidden="true">!</span>\n    <time slot="time" datetime="2026-10-14T07:55Z">07:55</time>\n    <span slot="title">CI flagged a flaky test</span>\n    <span slot="description">auth.session.spec.ts failed twice in a row.</span>\n  </TimelineItem>\n  <TimelineItem>\n    <time slot="time" datetime="2026-10-14T07:41Z">07:41</time>\n    <span slot="title">Grace opened the pull request</span>\n  </TimelineItem>\n</Timeline>`,
        },
        {
            id: "rich",
            title: "Rich item content",
            code: `<Timeline ariaLabel="Release timeline">\n  <TimelineItem variant="success">\n    <time slot="time" datetime="2026-10-20">Oct 20, 2026</time>\n    <span slot="title">v0.1.0 — First public release</span>\n    <div slot="description">\n      <p>63 components across 7 categories, with tokens, base styles, and docs.</p>\n      <Badge variant="success" size="sm">Stable</Badge>\n    </div>\n  </TimelineItem>\n  <TimelineItem variant="primary">\n    <time slot="time" datetime="2026-11-10">Nov 10, 2026</time>\n    <span slot="title">v0.2.0 — Planned</span>\n    <span slot="description">File upload, a dual-thumb range slider, and a sortable data grid.</span>\n  </TimelineItem>\n</Timeline>`,
        },
    ],
    props: [
        t("size", `"sm" | "md"`, `"md"`, "Marker and gap scale for the list."),
        ...common(true),
    ],
    slots: [{name: "(default)", description: "TimelineItem children."}],
    faq: [
        {
            q: "How do I put the newest event first?",
            a: "Render TimelineItem children in that order. Timeline is plain document order — there is no internal sorting, so your data source decides.",
        },
        {
            q: "Can an item have a custom marker?",
            a: "Yes. Use the `marker` slot on TimelineItem for a glyph or icon; the marker column is `aria-hidden`, so keep the meaning in the title or description.",
        },
    ],
    since: "0.1.0",
    new: true,
    related: ["stepper", "separator", "card"],
};
