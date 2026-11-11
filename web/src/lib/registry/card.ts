import {type ComponentMeta, t, common} from "./types";

export const card: ComponentMeta = {
    slug: "card",
    name: "Card",
    description: "Content container with named-slot header/content/footer composition.",
    overview:
        "Card composes through named slots — header, default content, footer — and renders a semantic &lt;article&gt;. Four variants, six sizes, optional split dividers and a scrollable body. Prefer slots over title/description props.",
    importPath: "@parsakafi/astro-ui",
    exportName: "Card",
    category: "layout",
    js: false,
    usage:
        `---\nimport { Card, Button } from "@parsakafi/astro-ui";\n---\n\n<Card>\n  <h3 slot="header">Title</h3>\n  <p>Body content.</p>\n  <div slot="footer"><Button size="sm">Action</Button></div>\n</Card>`,
    features: [
        "Named-slot composition: header / default / footer",
        "4 variants: default, outline, ghost, bordered",
        "6 sizes: xs → 2xl",
        "split dividers, scrollable body",
        "Semantic <article>, overridable with as",
        "title/description props as a text-only shortcut",
    ],
    a11y: [
        "`aria-labelledby` / `aria-describedby` wire the title and description to the card region",
        "`aria-label` fallback for cards without a visible title",
    ],
    demos: [
        {
            id: "basic",
            title: "Basic",
            code: `<Card>
  <h3 slot="header">Default card</h3>
  <p>Header, content and footer compose through slots.</p>
  <div slot="footer"><Button size="sm">Confirm</Button></div>
</Card>`,
        },
        {
            id: "variants",
            title: "Variants",
            code: `<Card variant="outline"><p>Outline — flat surface.</p></Card>
<Card variant="ghost"><p>Ghost card.</p></Card>
<Card variant="bordered"><p>Bordered.</p></Card>`,
        },
        {
            id: "split",
            title: "Split & sizes",
            code: `<Card split>
  <h3 slot="header">Split dividers</h3>
  <p>Borders separate header, content, and footer.</p>
</Card>
<Card size="sm"><p>Small card.</p></Card>`,
        },
    ],
    props: [
        t("as", `"article" | "section" | "div"`, `"article"`, "Semantic wrapper element."),
        t("variant", `"default" | "outline" | "ghost" | "bordered"`, `"default"`, "Surface style."),
        t("size", `"xs" | "sm" | "md" | "lg" | "xl" | "2xl"`, `"md"`, "Padding/radius scale."),
        t("split", "boolean", "false", "Dividers between header, content, footer."),
        t("scrollable", "boolean", "true", "Scrollable body when content overflows."),
        t("title / description", "string", "—", "Text-only shortcut props."),
        ...common(),
    ],
    slots: [
        {name: "header", description: "Card header (your own heading element)."},
        {name: "default", description: "Body content."},
        {name: "footer", description: "Footer actions."},
    ],
    faq: [
        {
            q: "Slots or title prop?",
            a: "Slots — they keep your heading hierarchy and allow rich content. title/description exist only for trivial text-only cards.",
        },
    ],
    since: "0.1.0",
    related: ["button", "separator", "table"],
};
