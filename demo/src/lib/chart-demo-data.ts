/**
 * Chart demo datasets — generated, not hand-typed.
 *
 * Every array comes from the seeded helper in demo-data.ts, so the
 * numbers are varied across demos yet byte-identical on every build
 * (the code panels and live previews always agree). Need a different
 * shape? Change the seed or parameters here — both the rendered chart
 * and the copy-paste code update together.
 */
import {series} from "./demo-data";

/** Bar — Revenue growth (jagged monthly revenue). */
export const barRevenue = series({seed: "chart:bar:revenue", n: 6, min: 120, max: 420});

/** Grouped bars — Desktop vs mobile (crossing series). */
export const groupedDesktop = series({seed: "chart:grouped:desktop", n: 4, min: 120, max: 460});
export const groupedMobile = series({seed: "chart:grouped:mobile", n: 4, min: 80, max: 340});

/** Line — Active users, two interleaved weeks (smooth wanderers). */
export const lineThisWeek = series({seed: "chart:line:thisweek", n: 7, min: 320, max: 820, smooth: 0.7});
export const lineLastWeek = series({seed: "chart:line:lastweek", n: 7, min: 300, max: 720, smooth: 0.7});

/** Dashed & dotted — forecast + actual/target/stretch mix. */
export const forecast = series({seed: "chart:dashed:forecast", n: 5, min: 240, max: 780, smooth: 0.2});
export const strokeActual = series({seed: "chart:stroke:actual", n: 4, min: 420, max: 680, smooth: 0.6});
export const strokeTarget = series({seed: "chart:stroke:target", n: 4, min: 380, max: 560, smooth: 0.7});
export const strokeStretch = series({seed: "chart:stroke:stretch", n: 4, min: 260, max: 420, smooth: 0.7});

/** Curved line — deep dips so monotone smoothing shows its shape. */
export const visitors = series({seed: "chart:curve:visitor", n: 6, min: 60, max: 400, smooth: 0.5});

/** Area — quarterly signups. */
export const signups = series({seed: "chart:area:signups", n: 4, min: 900, max: 3200, smooth: 0.6});

/** Scatter — two teams with alternating extremes. */
export const scatterA = series({seed: "chart:scatter:a", n: 5, min: 1, max: 10, smooth: 0.1});
export const scatterB = series({seed: "chart:scatter:b", n: 5, min: 1, max: 10, smooth: 0.1});

/** hbar — Top pages, descending-ish view counts. */
export const pageViews = series({seed: "chart:hbar:views", n: 4, min: 900, max: 5600, trend: -0.35});

/** Minimal — ping times, tight band. */
export const ping = series({seed: "chart:minimal:ping", n: 4, min: 18, max: 70, smooth: 0.8});

/** Terrain — a seeded elevation field: rows = depth bands (front →
 *  back), cols = positions. A Gaussian ridge plus seeded noise gives
 *  peaks-and-valleys terrain with one obvious summit. */
export function terrainGrid(seed: string, rows: number, cols: number) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  const rand = () => {
    h = (h * 1664525 + 1013904223) >>> 0;
    return h / 4294967296;
  };
  return Array.from({length: rows}, (_, r) => {
    const depth = r / Math.max(rows - 1, 1);
    const band = Math.exp(-((depth - 0.45) ** 2) / 0.08);
    return Array.from({length: cols}, (_, c) => {
      const pos = c / Math.max(cols - 1, 1);
      const ridge = Math.exp(-((pos - 0.45) ** 2) / 0.09) * 46;
      const swell = Math.exp(-((pos - 0.85) ** 2) / 0.06) * 16 * (1 - depth);
      return Math.round(4 + band * ridge + swell + rand() * 3);
    });
  });
}
export const terrainRows = terrainGrid("chart:terrain:signal", 12, 24);
