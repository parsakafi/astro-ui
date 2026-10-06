import {type ComponentMeta, t} from "./types";

export const toast: ComponentMeta = {
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
};
