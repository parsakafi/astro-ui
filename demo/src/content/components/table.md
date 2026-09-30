---
slug: "table"
name: "Table"
description: >-
  Semantic table with bordered/striped styles, sizes, and scroll.
category: data-display
importPath: "astro-ui"
exportName: "Table"
js: false
since: "1.0.0"
isNew: false
related: ["badge", "card", "progress"]
features:
  - "Named slots: head / default body / footer"
  - "bordered + striped combinations"
  - "4 density sizes"
  - "Column alignment control"
  - "scrollable for wide tables"
  - "caption prop = accessible name"
a11y:
  - "Semantic `<table>` — headers and cells associated by the platform"
  - "Scroll wrapper is `role=\"region\"` with `aria-label` and `aria-describedby`"
usage: |-
  ---
  import { Table } from "astro-ui";
  ---
  
  <Table caption="Team members">
    <tr slot="head"><th class="aui-table__head-cell">Name</th></tr>
    <tr><td class="aui-table__cell">Ada</td></tr>
  </Table>
demoIds: ["basic", "bordered-striped"]
props:
  - name: "caption"
    type: "string"
    def: "—"
    description: "Renders as <caption>."
  - name: "bordered"
    type: "boolean"
    def: "false"
    description: "Visible borders + rounded corners."
  - name: "striped"
    type: "boolean"
    def: "false"
    description: "Zebra rows."
  - name: "align"
    type: "\"start\" | \"center\" | \"end\""
    def: "\"start\""
    description: "Column alignment."
  - name: "scrollable"
    type: "boolean"
    def: "false"
    description: "Horizontal scroll wrapper."
  - name: "size"
    type: "\"xs\" | \"sm\" | \"md\" | \"lg\""
    def: "\"md\""
    description: "Row density."
  - name: "class"
    type: "string"
    def: "—"
    description: "Merged via cn(); Tailwind classes welcome."
  - name: "id"
    type: "string"
    def: "—"
    description: "Element id."
  - name: "ariaLabel"
    type: "string"
    def: "—"
    description: "Accessible name."
slots:
  - name: "head"
    description: "<tr> with <th> cells (use aui-table__head-cell)."
  - name: "default"
    description: "Body rows."
  - name: "footer"
    description: "Footer/summary rows."
faq:
  - q: "Why do cells need classes?"
    a: "The wrapper scopes styles; cells belong to your markup, so applying aui-table__cell / aui-table__head-cell opts them into the theme."
---

Table styles a real &lt;table&gt; — head/body/footer compose through slots so you keep full control of rows and cells. Bordered, striped, aligned, and scrollable modes; caption prop for the accessible name.
