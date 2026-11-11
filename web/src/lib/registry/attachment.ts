import {type ComponentMeta, t, common} from "./types";

export const attachment: ComponentMeta = {
    slug: "attachment",
    name: "Attachment",
    description: "File attachment card with media, state hooks, and action slots.",
    overview:
        "Attachment shows an attached file as a composed card: a media box (icon or image thumbnail), a title and description line, and an actions area. It is purely presentational — upload progress, errors, and removal are wired app-side. Five `state` values render as `data-state` attributes (idle is dashed; error is red) that you can target from your own CSS, and `orientation` stacks the card vertically (image-first) or in a row.",
    importPath: "@parsakafi/astro-ui",
    exportName: "Attachment",
    category: "data-display",
    js: false,
    usage:
        `---\nimport { Attachment, Button } from "@parsakafi/astro-ui";\n---\n\n<Attachment\n  state="done"\n  title="quarterly-report.pdf"\n  description="PDF · 2.4 MB"\n>\n  <Button variant="ghost" size="icon" slot="actions" aria-label="Remove file">✕</Button>\n</Attachment>`,
    features: [
        "Five state hooks: idle (dashed), uploading, processing, error, done — via data-state",
        "Media variants: icon (paperclip) or image thumbnail, or your own media slot",
        "Three sizes (xs/sm/md) and horizontal/vertical orientation",
        "Named slots: media, title, description, actions",
        "Zero JS — all behavior (pick, upload, remove) stays app-side",
    ],
    a11y: [
        "Purely presentational card — no implicit widget role, so it never traps focus",
        "State is exposed via data-state attributes; announce changes app-side with aria-live when they matter",
        "Action buttons keep their own accessible names — icon-only actions must pass aria-label",
        "Decorative media and the paperclip fallback icon are aria-hidden",
    ],
    demos: [
        {
            id: "basic",
            title: "Basic",
            code: `<Attachment
  title="quarterly-report.pdf"
  description="PDF · 2.4 MB"
>
  <Button variant="ghost" size="icon" slot="actions" aria-label="Remove file">✕</Button>
</Attachment>`,
        },
        {
            id: "states",
            title: "States",
            code: `<Attachment state="idle" title="Drop files here" description="or browse" />
<Attachment state="uploading" title="upload.csv" description="64% · 1.2 MB of 1.9 MB" progress={64} />
<Attachment state="processing" title="scan.zip" description="Virus scan…" />
<Attachment state="error" title="file.exe" description="Type not allowed" />
<Attachment state="done" title="logo.svg" description="SVG · 12 KB" />`,
        },
        {
            id: "sizes",
            title: "Sizes",
            code: `<Attachment size="xs" title="notes.txt" description="1 KB" />
<Attachment size="sm" title="notes.txt" description="1 KB" />
<Attachment size="md" title="notes.txt" description="1 KB" />`,
        },
        {
            id: "vertical",
            title: "Vertical with image",
            code: `<Attachment orientation="vertical" title="cover.png" description="PNG · 480 KB">
  <img slot="media" src="/cover.png" alt="" />
</Attachment>`,
        },
        {
            id: "group",
            title: "Group",
            code: `<div class="attachment-row" role="list">
  <Attachment role="listitem" title="a.pdf" description="PDF · 2.4 MB" />
  <Attachment role="listitem" title="b.png" description="PNG · 800 KB" />
</div>`,
        },
    ],
    props: [
        t("state", `"idle" | "uploading" | "processing" | "error" | "done"`, `"done"`, `Visual state; renders as data-state for styling hooks (idle = dashed border, error = red).`),
        t("size", `"xs" | "sm" | "md"`, `"md"`, `Card and media-box scale.`),
        t("orientation", `"horizontal" | "vertical"`, `"horizontal"`, `Media above text (vertical) or inline row (horizontal).`),
        t("media", `"icon" | "image"`, `"icon"`, `Media-box content: paperclip icon or image fallback; override with the media slot.`),
        t("progress", "number", "—", "0–100 — renders a determinate 2px progress bar on the card's bottom edge; omit for an indeterminate sweep while uploading/processing."),
        t("title", "string", "—", "Title line (overridden by the title slot)."),
        t("description", "string", "—", "Muted second line (overridden by the description slot)."),
        ...common(false),
    ],
    faq: [
        {
            q: "How do I handle uploads?",
            a: "The component is presentational by design. Wrap it with your own file input + submit flow, flip state through idle → uploading → done, and announce progress with an aria-live region app-side.",
        },
        {
            q: "How do I remove an attachment?",
            a: "Put a button in the actions slot with an explicit aria-label — icon-only actions need a name. Wire the click handler or a form submit in your app; the component ships zero JS.",
        },
    ],
    since: "0.1.0",
    related: ["empty", "tag", "button-group"],
};
