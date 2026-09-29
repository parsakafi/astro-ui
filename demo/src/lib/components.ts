/**
 * Component registry — the single source of truth for the docs site.
 */
import {series} from "./demo-data";

export interface PropRow {
    /** Prop name in kebab/camel as authored. */
    name: string;
    /** TypeScript-ish type string. */
    type: string;
    /** Default value or "—". */
    def: string;
    /** One-line description. */
    description: string;
}

export interface ComponentMeta {
    /** URL slug (lowercase). */
    slug: string;
    /** Display name. */
    name: string;
    /** One-sentence summary for cards. */
    description: string;
    /** Longer overview paragraph for the detail page hero. */
    overview: string;
    /** Import path, e.g. `astro-ui` (root) or `astro-ui/button`. */
    importPath: string;
    /** Named export when importing from the root package. */
    exportName: string;
    category: CategoryId;
    /** True when the component needs JS to function. */
    js: boolean;
    usage: string;
    /** Feature bullets shown on the detail page. */
    features: string[];
    /** Implemented accessibility notes shown in the Accessibility section (empty = purely presentational). */
    a11y?: string[];
    /** Live demo code snippets shown in the code tab (previews render from Demos.astro). */
    demos: DemoExample[];
    props: PropRow[];
    slots?: { name: string; description: string }[];
    faq: { q: string; a: string }[];
    /** Versions in which the component appeared (for the changelog tab). */
    since: string;
    new?: boolean;
    /** Components that pair well with this one (slugs). */
    related?: string[];
}

export interface DemoExample {
    id: string;
    title: string;
    /** Source code shown in the code tab. Previews are real components authored in Demos.astro. */
    code: string;
}

export type CategoryId =
    | "general"
    | "layout"
    | "navigation"
    | "forms"
    | "data-display"
    | "feedback"
    | "overlay";

export const categories: {
    id: CategoryId;
    name: string;
    description: string;
    /** Emoji glyph (no icon dependency in the demo). */
    icon: string;
}[] = [
    {id: "general", name: "General", description: "Foundational building blocks used across every surface.", icon: "◆"},
    {id: "layout", name: "Layout", description: "Structure and arrange content.", icon: "▦"},
    {id: "navigation", name: "Navigation", description: "Move between views and sections.", icon: "⇥"},
    {id: "forms", name: "Forms", description: "Inputs, controls, and selection — all native, all zero-JS.", icon: "✎"},
    {
        id: "data-display",
        name: "Data Display",
        description: "Present data clearly: tables, progress, placeholders.",
        icon: "▤"
    },
    {id: "feedback", name: "Feedback", description: "Communicate state: alerts, toasts, loading.", icon: "◔"},
    {id: "overlay", name: "Overlay", description: "Content layered above the page.", icon: "❐"},
];

const t = (name: string, type: string, def: string, description: string): PropRow => ({
    name,
    type,
    def,
    description,
});

/** Shared ARIA/attr rows appended to most components. */
const common = (aria = true): PropRow[] => [
    t("class", "string", "—", "Merged via cn(); Tailwind classes welcome."),
    t("id", "string", "—", "Element id."),
    ...(aria ? [t("ariaLabel", "string", "—", "Accessible name.")] : []),
];

