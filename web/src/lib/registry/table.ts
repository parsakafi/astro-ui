import {type ComponentMeta, t, common} from "./types";

export const table: ComponentMeta = {
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
    since: "0.1.0",
    related: ["badge", "card", "progress"],
};
