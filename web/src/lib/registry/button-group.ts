import {type ComponentMeta, t, common} from "./types";

export const buttonGroup: ComponentMeta = {
    slug: "button-group",
    name: "ButtonGroup",
    description: "Zero-JS container that visually groups buttons by merging borders and rounding outer corners only.",
    overview:
        "ButtonGroup is a zero-JS layout container that visually groups buttons or other inline interactive elements by merging their borders and rounding only the outer corners. Children remain fully independent — the group is purely presentational. Horizontal and vertical orientations, plus proper focus/hover z-index handling, make it the foundation for toolbars, pagination controls, and segmented button sets.",
    importPath: "@parsakafi/astro-ui",
    exportName: "ButtonGroup",
    category: "general",
    js: false,
    usage:
        `---\nimport { Button, ButtonGroup } from "@parsakafi/astro-ui";\n---\n\n<ButtonGroup>\n  <Button variant="outline">Previous</Button>\n  <Button variant="outline">Next</Button>\n</ButtonGroup>\n\n<ButtonGroup orientation="vertical">\n  <Button variant="outline">Copy</Button>\n  <Button variant="outline">Paste</Button>\n  <Button variant="outline">Delete</Button>\n</ButtonGroup>`,
    features: [
        "Horizontal and vertical orientations",
        "Automatic border merging between adjacent children",
        "Only outer corners remain rounded",
        "Focus states elevated via z-index for full border visibility",
        "role=\"group\" or role=\"toolbar\" for semantic grouping",
        "Works with buttons, links, inputs, and other inline interactive elements",
        "ButtonGroupText for non-button content (counts, labels, badges)",
        "ButtonGroupSeparator for visual dividers between sections",
        "Zero JavaScript — pure CSS visual grouping",
    ],
    a11y: [
        "Grouped buttons share one `aria-label`-named group",
        "Roving `:focus-visible` ring keeps focus clear across joined controls",
    ],
    demos: [
        {
            id: "basic",
            title: "Basic",
            code: `<ButtonGroup>\n  <Button variant="outline">Previous</Button>\n  <Button variant="outline">Next</Button>\n</ButtonGroup>`,
        },
        {
            id: "vertical",
            title: "Vertical",
            code: `<ButtonGroup orientation="vertical">\n  <Button variant="outline">Copy</Button>\n  <Button variant="outline">Paste</Button>\n  <Button variant="outline">Delete</Button>\n</ButtonGroup>`,
        },
        {
            id: "variants",
            title: "Variants",
            code: `<ButtonGroup>\n  <Button>Primary</Button>\n  <Button variant="secondary">Secondary</Button>\n</ButtonGroup>\n<ButtonGroup>\n  <Button variant="outline">Edit</Button>\n  <Button variant="outline">Delete</Button>\n</ButtonGroup>`,
        },
        {
            id: "icons",
            title: "Icons",
            code: `<ButtonGroup ariaLabel="Text alignment">\n  <Button variant="outline" size="icon" ariaLabel="Left">⇤</Button>\n  <Button variant="outline" size="icon" ariaLabel="Center">↔</Button>\n  <Button variant="outline" size="icon" ariaLabel="Right">⇥</Button>\n</ButtonGroup>`,
        },
        {
            id: "with-separator",
            title: "With separator",
            code: `<ButtonGroup>\n  <Button variant="outline">Filter</Button>\n  <Button variant="outline">Sort</Button>\n  <ButtonGroupSeparator />\n  <Button variant="outline">More</Button>\n</ButtonGroup>`,
        },
        {
            id: "with-text",
            title: "With text",
            code: `<ButtonGroup>\n  <Button variant="outline">Star</Button>\n  <ButtonGroupText>2.4k</ButtonGroupText>\n</ButtonGroup>`,
        },
    ],
    props: [
        t("orientation", `"horizontal" | "vertical"`, `"horizontal"`, "Layout direction."),
        t("role", `"group" | "toolbar"`, `"group"`, "Semantic ARIA role for the container."),
        ...common(),
    ],
    slots: [
        {name: "default", description: "Button components or other inline interactive elements."},
    ],
    faq: [
        {
            q: "What elements can I put inside?",
            a: "Any inline interactive elements work — Button, links with Button styles, even native <button> elements. The styles target direct children and merge their borders.",
        },
        {
            q: "Do buttons need special props?",
            a: "No — ButtonGroup is purely presentational. It adjusts borders and radii via CSS; buttons remain fully functional with zero changes.",
        },
        {
            q: "Can I nest ButtonGroups?",
            a: "Yes — vertical groups can contain horizontal groups (or vice versa) for complex toolbars. Each group independently manages its children's borders.",
        },
        {
            q: "How does focus styling work?",
            a: "Focused and hovered children get position: relative with elevated z-index, so their full border appears above siblings. This prevents border clipping.",
        },
    ],
    since: "0.1.0",
    related: ["button", "separator", "pagination"],
};
