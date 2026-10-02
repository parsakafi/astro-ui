import {type ComponentMeta, t, common} from "./types";

export const toggle: ComponentMeta = {
    slug: "toggle",
    name: "Toggle",
    description: "Two-state button with aria-pressed — SSR-controlled.",
    overview:
        "Toggle is a semantic &lt;button type=\"button\"&gt; that carries aria-pressed. State is server-rendered: pass pressed for SSR-controlled state (e.g. a filter that is on for the initial page load), and flip the attribute with your own one-line script when the user clicks. Styles mirror Button: default (muted fill when pressed) and outline (primary fill) variants at three sizes.",
    importPath: "astro-ui",
    exportName: "Toggle",
    category: "forms",
    js: false,
    usage:
        `---\nimport { Toggle } from "astro-ui";\n---\n\n<Toggle ariaLabel="Bold"><strong>B</strong></Toggle>\n\n<script>\n  document.querySelectorAll(".aui-toggle").forEach((btn) => {\n    btn.addEventListener("click", () => {\n      const on = btn.getAttribute("aria-pressed") === "true";\n      btn.setAttribute("aria-pressed", String(!on));\n      btn.classList.toggle("aui-toggle--pressed", !on);\n    });\n  });\n</script>`,
    features: [
        "Semantic button + aria-pressed (correct pressed semantics, no div hacks)",
        "SSR-controlled state via the pressed prop",
        "default / outline variants at sm / md / lg",
        "Zero JS — flip aria-pressed with a one-line app script",
    ],
    a11y: [
        "`aria-pressed` announces the on/off state",
        "`:focus-visible` ring",
    ],
    demos: [
        {
            id: "variants",
            title: "Variants",
            code: `<Toggle variant="default" ariaLabel="Bold">B</Toggle>\n<Toggle variant="outline" ariaLabel="Italic">I</Toggle>\n<Toggle variant="outline" pressed ariaLabel="Underline">U</Toggle>`,
        },
        {
            id: "sizes",
            title: "Sizes",
            code: `<Toggle size="sm">Sm</Toggle>\n<Toggle size="md">Md</Toggle>\n<Toggle size="lg">Lg</Toggle>`,
        },
    ],
    props: [
        t("pressed", "boolean", "false", "SSR state — maps to aria-pressed and the pressed styling."),
        t("variant", `"default" | "outline"`, `"default"`, "Visual style."),
        t("size", `"sm" | "md" | "lg"`, `"md"`, "Scale of the button."),
        t("disabled", "boolean", "false", "Disables the toggle."),
        ...common(true),
    ],
    faq: [
        {
            q: "Where's the click handling?",
            a: "Nowhere — Toggle is SSR-only. Flip aria-pressed (and toggle the aui-toggle--pressed class) in a one-line app script; see the usage example.",
        },
    ],
    since: "1.0.0",
    related: ["toggle-group", "switch", "button"],
};
