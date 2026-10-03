import {type ComponentMeta, t, common} from "./types";

export const switchComponent: ComponentMeta = {
    slug: "switch",
    name: "Switch",
    description: "On/off toggle built on a native checkbox with role=\"switch\".",
    overview:
        "Switch is an on/off toggle built on a native checkbox carrying role=\"switch\" — screen readers announce On/Off, Tab and Space work natively, and the form value is a real checkbox value.",
    importPath: "astro-ui",
    exportName: "Switch",
    category: "forms",
    js: false,
    usage:
        `---\nimport { Switch } from "astro-ui";\n---\n\n<Switch name="wifi" checked>Wi-Fi</Switch>`,
    features: [
        "role=\"switch\" with On/Off announcements",
        "rounded (default) or square track",
        "5 sizes, 9 color variants",
        "label prop or slot content",
        "invalid support with describedby",
    ],
    a11y: [
        "`role=\"switch\"` on a native checkbox — announces on/off state",
        "Space toggles; `aria-invalid` + `aria-describedby` for validation",
    ],
    demos: [
        {
            id: "basic",
            title: "Basic",
            code: `<Switch name="wifi" checked>Wi-Fi</Switch>
<Switch name="bluetooth">Bluetooth</Switch>
<Switch name="airplane" disabled>Airplane mode</Switch>`,
        },
        {
            id: "shapes",
            title: "Shapes & sizes",
            code: `<Switch shape="square" checked label="Square" />
<Switch size="sm" checked label="Small" />`,
        },
    ],
    props: [
        t("name / value", "string", "—", "Native form fields."),
        t("checked", "boolean", "false", "Initial state."),
        t("shape", `"rounded" | "square"`, `"rounded"`, "Track shape."),
        t("label", "string", "—", "Text after the thumb when no slot."),
        t("size", `"xs" | "sm" | "md" | "lg" | "xl"`, `"md"`, "Scale."),
        t("variant", `"primary" | … | "inherit"`, `"primary"`, "Track accent color."),
        ...common(),
    ],
    faq: [
        {
            q: "Switch or Checkbox?",
            a: "Switch = immediate effect (settings toggle). Checkbox = submit-time selection. They're built on the same native input, so either submits identically.",
        },
    ],
    since: "1.0.0",
    related: ["checkbox", "radio", "label"],
};