export const components: ComponentMeta[] = [
    {
        slug: "button",
        name: "Button",
        description: "Action trigger with variants, sizes, loading states, and anchor mode.",
        overview:
            "Button is the workhorse of the library: a zero-JS action trigger that renders a &lt;button&gt; — or an &lt;a&gt; when href is set — with eleven variants, eight theme colors, seven sizes, four loading-spinner styles, and native form participation. Extra attributes forward untouched.",
        importPath: "astro-ui",
        exportName: "Button",
        category: "general",
        js: false,
        usage:
            `---\nimport { Button } from "astro-ui";\n---\n\n<Button>Primary</Button>\n<Button variant="outline" href="/docs">Read docs</Button>\n<Button color="success">Approve</Button>\n<Button loading loadingIcon="dots">Saving…</Button>`,
        features: [
            "11 variants: primary, secondary, outline, ghost, destructive, link, solid, dashed, soft, plain, pure",
            "8 theme colors via `color`: primary, secondary, destructive, success, warning, info, carbon, accent",
            "7 sizes: xs, sm, md, lg, xl, 2xl, icon (icon requires ariaLabel)",
            "Loading state with 4 spinner styles (ring, dots, pulse, spin) and 3 positions",
            "Invalid state: error border + red focus ring + aria-invalid",
            "Anchor mode via href — links keep rel/target support",
            "Native form participation: form, formAction, formMethod='dialog'…",
            "shape (rounded/square/circle) and shadow (sm/md/lg) controls",
            "leading / trailing icon slots",
            "TypeScript-typed, zero JS, token-themed",
        ],
        a11y: [
            "`aria-busy` announces the loading state; `aria-disabled` keeps disabled buttons focusable but inert",
            "`aria-invalid` styling hook for form validation states",
            "Loading spinner is `aria-hidden` with `:focus-visible` ring",
        ],
        demos: [
            {
                id: "basic",
                title: "Basic",
                code: `<Button>Primary</Button>`,
            },
            {
                id: "variant",
                title: "Variant",
                code: `<Button>Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="link">Link</Button>
<Button variant="solid">Solid</Button>
<Button variant="dashed">Dashed</Button>
<Button variant="soft">Soft</Button>
<Button variant="plain">Plain</Button>
<Button variant="pure">Pure</Button>`,
            },
            {
                id: "color",
                title: "Color",
                code: `<Button color="success">Success</Button>
<Button color="warning">Warning</Button>
<Button color="info">Info</Button>
<Button color="accent">Accent</Button>
<Button variant="outline" color="destructive">Outline danger</Button>
<Button variant="soft" color="info">Soft info</Button>`,
            },
            {
                id: "size",
                title: "Size",
                code: `<Button size="xs">Extra small</Button>
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra large</Button>
<Button size="2xl">2XL</Button>
<Button size="icon" ariaLabel="Search">⌕</Button>`,
            },
            {
                id: "loading",
                title: "Loading",
                code: `<Button loading>Submitting</Button>
<Button loading loadingPosition="center" loadingText="Saving…">Save</Button>
<Button loading loadingIcon="dots">Dots</Button>
<Button loading loadingIcon="pulse">Pulse</Button>`,
            },
            {
                id: "invalid",
                title: "Invalid",
                code: `<Button invalid>Invalid state</Button>
<Button variant="outline" invalid>Invalid outline</Button>
<Button variant="ghost" invalid>Invalid ghost</Button>`,
            },
            {
                id: "shape-shadow",
                title: "Shape & shadow",
                code: `<Button variant="outline" shape="rounded">Round</Button>
<Button variant="outline" shape="circle" ariaLabel="Go">→</Button>
<Button variant="outline" shadow="md">Shadow md</Button>
<Button disabled>Disabled</Button>`,
            },
        ],
        props: [
            t(
                "variant",
                `"primary" | "secondary" | "outline" | "ghost" | "destructive" | "link" | "solid" | "dashed" | "soft" | "plain" | "pure"`,
                `"primary"`,
                "Visual style; primary/secondary/destructive are solid shorthands.",
            ),
            t(
                "color",
                `"primary" | "secondary" | "destructive" | "success" | "warning" | "info" | "carbon" | "accent"`,
                "—",
                "Theme color for solid/soft and tinted outline-style variants; re-resolves legacy solid shorthands when set.",
            ),
            t("size", `"xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "icon"`, `"md"`, "icon is a square target — set ariaLabel."),
            t("type", `"button" | "submit" | "reset"`, `"submit"`, "Native default so form-wrapped buttons submit (method=dialog works zero-JS). Pass button for standalone controls."),
            t("href", "string", "—", "Renders <a> instead of <button>."),
            t("disabled", "boolean", "false", "Native disabled (button) / aria-disabled (link)."),
            t("loading", "boolean", "false", "Disables + shows spinner + aria-busy."),
            t("invalid", "boolean", "false", "Error border + red focus ring + aria-invalid."),
            t("loadingPosition", `"start" | "center" | "end"`, `"start"`, "Spinner placement relative to content."),
            t("loadingText", "string", "—", "Replaces content when loadingPosition is center."),
            t("loadingIcon", `"ring" | "dots" | "pulse" | "spin"`, `"ring"`, "Spinner visual style."),
            t("shape", `"auto" | "rounded" | "square" | "circle"`, `"auto"`, "Corner shape."),
            t("shadow", `"none" | "sm" | "md" | "lg"`, `"none"`, "Box-shadow token."),
            t("fitContent", "boolean", "false", "Fit content width instead of inline-flex."),
            t("name / value", "string", "—", "Native form participation, buttons only."),
            t("form / formAction / formMethod / …", "string", "—", "Form override attributes, buttons only."),
            t("rel / target", "string", "—", "Links only."),
            ...common(),
        ],
        slots: [
            {name: "default", description: "Button content (text, icons, etc.)."},
            {name: "leading", description: "Rendered before the default content."},
            {name: "trailing", description: "Rendered after the default content."},
        ],
        faq: [
            {
                q: "How do I handle clicks?",
                a: "Attach listeners app-side (the button ships zero JS): document.getElementById('save')?.addEventListener('click', …). Forms work with zero JS via type=\"submit\".",
            },
            {
                q: "When should I use loadingText?",
                a: "With loadingPosition=\"center\" the content is replaced entirely — loadingText provides the replacement label, e.g. \"Saving…\".",
            },
            {
                q: "Does href change semantics?",
                a: "Yes — the component renders a semantic <a> with link styling and forwards rel/target. Form attributes are ignored in anchor mode.",
            },
        ],
        since: "1.0.0",
        related: ["badge", "card", "dialog"],
    },
    {
        slug: "button-group",
        name: "ButtonGroup",
        description: "Zero-JS container that visually groups buttons by merging borders and rounding outer corners only.",
        overview:
            "ButtonGroup is a zero-JS layout container that visually groups buttons or other inline interactive elements by merging their borders and rounding only the outer corners. Children remain fully independent — the group is purely presentational. Horizontal and vertical orientations, plus proper focus/hover z-index handling, make it the foundation for toolbars, pagination controls, and segmented button sets.",
        importPath: "astro-ui",
        exportName: "ButtonGroup",
        category: "general",
        js: false,
        usage:
            `---\nimport { Button, ButtonGroup } from "astro-ui";\n---\n\n<ButtonGroup>\n  <Button variant="outline">Previous</Button>\n  <Button variant="outline">Next</Button>\n</ButtonGroup>\n\n<ButtonGroup orientation="vertical">\n  <Button variant="outline">Copy</Button>\n  <Button variant="outline">Paste</Button>\n  <Button variant="outline">Delete</Button>\n</ButtonGroup>`,
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
        since: "1.0.0",
        related: ["button", "separator", "pagination"],
    },
    {
        slug: "badge",
        name: "Badge",
        description: "Status/count label — inline or overlay bubble with icon, dot, avatar, and dismiss.",
        overview:
            "Badge is a zero-JS status and count label. Inline it next to text, or use it as an overlay bubble pinned to another element's corner with content + position. Inline badges compose: an icon slot (or any image, e.g. a flag) sized via --aui-badge-icon, a variant-tinted status dot, optically aligned avatars, and a labeled dismiss button. Counts stay real text so screen readers announce them.",
        importPath: "astro-ui",
        exportName: "Badge",
        category: "data-display",
        js: false,
        usage:
            `---\nimport { Badge } from "astro-ui";\n---\n\n<Badge variant="success">Active</Badge>\n<Badge content="3" position="top-right" variant="destructive" ariaLabel="3 notifications" />\n  Inbox`,
        features: [
            "11 variants incl. soft, muted, destructive",
            "5 sizes: xs → 2xl",
            "Overlay bubble mode with 4 corner positions",
            "Icon slot, status dot, avatar alignment, dismiss button",
            "content prop for counts (keeps text announcement)",
            "Logical-property positioning — mirrors in RTL",
        ],
        a11y: [
            "Status changes announced via `aria-label` on status badges",
            "Purely presentational by default — no extra semantics to announce",
        ],
        demos: [
            {
                id: "variants",
                title: "Variants",
                code: `<Badge>Primary</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="success">Active</Badge>
<Badge variant="warning">Pending</Badge>
<Badge variant="error">Failed</Badge>
<Badge variant="info">New</Badge>`,
            },
            {
                id: "sizes",
                title: "Sizes",
                code: `<Badge size="sm">sm</Badge>
<Badge size="md">md</Badge>
<Badge size="lg">lg</Badge>
<Badge size="xl">xl</Badge>`,
            },
            {
                id: "icon",
                title: "Badge with icon",
                code: `<Badge variant="outline" size="lg">
  <svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M20 6L9 17l-5-5" />
  </svg>
  Verified
</Badge>
<Badge variant="soft" size="lg">
  <svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 8v4M12 16h.01" />
  </svg>
  Action required
</Badge>`,
            },
            {
                id: "dot",
                title: "Badge with status dot",
                code: `<Badge variant="success" dot>Operational</Badge>
<Badge variant="warning" dot>Degraded</Badge>
<Badge variant="error" dot>Outage</Badge>`,
            },
            {
                id: "avatar",
                title: "Badge with avatar",
                code: `<Badge variant="outline" size="xl">
  <Avatar name="Ada Lovelace" size="xs" />
  Ada
</Badge>
<Badge variant="muted" size="xl">
  <Avatar name="Grace Hopper" size="xs" status="online" />
  Grace
</Badge>`,
            },
            {
                id: "flag",
                title: "Badge with flag image",
                code: `<Badge variant="outline" size="lg" style="--aui-badge-icon: 1rem">
  <img slot="icon" src="/flags/us.svg" alt="" width="16" height="16" style="border-radius: 2px" />
  United States
</Badge>
<Badge variant="outline" size="lg" style="--aui-badge-icon: 1rem">
  <img slot="icon" src="/flags/de.svg" alt="" width="16" height="16" style="border-radius: 2px" />
  Germany
</Badge>`,
            },
            {
                id: "dismiss",
                title: "Badge with dismiss button",
                code: `<Badge variant="outline" size="lg" closable>Design</Badge>
<Badge variant="outline" size="lg" closable closeLabel="Remove Research filter">Research</Badge>
<Badge variant="soft" size="lg" closable>Docs</Badge>`,
            },
            {
                id: "overlay",
                title: "Overlay bubble",
                code: `<span class="relative inline-block">
  <Badge position="top-right" content="3" variant="destructive" ariaLabel="3 items" />
  Inbox
</span>`,
            },
        ],
        props: [
            t("variant", `"primary" | "secondary" | "outline" | "ghost" | "soft" | "success" | "warning" | "error" | "info" | "muted" | "destructive"`, `"primary"`, "Color scheme."),
            t("size", `"sm" | "md" | "lg" | "xl" | "2xl"`, `"md"`, "Font/padding scale."),
            t("content", "string", "—", "Count/content when no default slot is provided."),
            t("position", `"top-right" | "top-left" | "bottom-right" | "bottom-left"`, "—", "Overlay bubble corner (logical start/end — mirrors in RTL)."),
            t("contentProps", "Record<string, any>", "{}", "Forwarded to the bubble element."),
            t("dot", "boolean", "false", "Leading status dot tinted by the variant (inline mode)."),
            t("closable", "boolean", "false", "Renders an accessible dismiss button (inline mode)."),
            t("closeLabel", "string", "\"Dismiss\"", "Accessible label for the dismiss button."),
            ...common(),
        ],
        faq: [
            {
                q: "How do screen readers handle counts?",
                a: "The count is real text inside the badge. Add ariaLabel for context, e.g. ariaLabel=\"3 unread messages\".",
            },
            {
                q: "Does the dismiss button remove the badge?",
                a: "No — Badge ships zero JS. The button is real, focusable, and labeled via closeLabel; wire the removal with a small script or a form action on your side.",
            },
            {
                q: "How do I put an image or flag inside a badge?",
                a: "Anything in the icon slot is boxed at --aui-badge-icon (default 0.875em) and scales with the badge. Set the variable inline, e.g. style=\"--aui-badge-icon: 1rem\", for a 16px flag.",
            },
        ],
        since: "1.0.0",
        related: ["button", "avatar", "card"],
    },
    {
        slug: "card",
        name: "Card",
        description: "Content container with named-slot header/content/footer composition.",
        overview:
            "Card composes through named slots — header, default content, footer — and renders a semantic &lt;article&gt;. Four variants, six sizes, optional split dividers and a scrollable body. Prefer slots over title/description props.",
        importPath: "astro-ui",
        exportName: "Card",
        category: "layout",
        js: false,
        usage:
            `---\nimport { Card, Button } from "astro-ui";\n---\n\n<Card>\n  <h3 slot="header">Title</h3>\n  <p>Body content.</p>\n  <div slot="footer"><Button size="sm">Action</Button></div>\n</Card>`,
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
        since: "1.0.0",
        related: ["button", "separator", "table"],
    },
    {
        slug: "avatar",
        name: "Avatar",
        description: "User image with initials fallback, status badges, rings, groups, and loading state.",
        overview:
            "Avatar renders an <img> when src is provided, otherwise initials derived from name. Beyond the base surface it composes the extras design systems need: an online status badge (four states, four corners), colored rings, radius overrides, custom explicit sizes, a grayscale filter (with hover-to-restore), a loading spinner veil, and a badge slot for counts or checkmarks. AvatarGroup stacks avatars with overlap and an optional trailing count chip (numeric or icon) with an optional hover-spread.",
        importPath: "astro-ui",
        exportName: "Avatar",
        category: "data-display",
        js: false,
        usage:
            `---\nimport { Avatar, AvatarGroup } from "astro-ui";\n---\n\n<Avatar name="Ada Lovelace" src="/ada.jpg" />\n<Avatar name="Grace" status="online" />\n<Avatar name="Alan" ring="primary" size="lg" />\n\n<AvatarGroup hover>\n  <Avatar name="Ada" /><Avatar name="Grace" />\n  <Fragment slot="count">+3</Fragment>\n</AvatarGroup>`,
        features: [
            "Status badges: online/away/busy/offline on any corner, with accessible labels",
            "Rings in five token colors plus the background key line",
            "Radius overrides (none/sm/md/lg/full) on top of circle/square/rounded shapes",
            "Custom explicit sizes (px or rem) alongside the 7-step size scale",
            "Grayscale filter with optional hover-to-restore",
            "Loading state with spinner veil over the media",
            "Badge slot for counts, checkmarks, or icon badges",
            "AvatarGroup: overlap stack, numeric/icon count chip, hover spread",
        ],
        a11y: [
            "Root carries role=img with an accessible name (aria-label or resolved alt)",
            "Status dot is role=status with a spoken label (Online, Away, Do not disturb, Offline)",
            "Loading veil is aria-hidden decoration; the avatar keeps its name throughout",
            "Group is role=group with a default User group label; the count chip keeps its text content",
        ],
        demos: [
            {
                id: "basic",
                title: "Basic",
                code: `<Avatar name="Ada Lovelace" />\n<Avatar name="Grace Hopper" />`,
            },
            {
                id: "shapes",
                title: "Shapes & variants",
                code: `<Avatar name="Grace Hopper" />\n<Avatar name="Grace Hopper" shape="rounded" />\n<Avatar name="Grace Hopper" shape="square" />\n<Avatar name="Alan Turing" variant="primary" />\n<Avatar name="Alan Turing" variant="muted" />`,
            },
            {
                id: "image",
                title: "Image",
                code: `<Avatar src="https://placehold.co/64x64/1f2937/9ca3af?text=ada" alt="Ada Lovelace" />\n<Avatar src="https://placehold.co/64x64/1f2937/9ca3af?text=hopper" alt="Grace Hopper" fit="contain" />`,
            },
            {
                id: "radius",
                title: "Different border radiuses",
                code: `<Avatar radius="sm" name="Ada L" />\n<Avatar radius="md" name="Ada L" />\n<Avatar radius="lg" name="Ada L" />\n<Avatar radius="full" name="Ada L" />`,
            },
            {
                id: "sizes",
                title: "Different sizes",
                code: `<Avatar size="xs" name="A L" />\n<Avatar size="sm" name="A L" />\n<Avatar size="md" name="A L" />\n<Avatar size="lg" name="A L" />\n<Avatar size="xl" name="A L" />\n<Avatar size="2xl" name="A L" />`,
            },
            {
                id: "custom-size",
                title: "Custom sizes",
                code: `<Avatar customSize={16} name="A L" />\n<Avatar customSize={32} name="A L" />\n<Avatar customSize={56} name="A L" />\n<Avatar customSize="4.5rem" name="A L" />`,
            },
            {
                id: "status",
                title: "Online status",
                code: `<Avatar name="Ada L" status="online" />\n<Avatar name="Grace H" status="away" />\n<Avatar name="Alan T" status="busy" />\n<Avatar name="Edsger D" status="offline" />`,
            },
            {
                id: "status-positions",
                title: "Status badge positions",
                code: `<Avatar name="Ada L" status="online" statusPosition="top-left" />\n<Avatar name="Grace H" status="online" statusPosition="top-right" />\n<Avatar name="Alan T" status="online" statusPosition="bottom-left" />\n<Avatar name="Edsger D" status="online" statusPosition="bottom-right" />`,
            },
            {
                id: "badge-icon",
                title: "Avatar with badge icon",
                code: `<Avatar name="Ada L">\n  <Badge slot="badge" variant="primary" size="sm">+1</Badge>\n</Avatar>`,
            },
            {
                id: "solid-fallback",
                title: "Solid background fallback",
                code: `<Avatar name="Ada L" variant="primary" />\n<Avatar name="Grace H" variant="success" />\n<Avatar name="Alan T" variant="warning" />\n<Avatar name="Edsger D" variant="info" />`,
            },
            {
                id: "group-basic",
                title: "Basic avatar group",
                code: `<AvatarGroup>\n  <Avatar name="Ada L" /><Avatar name="Grace H" /><Avatar name="Alan T" />\n</AvatarGroup>`,
            },
            {
                id: "group-icon-count",
                title: "Avatar group with icon count",
                code: `<AvatarGroup>\n  <Avatar name="Ada L" /><Avatar name="Grace H" /><Avatar name="Alan T" />\n  <Fragment slot="count">\n    <span aria-hidden="true">+</span>\n  </Fragment>\n</AvatarGroup>`,
            },
            {
                id: "group-numeric-count",
                title: "Avatar group with numerical count",
                code: `<AvatarGroup>\n  <Avatar name="Ada L" /><Avatar name="Grace H" /><Avatar name="Alan T" />\n  <Fragment slot="count">+5</Fragment>\n</AvatarGroup>`,
            },
            {
                id: "group-status",
                title: "Avatar group with online status",
                code: `<AvatarGroup>\n  <Avatar name="Ada L" status="online" />\n  <Avatar name="Grace H" /><Avatar name="Alan T" />\n</AvatarGroup>`,
            },
            {
                id: "grayscale",
                title: "Grayscale image filter",
                code: `<Avatar name="Ada L" filter="grayscale" filterHover />`,
            },
            {
                id: "group-hover",
                title: "Avatar group with hover effect",
                code: `<AvatarGroup hover>\n  <Avatar name="Ada L" /><Avatar name="Grace H" /><Avatar name="Alan T" /><Avatar name="Edsger D" />\n</AvatarGroup>`,
            },
            {
                id: "custom-badge",
                title: "Custom verification badge",
                code: `<Avatar name="Ada L">\n  <Badge slot="badge" variant="success" size="sm" ariaLabel="Verified">\n    <svg aria-hidden="true" width="12" height="12" viewBox="0 0 12 12" fill="none">\n      <path d="m2.5 6.5 2.25 2.25L9.5 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />\n    </svg>\n  </Badge>\n</Avatar>`,
            },
            {
                id: "multi-badge",
                title: "Avatar with multiple badges",
                code: `<Avatar name="Ada L" status="online" statusPosition="bottom-right">\n  <span class="avatar-count-badge" slot="badge" aria-label="3 notifications">3</span>\n</Avatar>`,
            },
            {
                id: "ring-gradient",
                title: "Gradient animated ring",
                code: `<Avatar name="Ada L" class="avatar-gradient-ring" />\n\n<style>\n  /* conic-gradient ring behind the avatar */\n</style>`,
            },
            {
                id: "ring-animated",
                title: "Animated ring",
                code: `<Avatar name="Ada L" class="avatar-story-ring" />\n\n<style>\n  /* rotating gradient ring */\n</style>`,
            },
            {
                id: "loading",
                title: "Loading state",
                code: `<Avatar name="Ada L" size="sm" loading />\n<Avatar name="Ada L" size="xl" loading />\n\n<!-- The spinner scales with the avatar; override with --aui-avatar-spinner -->\n<Avatar name="Ada L" size="3xl" loading style="--aui-avatar-spinner: 2rem" />`,
            },
            {
                id: "compact-social-proof",
                title: "Compact social proof with initials",
                code: `<div style="display:grid;justify-items:start;gap:var(--ui-space-2)">\n  <div style="display:flex;align-items:center">\n    <Avatar name="Ada Lovelace" size="xs" status="online" />\n    <Avatar name="Grace Hopper" size="xs" />\n    <Avatar name="Alan Turing" size="xs" />\n    <Avatar name="Edsger Dijkstra" size="xs" variant="primary" />\n    <Avatar name="Barbara Liskov" size="xs" />\n  </div>\n  <p style="margin:0;color:var(--ui-muted-foreground);font-size:var(--ui-text-xs)">Trusted by engineers at</p>\n  <p style="margin:0;color:var(--ui-foreground);font-size:var(--ui-text-sm);font-weight:var(--ui-font-medium)">Ada Lovelace, Grace Hopper, Alan Turing, and 247 more</p>\n</div>`,
            },
            {
                id: "avatar-group-hover-tooltips",
                title: "Avatar group with hover tooltips and lift effect",
                code: `<AvatarGroup hover>\n  <Tooltip ariaLabel="Ada Lovelace" placement="top">\n    <Fragment slot="content">Ada Lovelace</Fragment>\n    <Avatar name="Ada Lovelace" />\n  </Tooltip>\n  <Tooltip ariaLabel="Grace Hopper" placement="top">\n    <Fragment slot="content">Grace Hopper</Fragment>\n    <Avatar name="Grace Hopper" />\n  </Tooltip>\n  <Tooltip ariaLabel="Alan Turing" placement="top">\n    <Fragment slot="content">Alan Turing</Fragment>\n    <Avatar name="Alan Turing" />\n  </Tooltip>\n  <Tooltip ariaLabel="Edsger Dijkstra" placement="top">\n    <Fragment slot="content">Edsger Dijkstra</Fragment>\n    <Avatar name="Edsger Dijkstra" />\n  </Tooltip>\n  <Fragment slot="count">+2</Fragment>\n</AvatarGroup>`,
            },
            {
                id: "avatar-social-proof-label",
                title: "Avatar social proof with text label",
                code: `<div style="display:flex;flex-wrap:wrap;align-items:center;gap:var(--ui-space-4)">\n  <AvatarGroup>\n    <Avatar name="Ada Lovelace" status="online" />\n    <Avatar name="Grace Hopper" />\n    <Avatar name="Alan Turing" />\n    <Avatar name="Edsger Dijkstra" />\n    <Avatar name="Barbara Liskov" />\n  </AvatarGroup>\n  <div style="display:grid;gap:var(--ui-space-1)">\n    <p style="margin:0;color:var(--ui-foreground);font-size:var(--ui-text-sm);font-weight:var(--ui-font-semibold)">Joined by 2,411 developers this week</p>\n    <p style="margin:0;color:var(--ui-muted-foreground);font-size:var(--ui-text-xs)">See why teams choose this stack for production Astro sites.</p>\n  </div>\n</div>`,
            },
            {
                id: "pill-button-with-avatar",
                title: "Pill small outline button with avatar",
                code: `<Button variant="outline" size="sm" shape="rounded">\n  <Avatar name="Ada Lovelace" size="xs" />\n  <span style="margin-inline-start:var(--ui-space-2)">Ada</span>\n</Button>\n<Button variant="outline" size="sm" shape="rounded">\n  <Avatar name="Grace Hopper" size="xs" />\n  <span style="margin-inline-start:var(--ui-space-2)">Grace</span>\n</Button>\n<Button variant="outline" size="sm" shape="rounded">\n  <Avatar name="Alan Turing" size="xs" status="online" />\n  <span style="margin-inline-start:var(--ui-space-2)">Alan</span>\n</Button>`,
            },
            {
                id: "avatar-group-hover-tooltips-v2",
                title: "Avatar group with hover effect and tooltips",
                code: `<AvatarGroup hover>\n  <Tooltip ariaLabel="Ada Lovelace" placement="bottom" variant="light">\n    <Fragment slot="content">Ada Lovelace</Fragment>\n    <Avatar name="Ada Lovelace" status="online" />\n  </Tooltip>\n  <Tooltip ariaLabel="Grace Hopper" placement="bottom" variant="light">\n    <Fragment slot="content">Grace Hopper</Fragment>\n    <Avatar name="Grace Hopper" />\n  </Tooltip>\n  <Tooltip ariaLabel="Alan Turing" placement="bottom" variant="light">\n    <Fragment slot="content">Alan Turing</Fragment>\n    <Avatar name="Alan Turing" ring="success" />\n  </Tooltip>\n  <Tooltip ariaLabel="Edsger Dijkstra" placement="bottom" variant="light">\n    <Fragment slot="content">Edsger Dijkstra</Fragment>\n    <Avatar name="Edsger Dijkstra" />\n  </Tooltip>\n  <Tooltip ariaLabel="Barbara Liskov" placement="bottom" variant="light">\n    <Fragment slot="content">Barbara Liskov</Fragment>\n    <Avatar name="Barbara Liskov" ring="primary" />\n  </Tooltip>\n  <Fragment slot="count">+3</Fragment>\n</AvatarGroup>`,
            },
            {
                id: "avatar-empty-state",
                title: "Avatar inside an empty state",
                code: `<Empty size="lg" ariaLabel="No team members yet">\n  <Avatar slot="media" name="Your team" size="xl" variant="primary" ring="primary" />\n  <Fragment slot="title">No team members yet</Fragment>\n  <Fragment slot="description">Invite your first teammate to start collaborating on projects, deploys, and analytics.</Fragment>\n  <Fragment slot="footer">\n    <Button size="sm">Invite member</Button>\n    <Button size="sm" variant="ghost" href="/docs/get-started/">Read the guide</Button>\n  </Fragment>\n</Empty>`,
            },
        ],
        props: [
            t("src", "string", "—", "Image URL; astro:assets optimization when resolvable."),
            t("name", "string", "—", "Full name — drives the accessible name and initials fallback."),
            t("size", `"xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl"`, `"md"`, "Seven-step size scale."),
            t("customSize", "string | number", "—", "Explicit box size (px number or CSS length) overriding size."),
            t("radius", `"none" | "sm" | "md" | "lg" | "full"`, "—", "Corner override on top of shape."),
            t("status", `"online" | "away" | "busy" | "offline"`, "—", "Presence dot rendered on a corner."),
            t("statusPosition", `"top-left" | "top-right" | "bottom-left" | "bottom-right"`, `"bottom-right"`, "Corner carrying the status dot."),
            t("badgePosition", `"top-left" | "top-right" | "bottom-left" | "bottom-right"`, `"top-right"`, "Corner anchoring slotted badges to the avatar's border."),
            t("statusLabel", "string", "per status", "Accessible label for the status indicator."),
            t("ring", `"primary" | "success" | "warning" | "error" | "info" | "background"`, "—", "Colored ring with background key line."),
            t("filter", `"none" | "grayscale"`, `"none"`, "Image filter treatment."),
            t("filterHover", "boolean", "false", "Restores color on hover when filter=grayscale."),
            t("loading", "boolean", "false", "Spinner veil over the media."),
            t("variant", "8 token colors", `"inherit"`, "Fallback background scheme (solid color fallbacks)."),
            ...common(false),
        ],
        faq: [
            {
                q: "How do I add a notification count?",
                a: "Use the badge slot: <Avatar><Badge slot=\"badge\" variant=\"destructive\">3</Badge></Avatar>. Combine with status for two independent indicators.",
            },
            {
                q: "How does the gradient/animated ring work?",
                a: "The ring demos compose a wrapper with a conic-gradient background behind the avatar (see each demo's code tab). The ring prop covers static rings; animated story rings stay in user CSS.",
            },
        ],
        since: "1.0.0",
        related: ["badge", "tooltip", "card"],
    },
    {
        slug: "alert",
        name: "Alert",
        description: "Feedback message with 8 variants and accessible dismissal.",
        overview:
            "Alert shows a persistent inline message with a variant-colored surface, built-in variant glyph, and an optional dismiss button. Smart semantics: destructive alerts render role=alert (announced immediately); the others render role=status (polite).",
        importPath: "astro-ui",
        exportName: "Alert",
        category: "feedback",
        js: false,
        usage:
            `---
import { Alert } from "astro-ui";
---

<Alert variant="info" title="Heads up">Scheduled maintenance Sunday.</Alert>
<Alert variant="destructive" title="Payment failed" closable>Retry or update your card.</Alert>`,
        features: [
            "8 variants: primary, destructive, success, warning, info, carbon, secondary, accent",
            "5 sizes: xs → xl",
            "Smart role: alert (destructive) vs status (others)",
            "closable renders an accessible dismiss button",
            "Icon slot with built-in per-variant glyph"
        ],
        a11y: [
            "Icons and the close button are aria-hidden — decoration never reaches the a11y tree",
            "role=alert (destructive, assertive) vs role=status (others, polite)",
            "Dismiss button carries an aria-label"
        ],
        demos: [
            {
                id: "basic",
                title: "Basic",
                code: `<Alert variant="info" title="Heads up">Scheduled maintenance Sunday 02:00–04:00 UTC.</Alert>\n<Alert variant="success" title="Saved">Your changes are live.</Alert>`,
            },
            {
                id: "variants",
                title: "Variants",
                code: `<Alert variant="info">…</Alert>\n<Alert variant="success">…</Alert>\n<Alert variant="warning">…</Alert>\n<Alert variant="destructive">…</Alert>`,
            },
            {
                id: "closable",
                title: "Dismissible",
                code: `<Alert variant="warning" title="Storage almost full" closable>Upgrade your plan.</Alert>`,
            },
        ],
        props: [
            t("variant", "\"info\" | \"success\" | \"warning\" | \"destructive\" | …", "\"info\"", "Visual + semantic variant."),
            t("size", "\"xs\" | \"sm\" | \"md\" | \"lg\" | \"xl\"", "\"md\"", "Surface scale."),
            t("title", "string", "—", "Bold heading line."),
            t("closable", "boolean", "false", "Renders the dismiss button."),
            t("closeLabel", "string", "\"Dismiss\"", "Accessible name for the dismiss button."),
            t("class", "string", "—", "Merged via cn(); Tailwind classes welcome."),
            t("id", "string", "—", "Element id."),
        ],
        slots: [
            {name: "default", description: "Message body text."},
            {name: "icon", description: "Custom leading glyph (overrides the built-in one)."},
        ],
        faq: [
            {
                q: "When is it announced?",
                a: "Destructive alerts use role=alert (assertive, immediate); all other variants use role=status (polite). Mount-time announcements only — toggling content re-announces.",
            },
        ],
        since: "1.0.0",
        related: ["spinner", "toast", "button"],
    },

    {
        slug: "spinner",
        name: "Spinner",
        description: "Loading indicator in 4 animation styles and 6 sizes.",
        overview:
            "Spinner communicates in-flight work with pure CSS animation — ring, dots, bars, and pulse styles at six sizes. Color follows the text color; wrap it in a button or surface and it inherits.",
        importPath: "astro-ui",
        exportName: "Spinner",
        category: "feedback",
        js: false,
        usage:
            `---
import { Spinner } from "astro-ui";
---

<Spinner />
<Spinner variant="dots" size="lg" />`,
        features: [
            "4 variants: ring (default), dots, bars, pulse",
            "6 sizes from xs to 2xl",
            "Pure CSS animation — zero JS",
            "Respects prefers-reduced-motion"
        ],
        a11y: [
            "role=status with a visually hidden Loading label by default",
            "aria-label override for specific contexts (Saving, Uploading…)",
            "Animation disabled under prefers-reduced-motion (static glyph)"
        ],
        demos: [
            {
                id: "basic",
                title: "Basic",
                code: `<Spinner />\n<Spinner variant="dots" />\n<Spinner variant="bars" />\n<Spinner variant="pulse" />`,
            },
            {
                id: "sizes",
                title: "Sizes",
                code: `<Spinner size="xs" />\n<Spinner size="sm" />\n<Spinner size="md" />\n<Spinner size="lg" />`,
            },
        ],
        props: [
            t("variant", "\"ring\" | \"dots\" | \"bars\" | \"pulse\"", "\"ring\"", "Animation style."),
            t("size", "\"xs\" | \"sm\" | \"md\" | \"lg\" | \"xl\" | \"2xl\"", "\"md\"", "Glyph size."),
            t("ariaLabel", "string", "\"Loading\"", "Accessible status label."),
            t("class", "string", "—", "Merged via cn(); Tailwind classes welcome."),
            t("id", "string", "—", "Element id."),
        ],
        slots: [],
        faq: [
            {
                q: "Ring vs Button loading?",
                a: "Button has built-in loading that swaps its label for a spinner. Use standalone Spinner for page regions and inline waits.",
            },
        ],
        since: "1.0.0",
        related: ["skeleton", "progress", "button"],
    },

    {
        slug: "skeleton",
        name: "Skeleton",
        description: "Pulsing placeholder blocks for loading layouts.",
        overview:
            "Skeleton reserves layout space with a pulsing neutral block while content loads — text lines, circles, rectangles — so the final content swaps in without reflow.",
        importPath: "astro-ui",
        exportName: "Skeleton",
        category: "feedback",
        js: false,
        usage:
            `---
import { Skeleton } from "astro-ui";
---

<Skeleton style="width:100%;height:1rem" />
<Skeleton variant="circle" style="width:3rem;height:3rem" />`,
        features: [
            "Variants: text, circle, rectangle",
            "Pulse animation with reduced-motion off switch",
            "Static mode via animated=false",
            "Size entirely consumer-driven (width/height styles)"
        ],
        a11y: [
            "aria-hidden by default — pair with an aria-busy container or sr-only status",
            "Animation removed under prefers-reduced-motion"
        ],
        demos: [
            {
                id: "basic",
                title: "Basic",
                code: `<Skeleton variant="text" style="width:60%" />\n<Skeleton variant="text" style="width:90%" />\n<Skeleton variant="circle" style="width:3rem;height:3rem" />`,
            },
            {
                id: "card",
                title: "Card layout",
                code: `<div style="display:grid;gap:0.75rem">\n  <Skeleton style="height:8rem" />\n  <Skeleton variant="text" style="width:80%" />\n</div>`,
            },
        ],
        props: [
            t("variant", "\"text\" | \"circle\" | \"rectangle\"", "\"rectangle\"", "Placeholder shape."),
            t("animated", "boolean", "true", "Pulse animation; false for a static block."),
            t("class", "string", "—", "Merged via cn(); Tailwind classes welcome."),
            t("id", "string", "—", "Element id."),
        ],
        slots: [],
        faq: [
            {
                q: "How do I announce loading?",
                a: "Skeletons are aria-hidden decoration. Put aria-busy=true on the loading region and swap it out when content arrives.",
            },
        ],
        since: "1.0.0",
        related: ["spinner", "avatar", "progress"],
    },

    {
        slug: "aspect-ratio",
        name: "AspectRatio",
        description: "Reserves a fixed width/height ratio for media — no layout shift.",
        overview:
            "AspectRatio wraps a single child (img, video, iframe, or div) in a box with a fixed CSS aspect-ratio and stretches the child to fill it. Drop media in and it covers the box without layout shift — object-fit stays in your hands.",
        importPath: "astro-ui",
        exportName: "AspectRatio",
        category: "layout",
        js: false,
        usage:
            `---
import { AspectRatio } from "astro-ui";
---

<AspectRatio ratio="16 / 9">
  <img src="hero.jpg" alt="Hero" class="object-cover" />
</AspectRatio>`,
        features: [
            "CSS aspect-ratio — number (1.78) or string (\"16 / 9\")",
            "Child stretches to fill; object-fit stays consumer-controlled",
            "Overflow hidden — no media bleeding past the box",
            "Zero JS, no layout shift"
        ],
        a11y: [
            "Purely presentational wrapper — media keeps its own alt text",
            "No role or label of its own; nothing extra for assistive tech"
        ],
        demos: [
            {
                id: "ratios",
                title: "Common ratios",
                code: `<AspectRatio ratio="16 / 9">\n  <img src="…" alt="" class="object-cover" />\n</AspectRatio>\n<AspectRatio ratio="4 / 3">…</AspectRatio>\n<AspectRatio ratio={1}>…</AspectRatio>`,
            },
            {
                id: "widescreen",
                title: "Widescreen",
                code: `<AspectRatio ratio="21 / 9">…</AspectRatio>\n<AspectRatio ratio="16 / 10">…</AspectRatio>`,
            },
            {
                id: "portrait",
                title: "Portrait",
                code: `<AspectRatio ratio="9 / 16">…</AspectRatio>\n<AspectRatio ratio="4 / 5">…</AspectRatio>`,
            },
            {
                id: "photo",
                title: "Photo",
                code: `<AspectRatio ratio="3 / 2">…</AspectRatio>\n<AspectRatio ratio={1}>…</AspectRatio>`,
            },
        ],
        props: [
            t("ratio", "number | string", "1", "CSS aspect-ratio value: number (1.78) or string (\"16 / 9\")."),
            t("class", "string", "—", "Merged via cn(); Tailwind classes welcome."),
            t("id", "string", "—", "Element id."),
        ],
        slots: [
            {name: "default", description: "Media stretched to fill the box."},
        ],
        faq: [
            {
                q: "Why doesn't my image fill the box?",
                a: "The child is stretched to 100%×100% — add object-cover (or object-contain) on the img so it fills without distortion.",
            },
        ],
        since: "1.0.0",
        related: ["card", "avatar", "scroll-area"],
    },

    {
        slug: "scroll-area",
        name: "ScrollArea",
        description: "Token-themed scrollable region with styled scrollbar.",
        overview:
            "ScrollArea wraps any content in a fixed-size region with a custom-styled, token-themed scrollbar — consistent across platforms where the native scrollbar clashes with the design.",
        importPath: "astro-ui",
        exportName: "ScrollArea",
        category: "layout",
        js: false,
        usage:
            `---
import { ScrollArea } from "astro-ui";
---

<ScrollArea height="12rem">
  {longList.map((item) => <p>{item}</p>)}
</ScrollArea>`,
        features: [
            "Custom scrollbar themed from tokens",
            "height / maxHeight control",
            "Horizontal and vertical overflow",
            "Keyboard scrollable (native overflow region semantics)"
        ],
        a11y: [
            "Native scrolling region — keyboard scroll works out of the box",
            "Optionally add tabindex=0 + aria-label via props for focusable regions"
        ],
        demos: [
            {
                id: "basic",
                title: "Basic",
                code: `<ScrollArea height="10rem">\n  <ul>{items.map((i) => <li>{i}</li>)}</ul>\n</ScrollArea>`,
            },
            {
                id: "horizontal",
                title: "Horizontal",
                code: `<ScrollArea height="auto" style="white-space:nowrap">\n  …wide row…\n</ScrollArea>`,
            },
        ],
        props: [
            t("height", "string", "—", "Region height (CSS length)."),
            t("maxHeight", "string", "—", "Grows until this cap."),
            t("class", "string", "—", "Merged via cn(); Tailwind classes welcome."),
            t("id", "string", "—", "Element id."),
            t("ariaLabel", "string", "—", "Accessible name."),
        ],
        slots: [
            {name: "default", description: "Scrollable content."},
        ],
        faq: [
            {
                q: "Native or custom scrolling?",
                a: "Native overflow with themed scrollbar styles — no JS scroll simulation, so momentum, keyboard, and touch behaviors all stay native.",
            },
        ],
        since: "1.0.0",
        related: ["separator", "card", "table"],
    },

    {
        slug: "separator",
        name: "Separator",
        description: "Horizontal/vertical divider with solid, dashed, and dotted styles.",
        overview:
            "Separator renders a themed rule between sections — semantic hr (or a decorated span when purely visual), with orientation, style, and label support.",
        importPath: "astro-ui",
        exportName: "Separator",
        category: "layout",
        js: false,
        usage:
            `---
import { Separator } from "astro-ui";
---

<Separator />
<Separator orientation="vertical" style="height:2rem" />
<Separator label="or" />`,
        features: [
            "Horizontal / vertical orientation",
            "solid / dashed / dotted styles",
            "Optional centered label (\"or\", section names)",
            "Semantic hr or decorative span"
        ],
        a11y: [
            "Renders semantic <hr> by default (separator role implicit)",
            "decorative prop downgrades to aria-hidden span when the rule is purely visual",
            "Optional label is read by screen readers (\"or\" between form actions)"
        ],
        demos: [
            {
                id: "basic",
                title: "Basic",
                code: `<p>Above</p>\n<Separator />\n<p>Below</p>`,
            },
            {
                id: "styles",
                title: "Styles",
                code: `<Separator style="solid" />\n<Separator style="dashed" />\n<Separator style="dotted" />`,
            },
            {
                id: "label",
                title: "With label",
                code: `<Separator label="or" />`,
            },
        ],
        props: [
            t("orientation", "\"horizontal\" | \"vertical\"", "\"horizontal\"", "Rule direction."),
            t("style", "\"solid\" | \"dashed\" | \"dotted\"", "\"solid\"", "Line treatment."),
            t("label", "string", "—", "Centered text inside the rule."),
            t("decorative", "boolean", "false", "Renders aria-hidden span instead of hr."),
            t("class", "string", "—", "Merged via cn(); Tailwind classes welcome."),
            t("id", "string", "—", "Element id."),
        ],
        slots: [
            {name: "default", description: "Label content (overrides the label prop)."},
        ],
        faq: [
            {
                q: "hr or span?",
                a: "Semantic <hr> by default — it announces a thematic break. Pass decorative when the rule is purely visual spacing.",
            },
        ],
        since: "1.0.0",
        related: ["card", "scroll-area", "aspect-ratio"],
    },
    {
        slug: "attachment",
        name: "Attachment",
        description: "File attachment card with media, state hooks, and action slots.",
        overview:
            "Attachment shows an attached file as a composed card: a media box (icon or image thumbnail), a title and description line, and an actions area. It is purely presentational — upload progress, errors, and removal are wired app-side. Five `state` values render as `data-state` attributes (idle is dashed; error is destructive) that you can target from your own CSS, and `orientation` stacks the card vertically (image-first) or in a row.",
        importPath: "astro-ui",
        exportName: "Attachment",
        category: "data-display",
        js: false,
        usage:
            `---\nimport { Attachment, Button } from "astro-ui";\n---\n\n<Attachment\n  state="done"\n  title="quarterly-report.pdf"\n  description="PDF · 2.4 MB"\n>\n  <Button variant="ghost" size="icon" slot="actions" aria-label="Remove file">✕</Button>\n</Attachment>`,
        features: [
            "Five state hooks: idle (dashed), uploading, processing, error, done — via data-state",
            "Media variants: icon (paperclip) or image thumbnail, or your own media slot",
            "Three sizes (xs/sm/md) and horizontal/vertical orientation",
            "Named slots: media, title, description, actions",
            "Zero JS — all behavior (pick, upload, remove) stays app-side",
        ],
        a11y: [
            "Purely presentational card — no implicit widget role, so it never traps focus",
            "State is exposed via data-state attributes; announce changes app-side with aria-live when they matter",
            "Action buttons keep their own accessible names — icon-only actions must pass aria-label",
            "Decorative media and the paperclip fallback icon are aria-hidden",
        ],
        demos: [
            {
                id: "basic",
                title: "Basic",
                code: `<Attachment
  title="quarterly-report.pdf"
  description="PDF · 2.4 MB"
>
  <Button variant="ghost" size="icon" slot="actions" aria-label="Remove file">✕</Button>
</Attachment>`,
            },
            {
                id: "states",
                title: "States",
                code: `<Attachment state="idle" title="Drop files here" description="or browse" />
<Attachment state="uploading" title="upload.csv" description="64% · 1.2 MB of 1.9 MB" progress={64} />
<Attachment state="processing" title="scan.zip" description="Virus scan…" />
<Attachment state="error" title="file.exe" description="Type not allowed" />
<Attachment state="done" title="logo.svg" description="SVG · 12 KB" />`,
            },
            {
                id: "sizes",
                title: "Sizes",
                code: `<Attachment size="xs" title="notes.txt" description="1 KB" />
<Attachment size="sm" title="notes.txt" description="1 KB" />
<Attachment size="md" title="notes.txt" description="1 KB" />`,
            },
            {
                id: "vertical",
                title: "Vertical",
                code: `<Attachment orientation="vertical" title="cover.png" description="PNG · 480 KB">
  <img slot="media" src="/cover.png" alt="" />
</Attachment>`,
            },
            {
                id: "group",
                title: "Group",
                code: `<div class="attachment-row" role="list">
  <Attachment role="listitem" title="a.pdf" description="PDF · 2.4 MB" />
  <Attachment role="listitem" title="b.png" description="PNG · 800 KB" />
</div>`,
            },
        ],
        props: [
            t("state", `"idle" | "uploading" | "processing" | "error" | "done"`, `"done"`, `Visual state; renders as data-state for styling hooks (idle = dashed border, error = destructive).`),
            t("size", `"xs" | "sm" | "md"`, `"md"`, `Card and media-box scale.`),
            t("orientation", `"horizontal" | "vertical"`, `"horizontal"`, `Media above text (vertical) or inline row (horizontal).`),
            t("media", `"icon" | "image"`, `"icon"`, `Media-box content: paperclip icon or image fallback; override with the media slot.`),
            t("progress", "number", "—", "0–100 — renders a determinate 2px progress bar on the card's bottom edge; omit for an indeterminate sweep while uploading/processing."),
            t("title", "string", "—", "Title line (overridden by the title slot)."),
            t("description", "string", "—", "Muted second line (overridden by the description slot)."),
            ...common(false),
        ],
        faq: [
            {
                q: "How do I handle uploads?",
                a: "The component is presentational by design. Wrap it with your own file input + submit flow, flip state through idle → uploading → done, and announce progress with an aria-live region app-side.",
            },
            {
                q: "How do I remove an attachment?",
                a: "Put a button in the actions slot with an explicit aria-label — icon-only actions need a name. Wire the click handler or a form submit in your app; the component ships zero JS.",
            },
        ],
        since: "1.0.0",
        related: ["empty", "tag", "button-group"],
    },
    {
        slug: "autocomplete",
        name: "Autocomplete",
        description: "Input that suggests options as you type — ARIA combobox pattern.",
        overview:
            "Autocomplete pairs a text input with a filtered suggestion list using the WAI-ARIA combobox + listbox pattern. Type to filter (case-insensitive substring on label/value), move with ↑/↓, commit with Enter, dismiss with Escape, jump with Home/End. Options render server-side; a small scoped script handles filtering and focus. The committed value posts with the form under the field's `name` — a native input underneath, so forms and autofill behave.",
        importPath: "astro-ui",
        exportName: "Autocomplete",
        category: "forms",
        js: true,
        usage:
            `---\nimport { Autocomplete } from "astro-ui";\n---\n\n<Autocomplete\n  name="framework"\n  placeholder="Pick a framework…"\n  items={["Astro", "Next.js", "Nuxt", "SvelteKit"]}\n  clearable\n/>`,
        features: [
            "Full keyboard support: ↑/↓ navigate, Enter commits, Escape closes, Home/End jump",
            "Case-insensitive substring filtering; filter={false} for async/external results",
            "Grouped options with labelled sections",
            "autoHighlight, clearable button, openOnFocus, and top/bottom placement",
            "Five sizes and eight border variants matching Input",
            "Committed value posts with the form under name — native input underneath",
        ],
        a11y: [
            "Implements the WAI-ARIA combobox + listbox pattern: role=combobox with aria-expanded, aria-controls, aria-autocomplete=list, aria-activedescendant",
            "Options carry role=option and aria-selected state managed by the script",
            "Groups use role=group with accessible labels",
            "Focus stays in the input while navigating — no focus jumps into the list",
            "Empty state is announced via the listbox content itself",
        ],
        demos: [
            {
                id: "basic",
                title: "Basic",
                code: `<Autocomplete
  name="framework"
  placeholder="Pick a framework…"
  items={["Astro", "Next.js", "Nuxt", "SvelteKit", "Remix"]}
/>`,
            },
            {
                id: "hints",
                title: "Options with hints",
                code: `<Autocomplete
  name="city"
  items={[
    { value: "jp-tokyo", label: "Tokyo", hint: "Japan" },
    { value: "fr-paris", label: "Paris", hint: "France" },
    { value: "us-nyc", label: "New York", hint: "United States" },
  ]}
/>`,
            },
            {
                id: "groups",
                title: "Groups",
                code: `<Autocomplete
  name="stack"
  groups={[{ label: "Frontend", items: ["Astro", "Next.js"] }, { label: "Backend", items: ["Node", "Deno"] }]}
/>`,
            },
            {
                id: "sizes",
                title: "Sizes",
                code: `<Autocomplete size="xs" items={…} />
<Autocomplete size="sm" items={…} />
<Autocomplete size="md" items={…} />
<Autocomplete size="lg" items={…} />`,
            },
            {
                id: "clearable",
                title: "Clearable",
                code: `<Autocomplete name="search" clearable openOnFocus items={["One", "Two", "Three"]} />`,
            },
        ],
        props: [
            t("items", `(string | { value, label, hint? })[]`, `[]`, `Suggestion list; strings become both value and label.`),
            t("groups", `{ label, items }[]`, "—", "Labelled sections; overrides items when set."),
            t("name", "string", "—", "Form field name; committed value posts with the form."),
            t("value", "string", "—", "Initial committed value (server-side preselect)."),
            t("placeholder", "string", `"Search…"`, "Input placeholder text."),
            t("emptyMessage", "string", `"No results found."`, "Shown when the filter matches nothing."),
            t("filter", "boolean", "true", "Client-side substring filter; disable for async filtering."),
            t("autoHighlight", "boolean", "false", "Highlight the first match when the list opens."),
            t("clearable", "boolean", "false", "Render a clear (✕) button when the field has a value."),
            t("openOnFocus", "boolean", "false", "Open the list on focus (search-style)."),
            t("size", `"xs" | "sm" | "md" | "lg" | "xl"`, `"md"`, "Control size (heights mirror Input)."),
            t("variant", `"inherit" | "primary" | … | "info"`, `"inherit"`, "Border color variant (mirrors Input)."),
            t("placement", `"bottom" | "top"`, `"bottom"`, "Which side the panel opens on."),
            t("disabled / required / invalid", "boolean", "false", "Native states + invalid styling hook."),
            ...common(false),
        ],
        faq: [
            {
                q: "How is this different from Select?",
                a: "Select is the native &lt;select&gt; — zero JS, platform keyboard handling, always fully accessible. Autocomplete adds type-to-filter and free typing at the cost of a small script. Prefer Select when the option set is small and fixed.",
            },
            {
                q: "Can I filter against an API?",
                a: "Yes — set filter={false} so the script doesn't filter client-side, then listen for input events and render your own options into the listbox panel (or re-render the whole component server-side per request).",
            },
        ],
        since: "1.0.0",
        related: ["select", "input", "field"],
    },
    {
        slug: "label",
        name: "Label",
        description: "Form label with required/disabled states and two sizes.",
        overview:
            "Label renders a semantic &lt;label&gt; tied to a control via for. Required adds a visual marker; disabled dims the text to match a disabled control.",
        importPath: "astro-ui",
        exportName: "Label",
        category: "forms",
        js: false,
        usage:
            `---\nimport { Label, Input } from "astro-ui";\n---\n\n<Label for="email" required>Email</Label>\n<Input id="email" type="email" />`,
        features: ["Native <label> association via for", "required marker", "disabled state matches disabled inputs", "2 sizes"],
        a11y: [
            "Native `<label>` association; `aria-required` support for required fields",
        ],
        demos: [
            {
                id: "basic",
                title: "Basic",
                code: `<Label for="email" required>Email</Label>
<Input id="email" type="email" />`,
            },
        ],
        props: [
            t("for", "string", "—", "Must match the control's id."),
            t("required", "boolean", "false", "Adds the required marker."),
            t("disabled", "boolean", "false", "Dimmed text state."),
            t("size", `"sm" | "md"`, `"md"`, "Text scale."),
            ...common(false),
        ],
        faq: [
            {
                q: "Why not just wrap the input?",
                a: "Wrapping works, but explicit for/id keeps the association when the control isn't a direct child (grids, portals) and is what this component enforces.",
            },
        ],
        since: "1.0.0",
        related: ["input", "select", "checkbox"],
    },
    {
        slug: "field",
        name: "Field",
        description: "Label + control + hint + error wiring in one wrapper.",
        overview:
            "Field composes a form control with its chrome: the default slot carries the control (Input, Select, Textarea…), the named slots carry label, hint, and error text. When id is set the wiring is automatic — the label points at {id}-control, hint and error get stable ids, and the wrapper exposes data-invalid so themes can recolor the chrome.",
        importPath: "astro-ui",
        exportName: "Field",
        category: "forms",
        js: false,
        usage:
            `---\nimport { Field, Input } from "astro-ui";\n---\n\n<Field id="email" required>\n  <span slot="label">Email</span>\n  <Input id="email-control" type="email" invalid ariaDescribedby="email-error" />\n  <span slot="hint">We never share it.</span>\n  <span slot="error">Enter a valid email.</span>\n</Field>`,
        features: [
            "Composition: control in the default slot, chrome in named slots",
            "Automatic for/id wiring ({id}-control) when id is set",
            "Stable hint ({id}-hint) and error ({id}-error) ids",
            "data-invalid + data-required hooks; error slot renders role=\"alert\"",
            "Zero JS",
        ],
        a11y: [
            "Associates hint and error text via `aria-describedby`",
            "Errors announce with `role=\"alert\"`; `aria-invalid` marks the control",
        ],
        demos: [
            {
                id: "basic",
                title: "Label & hint",
                code: `<Field id="email">
  <span slot="label">Email</span>
  <Input id="email-control" type="email" placeholder="ada@example.com" />
  <span slot="hint">We never share it.</span>
</Field>`,
            },
            {
                id: "error",
                title: "Required & error",
                code: `<Field id="username" required>
  <span slot="label">Username</span>
  <Input id="username-control" invalid value="ada" ariaDescribedby="username-error" />
  <span slot="error">Username is taken.</span>
</Field>`,
            },
        ],
        props: [
            t("id", "string", "—", "Base id — enables label-for wiring and stable hint/error ids."),
            t("required", "boolean", "false", "Adds a required marker to the label + data-required."),
            t("class", "string", "—", "Merged via cn(); Tailwind classes welcome."),
        ],
        slots: [
            {name: "label", description: "Label text (wired to the control via for)."},
            {name: "default", description: "The form control itself."},
            {name: "hint", description: "Helper text ({id}-hint)."},
            {name: "error", description: "Error message ({id}-error, role=\"alert\") — marks the field invalid."},
        ],
        faq: [
            {
                q: "How does the control connect?",
                a: "Give Field an id and the control the matching id=\"{id}-control\", plus aria-describedby=\"{id}-error\" when invalid — Input/Textarea's invalid prop already sets aria-invalid.",
            },
        ],
        since: "1.0.0",
        related: ["label", "input", "textarea"],
    },
    {
        slug: "input",
        name: "Input",
        description: "Every native input type with token styling and validation states.",
        overview:
            "Input covers all 16 native types — text, email, password, date, color, range, file and friends — with token styling, size/variant control, and invalid state for server-driven validation. Numeric/date bounds forward via rest attributes.",
        importPath: "astro-ui",
        exportName: "Input",
        category: "forms",
        js: false,
        usage:
            `---\nimport { Input, Label } from "astro-ui";\n---\n\n<Label for="email" required>Email</Label>\n<Input id="email" name="email" type="email" placeholder="ada@example.com" />`,
        features: [
            "All 16 native input types, fully typed",
            "8 border variants incl. success/destructive",
            "5 sizes",
            "invalid state for server-side validation display",
            "min/max/step/accept forward via rest",
            "Zero JS — forms submit natively",
        ],
        a11y: [
            "Native input semantics; hint/error text connected via `aria-describedby`",
            "`aria-invalid` for validation state",
        ],
        demos: [
            {
                id: "types",
                title: "Common types",
                code: `<Input type="text" placeholder="Plain text" />
<Input type="email" placeholder="ada@example.com" />
<Input type="password" value="s3cret" />
<Input type="date" />`,
            },
            {
                id: "states",
                title: "States",
                code: `<Input invalid ariaDescribedby="err" />
<p id="err">Username is taken.</p>
<Input disabled value="Cannot edit" />`,
            },
            {
                id: "sizes",
                title: "Sizes",
                code: `<Input size="sm" placeholder="sm" />
<Input size="md" placeholder="md" />
<Input size="lg" placeholder="lg" />`,
            },
        ],
        props: [
            t("type", "all 16 native types", `"text"`, "Fully typed union."),
            t("name / value / placeholder", "string", "—", "Native attributes."),
            t("min / max / step", "string | number", "—", "Numeric/date bounds (native)."),
            t("minlength / maxlength", "number", "—", "Length bounds."),
            t("invalid", "boolean", "false", "Destructive border + aria-invalid."),
            t("size", `"xs" | "sm" | "md" | "lg" | "xl"`, `"md"`, "Control scale."),
            t("variant", `"inherit" | "primary" | "secondary" | "muted" | "destructive" | "success" | "warning" | "info"`, `"primary"`, "Border color."),
            ...common(),
        ],
        faq: [
            {
                q: "How is validation shown?",
                a: "Server/form-driven: set invalid and point ariaDescribedby at the message element. No client JS ships or runs.",
            },
        ],
        since: "1.0.0",
        related: ["label", "textarea", "select"],
    },
    {
        slug: "textarea",
        name: "Textarea",
        description: "Multi-line input with counters, clear button, and resize control.",
        overview:
            "Textarea mirrors Input's states and adds multi-line niceties: character counter, optional clear button, auto-grow bounds, and resize control. The core control is zero-JS; the extras are progressive enhancements — a tiny scoped script wires them and they degrade gracefully without it.",
        importPath: "astro-ui",
        exportName: "Textarea",
        category: "forms",
        js: true,
        usage:
            `---\nimport { Textarea, Label } from "astro-ui";\n---\n\n<Label for="bio">Bio</Label>\n<Textarea id="bio" rows={4} maxlength={280} showCount clearable />`,
        features: [
            "Input-matching variants and sizes",
            "showCount / counter character displays",
            "clearable — clear button appears while typing",
            "minRows / maxRows auto-grow",
            "resize control (none/vertical/horizontal/both)",
        ],
        a11y: [
            "Native textarea semantics; hint/error text via `aria-describedby`",
            "`aria-invalid` for validation state",
        ],
        demos: [
            {
                id: "basic",
                title: "Basic + counter + clear",
                code: `<Textarea rows={4} maxlength={280} showCount clearable placeholder="Tell us about yourself" />`,
            },
            {
                id: "grow",
                title: "Auto-grow",
                code: `<Textarea minRows={2} maxRows={5} placeholder="Grows with input" />`,
            },
            {
                id: "resize",
                title: "Resize",
                code: `<Textarea resize="vertical" rows={2} />`,
            },
        ],
        props: [
            t("rows", "number", "4", "Visible rows."),
            t("maxlength / minlength", "number", "—", "Length bounds."),
            t("showCount / counter", "boolean", "false", "Character-count readout (aliases)."),
            t("clearable", "boolean", "false", "Clear button, visible with text."),
            t("minRows / maxRows", "number", "—", "Auto-grow bounds; sets resize to none."),
            t("resize", `"none" | "vertical" | "horizontal" | "both"`, `"vertical"`, "Resize axis."),
            t("invalid", "boolean", "false", "Validation state."),
            t("size", `"xs" | "sm" | "md" | "lg" | "xl"`, `"md"`, "Scale."),
            t("variant", `"inherit" | "primary" | … | "info"`, `"inherit"`, "Border color."),
            ...common(),
        ],
        faq: [
            {
                q: "showCount vs counter?",
                a: "They are aliases — either renders the count readout (\"n / maxlength\" when a cap is set). Pick the name that reads best in your markup.",
            },
        ],
        since: "1.0.0",
        related: ["input", "label", "button"],
    },
    {
        slug: "select",
        name: "Select",
        description: "Native select with custom chevron, placeholder, and validation state.",
        overview:
            "Select wraps the native &lt;select&gt; so keyboard support and mobile pickers stay perfect — with token styling, a custom chevron, placeholder support, and options composed through the default slot.",
        importPath: "astro-ui",
        exportName: "Select",
        category: "forms",
        js: false,
        usage:
            `---\nimport { Select, Label } from "astro-ui";\n---\n\n<Label for="fruit" required>Fruit</Label>\n<Select id="fruit" placeholder="Choose a fruit" required>\n  <option value="apple">Apple</option>\n  <option value="pear">Pear</option>\n</Select>`,
        features: [
            "Native <select> — full keyboard + platform pickers",
            "Custom chevron (hidden when multiple)",
            "placeholder option pattern",
            "invalid / disabled / required states",
            "5 sizes, 8 variants",
            "Logical-property padding — RTL-ready",
        ],
        a11y: [
            "Native `<select>` — popup, arrow keys, and announced options from the platform",
            "`aria-invalid` + `aria-describedby` for validation",
        ],
        demos: [
            {
                id: "basic",
                title: "Basic",
                code: `<Select placeholder="Choose a fruit">
  <option value="apple">Apple</option>
  <option value="pear">Pear</option>
</Select>`,
            },
            {
                id: "states",
                title: "States & sizes",
                code: `<Select invalid><option>…</option></Select>
<Select disabled><option>…</option></Select>
<Select size="lg"><option>…</option></Select>`,
            },
        ],
        props: [
            t("name", "string", "—", "Form field name."),
            t("placeholder", "string", "—", "Disabled placeholder option."),
            t("required / disabled / invalid", "boolean", "false", "States."),
            t("multiple", "boolean", "false", "Multi-select (native chrome, chevron hidden)."),
            t("size", `"xs" | "sm" | "md" | "lg" | "xl"`, `"md"`, "Scale."),
            t("variant", `"inherit" | "primary" | … | "info"`, `"inherit"`, "Border color."),
            ...common(),
        ],
        slots: [{name: "default", description: "<option> / <optgroup> elements."}],
        faq: [
            {
                q: "Why not a custom listbox?",
                a: "Native selects keep keyboard nav, screen-reader semantics, and mobile pickers for free — that's the astro-ui philosophy: platform first.",
            },
        ],
        since: "1.0.0",
        related: ["label", "input", "checkbox"],
    },
    {
        slug: "checkbox",
        name: "Checkbox",
        description: "Native checkbox with custom visual, indeterminate state, and label.",
        overview:
            "Checkbox styles the native input inside a label wrapper — square or rounded indicator, indeterminate support, and full native keyboard/announcement behavior.",
        importPath: "astro-ui",
        exportName: "Checkbox",
        category: "forms",
        js: false,
        usage:
            `---\nimport { Checkbox } from "astro-ui";\n---\n\n<Checkbox name="news" checked>Email me news</Checkbox>`,
        features: [
            "Native input + custom visual (real form value)",
            "square / rounded indicator shapes",
            "indeterminate state",
            "5 sizes, 9 color variants",
            "label prop or slot content",
            "horizontal / vertical orientation",
        ],
        a11y: [
            "Native `<input type=\"checkbox\">` — checked state, Space toggle, and form value from the platform",
            "`aria-invalid` + `aria-describedby` connect validation and hint text",
            "Decorative marks are `aria-hidden`; `:focus-visible` ring",
        ],
        demos: [
            {
                id: "basic",
                title: "Basic",
                code: `<Checkbox name="news" checked>Email me news</Checkbox>
<Checkbox name="sms" disabled>SMS (unavailable)</Checkbox>
<Checkbox name="promo" indeterminate label="Promo" />`,
            },
            {
                id: "variants",
                title: "Variants & shapes",
                code: `<Checkbox shape="rounded" checked label="Rounded" />
<Checkbox variant="success" checked label="Success" />`,
            },
        ],
        props: [
            t("name / value", "string", "—", "Native form fields."),
            t("checked", "boolean", "false", "Initial state (SSR-safe)."),
            t("indeterminate", "boolean", "false", "Dash state."),
            t("shape", `"square" | "rounded"`, `"square"`, "Indicator shape."),
            t("orientation", `"horizontal" | "vertical"`, `"horizontal"`, "Label layout."),
            t("label", "string", "—", "Text when no slot content."),
            t("size", `"xs" | "sm" | "md" | "lg" | "xl"`, `"md"`, "Scale."),
            t("variant", `"primary" | "secondary" | "muted" | "destructive" | "success" | "warning" | "info" | "inherit"`, `"primary"`, "Accent color."),
            ...common(),
        ],
        faq: [
            {
                q: "Does indeterminate submit a value?",
                a: "No — it's purely visual (like the platform). The form value follows the underlying checked state only.",
            },
        ],
        since: "1.0.0",
        related: ["radio", "switch", "label"],
    },
    {
        slug: "radio",
        name: "Radio",
        description: "Native radio button with custom circle — group via shared name.",
        overview:
            "Radio mirrors Checkbox with a circle-and-dot indicator. Group behavior comes from the native shared name attribute — zero JS, perfect announcements.",
        importPath: "astro-ui",
        exportName: "Radio",
        category: "forms",
        js: false,
        usage:
            `---\nimport { Radio } from "astro-ui";\n---\n\n<Radio name="plan" value="free" checked>Free</Radio>\n<Radio name="plan" value="pro">Pro</Radio>`,
        features: ["Native group behavior via shared name", "Circle + dot visual", "5 sizes, 9 color variants", "Disabled/invalid states"],
        a11y: [
            "Native `<fieldset>` + `<legend>` name the group; `<input type=\"radio\">` handles selection",
            "Arrow keys move between options (platform behavior)",
            "`aria-invalid` + `aria-describedby` for validation",
        ],
        demos: [
            {
                id: "group",
                title: "Group",
                code: `<Radio name="plan" value="free" checked>Free</Radio>
<Radio name="plan" value="pro">Pro</Radio>
<Radio name="plan" value="ent" disabled>Enterprise</Radio>`,
            },
        ],
        props: [
            t("name / value", "string", "—", "Native group + value."),
            t("checked", "boolean", "false", "Initial selection."),
            t("disabled / invalid / required", "boolean", "false", "States."),
            t("size", `"xs" | "sm" | "md" | "lg" | "xl"`, `"md"`, "Scale."),
            t("variant", `"primary" | … | "inherit"`, `"primary"`, "Accent color."),
            ...common(),
        ],
        faq: [
            {
                q: "How do groups work?",
                a: "Exactly like HTML: same name across Radios forms the group. The browser handles mutual exclusion and arrow-key navigation.",
            },
        ],
        since: "1.0.0",
        related: ["checkbox", "switch", "label"],
    },
    {
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
    },
    {
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
    },
    {
        slug: "toggle-group",
        name: "ToggleGroup",
        description: "Connected row of Toggles — segmented control styling.",
        overview:
            "ToggleGroup wraps any number of Toggle children and stitches their borders into one segmented control, mirroring the ButtonGroup composition. Radius and negative-margin stitching reach slotted children through :global(). State stays per-toggle (aria-pressed on each child); whether the group enforces single-selection is the consumer's choice — a one-line app script, same recipe as Toggle.",
        importPath: "astro-ui",
        exportName: "ToggleGroup",
        category: "forms",
        js: false,
        usage:
            `---\nimport { ToggleGroup, Toggle } from "astro-ui";\n---\n\n<ToggleGroup ariaLabel="Text align">\n  <Toggle ariaLabel="Left">Left</Toggle>\n  <Toggle ariaLabel="Center">Center</Toggle>\n  <Toggle ariaLabel="Right">Right</Toggle>\n</ToggleGroup>`,
        features: [
            "Joins Toggle children into one segmented control",
            "horizontal / vertical orientation",
            "role=\"group\" + aria-label — groups of toggles need an accessible name",
            "State stays per-toggle; single-selection is an app-side one-liner",
        ],
        a11y: [
            "`role=\"group\"` names the set; buttons carry `aria-pressed`",
            "Roving `:focus-visible` ring",
        ],
        demos: [
            {
                id: "horizontal",
                title: "Horizontal",
                code: `<ToggleGroup ariaLabel="Text align">\n  <Toggle ariaLabel="Left">Left</Toggle>\n  <Toggle ariaLabel="Center" pressed>Center</Toggle>\n  <Toggle ariaLabel="Right">Right</Toggle>\n</ToggleGroup>`,
            },
            {
                id: "vertical",
                title: "Vertical",
                code: `<ToggleGroup orientation="vertical" ariaLabel="View">\n  <Toggle ariaLabel="List">List</Toggle>\n  <Toggle ariaLabel="Grid" pressed>Grid</Toggle>\n</ToggleGroup>`,
            },
        ],
        props: [
            t("orientation", `"horizontal" | "vertical"`, `"horizontal"`, "Stack direction of the connected group."),
            ...common(true),
        ],
        faq: [
            {
                q: "How do I enforce single-selection?",
                a: "On click, set aria-pressed=false (and drop aui-toggle--pressed) on every sibling — same one-line script pattern as Toggle; the group itself stays zero-JS.",
            },
        ],
        since: "1.0.0",
        related: ["toggle", "button-group", "segmented-control"],
    },
    {
        slug: "table",
        name: "Table",
        description: "Semantic table with bordered/striped styles, sizes, and scroll.",
        overview:
            "Table styles a real &lt;table&gt; — head/body/footer compose through slots so you keep full control of rows and cells. Bordered, striped, aligned, and scrollable modes; caption prop for the accessible name.",
        importPath: "astro-ui",
        exportName: "Table",
        category: "data-display",
        js: false,
        usage:
            `---\nimport { Table } from "astro-ui";\n---\n\n<Table caption="Team members">\n  <tr slot="head"><th class="aui-table__head-cell">Name</th></tr>\n  <tr><td class="aui-table__cell">Ada</td></tr>\n</Table>`,
        features: [
            "Named slots: head / default body / footer",
            "bordered + striped combinations",
            "4 density sizes",
            "Column alignment control",
            "scrollable for wide tables",
            "caption prop = accessible name",
        ],
        a11y: [
            "Semantic `<table>` — headers and cells associated by the platform",
            "Scroll wrapper is `role=\"region\"` with `aria-label` and `aria-describedby`",
        ],
        demos: [
            {
                id: "basic",
                title: "Basic",
                code: `<Table>
  <tr slot="head">
    <th class="aui-table__head-cell">Name</th>
    <th class="aui-table__head-cell">Role</th>
  </tr>
  <tr>
    <td class="aui-table__cell">Ada Lovelace</td>
    <td class="aui-table__cell">Developer</td>
  </tr>
</Table>`,
            },
            {
                id: "bordered-striped",
                title: "Bordered + striped",
                code: `<Table bordered striped>
  <tr slot="head">…</tr>
  <tr><td>…</td></tr>
</Table>`,
            },
        ],
        props: [
            t("caption", "string", "—", "Renders as <caption>."),
            t("bordered", "boolean", "false", "Visible borders + rounded corners."),
            t("striped", "boolean", "false", "Zebra rows."),
            t("align", `"start" | "center" | "end"`, `"start"`, "Column alignment."),
            t("scrollable", "boolean", "false", "Horizontal scroll wrapper."),
            t("size", `"xs" | "sm" | "md" | "lg"`, `"md"`, "Row density."),
            ...common(),
        ],
        slots: [
            {name: "head", description: "<tr> with <th> cells (use aui-table__head-cell)."},
            {name: "default", description: "Body rows."},
            {name: "footer", description: "Footer/summary rows."},
        ],
        faq: [
            {
                q: "Why do cells need classes?",
                a: "The wrapper scopes styles; cells belong to your markup, so applying aui-table__cell / aui-table__head-cell opts them into the theme.",
            },
        ],
        since: "1.0.0",
        related: ["badge", "card", "progress"],
    },
    {
        slug: "tabs",
        name: "Tabs",
        description: "WAI-ARIA tab switcher — line, pill, and card variants.",
        overview:
            "Tabs implements the WAI-ARIA tabs pattern: SSR renders the list with the initial tab pre-selected, panels hide via the hidden attribute, and a small inline script wires click + arrow-key navigation with automatic activation. Without JS everything stays visible and meaningful.",
        importPath: "astro-ui",
        exportName: "Tabs",
        category: "navigation",
        js: true,
        usage:
            `---\nimport { Tabs } from "astro-ui";\n---\n\n<Tabs id="settings" ariaLabel="Settings" defaultValue="billing"\n  items={[\n    { value: "account", label: "Account" },\n    { value: "billing", label: "Billing" },\n  ]}>\n  <div data-tab="account">Account panel.</div>\n  <div data-tab="billing">Billing panel.</div>\n</Tabs>`,
        features: [
            "WAI-ARIA tabs pattern: roving tabindex, automatic activation",
            "Arrow keys, Home/End navigation; RTL-aware",
            "3 variants: line (underline), pill, card (segmented)",
            "5 sizes, horizontal or vertical orientation",
            "SSR pre-selection; panels visible without JS",
            "Automatic tab/panel id + aria wiring",
        ],
        a11y: [
            "Full ARIA tabs pattern: `role=\"tablist\"` / `tab` / `tabpanel`",
            "`aria-selected`, `aria-controls`, and `aria-labelledby` wire the relationships",
            "Arrow keys move between tabs with roving `tabindex` (script)",
        ],
        demos: [
            {
                id: "variants",
                title: "Line variant",
                code: `<Tabs ariaLabel="Settings" defaultValue="billing"
  items={[{ value: "account", label: "Account" }, { value: "billing", label: "Billing" }]}>
  <div data-tab="account">Account panel.</div>
  <div data-tab="billing">Billing panel.</div>
</Tabs>`,
            },
            {
                id: "card-variant",
                title: "Card variant",
                code: `<Tabs variant="card" ariaLabel="View"
  items={[{ value: "preview", label: "Preview" }, { value: "code", label: "Code" }]}>
  <div data-tab="preview">…</div>
  <div data-tab="code">…</div>
</Tabs>`,
            },
            {
                id: "vertical",
                title: "Vertical",
                code: `<Tabs orientation="vertical" ariaLabel="Settings"
  items={[{ value: "general", label: "General" }, { value: "security", label: "Security" }]}>
  <div data-tab="general">…</div>
  <div data-tab="security">…</div>
</Tabs>`,
            },
        ],
        props: [
            t("items", "TabItem[]", "[]", "Tabs in display order: { value, label, disabled? }."),
            t("defaultValue", "string", "first enabled", "Initially selected tab."),
            t("variant", `"line" | "pill" | "card"`, `"line"`, "Visual style."),
            t("size", `"xs" | "sm" | "md" | "lg" | "xl"`, `"md"`, "Scale."),
            t("orientation", `"horizontal" | "vertical"`, `"horizontal"`, "Layout direction."),
            t("ariaLabel", "string", "—", "Accessible name for the tab list."),
            t("id", "string", "recommended", "Prefixes generated tab/panel ids."),
            ...common(false),
        ],
        slots: [
            {name: "default", description: "Panel elements, each carrying data-tab=\"<value>\"."},
        ],
        faq: [
            {
                q: "Does this this work without JS?",
                a: "The tab list and all panels render server-side; without JS every panel stays visible so content is never lost.",
            },
            {
                q: "Multiple groups on one page?",
                a: "Give each a unique id — generated tab/panel ids derive from it.",
            },
        ],
        since: "1.0.0",
        related: ["separator", "card", "button"],
    },
    {
        slug: "progress",
        name: "Progress",
        description: "Determinate/indeterminate progress bar and circle.",
        overview:
            "Progress shows task completion as a bar or circle. Omit value for indeterminate. The circle uses an SVG ring with stroke-dashoffset math; the bar anchors its fill inline-start with a riding percentage label.",
        importPath: "astro-ui",
        exportName: "Progress",
        category: "data-display",
        js: false,
        usage:
            `---\nimport { Progress } from "astro-ui";\n---\n\n<Progress value={64} label="Uploading" showValue />\n<Progress variant="circle" value={80} showValue />`,
        features: [
            "Bar and circle variants",
            "Determinate (value) or indeterminate",
            "6 sizes, 8 colors",
            "label + showValue text",
            "RTL: fill and label mirror via logical properties",
        ],
        a11y: [
            "`role=\"progressbar\"` with `aria-valuenow/min/max` announces completion",
            "`aria-label` names the task; visual bars are `aria-hidden`",
        ],
        demos: [
            {
                id: "bar",
                title: "Bar",
                code: `<Progress value={64} label="Uploading" showValue />
<Progress /> <!-- indeterminate -->`,
            },
            {
                id: "circle",
                title: "Circle",
                code: `<Progress variant="circle" value={60} showValue />
<Progress variant="circle" value={80} size="lg" showValue />`,
            },
        ],
        props: [
            t("value", "number", "—", "0–100; omit for indeterminate."),
            t("variant", `"bar" | "circle"`, `"bar"`, "Shape."),
            t("size", `"xs" | "sm" | "md" | "lg" | "xl" | "2xl"`, `"md"`, "Scale."),
            t("color", `"primary" | "secondary" | "success" | "warning" | "error" | "info" | "muted" | "destructive"`, `"primary"`, "Fill color."),
            t("label", "string", "—", "Text label."),
            t("showValue", "boolean", "false", "Show the percentage."),
            ...common(),
        ],
        faq: [
            {
                q: "Is the value announced?",
                a: "When label is set the component exposes a role=\"progressbar\" with aria-valuenow. Without label, treat it as decorative.",
            },
        ],
        since: "1.0.0",
        related: ["spinner", "skeleton", "badge"],
    },
    {
        slug: "dialog",
        name: "Dialog",
        description: "Native <dialog> modal — platform focus trap, Esc, and backdrop.",
        overview:
            "Dialog is the first JS-required component — and deliberately so: it's a thin styled wrapper over native &lt;dialog&gt;, so modality, backdrop, focus containment, Escape, and focus return all come from the platform. The component ships zero JS; your app calls showModal().",
        importPath: "astro-ui",
        exportName: "Dialog",
        category: "overlay",
        js: true,
        usage:
            `---\nimport { Dialog, Button } from "astro-ui";\n---\n\n<Button id="open">Open</Button>\n<Dialog id="prefs">\n  <h2 slot="title">Preferences</h2>\n  <p slot="description">Device-only settings.</p>\n  <form method="dialog"><Button>Close</Button></form>\n</Dialog>\n<script>\n  document.getElementById("open")?.addEventListener("click", () =>\n    document.getElementById("prefs")?.showModal());\n</script>`,
        features: [
            "Native <dialog>: focus trap + return, Esc, backdrop",
            "title/description/footer slots with automatic aria wiring",
            "Zero-JS close via method=\"dialog\" forms",
            "6 sizes, 8 variants",
            "Built-in close button (showClose)",
            "Backdrop-dismiss recipe in the docs",
        ],
        a11y: [
            "Native `<dialog>`: focus containment, Escape-to-close, and modal semantics from the platform",
            "`aria-labelledby` / `aria-describedby` auto-wired to title and description slots",
            "Decorative icons `aria-hidden`",
        ],
        demos: [
            {
                id: "basic",
                title: "Basic modal",
                code: `<Button id="open">Open preferences</Button>
<Dialog id="prefs">
  <h2 slot="title">Preferences</h2>
  <p slot="description">These settings apply to this device only.</p>
  <div slot="footer">
    <form method="dialog"><Button>Close</Button></form>
  </div>
</Dialog>
<script>
  document.getElementById("open")?.addEventListener("click", () =>
    document.getElementById("prefs")?.showModal());
</script>`,
            },
        ],
        props: [
            t("size", `"xs" | "sm" | "md" | "lg" | "xl" | "2xl"`, `"md"`, "Width scale."),
            t("id", "string", "recommended", "Enables automatic title/description aria wiring."),
            t("showClose", "boolean", "true", "Native zero-JS close button."),
            t("closeLabel", "string", `"Close dialog"`, "Accessible label for it."),
            t("ariaLabel", "string", "—", "Explicit name (skips aria-labelledby)."),
            t("variant", `"inherit" | "primary" | … | "info"`, `"inherit"`, "Accent variant."),
            t("class", "string", "—", "Merged via cn()."),
        ],
        slots: [
            {name: "title", description: "Dialog heading (wired to aria-labelledby)."},
            {name: "description", description: "Subtitle (wired to aria-describedby)."},
            {name: "default", description: "Body content."},
            {name: "footer", description: "Action row."},
        ],
        faq: [
            {
                q: "How do I close it without JS?",
                a: "A <form method=\"dialog\"> button inside the dialog closes natively. Esc and the × button also work with zero app code.",
            },
            {
                q: "Can clicking the backdrop close it?",
                a: "Yes — recipe: dialog.addEventListener('click', (e) => { if (e.target === dialog) dialog.close(); }).",
            },
        ],
        since: "1.0.0",
        related: ["button", "alert", "card"],
    },
    {
        slug: "alert-dialog",
        name: "AlertDialog",
        description: "role=\"alertdialog\" modal that interrupts for a decision.",
        overview:
            "AlertDialog is a modal that interrupts for a decision — role=\"alertdialog\" tells assistive tech to announce the message immediately. Structure mirrors Dialog (native &lt;dialog&gt;, platform modality/focus containment, zero JS in the component) with an action-oriented footer: cancel buttons are plain &lt;form method=\"dialog\"&gt; submissions, so dismissal needs no JS. The dialog's returnValue receives the submitting button's value, so the app can tell which action dismissed it.",
        importPath: "astro-ui",
        exportName: "AlertDialog",
        category: "overlay",
        js: true,
        usage:
            `---\nimport { Button, AlertDialog } from "astro-ui";\n---\n\n<Button id="open-delete">Delete project</Button>\n<AlertDialog id="delete">\n  <h2 slot="title">Delete project?</h2>\n  <p slot="description">This cannot be undone.</p>\n  <Fragment slot="footer">\n    <form method="dialog"><Button variant="outline">Cancel</Button></form>\n    <form method="dialog">\n      <Button variant="destructive" value="confirm">Delete</Button>\n    </form>\n  </Fragment>\n</AlertDialog>\n\n<script>\n  document.getElementById("open-delete")?.addEventListener("click", () => {\n    document.getElementById("delete")?.showModal();\n  });\n</script>`,
        features: [
            "role=\"alertdialog\" — announced immediately by assistive tech",
            "Native <dialog> modality, focus containment, Escape-to-close",
            "Zero-JS dismissal via <form method=\"dialog\"> (returnValue tells you which action)",
            "xs / sm / md / lg panel sizes; auto title/description labelling",
        ],
        a11y: [
            "Native `<dialog>` with `role=\"alertdialog\"` — interruptive semantics announced as an alert",
            "`aria-labelledby` / `aria-describedby` auto-wired to the title and description slots",
            "Focus is contained while open; Escape closes via the platform",
        ],
        demos: [
            {
                id: "confirm",
                title: "Confirm a destructive action",
                code: `<Button id="open-delete" variant="destructive">Delete project</Button>\n<AlertDialog id="delete">\n  <h2 slot="title">Delete project?</h2>\n  <p slot="description">This cannot be undone.</p>\n  <Fragment slot="footer">\n    <form method="dialog"><Button variant="outline">Cancel</Button></form>\n    <form method="dialog"><Button variant="destructive" value="confirm">Delete</Button></form>\n  </Fragment>\n</AlertDialog>`,
            },
            {
                id: "sizes",
                title: "Sizes",
                code: `<Button id="open-xs">Open xs</Button>\n<AlertDialog id="xs" size="xs">\n  <h2 slot="title">Extra small</h2>\n  <p slot="description">20rem panel for short confirmations.</p>\n</AlertDialog>\n<Button id="open-lg">Open lg</Button>\n<AlertDialog id="lg" size="lg">\n  <h2 slot="title">Large</h2>\n  <p slot="description">32rem panel when the message needs room.</p>\n</AlertDialog>`,
            },
        ],
        props: [
            t("size", `"xs" | "sm" | "md" | "lg"`, `"sm"`, "Panel width scale."),
            t("id", "string", "—", "Required for automatic title/description labelling (and the trigger script)."),
            ...common(false),
        ],
        slots: [
            {name: "title", description: "Heading (auto-wired to aria-labelledby)."},
            {name: "description", description: "Supporting copy (auto-wired to aria-describedby)."},
            {name: "default", description: "Extra body content."},
            {name: "footer", description: "Action buttons — wrap each in <form method=\"dialog\"> for zero-JS close."},
        ],
        faq: [
            {
                q: "How do I know which button closed it?",
                a: "The dialog's returnValue receives the submitting button's value — listen for the close event and read dialog.returnValue === \"confirm\".",
            },
            {
                q: "Does the component ship JS?",
                a: "No — only the app-level trigger (showModal()) is yours; modality, focus containment, and Escape all come from native <dialog>.",
            },
        ],
        since: "1.0.0",
        related: ["dialog", "button", "alert"],
    },
    {
        slug: "sheet",
        name: "Sheet",
        description: "Dialog panel that slides in from a screen edge.",
        overview:
            "Sheet is a dialog panel that slides in from a screen edge — built on the same native &lt;dialog&gt; foundation as Dialog: modality, ::backdrop, Escape-to-close, and focus containment come from the platform and the component ships zero JS. Closing needs no JS: any &lt;form method=\"dialog\"&gt; button, the optional built-in close button, or Escape dismisses natively. When id is set, the title slot gets {id}-title and the sheet points aria-labelledby at it.",
        importPath: "astro-ui",
        exportName: "Sheet",
        category: "overlay",
        js: true,
        usage:
            `---\nimport { Button, Sheet } from "astro-ui";\n---\n\n<Button id="open-menu">Menu</Button>\n<Sheet id="menu" side="left">\n  <h2 slot="title">Menu</h2>\n  <p>Sheet body…</p>\n</Sheet>\n\n<script>\n  document.getElementById("open-menu")?.addEventListener("click", () => {\n    document.getElementById("menu")?.showModal();\n  });\n</script>`,
        features: [
            "Slides from any edge: left / right / top / bottom",
            "Native <dialog> modality, backdrop, Escape — zero JS in the component",
            "Backdrop-click dismiss (opt-out with closeOnBackdrop={false})",
            "Built-in zero-JS close button (showClose, closeLabel)",
            "sm / md / lg / xl panel sizes (width for sides, height for top/bottom)",
        ],
        a11y: [
            "Native `<dialog>`: focus containment, Escape, and modality from the platform",
            "`aria-labelledby` auto-wired to the title slot (`{id}-title`); `aria-label` alternative",
            "Built-in close button is a real button with `closeLabel`",
        ],
        demos: [
            {
                id: "basic",
                title: "Slide-in panel",
                code: `<Button id="open-sheet">Open sheet</Button>\n<Sheet id="sheet">\n  <h2 slot="title">Sheet title</h2>\n  <p>Sheet body…</p>\n</Sheet>`,
            },
            {
                id: "sides",
                title: "From any edge",
                code: `<Button id="open-left">Left</Button>\n<Sheet id="left" side="left"><h2 slot="title">Left</h2></Sheet>\n<Button id="open-top">Top</Button>\n<Sheet id="top" side="top"><h2 slot="title">Top</h2></Sheet>\n<!-- sides: left | right | top | bottom -->`,
            },
            {
                id: "backdrop",
                title: "Backdrop dismiss",
                code: `{/* Default: click the dark layer to close (Escape too) */}\n<Button id="open-sheet">Open sheet</Button>\n<Sheet id="sheet">…</Sheet>\n\n{/* Opt out: force an explicit close action */}\n<Sheet id="critical" closeOnBackdrop={false}\n  ariaLabel="Critical settings">…</Sheet>`,
            },
        ],
        props: [
            t("side", `"left" | "right" | "top" | "bottom"`, `"right"`, "Which screen edge the panel slides in from."),
            t("size", `"sm" | "md" | "lg" | "xl"`, `"md"`, "Panel scale (width for left/right, height for top/bottom)."),
            t("id", "string", "—", "Required for automatic title labelling (and the trigger script)."),
            t("showClose", "boolean", "true", "Render the native (zero-JS) close button."),
            t("closeLabel", "string", `"Close sheet"`, "Accessible label for the built-in close button."),
            t("closeOnBackdrop", "boolean", "true", "Close when the dark backdrop layer is clicked."),
            ...common(false),
        ],
        slots: [
            {name: "title", description: "Heading (auto-wired to aria-labelledby)."},
            {name: "default", description: "Panel body content."},
        ],
        faq: [
            {
                q: "How do I open it?",
                a: "One line: document.getElementById(\"open-menu\") triggers showModal() on the sheet with a matching id — same trigger recipe as Dialog.",
            },
            {
                q: "Does clicking the dark backdrop close it?",
                a: "Yes by default. Set closeOnBackdrop={false} for flows where an accidental dismiss would lose work — the user then closes via the × button, a <form method=\"dialog\"> action, or Escape.",
            },
            {
                q: "Can the panel overflow the screen?",
                a: "No — left/right panels are width: min(100%, 100vw) and top/bottom panels cap at max-height: 85vh; the size prop just tunes the base scale.",
            },
        ],
        since: "1.0.0",
        related: ["dialog", "alert-dialog", "drawer"],
    },
    {
        slug: "toast",
        name: "Toast",
        description: "Notification toasts with actions, positions, and expand.",
        overview:
            "Toaster renders stacked notification toasts. Import the toast function, place &lt;Toaster /&gt; once in your layout, and fire from anywhere: six semantic helpers, action buttons, per-toast positions, durations, expand/collapse stacks, and swipe-free dismiss. The store is a tiny module — no framework island.",
        importPath: "astro-ui/toaster",
        exportName: "Toaster / toast",
        category: "feedback",
        js: true,
        usage:
            `---\nimport { Toaster } from "astro-ui";\nimport "astro-ui/toast.css";\n---\n<body>\n  <Toaster />\n</body>\n<script>\n  import { toast } from "astro-ui/toast";\n  toast.success("Saved!");\n  toast("Event has been created", {\n    action: { label: "Undo", onClick: () => console.log("Undo") },\n  });\n</script>`,
        features: [
            "6 helpers: toast, success, error, warning, info, loading",
            "action: { label, onClick } — dismisses after it runs",
            "6 position corners; per-toast position",
            "Stacked expand: collapsed stacks, hover to expand, expand option",
            "description, duration, dismissible options",
            "toast.update for loading → result flows",
            "Rich-color card tier + always-on accent icons",
        ],
        a11y: [
            "Six position stacks use `aria-live=\"polite\"` + `aria-atomic=\"true\"` so notifications announce without interrupting",
            "`aria-relevant` limits re-announcements to additions",
            "Role by type (status/alert) with per-type override via the `role` option",
        ],
        demos: [
            {
                id: "basic",
                title: "Basic variants",
                code: `import { toast } from "astro-ui/toast";

toast("Event has been created");
toast.success("Saved!");
toast.error("Something broke");`,
            },
            {
                id: "modes",
                title: "All modes",
                code: `import { toast } from "astro-ui/toast";

toast("Event has been created");            // default (neutral)
toast.success("Changes saved");
toast.error("Failed to save");
toast.warning("Storage almost full");
toast.info("New version available");
toast.loading("Uploading…");               // persists until update/dismiss`,
            },
            {
                id: "description",
                title: "Description & styling",
                code: `toast.warning("Storage almost full", {
  description: "You have used 93% of your plan. Upgrade to keep syncing.",
  richColors: true,
  closeButton: true,
  duration: 8000,
});

toast.info("Deploy finished", { description: "32 files changed in 4.2s" });`,
            },
            {
                id: "action",
                title: "With action",
                code: `toast("Event has been created", {
  action: {
    label: "Undo",
    onClick: () => console.log("Undo"),
  },
});`,
            },
            {
                id: "position",
                title: "Custom position",
                code: `toast("Top-left position", { position: "top-left" });`,
            },
            {
                id: "promise",
                title: "Loading flow",
                code: `const id = toast.loading("Uploading…");
setTimeout(() => toast.update(id, { type: "success", title: "Uploaded!" }), 1500);`,
            },
            {
                id: "expand",
                title: "Expand control",
                code: `{/* Default: stack of 2+ collapses — hover to expand */}
for (const msg of ["First", "Second", "Third"]) {
  toast(msg, { duration: 10000 });
}

{/* Pin the stack open — no hover needed */}
for (const msg of ["First", "Second", "Third"]) {
  toast(msg, { expand: true, duration: 10000 });
}`,
            },
        ],
        props: [
            t("title", "string", "required", "First argument — the message."),
            t("options.description", "string", "—", "Secondary line."),
            t("options.type", `"default" | "success" | "error" | "warning" | "info" | "loading"`, `"default"`, "Variant (helpers set this)."),
            t("options.action", "{ label: string; onClick: (e: MouseEvent) => void }", "—", "Action button; toast dismisses after it runs."),
            t("options.position", "6 corner union", `"bottom-right"`, "Which stack receives it."),
            t("options.duration", "number", "4000", "Ms until auto-dismiss; Infinity to persist."),
            t("options.dismissible", "boolean", "true", "Show the × button."),
            t("options.expand", "boolean", "false", "Pin this toast's stack open."),
            t("options.richColors", "boolean", "false", "Tint the whole card, not just the icon."),
            t("options.role", "string", "by type", "ARIA role override."),
        ],
        faq: [
            {
                q: "Where does <Toaster /> go?",
                a: "Once in your base layout — it renders the six fixed stacks. Fire toasts from any script on any page.",
            },
            {
                q: "How do two positions show at once?",
                a: "Each toast routes to the stack matching its position option — stacks are independent, so bottom-right and top-left toasts coexist.",
            },
            {
                q: "Expand behavior?",
                a: "Stacks of 2+ collapse: older cards tuck behind the newest. Hover or focus expands; pass expand: true to pin a stack open.",
            },
        ],
        since: "1.0.0",
        related: ["alert", "spinner", "button"],
    },
    {
        slug: "accordion",
        name: "Accordion",
        description: "Collapsible sections built on native details/summary — zero JS.",
        overview:
            "Accordion provides collapsible content sections on native &lt;details&gt;/&lt;summary&gt;: expand/collapse, keyboard (Space/Enter), and announcements come from the platform. A bordered variant and chevron indicator round out the presentation.",
        importPath: "astro-ui",
        exportName: "Accordion",
        category: "layout",
        js: false,
        usage:
            `---\nimport { Accordion } from "astro-ui";\n---\n\n<Accordion\n  id="faq"\n  items={[\n    { value: "q1", title: "What is astro-ui?", content: "A zero-JS Astro component library." },\n    { value: "q2", title: "Does it need JavaScript?", content: "Not for the accordion — it's native details." },\n  ]}\n/>`,
        features: [
            "Native <details>/<summary> — keyboard and AT for free",
            "single mode via the native name attribute (Chrome 120+)",
            "3 variants: default, bordered, ghost",
            "Chevron indicator with rotation",
            "Optional height animation via `animated` (pure CSS, graceful fallback)",
            "SSR-controlled open panels via item.open",
        ],
        a11y: [
            "Native `<details>`/`<summary>` — expand/collapse state, Space/Enter activation, and screen-reader announcements come from the platform",
            "Disabled summaries are skipped by keyboard and assistive tech",
            "Focus-visible ring on summaries via `:focus-visible`",
        ],
        demos: [
            {
                id: "basic",
                title: "Basic",
                code: `<Accordion\n  items={[\n    { value: "q1", title: "What is astro-ui?", content: "A zero-JS Astro component library." },\n    { value: "q2", title: "Does it need JS?", content: "Not for this." },\n  ]}\n/>`,
            },
            {
                id: "bordered",
                title: "Bordered & pre-opened",
                code: `<Accordion variant="bordered"\n  items={[\n    { value: "a", title: "Opened", content: "This panel starts open.", open: true },\n    { value: "b", title: "Closed", content: "Click to expand." },\n  ]}\n/>`,
            },
            {
                id: "animated",
                title: "Animated expand",
                code: `<Accordion animated\n  items={[\n    { value: "a", title: "Smooth height", content: "The panel animates open and closed instead of snapping." },\n    { value: "b", title: "Still zero JS", content: "Pure CSS: ::details-content + interpolate-size. Unsupported browsers snap instantly." },\n  ]}\n/>`,
            },
        ],
        props: [
            t("items", "AccordionItem[]", "[]", "Sections: { value, title, content, open?, disabled? }."),
            t("single", "boolean", "false", "One-open-at-a-time via native name attribute."),
            t("animated", "boolean", "false", "Smooth expand/collapse height animation (CSS-only)."),
            t("variant", `"default" | "bordered" | "ghost"`, `"default"`, "Visual style."),
            t("size", `"sm" | "md" | "lg"`, `"md"`, "Text/padding scale."),
            t("indicator", "boolean", "true", "Rotating chevron."),
            t("ariaLabel", "string", "—", "Accessible name for the group."),
            ...common(false),
        ],
        faq: [
            {
                q: "How does single mode work without JS?",
                a: "Native <details name=\"group\"> exclusivity (Chrome 120+). Elsewhere panels toggle independently — behavior degrades gracefully.",
            },
            {
                q: "Can content be arbitrary markup?",
                a: "Use the item.content string for text, or compose the component differently — the items API keeps SSR output fully static.",
            },
            {
                q: "How does the animation work?",
                a: "`animated` animates the native ::details-content pseudo between block-size 0 and auto (interpolate-size: allow-keywords). Browsers without support ignore it and snap instantly — never broken.",
            },
        ],
        since: "1.0.0",
        related: ["separator", "card", "tabs"],
    },
    {
        slug: "collapsible",
        name: "Collapsible",
        description: "Expand/collapse region with a dedicated trigger button.",
        overview:
            "Collapsible is an expand/collapse region whose trigger is a separate button that can live anywhere in the markup, and whose panel is arbitrary composed content — unlike Accordion, which uses native &lt;details&gt; with content authored as data. The scoped script toggles hidden + aria-expanded and closes on Escape. Closed panels use hidden=\"until-found\": find-in-page, #hash deep links, and :~:text= fragments can still match and reveal collapsed content (the browser fires beforematch and removes the attribute; aria-expanded stays in sync). Multiple collapsibles on one page are supported — each root is wired independently by its data attribute.",
        importPath: "astro-ui",
        exportName: "Collapsible",
        category: "layout",
        js: true,
        usage:
            `---\nimport { Collapsible } from "astro-ui";\n---\n\n<Collapsible id="filters" open>\n  <span slot="trigger">Filters</span>\n  <p>Any composed content…</p>\n</Collapsible>`,
        features: [
            "Trigger button with aria-expanded / aria-controls + rotating chevron",
            "Arbitrary composed panel content (slot, not data)",
            "hidden=until-found: find-in-page + deep links reveal closed panels",
            "Escape closes the panel and returns focus to the trigger",
            "Multiple independent instances per page (data-attribute wiring)",
        ],
        a11y: [
            "`aria-expanded` + `aria-controls` wire the trigger to the panel state",
            "Panel is a `role=\"region\"` labelled by the trigger",
            "`hidden=\"until-found\"` keeps closed content reachable by find-in-page and deep links (`beforematch` keeps aria-expanded honest)",
            "Escape closes and returns focus to the trigger",
        ],
        demos: [
            {
                id: "basic",
                title: "Basic",
                code: `<Collapsible id="filters">\n  <span slot="trigger">Filters</span>\n  <p>Composed content…</p>\n</Collapsible>`,
            },
            {
                id: "searchable",
                title: "Searchable collapsed content",
                code: `{/* Closed panels keep hidden="until-found": press Ctrl/Cmd+F and */}
{/* search "kyoto reservation code" — the browser reveals this panel. */}
<Collapsible id="booking">
  <span slot="trigger">Booking details</span>
  <p>Your kyoto reservation code is AOK-2291.</p>
</Collapsible>

{/* #booking-panel deep links and #:~:text= fragments reveal it too. */}
{/* A beforematch listener keeps aria-expanded=true when that happens. */}`,
            },
            {
                id: "open",
                title: "Open by default",
                code: `<Collapsible id="advanced" open>\n  <span slot="trigger">Advanced</span>\n  <p>Panel starts visible via the open prop.</p>\n</Collapsible>`,
            },
        ],
        props: [
            t("open", "boolean", "false", "Open on first render (SSR)."),
            t("disabled", "boolean", "false", "Disables the trigger."),
            t("id", "string", "—", "Recommended: stable prefix for trigger/panel ids."),
            ...common(false),
        ],
        slots: [
            {name: "trigger", description: "Trigger button content (chevron is added)."},
            {name: "default", description: "The collapsible panel content."},
        ],
        faq: [
            {
                q: "Collapsible or Accordion?",
                a: "Accordion = data-driven items in a group (native <details>, optional single-open via name). Collapsible = arbitrary composed content with a trigger you position yourself.",
            },
            {
                q: "Can users find text inside a closed panel?",
                a: "Yes. Closed panels use hidden=\"until-found\", so Ctrl/Cmd+F, #hash links, and :~:text= fragments match collapsed content and the browser reveals it (firing beforematch — the component keeps aria-expanded in sync). Native <details> accordions get the same behavior from the platform. Falls back to display: none where unsupported.",
            },
        ],
        since: "1.0.0",
        related: ["accordion", "disclosure", "tabs"],
    },
    {
        slug: "breadcrumb",
        name: "Breadcrumb",
        description: "Semantic breadcrumb trail — CSS separators, icons, ellipsis, pill, composed items.",
        overview:
            "Breadcrumb renders a &lt;nav aria-label&gt; of links \u2014 a flat flex container, no list markup. The current page is a non-link span with aria-current=\"page\"; separators are drawn in CSS pseudo-elements. Pass `items` for data-driven trails (with optional icon and ellipsis fields) or omit items and author composed &lt;span&gt; children for badges, avatars, dropdown triggers, and buttons.",
        importPath: "astro-ui",
        exportName: "Breadcrumb",
        category: "navigation",
        js: false,
        usage:
            `---\nimport { Breadcrumb } from "astro-ui";\n---\n\n<Breadcrumb\n  ariaLabel="Breadcrumb"\n  items={[\n    { href: "/", label: "Home" },\n    { href: "/components/", label: "Components" },\n    { label: "Button" },\n  ]}\n/>`,
        features: [
            "Semantic nav structure, flat span items — no list markup",
            "aria-current=\"page\" on the current item",
            "Separators drawn in CSS: slash, chevron, double-chevron, dot, custom",
            "icon + ellipsis item fields for rich trails",
            "Composed slot mode for badges, avatars, dropdowns, buttons",
            "Pill style for frames, headers, and toolbars",
            "3 sizes; hidden items for responsive trimming",
        ],
        a11y: [
            "Wrapped in `<nav>` with an `aria-label` so it's a navigable landmark",
            "`aria-current=\"page\"` on the last item announces the current location",
            "Separators are CSS pseudo-elements — never read by screen readers",
        ],
        demos: [
            {
                id: "basic",
                title: "Basic",
                code: `<Breadcrumb\n  items={[\n    { href: "/", label: "Home" },\n    { href: "/components/", label: "Components" },\n    { label: "Button" },\n  ]}\n/>`,
            },
            {
                id: "chevron",
                title: "Chevron separator",
                code: `<Breadcrumb separator="chevron"\n  items={[\n    { href: "/", label: "Home" },\n    { label: "Docs" },\n  ]}\n/>`,
            },
            {
                id: "dropdown",
                title: "Breadcrumb with dropdown menu",
                code: `<Breadcrumb ariaLabel="Breadcrumb with collapsed path">\n  <span class="aui-breadcrumb__item">\n    <a class="aui-breadcrumb__link" href="/">Home</a>\n  </span>\n  <span class="aui-breadcrumb__item">\n    <Popover id="bc-menu" triggerLabel="Show hidden path segments">\n      <span slot="trigger">\n        <span class="aui-breadcrumb__ellipsis" aria-hidden="true">\u2026</span>\n      </span>\n      <span slot="content" class="docs-breadcrumb-menu">\n        <a href="#">Documentation</a>\n        <a href="#">Themes</a>\n        <a href="#">GitHub</a>\n      </span>\n    </Popover>\n  </span>\n  <span class="aui-breadcrumb__item">\n    <a class="aui-breadcrumb__link" href="#">Components</a>\n  </span>\n  <span class="aui-breadcrumb__item">\n    <span class="aui-breadcrumb__current" aria-current="page">Breadcrumb</span>\n  </span>\n</Breadcrumb>\n\n<style is:global>\n  /* Tighten the popover trigger to the breadcrumb line; style the panel links. */\n  .aui-breadcrumb .aui-popover__trigger { padding: 0.125rem 0.25rem; border-radius: var(--ui-radius-sm); }\n  .docs-breadcrumb-menu { display: grid; min-inline-size: 10rem; }\n  .docs-breadcrumb-menu a { padding: 0.25rem 0.5rem; color: var(--ui-foreground); font-size: var(--ui-text-sm); text-decoration: none; border-radius: var(--ui-radius-sm); }\n  .docs-breadcrumb-menu a:hover { background: var(--ui-muted); }\n</style>`,
            },
            {
                id: "slash",
                title: "Custom slash separator",
                code: `<Breadcrumb\n  separator="custom"\n  style="--aui-breadcrumb-separator: '//'"\n  items={[\n    { href: "/", label: "usr" },\n    { href: "#", label: "local" },\n    { label: "bin" },\n  ]}\n/>`,
            },
            {
                id: "ellipsis",
                title: "Ellipsis for long paths",
                code: `<Breadcrumb\n  items={[\n    { href: "/", label: "Home" },\n    { ellipsis: true, label: "More" },\n    { href: "#", label: "Components" },\n    { label: "Breadcrumb" },\n  ]}\n/>`,
            },
            {
                id: "icons",
                title: "Icons for each item",
                code: `<Breadcrumb separator="chevron"\n  items={[\n    { href: "/", label: "Home", icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/></svg>' },\n    { href: "#", label: "Library", icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>' },\n    { label: "Breadcrumb", icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M15 2v5h5"/></svg>' },\n  ]}\n/>`,
            },
            {
                id: "chevrons",
                title: "Double chevron separators",
                code: `<Breadcrumb separator="chevrons"\n  items={[\n    { href: "/", label: "Dashboard" },\n    { href: "#", label: "Resources" },\n    { label: "Documentation" },\n  ]}\n/>`,
            },
            {
                id: "pill-frame",
                title: "Pill-style breadcrumb inside frame",
                code: `<Breadcrumb\n  pill\n  separator="chevron"\n  items={[\n    { href: "/", label: "Home", icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/></svg>' },\n    { href: "#", label: "Products" },\n    { label: "Checkout" },\n  ]}\n/>`,
            },
            {
                id: "home-icon",
                title: "Home icon item",
                code: `<Breadcrumb\n  items={[\n    { href: "/", label: "Home", icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/></svg>' },\n    { href: "#", label: "Products" },\n    { label: "Checkout" },\n  ]}\n/>`,
            },
            {
                id: "badge-count",
                title: "Badge with count",
                code: `<Breadcrumb ariaLabel="Mailbox">\n  <span class="aui-breadcrumb__item">\n    <a class="aui-breadcrumb__link" href="#">\n      Inbox\n      <Badge variant="destructive" size="sm" ariaLabel="3 unread messages" style="min-inline-size: 1.25rem">3</Badge>\n    </a>\n  </span>\n  <span class="aui-breadcrumb__item">\n    <a class="aui-breadcrumb__link" href="#">Labels</a>\n  </span>\n  <span class="aui-breadcrumb__item">\n    <span class="aui-breadcrumb__current" aria-current="page">Important</span>\n  </span>\n</Breadcrumb>`,
            },
            {
                id: "buttons",
                title: "Button-style breadcrumb",
                code: `<Breadcrumb ariaLabel="Help center">\n  <span class="aui-breadcrumb__item">\n    <Button variant="outline" size="xs" shape="rounded" aria-label="Home">\n      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/></svg>\n    </Button>\n  </span>\n  <span class="aui-breadcrumb__item">\n    <a class="aui-breadcrumb__link" href="#">Help Center</a>\n  </span>\n  <span class="aui-breadcrumb__item">\n    <span class="aui-breadcrumb__current" aria-current="page">Getting Started</span>\n  </span>\n</Breadcrumb>`,
            },
            {
                id: "card",
                title: "Breadcrumb inside card",
                code: `<Card size="sm">\n  <Breadcrumb\n    separator="chevron"\n    items={[\n      { href: "/", label: "Home" },\n      { href: "#", label: "Products" },\n      { label: "Checkout" },\n    ]}\n  />\n</Card>`,
            },
        ],
        props: [
            t("items", "BreadcrumbItem[]", "[]", "Trail: { href?, label, hidden?, icon?, ellipsis? }. Last item without href = current page. Omit to author composed items in the default slot."),
            t("ariaLabel", "string", `"Breadcrumb"`, "Name for the nav landmark."),
            t("separator", `"slash" | "chevron" | "chevrons" | "dot" | "custom"`, `"slash"`, "Separator glyph (CSS-drawn); custom reads --aui-breadcrumb-separator."),
            t("pill", "boolean", "false", "Renders the trail in a muted pill."),
            t("size", `"sm" | "md" | "lg"`, `"md"`, "Text scale."),
            ...common(false),
        ],
        faq: [
            {
                q: "Why no separator markup?",
                a: "Separators are pseudo-elements, so screen readers announce only the real items — no repeated 'slash' noise.",
            },
            {
                q: "How do I add badges or avatars to items?",
                a: "Omit items and author the trail: <Breadcrumb><span class=\"aui-breadcrumb__item\">…</span></Breadcrumb>. Compose any astro-ui component inside the item spans; the same separator and typography styles apply.",
            },
            {
                q: "How do I collapse a long path?",
                a: "Set ellipsis: true on a middle item to render a presentational …, or compose a Popover trigger inside an item so users can open the hidden segments from the ellipsis.",
            },
        ],
        since: "1.0.0",
        related: ["pagination", "tabs", "link"],
    },
    {
        slug: "bubble",
        name: "Bubble",
        description: "Chat message bubble — 7 variants, start/end align, reactions, groups.",
        overview:
            "Bubble composes a conversational message from three parts: Bubble sets alignment (start/end) and variant context, BubbleContent is the visible rounded box, and BubbleReactions anchors a reaction pill to an edge. BubbleGroup stacks consecutive same-sender turns with tight spacing. Ghost renders bare content for headings, lists, and code.",
        importPath: "astro-ui",
        exportName: "Bubble",
        category: "data-display",
        js: false,
        usage:
            `---\nimport { Bubble, BubbleContent, BubbleReactions } from "astro-ui";\n---\n\n<Bubble align="end" variant="primary">\n  <BubbleContent>Looks great — ship it.</BubbleContent>\n  <BubbleReactions side="bottom" align="end" ariaLabel="Reactions">\n    <span aria-hidden="true">🎉</span>\n  </BubbleReactions>\n</Bubble>`,
        features: [
            "7 variants: primary, secondary, muted, tinted, outline, ghost, destructive",
            "start/end alignment for two-sided threads",
            "BubbleGroup collapses consecutive same-sender turns",
            "Edge-anchored reactions pill (top/bottom, start/end)",
            "Interactive content: a button or link as the content gets a themed hover",
            "Zero JS — wire reactions and actions app-side",
        ],
        a11y: [
            "Reactions row is a labeled group; pressable reactions are real buttons with aria-pressed",
            "BubbleGroup exposes role=group with an accessible name per sender run",
            "Variant color pairs keep 4.5:1 contrast on their content",
        ],
        demos: [
            {
                id: "billing-thread",
                title: "Two-sided billing thread",
                code: `<div class="docs-bubble-thread">\n  <p class="docs-bubble-meta">Support · 09:12</p>\n  <Bubble align="start" variant="outline">\n    <BubbleContent>Hi! I see a double charge on your last invoice.</BubbleContent>\n  </Bubble>\n  <p class="docs-bubble-meta docs-bubble-meta--end">You · 09:14</p>\n  <Bubble align="end" variant="primary">\n    <BubbleContent>Yes — my card was charged twice for the renewal.</BubbleContent>\n  </Bubble>\n  <Bubble align="start" variant="muted">\n    <BubbleContent>Refunding the duplicate now. It lands in 3–5 business days.</BubbleContent>\n  </Bubble>\n  <Bubble align="end" variant="tinted">\n    <BubbleContent>Confirmed — thank you!</BubbleContent>\n  </Bubble>\n</div>`,
            },
            {
                id: "deploy-thread",
                title: "Seven variants in one deploy thread",
                code: `<div class="docs-bubble-thread">\n  <Bubble align="end" variant="primary">\n    <BubbleContent>Deploy the preview build to production.</BubbleContent>\n  </Bubble>\n  <Bubble align="start" variant="secondary">\n    <BubbleContent>On it — building #412.</BubbleContent>\n  </Bubble>\n  <Bubble align="start" variant="muted">\n    <BubbleContent>Last production deploy was v2.4.1, two days ago.</BubbleContent>\n  </Bubble>\n  <Bubble align="start" variant="tinted">\n    <BubbleContent>Build passed in 1m 32s.</BubbleContent>\n  </Bubble>\n  <Bubble align="start" variant="outline">\n    <BubbleContent>3 files changed, 128 additions, 12 deletions.</BubbleContent>\n  </Bubble>\n  <Bubble align="start" variant="destructive">\n    <BubbleContent>Coverage dropped below 80% — consider adding tests.</BubbleContent>\n  </Bubble>\n  <Bubble align="start" variant="ghost">\n    <BubbleContent>Run #412 · runner eu-west-1 · log retained 30 days</BubbleContent>\n  </Bubble>\n</div>`,
            },
            {
                id: "group",
                title: "Consecutive turns in a BubbleGroup",
                code: `<div class="docs-bubble-thread">\n  <p class="docs-bubble-meta">Ada · just now</p>\n  <BubbleGroup ariaLabel="Three messages from Ada">\n    <Bubble align="end" variant="primary">\n      <BubbleContent>Pushed the fix to staging.</BubbleContent>\n    </Bubble>\n    <Bubble align="end" variant="primary">\n      <BubbleContent>Can you re-run the smoke tests?</BubbleContent>\n    </Bubble>\n    <Bubble align="end" variant="primary">\n      <BubbleContent>Then we're clear for the release.</BubbleContent>\n    </Bubble>\n  </BubbleGroup>\n  <p class="docs-bubble-meta">Grace · 1 min ago</p>\n  <Bubble align="start" variant="muted">\n    <BubbleContent>Running them now.</BubbleContent>\n  </Bubble>\n</div>`,
            },
            {
                id: "reactions",
                title: "Reaction rows",
                code: `<div class="docs-bubble-thread">\n  <Bubble align="start" variant="outline">\n    <BubbleContent>The release notes are ready for review.</BubbleContent>\n    <BubbleReactions side="bottom" align="end" ariaLabel="Reactions">\n      <span aria-hidden="true">👍 4</span>\n      <span aria-hidden="true">🚀 2</span>\n    </BubbleReactions>\n  </Bubble>\n  <Bubble align="end" variant="primary">\n    <BubbleContent>Great — leaving a celebration on it.</BubbleContent>\n    <BubbleReactions side="bottom" align="start" ariaLabel="Reactions">\n      <button type="button" aria-pressed="true" aria-label="Celebrate, 3 reactions">\n        <span aria-hidden="true">🎉</span> 3\n      </button>\n    </BubbleReactions>\n  </Bubble>\n  <Bubble align="start" variant="muted">\n    <BubbleContent>Deployment window opens at 14:00 UTC.</BubbleContent>\n    <BubbleReactions side="top" align="end" ariaLabel="Reactions">\n      <span aria-hidden="true">⏰ 1</span>\n    </BubbleReactions>\n  </Bubble>\n</div>`,
            },
            {
                id: "ghost-rich",
                title: "Ghost bubble with rich content",
                code: `<div class="docs-bubble-thread">\n  <Bubble align="start" variant="ghost">\n    <BubbleContent>\n      <h4>What changed in v2.5</h4>\n      <ul>\n        <li><strong>Bubble</strong> components for conversational UIs</li>\n        <li>Logical-property separators in <code>Breadcrumb</code></li>\n        <li><em>40% faster</em> docs generation</li>\n      </ul>\n      <p>Upgrade with <code>npm install astro-ui@latest</code>.</p>\n    </BubbleContent>\n  </Bubble>\n</div>`,
            },
            {
                id: "collapsible-answer",
                title: "Long answer behind a Collapsible",
                code: `<div class="docs-bubble-thread">\n  <Bubble align="end" variant="primary">\n    <BubbleContent>Explain how the reactions pill positions itself.</BubbleContent>\n  </Bubble>\n  <Bubble align="start" variant="muted">\n    <BubbleContent>\n      <p>\n        The pill is absolutely positioned inside the bubble and pushed\n        out with a translate of 75% of its own height, so it straddles\n        the edge without occupying flow space.\n      </p>\n      <Collapsible id="dm-bubble-more">\n        <span slot="trigger">Show the details</span>\n        <p>\n          A 3px ring in the page background separates the pill from the\n          bubble and any media behind it. side picks the edge (top or\n          bottom) and align picks the horizontal anchor (start or end) —\n          both logical, so they mirror in RTL layouts.\n        </p>\n      </Collapsible>\n    </BubbleContent>\n  </Bubble>\n</div>`,
            },
            {
                id: "interactive",
                title: "Tinted bubbles as buttons + action row",
                code: `<div class="docs-bubble-thread">\n  <Bubble align="start" variant="muted">\n    <BubbleContent>Two plans fit your usage. Pick one:</BubbleContent>\n  </Bubble>\n  <Bubble align="end" variant="tinted">\n    <button type="button" class="aui-bubble__content">Pro — $19/mo, priority builds</button>\n  </Bubble>\n  <Bubble align="end" variant="tinted">\n    <button type="button" class="aui-bubble__content">Team — $49/mo, shared themes</button>\n  </Bubble>\n  <Bubble align="start" variant="outline">\n    <a class="aui-bubble__content" href="#">Compare all plans</a>\n  </Bubble>\n  <div class="docs-bubble-actions">\n    <Button variant="ghost" size="sm">Regenerate</Button>\n    <Button variant="outline" size="sm">Copy summary</Button>\n  </div>\n</div>`,
            },
        ],
        props: [
            t("align", `'"start" | "end"'`, `'"start"'`, "Side of the thread the message sits on."),
            t("variant", `'"primary" | "secondary" | "muted" | "tinted" | "outline" | "ghost" | "destructive"'`, `'"primary"'`, "Color scheme of the content box."),
            t("class", "string", "—", "Merged via cn(); Tailwind classes welcome."),
            t("id", "string", "—", "Element id."),
        ],
        slots: [
            {name: "default", description: "BubbleContent box and optional BubbleReactions pill."},
        ],
        faq: [
            {
                q: "How do I make a pressable reaction?",
                a: "Put a real <button> inside BubbleReactions with aria-pressed; the pill styles it. Toggling state (and the count) is app-side — the component ships zero JS.",
            },
            {
                q: "How do interactive bubbles work?",
                a: "Author <button class=\"aui-bubble__content\"> or <a class=\"aui-bubble__content\"> directly instead of BubbleContent — the Bubble root gives interactive content a themed hover and focus ring.",
            },
            {
                q: "When do I use BubbleGroup?",
                a: "When one sender sends several turns in a row: group them so spacing tightens and the run reads as a single message block. Give each group an ariaLabel naming the sender.",
            },
        ],
        since: "1.1.0",
        related: ["avatar", "collapsible", "attachment"],
    },
    {
        slug: "chart",
        name: "Chart",
        description: "Zero-JS SVG charts: bar, line, area, pie, donut, scatter, horizontal bars.",
        overview:
            "Chart renders pure SVG at build time from a data prop — no chart library, no client JS. Seven types share one API: cartesian charts (bar, line, area, scatter) take labels + series; pie/donut take a single series; hbar renders labeled horizontal progress rows. Colors read --ui-chart-1..6 tokens so charts follow the theme, and a visually hidden data table carries the values for screen readers.",
        importPath: "astro-ui",
        exportName: "Chart",
        category: "data-display",
        js: false,
        usage:
            `---\nimport { Chart } from "astro-ui";\n---\n\n<Chart\n  type="bar"\n  title="Revenue by month"\n  labels={["Jan", "Feb", "Mar"]}\n  series={[{ name: "Revenue", data: [12, 30, 24] }]}\n/>`,
        features: [
            "12 types: bar, line, area, pie, donut, scatter, hbar, combo, gauge, radar, radial, sankey",
            "Pure build-time SVG — zero JS, zero chart library",
            "Token-driven colors (--ui-chart-1..6) — themable, dark-mode aware",
            "Grouped or stacked series (stack prop, bars and hbar part-to-whole), curved lines, gradient fills (area/bar/pie/donut), custom per-series colors, nice y-axis ticks",
            "Native hover titles per point/slice/bar",
            "Visually hidden data table for screen readers + figcaption",
        ],
        a11y: [
            "SVG carries role=img with a full aria-label summary",
            "Every bar, point, and slice has a native <title> hover tooltip",
            "A visually hidden <table> mirrors the data for screen readers",
        ],
        demos: [
            {
                id: "bar",
                title: "Bar",
                code: `<Chart\n  type="bar"\n  title="Revenue growth"\n  description="Monthly revenue, 2026"\n  labels={["Jan", "Feb", "Mar", "Apr", "May", "Jun"]}\n  series={[{ name: "Revenue", data: ${JSON.stringify(series({
                    seed: "chart:bar:revenue",
                    n: 6,
                    min: 120,
                    max: 420
                }))} ]}\n/>`,
            },
            {
                id: "grouped-bar",
                title: "Grouped bars",
                code: `<Chart\n  type="bar"\n  title="Desktop vs mobile"\n  labels={["Jan", "Feb", "Mar", "Apr"]}\n  series={[\n    { name: "Desktop", data: ${JSON.stringify(series({
                    seed: "chart:grouped:desktop",
                    n: 4,
                    min: 120,
                    max: 460
                }))} },\n    { name: "Mobile", data: ${JSON.stringify(series({
                    seed: "chart:grouped:mobile",
                    n: 4,
                    min: 80,
                    max: 340
                }))} },\n  ]}\n/>`,
            },
            {
                id: "stacked-bar",
                title: "Stacked bars",
                code: `<Chart\n  type="bar"\n  stack\n  title="Sessions by source"\n  description="Stacked per day — axis spans daily totals"\n  labels={["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]}\n  series={[\n    { name: "Direct", data: [320, 360, 310, 420, 480, 260, 210] },\n    { name: "Search", data: [280, 300, 340, 380, 410, 220, 180] },\n    { name: "Social", data: [120, 140, 110, 160, 190, 240, 200] },\n  ]}\n/>`,
            },
            {
                id: "percent-stack",
                title: "100% stacked bars",
                code: `<Chart\n  type="bar"\n  stack="percent"\n  title="Traffic mix"\n  description="Each column normalized to 100% of its daily total"\n  labels={["Mon", "Tue", "Wed", "Thu", "Fri"]}\n  series={[\n    { name: "Direct", data: [320, 360, 310, 420, 480] },\n    { name: "Search", data: [280, 300, 340, 380, 410] },\n    { name: "Social", data: [120, 140, 110, 160, 190] },\n  ]}\n/>\n<!-- stack: true | "percent" -->`,
            },
            {
                id: "combo",
                title: "Combo (bars + line)",
                code: `<Chart\n  type="combo"\n  title="Orders vs revenue"\n  description="Bars ride the left axis, the line a secondary right axis"\n  labels={["Oct 1", "Oct 2", "Oct 3", "Oct 4", "Oct 5", "Oct 6", "Oct 7", "Oct 8", "Oct 9"]}\n  series={[\n    { name: "Revenue", data: [4200, 4600, 5100, 4900, 5600, 6100, 6900, 5800, 5400] },\n    { name: "Orders", data: [148, 158, 172, 165, 184, 196, 210, 186, 178], kind: "line", color: "var(--ui-success)" }\n  ]}\n/>\n\n<!-- per-series kind: "bar" (default) or "line"; rightMaxY overrides the right-axis ceiling -->`,
            },
            {
                id: "line",
                title: "Line",
                code: `<Chart\n  type="line"\n  title="Active users"\n  labels={["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]}\n  series={[\n    { name: "This week", data: ${JSON.stringify(series({
                    seed: "chart:line:thisweek",
                    n: 7,
                    min: 320,
                    max: 820,
                    smooth: 0.7
                }))} },\n    { name: "Last week", data: ${JSON.stringify(series({
                    seed: "chart:line:lastweek",
                    n: 7,
                    min: 300,
                    max: 720,
                    smooth: 0.7
                }))} },\n  ]}\n/>`,
            },
            {
                id: "step-line",
                title: "Step line",
                code: `<Chart\n  type="line"\n  curve="step"\n  title="Desktop vs mobile"\n  description="Plateaus hold until the midpoint between values, then step"\n  labels={["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]}\n  series={[\n    { name: "Desktop", data: [420, 615, 545, 760, 480, 825, 570, 690, 515, 735, 610, 455] },\n    { name: "Mobile", data: [265, 430, 350, 505, 390, 545, 415, 585, 445, 615, 520, 380] },\n  ]}\n/>\n<!-- curve accepts true (smooth) or "step"; combine with per-series color freely -->`,
            },
            {
                id: "dashed-line",
                title: "Dashed & dotted",
                code: `<Chart\n  type="line"\n  stroke="dashed"\n  title="Forecast"\n  description="Whole series dashed \u2014 chart-level stroke, per-series override"\n  labels={["Apr 1", "Apr 5", "Apr 10", "Apr 15", "Apr 18"]}\n  series={[{ name: "Sessions", data: ${JSON.stringify(series({
                    seed: "chart:dashed:forecast",
                    n: 5,
                    min: 240,
                    max: 780,
                    smooth: 0.2
                }))} ]}\n/>\n\n<Chart\n  type="line"\n  title="Solid vs dashed vs dotted"\n  labels={["Jan", "Feb", "Mar", "Apr"]}\n  series={[\n    { name: "Actual", data: ${JSON.stringify(series({
                    seed: "chart:stroke:actual",
                    n: 4,
                    min: 420,
                    max: 680,
                    smooth: 0.6
                }))} },\n    { name: "Target", data: ${JSON.stringify(series({
                    seed: "chart:stroke:target",
                    n: 4,
                    min: 380,
                    max: 560,
                    smooth: 0.7
                }))}, stroke: "dashed" },\n    { name: "Stretch", data: ${JSON.stringify(series({
                    seed: "chart:stroke:stretch",
                    n: 4,
                    min: 260,
                    max: 420,
                    smooth: 0.7
                }))}, stroke: "dotted" },\n  ]}\n/>\n<!-- stroke: "solid" | "dashed" | "dotted", at chart or series level -->`,
            },
            {
                id: "pattern-fill",
                title: "Pattern fills (dots & hatch)",
                code: `<Chart\n  type="area"\n  curve="step"\n  fill="dots"\n  title="Portfolio swing"\n  description="Texture fills tinted with each series color"\n  labels={["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"]}\n  series={[\n    { name: "Fund A", data: [312, 388, 340, 296, 274, 246, 231, 224] },\n    { name: "Fund B", data: [268, 231, 205, 214, 248, 289, 331, 352], fill: "hatch" },\n  ]}\n/>\n<!-- fill: "solid" | "dots" | "hatch" | "none", at chart or series level -->`,
            },
            {
                id: "pattern-mix",
                title: "Actual vs target (hatch + bare line)",
                code: `<Chart\n  type="area"\n  curve="step"\n  title="Weekly signups"\n  description="275 this week \u2014 +12.2% vs target"\n  labels={["Jan", "Feb", "Mar", "Apr", "May", "Jun"]}\n  series={[\n    { name: "Actual", data: [240, 178, 262, 335, 212, 275], fill: "hatch" },\n    { name: "Target", data: [122, 202, 128, 390, 305, 172], fill: "none", stroke: "dashed" },\n  ]}\n/>\n<!-- fill="none" renders a bare reference line; hatch/dots texture the area -->`,
            },
            {
                id: "bump-line",
                title: "Bump curve",
                code: `<Chart\n  type="line"\n  curve="bump"\n  title="Rank changes"\n  description="Flat out of each point, S-curve into the next"\n  labels={["Jan", "Feb", "Mar", "Apr", "May", "Jun"]}\n  series={[\n    { name: "Desktop", data: [320, 180, 420, 260, 510, 380] },\n    { name: "Mobile", data: [180, 320, 240, 450, 290, 460] },\n  ]}\n/>\n<!-- curve: true | "step" | "bump" -->`,
            },
            {
                id: "curved-line",
                title: "Curved line",
                code: `<Chart\n  type="line"\n  curve\n  title="Visitor flow"\n  description="Monotone cubic smoothing — the curve never overshoots the data"\n  labels={["Jan", "Feb", "Mar", "Apr", "May", "Jun"]}\n  series={[\n    { name: "Visitor-line", data: ${JSON.stringify(series({
                    seed: "chart:curve:visitor",
                    n: 6,
                    min: 60,
                    max: 400,
                    smooth: 0.5
                }))} },\n  ]}\n/>`,
            },
            {
                id: "curved-area",
                title: "Curved area",
                code: `<Chart\n  type="area"\n  curve\n  title="Campaign traffic"\n  description="Smoothed area — the fill follows the monotone curve"\n  labels={["Jan", "Feb", "Mar", "Apr", "May", "Jun"]}\n  series={[{ name: "Sessions", data: [820, 1210, 940, 580, 1120, 990] }]}\n/>`,
            },
            {
                id: "area",
                title: "Area",
                code: `<Chart\n  type="area"\n  title="Signups"\n  labels={["Q1", "Q2", "Q3", "Q4"]}\n  series={[{ name: "Signups", data: ${JSON.stringify(series({
                    seed: "chart:area:signups",
                    n: 4,
                    min: 900,
                    max: 3200,
                    smooth: 0.6
                }))} ]}\n/>`,
            },
            {
                id: "gradient-area",
                title: "Gradient area",
                code: `<Chart\n  type="area"\n  curve\n  gradient\n  title="API requests"\n  description="Series color fades toward the baseline"\n  labels={["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]}\n  series={[{ name: "Requests", data: [4200, 5100, 4800, 6300, 7100, 3900, 3400] }]}\n/>\n\n<!-- gradient fades the series color to transparent at the baseline; combine with curve freely -->`,
            },
            {
                id: "gradient-custom",
                title: "Gradient area, custom color",
                code: `<Chart\n  type="area"\n  curve\n  gradient\n  title="Revenue"\n  description="The series color drives the line, the fill, and the gradient"\n  labels={["Jan", "Feb", "Mar", "Apr", "May", "Jun"]}\n  series={[{ name: "Revenue", data: [12, 18, 15, 22, 19, 26], color: "var(--ui-success)" }]}\n/>\n\n<!-- fill + gradient always follow the series color: pass color per series,\n     or retheme globally via --ui-chart-1..6 (area fallback is --ui-chart-1) -->`,
            },
            {
                id: "gradient-bar",
                title: "Gradient bars",
                code: `<Chart\n  type="bar"\n  gradient\n  title="Deploys per week"\n  description="Each bar fades toward the baseline"\n  labels={["W1", "W2", "W3", "W4", "W5", "W6"]}\n  series={[{ name: "Deploys", data: [14, 22, 18, 27, 31, 24] }]}\n/>\n\n<!-- gradient works on bar, combo bars, pie and donut too -->`,
            },
            {
                id: "gradient-donut",
                title: "Gradient donut",
                code: `<Chart\n  type="donut"\n  gradient\n  title="Storage by type"\n  description="Radial fade — strong at the rim, clear toward the center"\n  labels={["Images", "Video", "Docs", "Other"]}\n  series={[{ name: "GB", data: [42, 66, 21, 11] }]}\n  legend={false}\n/>`,
            },
            {
                id: "pie",
                title: "Pie",
                code: `<Chart\n  type="pie"\n  title="Traffic sources"\n  labels={["Direct", "Search", "Social", "Referral"]}\n  series={[{ name: "Share", data: [435, 286, 151, 96] }]}\n/>`,
            },
            {
                id: "donut",
                title: "Donut",
                code: `<Chart\n  type="donut"\n  title="Storage by type"\n  labels={["Images", "Video", "Docs", "Other"]}\n  series={[{ name: "GB", data: [42, 66, 21, 11] }]}\n  legend={false}\n/>`,
            },
            {
                id: "donut-rounded",
                title: "Rounded donut (padded slices)",
                code: `<Chart\n  type="donut"\n  padAngle={4}\n  sliceRadius={22}\n  title="Browser share"\n  description="padAngle gaps the slices, sliceRadius rounds their corners"\n  labels={["Chrome", "Safari", "Firefox", "Edge", "Other"]}\n  series={[{ name: "Share", data: [38, 24, 16, 12, 10] }]}\n  legend={false}\n/>\n<!-- tune padAngle (degrees) and sliceRadius (px) independently -->`,
            },
            {
                id: "slice-labels",
                title: "Slice labels (value & leader lines)",
                code: `<Chart\n  type="donut"\n  padAngle={4}\n  sliceRadius={18}\n  sliceLabels="value"\n  title="Browser share"\n  description="Formatted values printed at each slice centroid"\n  labels={["Chrome", "Safari", "Firefox", "Edge", "Other"]}\n  series={[{ name: "Users", data: [275, 200, 187, 173, 90] }]}\n  legend={false}\n/>\n\n<Chart\n  type="pie"\n  sliceLabels="label"\n  title="Browser share"\n  description="Category names outside, connected by elbow leader lines"\n  labels={["Chrome", "Safari", "Firefox", "Edge", "Other"]}\n  series={[{ name: "Users", data: [275, 200, 187, 173, 90] }]}\n  legend={false}\n/>\n<!-- sliceLabels: "none" | "value" | "label" -->`,
            },
            {
                id: "slice-labels-combined",
                title: "Slice labels, value + percent",
                code: `<Chart\n  type="donut"\n  padAngle={3}\n  sliceRadius={14}\n  sliceLabels="value-pct"\n  title="Plan distribution"\n  description="Value and share together at each slice centroid"\n  labels={["Free", "Pro", "Team", "Enterprise"]}\n  series={[{ name: "Accounts", data: [412, 268, 143, 77] }]}\n  legend={false}\n/>\n\n<Chart\n  type="donut"\n  sliceLabels="value-pct"\n  sliceLabelFormat={(v, pct) => pct + "% of " + v.toLocaleString()}\n  title="Storage by type"\n  description="sliceLabelFormat takes (value, pct) and returns any string"\n  labels={["Images", "Video", "Docs", "Other"]}\n  series={[{ name: "GB", data: [42, 66, 21, 11] }]}\n  legend={false}\n/>\n<!-- sliceLabels: "none" | "value" | "value-pct" | "label" -->`,
            },
            {
                id: "slice-collapse",
                title: "Auto-collapsed slices",
                code: `<Chart\n  type="donut"\n  collapseBelow={8}\n  sliceLabels="value-pct"\n  title="Entry pages"\n  description="Slices under 8% merge into the trailing Other slice"\n  labels={["/", "/pricing", "/blog", "/docs", "/changelog", "/about", "/careers"]}\n  series={[{ name: "Sessions", data: [4820, 2130, 1640, 1180, 310, 240, 180] }]}\n  legend={false}\n/>\n<!-- collapseBelow: percent threshold (0 = off); merged slice is muted,\n     hover lists what it contains -->`,
            },
            {
                id: "scatter",
                title: "Scatter",
                code: `<Chart\n  type="scatter"\n  title="Deploys per day"\n  labels={["Mon", "Tue", "Wed", "Thu", "Fri"]}\n  series={[\n    { name: "Team A", data: ${JSON.stringify(series({
                    seed: "chart:scatter:a",
                    n: 5,
                    min: 1,
                    max: 10,
                    smooth: 0.1
                }))} },\n    { name: "Team B", data: ${JSON.stringify(series({
                    seed: "chart:scatter:b",
                    n: 5,
                    min: 1,
                    max: 10,
                    smooth: 0.1
                }))} },\n  ]}\n/>`,
            },
            {
                id: "hbar",
                title: "Horizontal bars",
                code: `<Chart\n  type="hbar"\n  title="Top pages"\n  labels={["/docs/get-started", "/components", "/blocks", "/docs/rtl"]}\n  series={[{ name: "Views", data: ${JSON.stringify(series({
                    seed: "chart:hbar:views",
                    n: 4,
                    min: 900,
                    max: 5600,
                    trend: -0.35
                }))} ]}\n/>`,
            },
            {
                id: "hbar-stacked",
                title: "Stacked hbar (part-to-whole)",
                code: `<Chart\n  type="hbar"\n  stack\n  legend={false}\n  title="Capital inflows"\n  labels={["Funds"]}\n  series={[\n    { name: "WaveMark Capital", data: [8372000], color: "var(--ui-success)" },\n    { name: "Envato Finances", data: [2962400], color: "var(--ui-warning)" },\n    { name: "QBridge Tech", data: [1545600], color: "var(--ui-error)" },\n  ]}\n/>\n<!-- one full-width track; each series becomes a segment sized by its share of the total -->`,
            },
            {
                id: "custom-colors",
                title: "Custom colors",
                code: `<Chart\n  type="donut"\n  title="Plan distribution"\n  labels={["Free", "Pro", "Team"]}\n  series={[\n    { name: "Plans", data: [640, 310, 90], color: "var(--ui-primary)" },\n  ]}\n  legend\n/>\n\n<!-- per-series colors: color prop or --ui-chart-1..6 tokens -->`,
            },
            {
                id: "gauge",
                title: "Radial gauge",
                code: `<Chart\n  type="gauge"\n  title="Storage used"\n  description="Tick marks fill clockwise with the value"\n  labels={["Used"]}\n  series={[{ name: "of 8 TB", data: [64] }]}\n  maxY={100}\n  ticks={40}\n  legend={false}\n/>\n<!-- value = series[0].data[0], scale = maxY (default 100); ticks clamps 8\u201380 -->`,
            },
            {
                id: "gauge-half",
                title: "Gauge at half",
                code: `<Chart\n  type="gauge"\n  title="Monthly goal"\n  labels={["Reached"]}\n  series={[{ name: "of 200 deals", data: [102] }]}\n  maxY={200}\n  legend={false}\n/>`,
            },
            {
                id: "gradient-intensity",
                title: "Gradient intensity",
                code: `<Chart\n  type="area"\n  curve\n  gradient\n  gradientIntensity={2}\n  title="Strong fade"\n  description="gradientIntensity scales every fade \u2014 1 is the default, 2 is saturated"\n  labels={["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]}\n  series={[{ name: "Requests", data: [4200, 5100, 4800, 6300, 7100, 3900, 3400] }]}\n/>\n\n<!-- try 0.5 for a whisper-subtle fill; works on area, bar, pie and donut fades -->`,
            },
            {
                id: "radar",
                title: "Radar",
                code: `<Chart\n  type="radar"\n  title="Skill coverage"\n  description="One axis per label, filled polygons per series"\n  labels={["JavaScript", "Python", "CSS", "Node.js", "React", "TypeScript"]}\n  series={[\n    { name: "Desktop", data: [78, 85, 90, 62, 74, 96] },\n    { name: "Mobile", data: [52, 58, 66, 54, 41, 60] },\n  ]}\n/>\n<!-- values scale against maxY (default: global data max); one axis per label -->`,
            },
            {
                id: "radial",
                title: "Radial rings",
                code: `<Chart\n  type="radial"\n  title="Browser share"\n  description="One concentric ring per category \u2014 outer ring first"\n  labels={["Chrome", "Safari", "Firefox", "Edge", "Other"]}\n  series={[{ name: "Users", data: [275, 200, 187, 173, 90] }]}\n  maxY={275}\n/>\n<!-- values read from series[0].data, like pie; maxY sets the full-ring value -->`,
            },
            {
                id: "radial-half",
                title: "Radial half (rainbow)",
                code: `<Chart\n  type="radial"\n  radialSweep="half"\n  title="Browser share"\n  description="Half-circle rings over the top \u2014 outer ring first"\n  labels={["Chrome", "Safari", "Firefox", "Edge", "Other"]}\n  series={[{ name: "Users", data: [275, 200, 187, 173, 90] }]}\n  maxY={275}\n  legend={false}\n/>\n<!-- radialSweep: "full" | "half" -->`,
            },
            {
                id: "sankey",
                title: "Sankey flow",
                code: `<Chart\n  type="sankey"\n  title="Traffic funnel"\n  description="Flow value scales each ribbon and node"\n  nodes={[\n    { name: "Organic Search", color: "var(--ui-success)" },\n    { name: "Paid Ads", color: "var(--ui-error)" },\n    { name: "Social Media", color: "var(--ui-chart-5, var(--ui-warning))" },\n    { name: "Landing Page", color: "var(--ui-info)" },\n    { name: "Product Page", color: "var(--ui-chart-2, var(--ui-info))" },\n    { name: "Cart", color: "var(--ui-warning)" },\n    { name: "Bounced", color: "var(--ui-error)" },\n    { name: "Purchase", color: "var(--ui-success)" },\n  ]}\n  links={[\n    { source: "Organic Search", target: "Landing Page", value: 42000 },\n    { source: "Paid Ads", target: "Landing Page", value: 28000 },\n    { source: "Social Media", target: "Landing Page", value: 18000 },\n    { source: "Landing Page", target: "Product Page", value: 52000 },\n    { source: "Landing Page", target: "Bounced", value: 36000 },\n    { source: "Product Page", target: "Cart", value: 31000 },\n    { source: "Product Page", target: "Bounced", value: 21000 },\n    { source: "Cart", target: "Purchase", value: 24000 },\n    { source: "Cart", target: "Bounced", value: 7000 },\n  ]}\n/>\n<!-- links reference nodes by name; node value = max(in, out) flow -->`,
            },
            {
                id: "no-grid",
                title: "Minimal (no grid, no legend)",
                code: `<Chart\n  type="line"\n  grid={false}\n  legend={false}\n  title="Ping"\n  labels={["12am", "6am", "12pm", "6pm"]}\n  series={[{ name: "ms", data: ${JSON.stringify(series({
                    seed: "chart:minimal:ping",
                    n: 4,
                    min: 18,
                    max: 70,
                    smooth: 0.8
                }))} ]}\n/>`,
            },
        ],
        props: [
            t("type", `'"bar" | "line" | "area" | "pie" | "donut" | "scatter" | "hbar"'`, `'"bar"'`, "Chart type."),
            t("labels", "string[]", "required", "Category labels (x axis; slice names for pie/donut)."),
            t("series", "ChartSeries[]", "required", "Data series: { name, data, color? }."),
            t("title", "string", "—", "Accessible title, rendered as figcaption."),
            t("description", "string", "—", "Supporting line under the title."),
            t("grid", "boolean", "true", "Grid lines on cartesian charts."),
            t("legend", "boolean", "true", "Legend under the chart."),
            t("innerRadius", "number", "58", "Donut hole percentage."),
            t("padAngle", "number", "0", "Gap between pie/donut slices, in degrees."),
            t("sliceRadius", "number", "0", "Corner rounding of pie/donut slices, in px."),
            t("sliceLabels", '"none" | "value" | "value-pct" | "label"', '"none"', "Slice callouts: values, value·pct at centroids, or names outside with leader lines."),
            t("sliceLabelFormat", "(value: number, pct: number) => string", "—", "Custom text for value-style slice callouts."),
            t("collapseBelow", "number", "0", "Merge pie/donut slices below this percent share into a trailing muted Other slice (hover lists the contents)."),
            t("radialSweep", '"full" | "half"', '"full"', "Ring sweep for radial charts \u2014 full circle or half-circle rainbow."),
            t("nodes", "SankeyNode[]", "—", "Sankey nodes: { name, color? }."),
            t("links", "SankeyLink[]", "—", "Sankey flows: { source, target, value, color? }."),
            t("maxY", "number", "data max", "Y-axis ceiling override (per-label totals max when stacked)."),
            t("rightMaxY", "number", "right-axis data max", "Secondary-axis ceiling in combo charts."),
            t("curve", 'boolean | "step" | "bump"', "false", "Smooth monotone curves (true), stepped plateaus (\"step\"), or slope-style S-curves (\"bump\") instead of straight segments."),
            t("stroke", '"solid" | "dashed" | "dotted"', '"solid"', "Line stroke style; a per-series stroke overrides it."),
            t("fill", '"solid" | "dots" | "hatch"', '"solid"', "Area fill paint — texture patterns tinted per series color; per-series fill (also \"none\") overrides."),
            t("gradient", "boolean", "false", "Gradient fills: area fades toward the baseline, bars per bar, pie/donut rim-strong radial fade."),
            t("ticks", "number", "36", "Tick count around the gauge arc (gauge only, clamped 8\u201380)."),
            t("gradientIntensity", "number", "1", "Multiplier on gradient fade strength (clamped 0.1\u20132.5) — applies to every gradient type."),
            t("stack", 'boolean | "percent"', "false", "Stack bar series (cumulative totals) or normalize each column to 100% with \"percent\"."),
            t("format", "(value: number) => string", "—", "Value formatting for ticks and the data table."),
            t("height", "number", "260", "Plot height in px."),
            ...common(false),
        ],
        faq: [
            {
                q: "Why no tooltips like library charts?",
                a: "Zero JS is the point. Every mark carries a native <title>, so browsers show the value on hover — and screen readers read the hidden data table regardless.",
            },
            {
                q: "How do I theme the colors?",
                a: "Series colors fall back to --ui-chart-1..6 (then --ui-primary and friends). Override the tokens globally, or pass color per series for explicit control.",
            },
            {
                q: "Is the data accessible?",
                a: "Three ways: the svg has role=img with a summary aria-label, a visually hidden table mirrors every value, and each mark has a <title>.",
            },
        ],
        since: "1.1.0",
        related: ["progress", "table", "card"],
    },
    {
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
        since: "1.0.0",
        related: ["button", "kbd", "code"],
    },
    {
        slug: "empty",
        name: "Empty",
        description: "Empty-state placeholder with media/title/description/footer slots.",
        overview:
            "Empty marks the 'no data' moment: an icon or illustration slot, a title, a description, and an action footer. Every part is optional — compose what the state needs.",
        importPath: "astro-ui",
        exportName: "Empty",
        category: "data-display",
        js: false,
        usage:
            `---\nimport { Empty, Button } from "astro-ui";\n---\n\n<Empty>\n  <span slot="media" aria-hidden="true">⌀</span>\n  <span slot="title">No results</span>\n  <span slot="description">Try adjusting your filters.</span>\n  <Button slot="footer" size="sm" variant="outline">Clear filters</Button>\n</Empty>`,
        features: [
            "Slot composition: media, title, description, footer",
            "3 sizes",
            "Centered, token-themed layout",
        ],
        a11y: [
            "`aria-label` support on the empty-state container",
            "Decorative media slot is `aria-hidden`",
        ],
        demos: [
            {
                id: "basic",
                title: "Basic",
                code: `<Empty>\n  <span slot="media" aria-hidden="true">⌀</span>\n  <span slot="title">No results</span>\n  <span slot="description">Try adjusting your filters.</span>\n  <Button slot="footer" size="sm" variant="outline">Clear filters</Button>\n</Empty>`,
            },
        ],
        props: [
            t("size", `"sm" | "md" | "lg"`, `"md"`, "Spacing/text scale."),
            t("ariaLabel", "string", "—", "Accessible name when context needs one."),
            ...common(false),
        ],
        slots: [
            {name: "media", description: "Icon or illustration above the text."},
            {name: "title", description: "State heading."},
            {name: "description", description: "Supporting text."},
            {name: "footer", description: "Action row (buttons)."},
        ],
        faq: [],
        since: "1.0.0",
        related: ["skeleton", "spinner", "card"],
    },
    {
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
        since: "1.0.0",
        related: ["clipboard", "tooltip", "button"],
    },
    {
        slug: "link",
        name: "Link",
        description: "Semantic anchor with external/rel smarts, icons, colors, and a disabled state.",
        overview:
            "Link renders a styled &lt;a&gt; with smart defaults: external or target=\"_blank\" links automatically get rel=\"noopener noreferrer\" (opt out with noRel or a custom rel). Disabled links drop their href and mute out. Icons are currentColor CSS masks — no JS, no icon dependency. Navigation hints like prefetch, replace, and viewTransition only render data-* attributes for your router or islands to adopt.",
        importPath: "astro-ui",
        exportName: "Link",
        category: "general",
        js: false,
        usage:
            `---\nimport { Link } from "astro-ui";\n---\n\n<Link href="https://astro.build" external icon="external">Astro</Link>`,
        features: [
            "Auto rel=\"noopener noreferrer\" for external/_blank",
            "7 colors, 3 sizes, optional underline",
            "arrow / chevron / external / download icons",
            "Disabled & loading states",
            "data-* navigation hooks — zero JS",
        ],
        a11y: [
            "Native anchor semantics; external links announce their target via `aria-label`",
            "`aria-current` for the active page; `aria-disabled` for disabled links",
            "`:focus-visible` ring",
        ],
        demos: [
            {
                id: "basic",
                title: "Basic",
                code: `<Link href="#">Default link</Link>\n<Link href="#" underline={false}>No underline</Link>`,
            },
            {
                id: "external",
                title: "External & icons",
                code: `<Link href="https://astro.build" external icon="external">Astro docs</Link>\n<Link href="#" icon="arrow">Next step</Link>`,
            },
            {
                id: "colors",
                title: "Colors & sizes",
                code: `<Link href="#" color="muted">Muted</Link>\n<Link href="#" color="destructive">Delete account</Link>\n<Link href="#" size="lg">Large</Link>`,
            },
            {
                id: "disabled",
                title: "Disabled / loading",
                code: `<Link disabled>Unavailable</Link>\n<Link loading loadingText="Opening…">Docs</Link>`,
            },
        ],
        props: [
            t("href", "string", "—", "Link URL. Omitted for non-interactive links."),
            t("external", "boolean", "false", "Marks the link external; defaults rel to \"noopener noreferrer\"."),
            t("target", "string", "—", "Browsing-context target (e.g. \"_blank\"). Implies the external rel default."),
            t("rel / noRel", "string / boolean", "—", "Custom rel, or omit rel entirely."),
            t("icon", `"arrow" | "chevron" | "external" | "download"`, "—", "CurrentColor icon before the text."),
            t("iconOnly", "boolean", "false", "Icon-only mode (provide ariaLabel)."),
            t("size", `"sm" | "md" | "lg"`, `"md"`, "Text scale."),
            t("underline", "boolean", "true", "Text underline."),
            t("color", `"primary" | "secondary" | "muted" | "destructive" | "success" | "warning" | "inherit"`, `"primary"`, "Text color."),
            t("block", "boolean", "false", "Fill the parent's inline width."),
            t("disabled", "boolean", "false", "Non-interactive: drops href and mutes."),
            t("loading", "boolean", "false", "Pending state; swaps content for loadingText."),
            t("loadingText", "string", "—", "Content while loading (falls back to the slot)."),
            t("ariaCurrent", `"page" | "step" | "location" | "date" | "true" | "false"`, "—", "aria-current marker."),
            t("download / hreflang / ping / referrerPolicy", "—", "—", "Forwarded verbatim to the anchor."),
            t("prefetch / prefetchOn / noPrefetch", "boolean / string / boolean", "—", "Render data-* hints for your router; no JS shipped."),
            t("replace / viewTransition", "boolean", "false", "More data-* navigation hints (replaceState, View Transitions)."),
            ...common(),
        ],
        slots: [
            {name: "default", description: "Link text or custom content."},
        ],
        faq: [
            {
                q: "Do prefetch, replace, or viewTransition do anything by themselves?",
                a: "No — deliberately. They render data-* attributes so a router, an Astro island, or a small script can adopt them. The component itself ships zero JavaScript.",
            },
        ],
        since: "1.0.0",
        related: ["button", "breadcrumb", "pagination"],
    },
    {
        slug: "pagination",
        name: "Pagination",
        description: "Zero-JS linked page navigation with truncation ellipsis.",
        overview:
            "Pagination renders fully server-rendered page links — every page is a real &lt;a&gt;, so it works without JS and is crawlable. Pages outside the sibling window collapse into ellipsis; prev/next disable at the ends.",
        importPath: "astro-ui",
        exportName: "Pagination",
        category: "navigation",
        js: false,
        usage:
            `---\nimport { Pagination } from "astro-ui";\n---\n\n<Pagination\n  page={2}\n  total={9}\n  pageHref={(p) => \`/blog?page=\${p}\`}\n/>`,
        features: [
            "Real links — crawlable, zero JS",
            "Ellipsis truncation with siblingCount control",
            "prev/next with end-disabling",
            "compact arrows-only mode",
            "2 variants, 3 sizes",
        ],
        a11y: [
            "Wrapped in `<nav aria-label>` as a navigable landmark",
            "Real `<a>` links — crawlable and keyboard-operable without JS",
            "`aria-current=\"page\"` announces the current page; page arrows are labeled buttons with `aria-hidden` glyphs",
        ],
        demos: [
            {
                id: "basic",
                title: "Basic",
                code: `<Pagination\n  page={4}\n  total={12}\n  pageHref={(p) => \`?page=\${p}\`}\n/>`,
            },
            {
                id: "compact",
                title: "Compact",
                code: `<Pagination compact page={2} total={5} pageHref={(p) => \`?p=\${p}\`} />`,
            },
        ],
        props: [
            t("page", "number", "required", "1-based current page."),
            t("total", "number", "required", "Total pages."),
            t("pageHref", "(page: number) => string", "required", "URL builder per page."),
            t("siblingCount", "number", "1", "Pages shown each side before truncation."),
            t("showPrevNext", "boolean", "true", "Prev/next controls."),
            t("compact", "boolean", "false", "Arrows-only mode."),
            t("variant", `"outline" | "ghost"`, `"outline"`, "Control style."),
            t("size", `"sm" | "md" | "lg"`, `"md"`, "Scale."),
            ...common(false),
        ],
        faq: [
            {
                q: "Why links instead of buttons?",
                a: "Pagination navigates — real anchors keep it functional without JS, shareable, and indexable. SPA-style paging can layer on top app-side.",
            },
        ],
        since: "1.0.0",
        related: ["breadcrumb", "button", "tabs"],
    },
    {
        slug: "rating",
        name: "Rating",
        description: "Rating input on native radios — icon presets, emoji, and satisfaction scales, zero JS.",
        overview:
            "Rating is a fieldset of radio inputs styled as rating icons: arrow keys, form submission, and per-step labels (\"3 out of 5\") come from the platform. Pick an icon preset (star, heart, circle, square, bar, thumb) or emoji faces, supply custom SVG paths, tint each step with colorScale for satisfaction scales, or highlight only the selected step with single for NPS-style questions. readonly renders a fractional display-only value.",
        importPath: "astro-ui",
        exportName: "Rating",
        category: "forms",
        js: false,
        usage:
            `---\nimport { Rating } from "astro-ui";\n---\n\n<Rating name="score" value={4} />\n<Rating name="mood" value={4} icon="emoji" />\n<Rating\n  name="satisfaction"\n  colorScale\n  showLabels\n  labels={["Very bad", "Bad", "OK", "Good", "Excellent"]}\n/>\n<Rating value={3.5} readonly />`,
        features: [
            "Native radios: keyboard + form value",
            "Per-step screen-reader labels",
            "Icon presets + custom SVG paths",
            "Emoji sentiment faces",
            "Satisfaction scale with per-step colors",
            "NPS-style single highlight",
            "readonly fractional display",
        ],
        a11y: [
            "Native `<fieldset>` of radios — arrow keys, exact selection, and a form value with zero script",
            "Each step has a real label (\"3 out of 5\" or per-step `labels`) so screen readers announce values",
            "`readonly` renders `role=\"img\"` with an inclusive aria-label",
            "`colorScale`/emoji states remain announced through their radio labels",
        ],
        demos: [
            {
                id: "basic",
                title: "Interactive & readonly",
                code: `<Rating name="score" value={4} />\n<Rating value={3.5} readonly />\n<Rating value={2} readonly size="lg" variant="primary" />`,
            },
            {
                id: "sizes",
                title: "Sizes & variants",
                code: `<Rating name="s-sm" value={3} size="sm" />\n<Rating name="s-md" value={3} size="md" />\n<Rating name="s-lg" value={3} size="lg" />\n<Rating name="s-primary" value={3} variant="primary" size="lg" />`,
            },
            {
                id: "icons",
                title: "Icon presets & custom",
                code: `<Rating name="heart" value={4} icon="heart" />\n<Rating name="thumb" value={4} icon="thumb" />\n<Rating name="circle" value={3} icon="circle" />\n<Rating name="square" value={3} icon="square" />\n<Rating name="bar" value={2} icon="bar" />\n\n{/* Custom icon: 16×16 SVG path data */}\n<Rating\n  name="custom"\n  value={3}\n  iconPath="M8 1l2.1 4.3 4.7.7-3.4 3.3.8 4.7L8 11.8 3.8 14l.8-4.7L1.2 6l4.7-.7z"\n/>`,
            },
            {
                id: "emoji",
                title: "Emoji sentiment",
                code: `<Rating name="mood" value={4} icon="emoji" ariaLabel="How do you feel?" />\n<Rating value={2} icon="emoji" readonly />\n<Rating value={5} icon="emoji" readonly size="lg" />`,
            },
            {
                id: "scale",
                title: "Satisfaction scale",
                code: `<Rating\n  name="satisfaction"\n  value={2}\n  colorScale\n  showLabels\n  labels={["Very dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very satisfied"]}\n  ariaLabel="Overall satisfaction"\n/>\n<Rating value={4} readonly colorScale showLabels\n  labels={["Very bad", "Bad", "OK", "Good", "Excellent"]} />`,
            },
            {
                id: "nps",
                title: "Single highlight (NPS-style)",
                code: `<Rating\n  name="nps"\n  value={9}\n  max={10}\n  single\n  variant="primary"\n  showLabels\n  labels={["Not likely", "Extremely likely"]}\n  ariaLabel="How likely will you recommend us?"\n/>`,
            },
        ],
        props: [
            t("name", "string", "—", "Field name (required for interactive)."),
            t("value", "number", "0", "Initial value (fractional for readonly)."),
            t("max", "number", "5", "Step count."),
            t("icon", `"star" | "heart" | "circle" | "square" | "bar" | "thumb" | "emoji"`, `"star"`, "Icon preset; emoji renders sentiment faces."),
            t("iconPath", "string", "—", "Custom icon: 16×16 SVG path data (overrides icon)."),
            t("icons", "string[]", "—", "Per-step custom icons: 16×16 SVG path data, index 0 = step 1."),
            t("colorScale", "boolean", "false", "Tint each step red → green (satisfaction ramp)."),
            t("single", "boolean", "false", "Highlight only the selected step (NPS-style)."),
            t("labels", "string[]", "—", "Per-step labels: sr text + visible labels row."),
            t("showLabels", "boolean", "false", "Render the labels row under the scale."),
            t("readonly", "boolean", "false", "Display-only mode."),
            t("variant", `"primary" | "warning"`, `"warning"`, "Fill color (ignored per-step when colorScale)."),
            t("size", `"sm" | "md" | "lg"`, `"md"`, "Icon scale."),
            t("disabled", "boolean", "false", "Disable the input."),
            t("ariaLabel", "string", `"Rating"`, "Group name."),
            ...common(false),
        ],
        faq: [
            {
                q: "Why radios and not a slider?",
                a: "Ratings are discrete choices — radios give exact selection, per-step labels, and platform keyboard behavior with zero script.",
            },
            {
                q: "Star scale or emotion scale?",
                a: "Use stars for familiar magnitude judgments. Use colorScale with labels for satisfaction (CSAT) — color + wording anchor each step. Use single with icon=\"emoji\" for quick sentiment pulses where magnitude between options is meaningless.",
            },
            {
                q: "How do custom icons work?",
                a: "Pass iconPath (one icon for every step) or icons (one path per step) with SVG path data drawn in a 16×16 viewBox. Paths render as-is — keep them simple, filled shapes.",
            },
        ],
        since: "1.0.0",
        related: ["slider", "switch", "progress"],
    },
    {
        slug: "slider",
        name: "Slider",
        description: "Native range input themed with tokens — drag, keys, form value.",
        overview:
            "Slider wraps &lt;input type=\"range\"&gt; with token styling: the platform owns dragging, arrow keys, Home/End, and form submission. Optional tick marks, a value readout, and a tooltip bubble that rides the thumb complete it.",
        importPath: "astro-ui",
        exportName: "Slider",
        category: "forms",
        js: false,
        usage:
            `---\nimport { Slider } from "astro-ui";\n---\n\n<Slider name="volume" label="Volume" value={70} showValue />\n<Slider name="temp" min={16} max={30} marks={["Cold", "Warm", "Hot"]} />`,
        features: [
            "Native range input — zero JS",
            "min/max/step via native attributes",
            "Marks/ticks row",
            "Value readout",
            "Thumb tooltip bubble (opt-in script, RTL-aware)",
            "5 color variants, 3 sizes",
        ],
        a11y: [
            "Native `<input type=\"range\">` — dragging, arrow keys, Home/End, and form value from the platform",
            "`aria-label`/`aria-labelledby` names the control",
            "Tooltip bubble is an `<output for>` — value changes are announced, and it's pointer-events: none",
        ],
        demos: [
            {
                id: "basic",
                title: "Basic",
                code: `<Slider name="volume" label="Volume" value={70} showValue />\n<Slider name="temp" label="Temperature" value={22} min={16} max={30} marks={["Cold", "Warm", "Hot"]} />\n<Slider name="disabled" label="Disabled" value={40} disabled />`,
            },
            {
                id: "tooltip",
                title: "Thumb tooltip",
                code: `{/* Bubble appears on hover, drag, and keyboard focus */}\n<Slider name="brightness" label="Brightness" value={65} tooltip />\n\n{/* Tooltip + live readout in the header */}\n<Slider name="temp" label="Temperature" value={22} min={16} max={30}\n  tooltip showValue />\n\n{/* Works with marks and non-zero minimums too */}\n<Slider name="zoom" label="Zoom" value={110} min={50} max={200} step={10}\n  tooltip marks={["50%", "125%", "200%"]} />`,
            },
        ],
        props: [
            t("name", "string", "—", "Field name."),
            t("value", "number", "50", "Initial value."),
            t("min / max", "number", "0 / 100", "Bounds."),
            t("step", "number", "1", "Increment."),
            t("marks", "string[]", "—", "Tick labels under the track."),
            t("showValue", "boolean", "false", "Value readout."),
            t("tooltip", "boolean", "false", "Value bubble above the thumb (hover/drag/focus)."),
            t("label", "string", "—", "Label above the track."),
            t("variant", `"primary" | "success" | "warning" | "error" | "info"`, `"primary"`, "Accent color."),
            t("size", `"sm" | "md" | "lg"`, `"md"`, "Scale."),
            t("disabled", "boolean", "false", "Disabled state."),
            ...common(false),
        ],
        faq: [],
        since: "1.0.0",
        related: ["rating", "progress", "input"],
    },
    {
        slug: "stepper",
        name: "Stepper",
        description: "Ordered progress indicator with complete/current/upcoming states.",
        overview:
            "Stepper visualizes multi-step progress as a semantic &lt;ol&gt;: numbered markers, ✓ for completed steps, and optional links per step. Connectors are CSS pseudo-elements; states are data-attributes.",
        importPath: "astro-ui",
        exportName: "Stepper",
        category: "navigation",
        js: false,
        usage:
            `---\nimport { Stepper } from "astro-ui";\n---\n\n<Stepper\n  ariaLabel="Checkout progress"\n  items={[\n    { label: "Cart", complete: true },\n    { label: "Shipping", current: true, description: "Address & delivery" },\n    { label: "Payment" },\n  ]}\n/>`,
        features: [
            "Semantic ol with aria-current=\"step\"",
            "complete/current/upcoming/disabled states",
            "Horizontal + vertical orientations",
            "Optional per-step links",
            "Dots or line connectors",
        ],
        a11y: [
            "Semantic `<ol>` — steps announced in order",
            "`aria-current=\"step\"` marks the active step; complete steps render a checkmark",
            "Per-step links remain real anchors",
        ],
        demos: [
            {
                id: "basic",
                title: "Basic",
                code: `<Stepper\n  items={[\n    { label: "Cart", complete: true },\n    { label: "Shipping", current: true, description: "Address & delivery" },\n    { label: "Payment" },\n  ]}\n/>`,
            },
            {
                id: "vertical",
                title: "Vertical",
                code: `<Stepper orientation="vertical"\n  items={[\n    { label: "Account", complete: true },\n    { label: "Profile", current: true },\n    { label: "Done" },\n  ]}\n/>`,
            },
        ],
        props: [
            t("items", "StepperItem[]", "[]", "Steps: { label, description?, complete?, current?, disabled?, href? }."),
            t("orientation", `"horizontal" | "vertical"`, `"horizontal"`, "Layout."),
            t("variant", `"line" | "dots"`, `"line"`, "Connector style."),
            t("size", `"sm" | "md" | "lg"`, `"md"`, "Scale."),
            t("ariaLabel", "string", `"Progress"`, "Group name."),
            ...common(false),
        ],
        faq: [],
        since: "1.0.0",
        related: ["pagination", "breadcrumb", "progress"],
    },
    {
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
            t("variant", `"primary" | "secondary" | "outline" | "soft" | "success" | "warning" | "error" | "info" | "muted"`, `"primary"`, "Color scheme."),
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
        since: "1.0.0",
        related: ["badge", "button", "kbd"],
    },
    {
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
    },
    {
        slug: "popover",
        name: "Popover",
        description: "Click-triggered anchored panel for interactive content.",
        overview:
            "Popover is a click-triggered anchored layer for interactive content — the trigger slot renders a real &lt;button&gt; (aria-expanded + aria-controls) and the content slot renders in an anchored panel below (or above) it. The scoped script toggles the panel, closes on Escape and outside-pointer, moves focus into the panel on open, and returns focus to the trigger on close. Positioning is CSS-anchored relative to the trigger wrapper (same technique as Tooltip), so the panel never needs viewport math.",
        importPath: "astro-ui",
        exportName: "Popover",
        category: "overlay",
        js: true,
        usage:
            `---\nimport { Popover } from "astro-ui";\n---\n\n<Popover id="share">\n  <span slot="trigger">Share</span>\n  <span slot="content">Share via <a href="…">link</a></span>\n</Popover>`,
        features: [
            "Real <button> trigger with aria-expanded / aria-controls",
            "Focus moves into the panel on open, returns to the trigger on close",
            "Closes on Escape and outside-pointer",
            "top / bottom placement; CSS-anchored — no viewport math",
        ],
        a11y: [
            "`aria-expanded` + `aria-controls` wire trigger to panel",
            "Panel is `role=\"dialog\"`; Escape closes and focus returns to the trigger",
        ],
        demos: [
            {
                id: "basic",
                title: "Basic",
                code: `<Popover id="share">\n  <span slot="trigger">Share</span>\n  <span slot="content">Share via <a href="#">link</a></span>\n</Popover>`,
            },
            {
                id: "top",
                title: "Top placement",
                code: `<Popover id="embed" placement="top">\n  <span slot="trigger">Embed</span>\n  <span slot="content">Copy the embed code…</span>\n</Popover>`,
            },
        ],
        props: [
            t("placement", `"top" | "bottom"`, `"bottom"`, "Anchor the panel above the trigger when there is no room below."),
            t("open", "boolean", "false", "Open on first render (SSR)."),
            t("disabled", "boolean", "false", "Disables the trigger button."),
            t("triggerLabel", "string", "—", "Accessible name for the trigger (required when trigger text is absent)."),
            t("id", "string", "—", "Recommended: stable prefix for trigger/panel ids."),
            ...common(false),
        ],
        slots: [
            {name: "trigger", description: "Trigger button content."},
            {name: "content", description: "Anchored panel content (role=\"dialog\")."},
        ],
        faq: [
            {
                q: "Popover or HoverCard?",
                a: "Popover = click-triggered, dismissible, focus-managed — use for interactive content (forms, links). HoverCard = pointer/focus preview — use for passive rich previews.",
            },
        ],
        since: "1.0.0",
        related: ["hover-card", "tooltip", "dialog"],
    },
    {
        slug: "hover-card",
        name: "HoverCard",
        description: "Rich preview card on hover and keyboard focus — CSS-only.",
        overview:
            "HoverCard is the CSS-only sibling of Popover: content that appears after a short delay when the user hovers or focuses the trigger. Unlike Tooltip the card stays interactive (links inside work) and carries an aria-label so assistive tech can announce it. Because it is pointer-driven, never put essential information only in a HoverCard — the trigger itself must carry the primary content.",
        importPath: "astro-ui",
        exportName: "HoverCard",
        category: "overlay",
        js: false,
        usage:
            `---\nimport { HoverCard } from "astro-ui";\n---\n\n<HoverCard ariaLabel="Profile preview">\n  <a href="/users/ada">@ada</a>\n  <div slot="content">\n    <strong>Ada Lovelace</strong>\n    <p>Notes on the Analytical Engine.</p>\n  </div>\n</HoverCard>`,
        features: [
            "Zero JS — pure CSS :hover / :focus-within with an open delay",
            "Interactive content: links inside the card work",
            "top / bottom placement; symmetric show/hide delay (no flicker)",
            "role=\"note\" + aria-label announced on focus",
        ],
        a11y: [
            "Hover content is a `role=\"note\"` region",
            "Triggerable from keyboard focus, not only pointer hover",
        ],
        demos: [
            {
                id: "basic",
                title: "Basic",
                code: `<HoverCard ariaLabel="Profile preview">\n  <a href="#">@ada</a>\n  <div slot="content"><strong>Ada Lovelace</strong><p>Preview copy…</p></div>\n</HoverCard>`,
            },
            {
                id: "top",
                title: "Top placement",
                code: `<HoverCard placement="top" ariaLabel="Profile preview">\n  <a href="#">@ada</a>\n  <div slot="content"><strong>Ada Lovelace</strong><p>Preview copy…</p></div>\n</HoverCard>`,
            },
        ],
        props: [
            t("placement", `"top" | "bottom"`, `"bottom"`, "Placement of the card relative to the trigger."),
            ...common(true),
        ],
        slots: [
            {name: "default", description: "The trigger content (focusable)."},
            {name: "content", description: "The preview card."},
        ],
        faq: [
            {
                q: "Can I put essential info in it?",
                a: "No — it's pointer-driven and dismissible. The trigger must carry the primary content; the card is an enhancement (same rule as Tooltip).",
            },
        ],
        since: "1.0.0",
        related: ["popover", "tooltip", "card"],
    },
];

export function bySlug(slug: string): ComponentMeta | undefined {
    return components.find((c) => c.slug === slug);
}
