import {type ComponentMeta, t, common} from "./types";

export const sidebar: ComponentMeta = {
    slug: "sidebar",
    name: "Sidebar",
    description: "Side navigation shell with header, grouped links, and a footer.",
    overview:
        "Sidebar is a `<nav>` landmark with three regions: a header for the product or workspace switcher, a scrollable body of SidebarGroup and SidebarItem children, and a footer for the user menu. Groups can be static or collapsible through native `<details>`, so a long navigation tree expands and collapses without any JavaScript. Collapsing the whole sidebar to an icon rail is application state, not a visual variant, and is left to the app.",
    importPath: "astro-ui",
    exportName: "Sidebar",
    category: "navigation",
    js: false,
    usage:
        `---\nimport { Sidebar, SidebarGroup, SidebarItem } from "astro-ui";\n---\n\n<Sidebar ariaLabel="Project">\n  <div slot="header">Acme</div>\n  <SidebarGroup label="Workspace">\n    <SidebarItem href="/overview" active>Overview</SidebarItem>\n    <SidebarItem href="/deploys" badge="3">Deploys</SidebarItem>\n  </SidebarGroup>\n  <div slot="footer">ada@acme.dev</div>\n</Sidebar>`,
    features: [
        "Attached (flush) or floating (stand-off) surfaces",
        "Optional sticky positioning and a scrollable body",
        "SidebarGroup: static groups or native `<details>` disclosures",
        "SidebarItem: links or action buttons, icons, badges, nested indent",
        "`active` maps to `aria-current=\"page\"` on links and buttons, not a class",
        "Header and footer slots for brand and user menus",
    ],
    a11y: [
        "Root is a `<nav>` landmark named by `ariaLabel`",
        "Groups use `role=\"group\"` with `aria-labelledby`, or `<summary>` when collapsible",
        "Current page is exposed with `aria-current=\"page\"` in both link and button rows",
        "Disabled items use `aria-disabled` and drop their `href`",
        "Collapsible groups are native `<details>` — no keyboard handler to get wrong",
    ],
    demos: [
        {
            id: "default",
            title: "Workspace sidebar",
            code: `<Sidebar ariaLabel="Project" sticky>\n  <div slot="header">\n    <Avatar size="sm">AC</Avatar>\n    <span>Acme Inc.</span>\n  </div>\n  <SidebarGroup label="Workspace">\n    <SidebarItem href="#overview" active>\n      <span slot="icon" aria-hidden="true">◎</span>\n      Overview\n    </SidebarItem>\n    <SidebarItem href="#deploys" badge="3">\n      <span slot="icon" aria-hidden="true">⇡</span>\n      Deploys\n    </SidebarItem>\n    <SidebarItem href="#settings">\n      <span slot="icon" aria-hidden="true">⚙</span>\n      Settings\n    </SidebarItem>\n  </SidebarGroup>\n  <div slot="footer">ada@acme.dev</div>\n</Sidebar>`,
        },
        {
            id: "collapsible",
            title: "Collapsible groups",
            code: `<Sidebar ariaLabel="Docs">\n  <SidebarGroup label="Getting started" collapsible open>\n    <SidebarItem href="#install">Install</SidebarItem>\n    <SidebarItem href="#tokens">Tokens</SidebarItem>\n  </SidebarGroup>\n  <SidebarGroup label="Components" collapsible>\n    <SidebarItem href="#button">Button</SidebarItem>\n    <SidebarItem href="#menu">Menu</SidebarItem>\n  </SidebarGroup>\n</Sidebar>`,
        },
        {
            id: "buttons",
            title: "Client-routed action rows",
            code: `<Sidebar ariaLabel="Views">\n  <SidebarGroup label="Views">\n    <SidebarItem active>\n      <span slot="icon" aria-hidden="true">◎</span>\n      Overview\n    </SidebarItem>\n    <SidebarItem>\n      <span slot="icon" aria-hidden="true">☰</span>\n      Members\n    </SidebarItem>\n    <SidebarItem disabled>Billing (soon)</SidebarItem>\n  </SidebarGroup>\n</Sidebar>`,
        },
        {
            id: "floating",
            title: "Floating with nested items",
            code: `<Sidebar variant="floating" ariaLabel="Files">\n  <div slot="header">Files</div>\n  <SidebarGroup label="Source">\n    <SidebarItem href="#src">src</SidebarItem>\n    <SidebarItem href="#components" nested>components</SidebarItem>\n    <SidebarItem href="#styles" nested>styles</SidebarItem>\n    <SidebarItem href="#locked" disabled>archive (read-only)</SidebarItem>\n  </SidebarGroup>\n</Sidebar>`,
        },
    ],
    props: [
        t("variant", `"attached" | "floating"`, `"attached"`, "Surface treatment."),
        t("sticky", "boolean", "false", "Stick to the viewport while content scrolls."),
        t("ariaLabel", "string", `"Sidebar"`, "Accessible name for the navigation landmark."),
        ...common(true),
    ],
    slots: [
        {name: "header", description: "Brand or workspace switcher."},
        {name: "(default)", description: "SidebarGroup and SidebarItem children."},
        {name: "footer", description: "User menu or account row."},
    ],
    faq: [
        {
            q: "How do I build the mobile drawer version?",
            a: "Render the same groups inside `Sheet side=\"left\"` and trigger it from a Navbar button. The sidebar itself stays hidden below your breakpoint; `Sheet` already owns the dialog focus trap.",
        },
        {
            q: "Can I collapse it to an icon rail?",
            a: "Not as a prop. Rail/collapsed state is application state: hide the labels yourself (a `data-collapsed` attribute on the nav plus your own CSS), and keep the accessible name on each item so the rail stays usable.",
        },
        {
            q: "What props does SidebarItem take?",
            a: "`href`, `active`, `disabled`, `badge`, `nested`, `class`, `id`, plus an `icon` slot. `active` renders `aria-current=\"page\"` on links and buttons alike.",
        },
        {
            q: "When do I use a button row instead of a link?",
            a: "When navigation happens client-side (a view switcher, a filter, a drawer toggle). Omit `href` and SidebarItem renders `<button type=\"button\">`, so keyboard activation and form-less behavior stay native.",
        },
    ],
    since: "0.1.0",
    new: true,
    related: ["navbar", "sheet", "tree"],
};
