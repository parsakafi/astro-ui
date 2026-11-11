import {type ComponentMeta, t, common} from "./types";

export const clipboard: ComponentMeta = {
    slug: "clipboard",
    name: "Clipboard",
    description: "Icon-first copy-to-clipboard trigger with copied-state check.",
    overview:
        "Clipboard renders an icon-first trigger button carrying its value in data-aui-clipboard. On success the copy icon swaps to a green check and a polite live region confirms. Ships zero JS by default — wire it app-side, or set auto to opt into a ~10-line built-in handler using the async Clipboard API. onlyIcon renders a square icon-only trigger for code blocks.",
    importPath: "astro-ui",
    exportName: "Clipboard",
    category: "general",
    js: true,
    usage:
        `---\nimport { Clipboard } from "astro-ui";\n---\n\n<Clipboard value="npm install astro-ui" auto />\n\n<!-- or wire it yourself -->\n<Clipboard value="npx astro add" />\n<script>\n  // read data-aui-clipboard and call the async clipboard API\n</script>`,
    features: [
        "Copy icon swaps to a green check when copied",
        "onlyIcon square trigger for code blocks and toolbars",
        "Zero-JS core: value travels in data-aui-clipboard",
        "auto mode adds a tiny built-in handler (no hydration)",
        "Polite live-region copy feedback",
        "3 trigger styles, 2 sizes, disabled state",
    ],
    a11y: [
        "Copied confirmation is announced via `role=\"status\"` with `aria-live=\"polite\"`",
        "Real button with an `aria-label`; icons `aria-hidden`",
    ],
    demos: [
        {
            id: "basic",
            title: "Icon trigger",
            code: `<Clipboard value="npm install astro-ui" auto />\n\n<!-- icon=false falls back to a text-only trigger -->\n<Clipboard value="npm install astro-ui" auto icon={false} />`,
        },
        {
            id: "only-icon",
            title: "Icon only",
            code: `<Clipboard value="npx astro add" auto onlyIcon />\n<Clipboard value="npx astro add" auto onlyIcon variant="soft" />\n<Clipboard value="npx astro add" auto onlyIcon variant="ghost" />\n\n<!-- accessible name derives from the value: aria-label="Copy npx astro add" -->`,
        },
        {
            id: "variants",
            title: "Variants",
            code: `<Clipboard value="outline" auto variant="outline" label="Outline" />\n<Clipboard value="ghost" auto variant="ghost" label="Ghost" />\n<Clipboard value="soft" auto variant="soft" label="Soft" />`,
        },
        {
            id: "sizes",
            title: "Sizes",
            code: `<Clipboard value="small command" auto size="sm" />\n<Clipboard value="regular command" auto size="md" />`,
        },
        {
            id: "feedback",
            title: "Custom feedback",
            code: `<Clipboard\n  value="pnpm add astro-ui"\n  auto\n  feedback="Install command copied"\n/>\n\n<!-- feedback={null} hides the live-region text entirely —\n     the icon swap alone carries the confirmation -->\n<Clipboard value="pnpm add astro-ui" auto feedback={null} />`,
        },
        {
            id: "disabled",
            title: "Disabled",
            code: `<Clipboard value="locked" auto disabled label="Copy" />\n<Clipboard value="locked" auto disabled onlyIcon />`,
        },
        {
            id: "manual",
            title: "Manual wiring (zero JS)",
            code: `<Clipboard value="npx astro add" />\n\n<script>\n  document.addEventListener("click", (event) => {\n    const btn = event.target.closest("[data-aui-clipboard]");\n    if (!btn) return;\n    navigator.clipboard?.writeText(btn.dataset.auiClipboard);\n  });\n</script>`,
        },
        {
            id: "code-block",
            title: "In a code block",
            code: `<div class="aui-code-pill">\n  <code>npm install astro-ui</code>\n  <Clipboard value="npm install astro-ui" auto onlyIcon variant="ghost" size="sm" />\n</div>\n\n<style>\n  .aui-code-pill {\n    display: inline-flex; align-items: center; gap: 0.5rem;\n    padding: 0.375rem 0.375rem 0.375rem 0.75rem;\n    background: var(--ui-muted); border-radius: var(--ui-radius-md);\n    font-family: var(--ui-font-mono); font-size: var(--ui-text-sm);\n  }\n</style>`,
        },
    ],
    props: [
        t("value", "string", "required", "Text placed on the clipboard."),
        t("label", "string", `"Copy"`, "Trigger label (hidden when onlyIcon)."),
        t("icon", "boolean", "true", "Lead with the copy icon; swaps to a check when copied."),
        t("onlyIcon", "boolean", "false", "Square icon-only trigger; aria-label derives from value."),
        t("auto", "boolean", "false", "Opt into the built-in clipboard handler."),
        t("feedback", "string", `"Copied!"`, "Live-region success message."),
        t("variant", `"outline" | "ghost" | "soft"`, `"outline"`, "Trigger style."),
        t("size", `"sm" | "md"`, `"md"`, "Trigger scale."),
        ...common(),
    ],
    faq: [
        {
            q: "Why is JS optional here?",
            a: "The web platform has no script-free clipboard write, so the component keeps its core markup zero-JS and makes the (tiny) script opt-in via auto.",
        },
        {
            q: "How does the copied state work?",
            a: "The success handler toggles an is-copied class on the root for 1.5s; CSS swaps the copy icon for a green check. With manual wiring, toggle the class yourself.",
        },
        {
            q: "Is the icon-only trigger accessible?",
            a: "Yes — it renders a real button whose aria-label defaults to Copy <value> (override with ariaLabel), and copy success is announced via the live region.",
        },
    ],
    since: "0.1.0",
    related: ["button", "kbd", "code"],
};
