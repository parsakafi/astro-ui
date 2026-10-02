import {type ComponentMeta, t, common} from "./types";
import {series} from "../demo-data";
import {terrainRows} from "../chart-demo-data";

export const chart: ComponentMeta = {
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
        "18 types: bar, line, area, pie, donut, scatter, hbar, combo, gauge, radar, radial, sankey, waterfall, heatmap, cohort, terrain, map, boxplot",
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
            id: "gradient-bar",
            title: "Gradient bars",
            code: `<Chart\n  type="bar"\n  gradient\n  title="Deploys per week"\n  description="Each bar fades toward the baseline"\n  labels={["W1", "W2", "W3", "W4", "W5", "W6"]}\n  series={[{ name: "Deploys", data: [14, 22, 18, 27, 31, 24] }]}\n/>\n\n<!-- gradient works on bar, combo bars, pie and donut too -->`,
        },
        {
            id: "pill-bar",
            title: "Pill bars",
            code: `<Chart\n  type="bar"\n  barStyle="pill"\n  title="Pulse"\n  description="Thin rounded columns — an equalizer look"\n  labels={["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"]}\n  series={[{ name: "Load", data: [8,14,22,30,38,44,40,32,20,10,16,28,40,46,42,30,18,10,26,44] }]}\n  legend={false}\n/>\n<!-- barStyle="pill" renders one thin fully-rounded column per label;\n     colors follow the series (use one series per color band) -->`,
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
            id: "step-line",
            title: "Step line",
            code: `<Chart\n  type="line"\n  curve="step"\n  title="Desktop vs mobile"\n  description="Plateaus hold until the midpoint between values, then step"\n  labels={["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]}\n  series={[\n    { name: "Desktop", data: [420, 615, 545, 760, 480, 825, 570, 690, 515, 735, 610, 455] },\n    { name: "Mobile", data: [265, 430, 350, 505, 390, 545, 415, 585, 445, 615, 520, 380] },\n  ]}\n/>\n<!-- curve accepts true (smooth) or "step"; combine with per-series color freely -->`,
        },
        {
            id: "bump-line",
            title: "Bump curve",
            code: `<Chart\n  type="line"\n  curve="bump"\n  title="Rank changes"\n  description="Flat out of each point, S-curve into the next"\n  labels={["Jan", "Feb", "Mar", "Apr", "May", "Jun"]}\n  series={[\n    { name: "Desktop", data: [320, 180, 420, 260, 510, 380] },\n    { name: "Mobile", data: [180, 320, 240, 450, 290, 460] },\n  ]}\n/>\n<!-- curve: true | "step" | "bump" -->`,
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
            id: "line-gradient",
            title: "Line with bottom fade",
            code: `<Chart\n  type="line"\n  gradient\n  title="Portfolio value"\n  description="gradient on a line renders a soft wash under the stroke"\n  labels={["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}\n  series={[{ name: "NAV", data: [42,45,44,48,52,50,55,58,57,62,66,71], color: "var(--ui-success)" }]}\n  legend={false}\n/>\n<!-- gradient on a line: a gradient wash fills under the stroke and a\n     blurred mirror of the line adds a glow that hugs the curve -->`,
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
            id: "curved-area",
            title: "Curved area",
            code: `<Chart\n  type="area"\n  curve\n  title="Campaign traffic"\n  description="Smoothed area — the fill follows the monotone curve"\n  labels={["Jan", "Feb", "Mar", "Apr", "May", "Jun"]}\n  series={[{ name: "Sessions", data: [820, 1210, 940, 580, 1120, 990] }]}\n/>`,
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
            id: "gradient-intensity",
            title: "Gradient intensity",
            code: `<Chart\n  type="area"\n  curve\n  gradient\n  gradientIntensity={2}\n  title="Strong fade"\n  description="gradientIntensity scales every fade \u2014 1 is the default, 2 is saturated"\n  labels={["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]}\n  series={[{ name: "Requests", data: [4200, 5100, 4800, 6300, 7100, 3900, 3400] }]}\n/>\n\n<!-- try 0.5 for a whisper-subtle fill; works on area, bar, pie and donut fades -->`,
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
            id: "pie-petal",
            title: "Petal pie (rim-rounded slices)",
            code: `<Chart\n  type="pie"\n  padAngle={2}\n  sliceRadius={18}\n  sliceCorners="outer"\n  title="Vote share"\n  description="Only the rim corners round \u2014 the center tip stays sharp"\n  labels={["A", "B", "C", "D", "E", "F"]}\n  series={[{ name: "Votes", data: [28, 22, 18, 14, 10, 8] }]}\n  legend={false}\n/>\n<!-- sliceCorners: "all" (default, every corner) | "outer" (rim only) -->`,
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
            id: "gradient-donut",
            title: "Gradient donut",
            code: `<Chart\n  type="donut"\n  gradient\n  title="Storage by type"\n  description="Radial fade — strong at the rim, clear toward the center"\n  labels={["Images", "Video", "Docs", "Other"]}\n  series={[{ name: "GB", data: [42, 66, 21, 11] }]}\n  legend={false}\n/>`,
        },
        {
            id: "custom-colors",
            title: "Custom colors",
            code: `<Chart\n  type="donut"\n  title="Plan distribution"\n  labels={["Free", "Pro", "Team"]}\n  series={[\n    { name: "Plans", data: [640, 310, 90], color: "var(--ui-primary)" },\n  ]}\n  legend\n/>\n\n<!-- per-series colors: color prop or --ui-chart-1..6 tokens -->`,
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
            id: "gauge-block",
            title: "Block gauge",
            code: `<Chart\n  type="gauge"\n  gaugeStyle="block"\n  gaugeRamp={["var(--ui-success)", "var(--ui-info)", "var(--ui-primary)"]}\n  title="Total expenses"\n  labels={["Spent"]}\n  series={[{ name: "of $80k budget", data: [44220] }]}\n  maxY={80000}\n  format={(v) => \`$\${v.toLocaleString("en-US")}\`}\n  ticks={16}\n  legend={false}\n/>\n<!-- gaugeStyle="block" renders stadium segments; gaugeRamp interpolates\n     colors across the arc so blocks show position (start \u2192 end) -->`,
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
            id: "radar",
            title: "Radar",
            code: `<Chart\n  type="radar"\n  title="Skill coverage"\n  description="One axis per label, filled polygons per series"\n  labels={["JavaScript", "Python", "CSS", "Node.js", "React", "TypeScript"]}\n  series={[\n    { name: "Desktop", data: [78, 85, 90, 62, 74, 96] },\n    { name: "Mobile", data: [52, 58, 66, 54, 41, 60] },\n  ]}\n/>\n<!-- values scale against maxY (default: global data max); one axis per label -->`,
        },
        {
            id: "sankey",
            title: "Sankey flow",
            code: `<Chart\n  type="sankey"\n  title="Traffic funnel"\n  description="Flow value scales each ribbon and node"\n  nodes={[\n    { name: "Organic Search", color: "var(--ui-success)" },\n    { name: "Paid Ads", color: "var(--ui-error)" },\n    { name: "Social Media", color: "var(--ui-chart-5, var(--ui-warning))" },\n    { name: "Landing Page", color: "var(--ui-info)" },\n    { name: "Product Page", color: "var(--ui-chart-2, var(--ui-info))" },\n    { name: "Cart", color: "var(--ui-warning)" },\n    { name: "Bounced", color: "var(--ui-error)" },\n    { name: "Purchase", color: "var(--ui-success)" },\n  ]}\n  links={[\n    { source: "Organic Search", target: "Landing Page", value: 42000 },\n    { source: "Paid Ads", target: "Landing Page", value: 28000 },\n    { source: "Social Media", target: "Landing Page", value: 18000 },\n    { source: "Landing Page", target: "Product Page", value: 52000 },\n    { source: "Landing Page", target: "Bounced", value: 36000 },\n    { source: "Product Page", target: "Cart", value: 31000 },\n    { source: "Product Page", target: "Bounced", value: 21000 },\n    { source: "Cart", target: "Purchase", value: 24000 },\n    { source: "Cart", target: "Bounced", value: 7000 },\n  ]}\n/>\n<!-- links reference nodes by name; node value = max(in, out) flow -->`,            },
        {
            id: "waterfall",
            title: "Waterfall",
            code: `<Chart\n  type="waterfall"\n  title="Cash flow, 2026"\n  description="Signed deltas stack on a running total; totals anchor to zero"\n  labels={["Start", "Q1", "Q2", "Q3", "Q4", "End"]}\n  series={[{ name: "Cash", data: [120, 45, -30, 65, -20, 0] }]}\n  waterfallTotals={[0, 5]}\n  format={(v) => \`$\${v}k\`}\n/>\n<!-- waterfallTotals lists label indices that render as full total bars\n     and reset the running sum; increases/decreases color automatically -->`,
        },
        {
            id: "heatmap",
            title: "Heatmap",
            code: `<Chart\n  type="heatmap"\n  title="Commit activity"\n  description="Rows are days, columns are week offsets — darker means more commits"\n  height={220}\n  labels={["-5w", "-4w", "-3w", "-2w", "-1w", "This week"]}\n  series={[\n    { name: "Mon", data: [4, 9, 6, 12, 8, 11] },\n    { name: "Wed", data: [7, 5, 10, 8, 13, 9] },\n    { name: "Fri", data: [12, 14, 9, 15, 11, 16] },\n    { name: "Sat", data: [2, 1, 3, 0, 2, 5] },\n  ]}\n  heatmapRamp={["var(--ui-muted)", "var(--ui-chart-2, var(--ui-info))", "var(--ui-primary)"]}\n  heatmapLabels\n/>\n<!-- rows come from series names, columns from labels; heatmapRamp\n     interpolates from data min to max; heatmapLabels prints values -->`,
        },
        {
            id: "cohort",
            title: "Cohort retention",
            code: `<Chart\n  type="cohort"\n  title="Weekly signup retention"\n  description="Rows are signup cohorts, columns are weeks since signup — the empty tail hasn't been observed yet"\n  height={230}\n  labels={["Week 0", "Week 1", "Week 2", "Week 3", "Week 4"]}\n  series={[\n    { name: "Sep 1", data: [1, 0.41, 0.33, 0.29, 0.27] },\n    { name: "Sep 8", data: [1, 0.39, 0.31, 0.28, 0.26] },\n    { name: "Sep 15", data: [1, 0.44, 0.36, 0.33] },\n    { name: "Sep 22", data: [1, 0.47, 0.4] },\n  ]}\n  cohortSizes={[480, 510, 465, 530]}\n  cohortRamp={["var(--ui-muted)", "var(--ui-chart-2, var(--ui-info))", "var(--ui-primary)"]}\n/>\n<!-- cohortSizes gives each row its size sublabel; missing tail values\n     render empty (not-yet-observed); values ≤ 1 are fractions -->`,
        },
        {
            id: "map",
            title: "Map (choropleth)",
            code: `<Chart
  type="map"
  title="Regional adoption"
  description="Adoption intensity across operating regions"
  height={320}
  mapColumns={3}
  mapRegions={[
    { name: "Northwest", at: [0, 0], value: 55 },
    { name: "North Central", at: [1, 0], value: 96 },
    { name: "Southwest", at: [0, 1], value: 8 },
    { name: "South Central", at: [1, 1], value: 82 },
    { name: "East", points: "470 0 565 0 640 100 592 292 522 320 470 320", value: 45 },
  ]}
  mapRamp={["var(--ui-muted)", "var(--ui-chart-5, var(--ui-error))"]}
/>`,
        },
        {
            id: "map-country",
            title: "Map (country outline)",
            code: `<Chart
  type="map"
  title="Revenue by state"
  description="Neighboring polygons share boundary vertices, so regions touch with no gaps"
  height={400}
  mapRegions={countryRegions}
  mapRamp={["var(--ui-muted)", "var(--ui-chart-5, var(--ui-error))"]}
  zoomable
/>\n<!-- regions are freeform polygons; build them from a shared vertex
     table (each neighbor references the same vertices) so states are
     adjacent and share boundaries exactly. zoomable adds +/\u2212/Reset
     buttons, wheel-to-zoom and drag-to-pan (ships a small script) -->`,
        },
        {
            id: "terrain",
            title: "Terrain",
            code: `<Chart\n  type="terrain"\n  title="Signal terrain"\n  description="Peaks and valleys across a sampled field"\n  height={400}\n  labels={Array.from({ length: 24 }, (_, i) => String(i - 12))}\n  series={[\n${terrainRows.map((row, i) => `    { name: "d${i}", color: "var(--ui-error)", data: ${JSON.stringify(row)} },`).join("\n")}\n  ]}\n  terrainAxes={["X: Position", "Y: Elevation", "Z: Depth"]}\n  format={(v) => \`\${v}m\`}\n/>\n<!-- rows are depth (front to back), columns are position, values are\n     elevation; terrainMode="wire" | "dots" | "both" (default); the\n     highest/lowest points get black rings + callouts (rename them via\n     terrainCalloutLabels, hide via terrainCallouts={false}), a fixed\n     sample lattice gets accent rings, back rows fade and dash -->`,
        },
        {
            id: "terrain-bare",
            title: "Terrain (bare)",
            code: `<Chart\n  type="terrain"\n  title="Signal terrain, bare"\n  description="Dots banded by elevation \u2014 primary low, warning mid, error high"\n  height={320}\n  labels={Array.from({ length: 24 }, (_, i) => String(i - 12))}\n  series={[\n${terrainRows.map((row, i) => `    { name: "d${i}", color: "var(--ui-error)", data: ${JSON.stringify(row)} },`).join("\n")}\n  ]}\n  terrainMode="dots"\n  terrainCallouts={false}\n  terrainDotColors={["var(--ui-primary)", "var(--ui-warning)", "var(--ui-error)"]}\n  format={(v) => \`\${v}m\`}\n/>\n<!-- terrainCallouts={false} hides the highest/lowest titles, rail and\n     drops; terrainMode="dots" drops the mesh for a point-field look;\n     terrainDotColors bands the dots low/mid/high by elevation -->`,
        },
        {
            id: "boxplot",
            title: "Box plot",
            code: `<Chart\n  type="boxplot"\n  title="Response time by plan"\n  description="Whiskers span the adjacent values \u2014 dots past them are outliers"\n  labels={["Starter", "Growth", "Scale"]}\n  boxplots={[{ name: "Latency", boxes: [\n    { min: 42, q1: 68, median: 84, q3: 102, max: 128 },\n    { min: 58, q1: 92, median: 118, q3: 148, max: 178, outliers: [210, 226] },\n    { min: 96, q1: 148, median: 182, q3: 218, max: 262 },\n  ] }]}\n/>\n<!-- each box is { min, q1, median, q3, max, outliers? } aligned with\n     labels; a lone group colors one box per label, like pie slices -->`,
        },
        {
            id: "boxplot-raw",
            title: "Box plot from raw samples",
            code: `<Chart\n  type="boxplot"\n  title="Build minutes by runner"\n  description="Raw samples reduce to Tukey quartiles with 1.5\u00d7IQR fences at build time"\n  labels={["Linux", "macOS"]}\n  boxplots={[\n    { name: "Node 20", boxes: [[3.1, 3.4, 3.2, 3.8, 3.5, 3.3, 3.6, 4.1, 3.4, 5.9], [4.2, 4.5, 4.1, 4.8, 4.4]] },\n    { name: "Node 22", boxes: [[2.8, 3.0, 2.9, 3.2, 3.1, 2.7, 3.3, 3.0], [3.9, 4.0, 3.7, 4.2, 4.4, 4.1]] },\n  ]}\n/>\n<!-- pass raw observations instead of a summary; several groups render\n     side-by-side per label and color per group, like bars -->`,
        },
    ],
    props: [
        t("type", `'"bar" | "line" | "area" | "pie" | "donut" | "scatter" | "hbar" | "waterfall" | "heatmap" | "cohort" | "terrain" | "map" | "boxplot"'`, `'"bar"'`, "Chart type."),
        t("labels", "string[]", "required", "Category labels (x axis; slice names for pie/donut)."),
        t("series", "ChartSeries[]", "required", "Data series: { name, data, color? }."),
        t("title", "string", "—", "Accessible title, rendered as figcaption."),
        t("description", "string", "—", "Supporting line under the title."),
        t("grid", "boolean", "true", "Grid lines on cartesian charts."),
        t("legend", "boolean", "true", "Legend under the chart."),
        t("innerRadius", "number", "58", "Donut hole percentage."),
        t("padAngle", "number", "0", "Gap between pie/donut slices, in degrees."),
        t("sliceRadius", "number", "0", "Corner rounding of pie/donut slices, in px."),
        t("sliceCorners", '"all" | "outer"', '"all"', "Which slice corners sliceRadius rounds — every corner, or rim corners only with a sharp center tip (petal slices)."),
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
        t("barStyle", `"rect" | "pill"`, `"rect"`, "Rectangular or thin fully-rounded pill columns (bar)."),
        t("gaugeStyle", `"line" | "block"`, `"line"`, "Thin ticks or thick rounded block segments (gauge)."),
        t("gaugeRamp", "string[]", "\u2014", "2+ CSS colors interpolated across the gauge arc (block style)."),
        t("gradientIntensity", "number", "1", "Multiplier on gradient fade strength (clamped 0.1\u20132.5) — applies to every gradient type."),
        t("stack", 'boolean | "percent"', "false", "Stack bar series (cumulative totals) or normalize each column to 100% with \"percent\"."),
        t("waterfallTotals", "number[]", "—", "Waterfall: label indices that render as full total bars and reset the running sum."),
        t("waterfallColors", "[string, string, string]", "success / error / primary", "Waterfall colors for [increase, decrease, total] bars."),
        t("heatmapRamp", "string[]", "muted → primary", "2+ CSS colors the heatmap cells interpolate across (data min → max)."),
        t("heatmapLabels", "boolean", "false", "Print the formatted value inside each heatmap cell."),
        t("cohortSizes", "number[]", "—", "Cohort sizes; renders a users sublabel under each row name."),
        t("cohortValues", '"percent" | "value"', '"percent"', "Cohort cell text: share of cohort, or headcount via cohortSizes."),
        t("cohortMax", "number", "data max", "Ceiling for the cohort color ramp (fractions vs percents disambiguated automatically)."),
        t("cohortRamp", "string[]", "muted → primary", "2+ CSS colors the cohort cells interpolate across."),
        t("terrainMode", '"wire" | "dots" | "both"', '"both"', "Terrain rendering: mesh, bare point field, or both."),
        t("terrainAxes", "[string, string, string]", "—", "Terrain axis captions along the bottom (x, y, z)."),
        t("terrainCallouts", "boolean", "true", "Highest/lowest corner titles, rail and drops; false hides them."),
        t("terrainCalloutLabels", "[string, string]", "Highest / Lowest point", "Custom corner-title texts for the extreme-point callouts."),
        t("terrainDotColors", "[string, string, string]", "muted two-tone", "Dot colors for [low, middle, high] elevation bands (thirds of the range)."),
        t("mapRegions", "MapRegion[]", "—", "Map regions: { name, at: [col, row], span?, points?, value? } — rect tiles or freeform polygons."),
        t("mapRamp", "string[]", "muted → primary", "2+ CSS colors the map region fills interpolate across (data min → max)."),
        t("mapLabels", "boolean", "false", "Print the formatted value inside each map region."),
        t("mapColumns", "number", "rect extent", "Grid column count the tile cells divide — reserve columns for freeform polygon regions so rect tiles don't stretch."),
        t("boxplots", "BoxplotGroup[]", "—", "Boxplot groups: { name, color?, boxes } — one box per label, either a { min, q1, median, q3, max, outliers?, color? } summary or raw observations reduced to Tukey quartiles (1.5×IQR fences) at build time."),
        t("boxRadius", "number", "8", "Corner rounding of each boxplot box, in px."),
        t("boxplotOutliers", "boolean", "true", "Render outlier dots past the boxplot whiskers (still listed in tooltips and the data table when hidden)."),
        t("zoomable", "boolean", "false", "Map: zoom buttons (+/−/Reset), wheel-to-zoom toward the cursor and drag-to-pan. The only chart feature that ships JS."),
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
};
