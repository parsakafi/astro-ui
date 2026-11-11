import {type ComponentMeta, t, common} from "./types";

export const radioGroup: ComponentMeta = {
    slug: "radio-group",
    name: "Radio Group",
    description: "Declarative single-choice group — fieldset of radios from a plain items array.",
    overview:
        "RadioGroup renders a labelled fieldset of Radio components from a plain `items` array — native radios underneath, so the browser provides single-choice semantics and arrow-key navigation with zero JavaScript. The group centralizes what hand-written fieldsets repeat: `defaultValue` picks the initially checked option (only one carries `checked`), `orientation` lays rows out vertically or horizontally, options can carry a muted `hint` line or be individually disabled, and group-level `invalid` styling ties the legend to your error text via `ariaDescribedby`. For fully custom per-option markup, hand-write the fieldset with Radio components instead.",
    importPath: "@parsakafi/astro-ui",
    exportName: "RadioGroup",
    category: "forms",
    js: false,
    usage:
        `---\nimport { RadioGroup } from "@parsakafi/astro-ui";\n---\n\n<RadioGroup\n  name="plan"\n  label="Plan"\n  defaultValue="pro"\n  items={[\n    { value: "free", label: "Free", hint: "For hobbies" },\n    { value: "pro", label: "Pro", hint: "For teams" },\n  ]}\n/>`,
    features: [
        "Declarative `items` array — strings or {value, label, hint?, disabled?}",
        "defaultValue sets the initially checked option (server-rendered)",
        "orientation: vertical stack or horizontal wrap",
        "Per-option muted hint lines and disabled state",
        "Group-level invalid legend styling + ariaDescribedby wiring",
        "Native radios underneath — arrows navigate, forms submit natively",
        "size/variant forwarded to every option (mirrors Radio)",
    ],
    a11y: [
        "Real <fieldset>/<legend> group semantics — the legend names the group for screen readers",
        "Native radio keyboard behavior: arrows move within the group, Tab enters/exits",
        "Hint paragraphs get ids for aria-describedby wiring at the group level",
        "Invalid state marks the legend visually; pair with ariaDescribedby pointing at error text",
        "The required indicator is text (\" *\" in the legend), never color alone",
    ],
    demos: [
        {
            id: "basic",
            title: "Basic",
            code: `<RadioGroup\n  name="plan"\n  label="Plan"\n  defaultValue="Free"\n  items={["Free", "Pro", "Enterprise"]}\n/>`,
        },
        {
            id: "hints",
            title: "Hints + disabled options",
            code: `<RadioGroup\n  name="plan"\n  label="Choose a plan"\n  defaultValue="pro"\n  items={[\n    { value: "free", label: "Free", hint: "For hobbies" },\n    { value: "pro", label: "Pro", hint: "For teams" },\n    { value: "enterprise", label: "Enterprise", hint: "Contact sales", disabled: true },\n  ]}\n/>`,
        },
        {
            id: "orientation",
            title: "Horizontal",
            code: `<RadioGroup\n  name="size"\n  label="Size"\n  defaultValue="m"\n  orientation="horizontal"\n  items={["S", "M", "L", "XL"]}\n/>`,
        },
        {
            id: "states",
            title: "Invalid & disabled",
            code: `<RadioGroup\n  name="ship"\n  label="Shipping"\n  invalid\n  ariaDescribedby="ship-err"\n  items={["Standard", "Express"]}\n/>\n<p id="ship-err">Choose a shipping method.</p>\n<RadioGroup name="seat" label="Seat (closed)" disabled items={["Window", "Aisle"]} />`,
        },
        {
            id: "sizes",
            title: "Sizes",
            code: `<RadioGroup size="sm" name="s1" label="sm" items={["One", "Two"]} />\n<RadioGroup size="md" name="s2" label="md" items={["One", "Two"]} />\n<RadioGroup size="lg" name="s3" label="lg" items={["One", "Two"]} />`,
        },
    ],
    props: [
        t("name", "string", "—", "Shared radio name; the chosen value posts under it."),
        t("items", `(string | { value, label, hint?, disabled? })[]`, "—", "Option list; strings become both value and label."),
        t("defaultValue", "string", "—", "Which option starts checked."),
        t("label", "string", "—", "Group heading rendered in the legend."),
        t("orientation", `"vertical" | "horizontal"`, `"vertical"`, "Row layout."),
        t("invalid", "boolean", "false", "Error-colored legend; visual hook for validation."),
        t("ariaDescribedby", "string", "—", "id of hint/error text describing the group."),
        t("disabled", "boolean", "false", "Disable every option."),
        t("size", `"xs" | "sm" | "md" | "lg" | "xl"`, `"md"`, "Forwarded to each Radio."),
        t("variant", `"primary" | "secondary" | … | "inherit"`, `"primary"`, "Forwarded to each Radio."),
        ...common(false),
    ],
    faq: [
        {
            q: "How is this different from Radio?",
            a: "Radio is one control — you hand-write the fieldset/legend and repeat it per option. RadioGroup takes an items array and renders the whole labelled group, centralizing defaultValue, hints, orientation, and invalid wiring. Both are zero-JS; RadioGroup renders Radio components underneath.",
        },
        {
            q: "Can I use custom markup per option?",
            a: "RadioGroup options are label + hint text. For rich option content (icons, price tables, cards), hand-write the fieldset with individual Radio components — the native group semantics come from sharing `name`, not from the wrapper.",
        },
    ],
    since: "0.1.0",
    related: ["radio", "checkbox", "toggle-group", "select"],
};
