import {type ComponentMeta, t, common} from "./types";

export const kbd: ComponentMeta = {
    slug: "kbd",
    name: "Kbd",
    description: "Keyboard key cap for documenting shortcuts.",
    overview:
        "Kbd renders an inline semantic &lt;kbd&gt; styled as a key cap. Optional raised shadow gives physical depth. Use inside prose; describe sequences with an accessible label on a wrapper.",
    importPath: "astro-ui",
    exportName: "Kbd",
    category: "general",
    js: false,
    usage:
        `---\nimport { Kbd } from "astro-ui";\n---\n\n<p>Press <Kbd>Ctrl</Kbd> + <Kbd>K</Kbd> to search.</p>`,
    features: [
        "Semantic <kbd>",
        "3 variants incl. borderless muted",
        "Raised key-cap shadow",
        "3 sizes, mono font",
    ],
    a11y: [
        "Semantic `<kbd>` elements — key sequences are announced as keyboard input",
    ],
    demos: [
        {
            id: "basic",
            title: "Basic",
            code: `<p>Press <Kbd>Ctrl</Kbd> + <Kbd>K</Kbd> to search.</p>\n<p><Kbd variant="outline" raised>Enter</Kbd> to submit.</p>`,
        },
    ],
    props: [
        t("variant", `"default" | "outline" | "muted"`, `"default"`, "Visual style."),
        t("size", `"sm" | "md" | "lg"`, `"md"`, "Key cap scale."),
        t("raised", "boolean", "false", "Raised key-cap shadow."),
        ...common(),
    ],
    faq: [],
    since: "0.1.0",
    related: ["clipboard", "tooltip", "button"],
};
