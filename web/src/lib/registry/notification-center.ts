import {type ComponentMeta, t, common} from "./types";

export const notificationCenter: ComponentMeta = {
    slug: "notification-center",
    name: "NotificationCenter",
    description: "Bell trigger with an unread badge and a grouped notification panel.",
    overview:
        "NotificationCenter owns the bell, the unread count, and the panel that opens from it. Groups keep rows scannable by day or source, NotificationItem renders the row (optionally as a link), and the badge stays decorative because the count is already part of the trigger's accessible name. It is a disclosure rather than a modal: Escape and outside clicks close it, and focus returns to the bell.",
    importPath: "@parsakafi/astro-ui",
    exportName: "NotificationCenter",
    category: "feedback",
    js: true,
    usage:
        `---\nimport {\n  NotificationCenter,\n  NotificationGroup,\n  NotificationItem,\n} from "@parsakafi/astro-ui";\n---\n\n<NotificationCenter count={2} title="Notifications">\n  <NotificationGroup label="Today">\n    <NotificationItem unread title="Deploy finished" time="2m ago" href="/deploys/412">\n      Production build 412 is live.\n    </NotificationItem>\n    <NotificationItem title="Ada left a comment" time="1h ago">\n      On the sidebar PR.\n    </NotificationItem>\n  </NotificationGroup>\n</NotificationCenter>`,
    features: [
        "Unread badge with 99+ cap, mirrored into the trigger's accessible name",
        "Grouped sections with day/source headings",
        "Rows as links or static cards, with media, description, and timestamp",
        "Empty-state slot for the zero-notification case",
        "Header action slot (mark all read, settings)",
        "Escape, outside click, and focus return handled",
    ],
    a11y: [
        "Trigger is a button with `aria-haspopup=\"dialog\"` and `aria-expanded`",
        "Panel is a named `role=\"dialog\"`, focused on open",
        "Groups are `<section>` + `<h3>` + `<ul>`, so counts are announced",
        "Unread rows announce \"Unread\" in text, not colour alone",
        "Badge number is `aria-hidden` to avoid double announcement",
    ],
    demos: [
        {
            id: "inbox",
            title: "Notification panel",
            code: `<NotificationCenter\n  count={2}\n  title="Notifications"\n  placement="bottom-start"\n  id="dm-notif-inbox"\n>\n  <NotificationGroup label="Today">\n    <NotificationItem unread title="Deploy finished" time="2m ago" href="/deploys/412">\n      Production build 412 is live.\n    </NotificationItem>\n    <NotificationItem unread title="Ada left a comment" time="1h ago">\n      On the sidebar pull request.\n    </NotificationItem>\n  </NotificationGroup>\n  <NotificationGroup label="Yesterday">\n    <NotificationItem title="Weekly digest" time="Yesterday" href="/digest">\n      12 components shipped, 3 blocks updated.\n    </NotificationItem>\n  </NotificationGroup>\n</NotificationCenter>`,
        },
        {
            id: "actions",
            title: "Header action and footer",
            code: `<NotificationCenter\n  count={12}\n  title="Activity"\n  placement="bottom-start"\n  id="dm-notif-actions"\n>\n  <Menu slot="actions" triggerLabel="Notification settings" bareTrigger>\n    <MenuItem>Mark all read</MenuItem>\n    <MenuItem>Mute for 1 hour</MenuItem>\n    <MenuSeparator/>\n    <MenuItem>Notification settings</MenuItem>\n  </Menu>\n  <NotificationGroup label="Today">\n    <NotificationItem unread title="Build 412 passed" time="3m ago"/>\n  </NotificationGroup>\n  <a slot="footer" href="/notifications">View all notifications</a>\n</NotificationCenter>`,
        },
        {
            id: "empty",
            title: "Empty state",
            code: `<NotificationCenter\n  count={0}\n  title="Notifications"\n  placement="bottom-start"\n  id="dm-notif-empty"\n>\n  <Empty size="sm">\n    <span slot="media" aria-hidden="true">🔔</span>\n    <span slot="title">You are all caught up</span>\n    <span slot="description">New activity will show up here.</span>\n  </Empty>\n</NotificationCenter>`,
        },
    ],
    props: [
        t("count", "number", "0", "Unread count; 0 hides the badge."),
        t("title", "string", `"Notifications"`, "Panel heading."),
        t("ariaLabel", "string", `"Notifications"`, "Accessible name for the trigger."),
        t("placement", `"bottom-end" | "bottom-start"`, `"bottom-end"`, "Panel alignment."),
        t("open", "boolean", "false", "Render the panel open on first paint."),
        ...common(true),
    ],
    slots: [
        {name: "trigger", description: "Custom bell content (defaults to 🔔)."},
        {name: "(default)", description: "NotificationGroup / NotificationItem children."},
        {name: "actions", description: "Header actions (Menu, button)."},
        {name: "footer", description: "Footer link or action."},
    ],
    faq: [
        {
            q: "What props does NotificationItem take?",
            a: "`title`, `time`, `datetime`, `unread`, `href`, `class`, `id`, plus `media` and `description` slots. With `href` the whole row becomes one link.",
        },
        {
            q: "How do I mark notifications read?",
            a: "The component is presentational: render `unread` from your own state and update it when the user acts. Because `count` is a prop, re-render (or update the trigger label) when the unread total changes.",
        },
        {
            q: "Can it open as a side panel instead?",
            a: "Yes — compose the same groups inside `Sheet side=\"right\"` and use NotificationCenter only for the bell and count. The inner markup is the same.",
        },
    ],
    since: "0.1.0",
    new: true,
    related: ["menu", "sheet", "empty"],
};
