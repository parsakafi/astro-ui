import {type ComponentMeta, t, common} from "./types";

export const avatar: ComponentMeta = {
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
        t("ring", `"primary" | "success" | "warning" | "destructive" | "info" | "background"`, "—", "Colored ring with background key line."),
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
    since: "0.1.0",
    related: ["badge", "tooltip", "card"],
};
