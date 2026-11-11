import {type ComponentMeta, t, common} from "./types";

export const tag: ComponentMeta = {
    slug: "tag",
    name: "Tag",
    description: "Categorization label with shapes and optional close affordance.",
    overview:
        "Tag marks membership in a set — categories, filters, keywords. Unlike Badge (status/count), Tag is for grouping. Optional closable renders an accessible × button that stays zero-JS.",
    importPath: "astro-ui",
    exportName: "Tag",
    category: "data-display",
    js: false,
    usage:
        `---\nimport { Tag } from "astro-ui";\n---\n\n<Tag>astro</Tag>\n<Tag variant="soft" shape="pill">design</Tag>\n<Tag variant="outline" closable closeLabel="Remove astro">astro</Tag>`,
    features: [
        "9 color variants",
        "3 shapes: rounded, square, pill",
        "closable with accessible label",
        "content prop or slot",
    ],
    a11y: [
        "Closable tags render a real button with an `aria-label` (no-JS submit removal)",
        "Decorative shapes `aria-hidden`",
    ],
    demos: [
        {
            id: "basic",
            title: "Variants & shapes",
            code: `<Tag>astro</Tag>\n<Tag variant="soft" shape="pill">design</Tag>\n<Tag variant="outline">zero-js</Tag>\n<Tag variant="success" shape="square">stable</Tag>\n<Tag variant="info" closable closeLabel="Remove token">tokens</Tag>`,
        },
    ],
    props: [
        t("variant", `"primary" | "secondary" | "outline" | "soft" | "success" | "warning" | "destructive" | "info" | "muted"`, `"primary"`, "Color scheme."),
        t("size", `"sm" | "md" | "lg"`, `"md"`, "Scale."),
        t("shape", `"rounded" | "square" | "pill"`, `"rounded"`, "Corner shape."),
        t("content", "string", "—", "Text when no slot content."),
        t("closable", "boolean", "false", "Render dismiss button."),
        t("closeLabel", "string", `"Remove"`, "Accessible dismiss label."),
        ...common(),
    ],
    faq: [
        {
            q: "Tag or Badge?",
            a: "Tag = membership in a set (filter chips, keywords). Badge = status or count attached to something else.",
        },
    ],
    since: "0.1.0",
    related: ["badge", "button", "kbd"],
};
