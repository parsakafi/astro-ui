import {type ComponentMeta, t} from "./types";

export const alert: ComponentMeta = {
    slug: "alert",
    name: "Alert",
    description: "Feedback message with 8 variants and accessible dismissal.",
    overview:
        "Alert shows a persistent inline message with a variant-colored surface, built-in variant glyph, and an optional dismiss button. Smart semantics: error alerts render role=alert (announced immediately); the others render role=status (polite).",
    importPath: "astro-ui",
    exportName: "Alert",
    category: "feedback",
    js: false,
    usage:
        `---
import { Alert } from "astro-ui";
---

<Alert variant="info" title="Heads up">Scheduled maintenance Sunday.</Alert>
<Alert variant="error" title="Payment failed" closable>Retry or update your card.</Alert>`,
    features: [
        "8 variants: primary, error, success, warning, info, carbon, secondary, accent",
        "5 sizes: xs → xl",
        "Smart role: alert (error) vs status (others)",
        "closable renders an accessible dismiss button",
        "Icon slot with built-in per-variant glyph"
    ],
    a11y: [
        "Icons and the close button are aria-hidden — decoration never reaches the a11y tree",
        "role=alert (error, assertive) vs role=status (others, polite)",
        "Dismiss button carries an aria-label"
    ],
    demos: [
        {
            id: "basic",
            title: "Basic",
            code: `<Alert variant="info">\n  <Fragment slot="title">Heads up</Fragment>\n  Scheduled maintenance Sunday 02:00–04:00 UTC.\n</Alert>\n<Alert variant="success">\n  <Fragment slot="title">Saved</Fragment>\n  Your changes are live.\n</Alert>`,
        },
        {
            id: "variants",
            title: "Variants",
            code: `<Alert variant="info">…</Alert>\n<Alert variant="success">…</Alert>\n<Alert variant="warning">…</Alert>\n<Alert variant="error">…</Alert>`,
        },
        {
            id: "closable",
            title: "Dismissible",
            code: `<Alert variant="warning" closable>\n  <Fragment slot="title">Storage almost full</Fragment>\n  Upgrade your plan.\n</Alert>`,
        },
    ],
    props: [
        t("variant", "\"primary\" | \"error\" | \"success\" | \"warning\" | \"info\" | …", "\"primary\"", "Visual + semantic variant."),
        t("size", "\"xs\" | \"sm\" | \"md\" | \"lg\" | \"xl\"", "\"md\"", "Surface scale."),
        t("closable", "boolean", "false", "Renders the dismiss button."),
        t("closeLabel", "string", "\"Dismiss\"", "Accessible name for the dismiss button."),
        t("role", "\"alert\" | \"status\" | \"none\"", "—", "Overrides the variant-driven live-region role."),
        t("class", "string", "—", "Merged via cn(); Tailwind classes welcome."),
        t("id", "string", "—", "Element id."),
    ],
    slots: [
        {name: "default", description: "Message body text."},
        {name: "title", description: "Bold heading line."},
        {name: "icon", description: "Custom leading glyph (overrides the built-in one)."},
    ],
    faq: [
        {
            q: "When is it announced?",
            a: "Error alerts use role=alert (assertive, immediate); all other variants use role=status (polite). Mount-time announcements only — toggling content re-announces.",
        },
    ],
    since: "0.1.0",
    related: ["spinner", "toast", "button"],
};
