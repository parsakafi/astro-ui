import {type ComponentMeta, t, common} from "./types";

export const tooltip: ComponentMeta = {
    slug: "tooltip",
    name: "Tooltip",
    description: "CSS-only hover/focus tooltip on a trigger wrapper.",
    overview:
        "Tooltip wraps a trigger and reveals a bubble on :hover and :focus-visible — pure CSS, no script. The bubble is aria-hidden; name the trigger with aria-label. Tooltips never carry essential information.",
    importPath: "astro-ui",
    exportName: "Tooltip",
    category: "overlay",
    js: false,
    usage:
        `---\nimport { Tooltip, Button } from "astro-ui";\n---\n\n<Tooltip ariaLabel="Delete item">\n  <Button size="icon" variant="destructive" ariaLabel="Delete">␡</Button>\n  <span slot="content">Delete this item permanently</span>\n</Tooltip>`,
    features: [
        "Pure CSS :hover/:focus-visible",
        "top/bottom placement with arrow",
        "dark/light bubble variants",
        "Respects prefers-reduced-transparency",
    ],
    a11y: [
        "`role=\"tooltip\"` with `aria-label` on the trigger — the tip is announced on focus",
        "Revealed on keyboard `:focus-visible`, not only hover; content `aria-hidden` from the trigger's name",
    ],
    demos: [
        {
            id: "basic",
            title: "Basic",
            code: `<Tooltip ariaLabel="Save document">\n  <Button variant="outline">Save</Button>\n  <span slot="content">Saves to your workspace</span>\n</Tooltip>\n<Tooltip placement="bottom" variant="light" ariaLabel="Help">\n  <Button variant="ghost">Help</Button>\n  <span slot="content">Light bubble, bottom placement</span>\n</Tooltip>`,
        },
    ],
    props: [
        t("placement", `"top" | "bottom"`, `"top"`, "Bubble side."),
        t("variant", `"dark" | "light"`, `"dark"`, "Bubble style."),
        t("size", `"sm" | "md"`, `"sm"`, "Bubble text scale."),
        t("ariaLabel", "string", "—", "Accessible name for the trigger."),
        ...common(false),
    ],
    slots: [
        {name: "default", description: "The trigger element."},
        {name: "content", description: "Bubble content."},
    ],
    faq: [
        {
            q: "Touch devices?",
            a: "CSS-only tooltips don't trigger on tap by design — never put essential info in one; show it inline instead.",
        },
    ],
    since: "1.0.0",
    related: ["dialog", "kbd", "button"],
};
