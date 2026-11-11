import {type ComponentMeta, t, common} from "./types";

export const collapsible: ComponentMeta = {
    slug: "collapsible",
    name: "Collapsible",
    description: "Expand/collapse region with a dedicated trigger button.",
    overview:
        "Collapsible is an expand/collapse region whose trigger is a separate button that can live anywhere in the markup, and whose panel is arbitrary composed content — unlike Accordion, which uses native &lt;details&gt; with content authored as data. The scoped script toggles hidden + aria-expanded and closes on Escape. Closed panels use hidden=\"until-found\": find-in-page, #hash deep links, and :~:text= fragments can still match and reveal collapsed content (the browser fires beforematch and removes the attribute; aria-expanded stays in sync). Multiple collapsibles on one page are supported — each root is wired independently by its data attribute.",
    importPath: "astro-ui",
    exportName: "Collapsible",
    category: "layout",
    js: true,
    usage:
        `---\nimport { Collapsible } from "astro-ui";\n---\n\n<Collapsible id="filters" open>\n  <span slot="trigger">Filters</span>\n  <p>Any composed content…</p>\n</Collapsible>`,
    features: [
        "Trigger button with aria-expanded / aria-controls + rotating chevron",
        "Arbitrary composed panel content (slot, not data)",
        "hidden=until-found: find-in-page + deep links reveal closed panels",
        "Escape closes the panel and returns focus to the trigger",
        "Multiple independent instances per page (data-attribute wiring)",
    ],
    a11y: [
        "`aria-expanded` + `aria-controls` wire the trigger to the panel state",
        "Panel is a `role=\"region\"` labelled by the trigger",
        "`hidden=\"until-found\"` keeps closed content reachable by find-in-page and deep links (`beforematch` keeps aria-expanded honest)",
        "Escape closes and returns focus to the trigger",
    ],
    demos: [
        {
            id: "basic",
            title: "Basic",
            code: `<Collapsible id="filters">\n  <span slot="trigger">Filters</span>\n  <p>Composed content…</p>\n</Collapsible>`,
        },
        {
            id: "searchable",
            title: "Searchable collapsed content",
            code: `{/* Closed panels keep hidden="until-found": press Ctrl/Cmd+F and */}
{/* search "kyoto reservation code" — the browser reveals this panel. */}
<Collapsible id="booking">
  <span slot="trigger">Booking details</span>
  <p>Your kyoto reservation code is AOK-2291.</p>
</Collapsible>

{/* #booking-panel deep links and #:~:text= fragments reveal it too. */}
{/* A beforematch listener keeps aria-expanded=true when that happens. */}`,
        },
        {
            id: "open",
            title: "Open by default",
            code: `<Collapsible id="advanced" open>\n  <span slot="trigger">Advanced</span>\n  <p>Panel starts visible via the open prop.</p>\n</Collapsible>`,
        },
    ],
    props: [
        t("open", "boolean", "false", "Open on first render (SSR)."),
        t("disabled", "boolean", "false", "Disables the trigger."),
        t("id", "string", "—", "Recommended: stable prefix for trigger/panel ids."),
        ...common(false),
    ],
    slots: [
        {name: "trigger", description: "Trigger button content (chevron is added)."},
        {name: "default", description: "The collapsible panel content."},
    ],
    faq: [
        {
            q: "Collapsible or Accordion?",
            a: "Accordion = data-driven items in a group (native <details>, optional single-open via name). Collapsible = arbitrary composed content with a trigger you position yourself.",
        },
        {
            q: "Can users find text inside a closed panel?",
            a: "Yes. Closed panels use hidden=\"until-found\", so Ctrl/Cmd+F, #hash links, and :~:text= fragments match collapsed content and the browser reveals it (firing beforematch — the component keeps aria-expanded in sync). Native <details> accordions get the same behavior from the platform. Falls back to display: none where unsupported.",
        },
    ],
    since: "0.1.0",
    related: ["accordion", "disclosure", "tabs"],
};
