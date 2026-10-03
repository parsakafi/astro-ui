import {type ComponentMeta, t, common} from "./types";

export const inputGroup: ComponentMeta = {
    slug: "input-group",
    name: "Input Group",
    description: "Input with attached addons — icons, text prefixes, and buttons around the control.",
    overview:
        "InputGroup composes a text control with addons on either side: a leading icon, an `https://` prefix, a trailing button, or anything else you slot in. The wrapper owns the border, focus ring, and height (mirroring Input sizes) while the inner control renders bare — focus styling is CSS :focus-within, so no JavaScript ships. Works with Input and Textarea alike; use multiline for a Textarea so addons stretch the full height.",
    importPath: "astro-ui",
    exportName: "InputGroup",
    category: "forms",
    js: false,
    usage:
        `---\nimport { InputGroup, Input } from "astro-ui";\n---\n\n<InputGroup>\n  <svg slot="start" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>\n  <Input name="search" placeholder="Search…" />\n</InputGroup>`,
    features: [
        "Named start/end addon slots plus any control in the default slot",
        "Wrapper owns border + focus ring via :focus-within — zero JS",
        "Five sizes matching Input; addons scale with the size",
        "invalid / disabled state hooks mirroring Input",
        "multiline mode for Textarea controls",
        "Addons accept any markup: icons, text, Button, Kbd, Tag",
    ],
    a11y: [
        "Native input semantics are untouched — label the control with Label + id as usual",
        "Decorative addon icons should be aria-hidden; addon text stays readable to screen readers",
        "Focus ring uses :focus-within so keyboard focus is always visible",
    ],
    demos: [
        {
            id: "basic",
            title: "Icon + result count",
            code: `<InputGroup>\n  <svg slot="start" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>\n  <Input name="search" placeholder="Search…" />\n  <Fragment slot="end"><span class="aui-text-sm">12 results</span></Fragment>\n</InputGroup>`,
        },
        {
            id: "prefix",
            title: "Text prefix + button",
            code: `<InputGroup>\n  <Fragment slot="start">https://</Fragment>\n  <Input name="site" placeholder="example.com" />\n  <Fragment slot="end"><Button size="xs" variant="solid" color="carbon">Check</Button></Fragment>\n</InputGroup>`,
        },
        {
            id: "multiline",
            title: "Textarea + actions",
            code: `<InputGroup multiline>\n  <Textarea id="prompt" name="prompt" placeholder="Ask, Search or Chat..." rows={3} maxlength={280} />\n  <Fragment slot="bottom">\n    <Button size="icon" variant="ghost" ariaLabel="Add attachment">\n      <svg …><path d="M12 5v14M5 12h14"/></svg>\n    </Button>\n    <Button size="xs" variant="ghost">Auto</Button>\n    <span class="aui-input-group__spacer" />\n    <span id="count" style="font-variant-numeric:tabular-nums">0 / 280</span>\n    <span aria-hidden="true" style="inline-size:1px;block-size:1rem;background:var(--ui-input)" />\n    <Button size="icon" variant="solid" color="primary" style="border-radius:9999px" ariaLabel="Send">\n      <svg …><path d="M12 19V5M5 12l7-7 7 7"/></svg>\n    </Button>\n  </Fragment>\n</InputGroup>\n\n<script>\n  const ta = document.getElementById("prompt");\n  const out = document.getElementById("count");\n  const max = Number(ta.getAttribute("maxlength")) || 0;\n  const sync = () => { out.textContent = max ? ta.value.length + " / " + max : String(ta.value.length); };\n  ta.addEventListener("input", sync);\n  sync();\n<\/script>`,
        },
        {
            id: "sizes",
            title: "Sizes",
            code: `<InputGroup size="sm"><Input size="sm" placeholder="sm" /></InputGroup>\n<InputGroup size="md"><Input placeholder="md" /></InputGroup>\n<InputGroup size="lg"><Input size="lg" placeholder="lg" /></InputGroup>`,
        },
        {
            id: "states",
            title: "Invalid & disabled",
            code: `<InputGroup invalid>\n  <Input name="url" invalid placeholder="Required field…" />\n</InputGroup>\n<InputGroup disabled>\n  <Input disabled value="Cannot edit" />\n</InputGroup>`,
        },
    ],
    props: [
        t("size", `"xs" | "sm" | "md" | "lg" | "xl"`, `"md"`, "Group height; mirrors Input sizes."),
        t("invalid", "boolean", "false", "Destructive border on the wrapper."),
        t("disabled", "boolean", "false", "Dim + mute the whole group."),
        t("multiline", "boolean", "false", "Auto height for a Textarea control."),
        t("slot start / slot end", "Astro slots", "—", "Addon markup on each edge."),
        ...common(),
    ],
    faq: [
        {
            q: "How is this different from just an Input?",
            a: "InputGroup joins extra markup to the control so the border and focus ring wrap everything — an icon, a currency prefix, a submit button — without you hand-tuning borders or focus styles. The control itself stays a plain Input.",
        },
        {
            q: "Does it work without JavaScript?",
            a: "Fully. Addons are static markup and focus styling is CSS :focus-within — nothing ships or runs client-side.",
        },
    ],
    since: "1.0.0",
    related: ["input", "textarea", "button", "label"],
};
