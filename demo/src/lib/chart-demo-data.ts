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

/* --- Country-outline map: a stylized US built from a shared vertex
 *  lattice. Every neighboring region references the exact same
 *  vertices, so polygons touch edge-to-edge with zero gaps. Keys are
 *  grid coordinates (c{col}r{row}) plus named coastal bends; regions
 *  list vertex ids in winding order. --- */
const V: Record<string, [number, number]> = {
  // lattice: 9 columns x 6 rows
  c0r0: [20, 10], c1r0: [90, 10], c2r0: [160, 10], c3r0: [230, 10], c4r0: [300, 10],
  c5r0: [370, 10], c6r0: [440, 10], c7r0: [510, 10], c8r0: [575, 10],
  c0r1: [20, 80], c1r1: [90, 80], c2r1: [160, 80], c3r1: [230, 80], c4r1: [300, 80],
  c5r1: [370, 80], c6r1: [440, 80], c7r1: [510, 80], c8r1: [575, 80],
  c0r2: [20, 150], c1r2: [90, 150], c2r2: [160, 150], c3r2: [230, 150], c4r2: [300, 150],
  c5r2: [370, 150], c6r2: [440, 150], c7r2: [510, 150], c8r2: [575, 150],
  c0r3: [20, 220], c1r3: [90, 220], c2r3: [160, 220], c3r3: [230, 220], c4r3: [300, 220],
  c5r3: [370, 220], c6r3: [440, 220], c7r3: [510, 220], c8r3: [575, 220],
  c0r4: [20, 290], c1r4: [90, 290], c2r4: [160, 290], c3r4: [230, 290], c4r4: [300, 290],
  c5r4: [370, 290], c6r4: [440, 290], c7r4: [510, 290], c8r4: [575, 290],
  c0r5: [20, 360], c1r5: [90, 360], c2r5: [160, 360], c3r5: [230, 360], c4r5: [300, 360],
  c5r5: [370, 360], c6r5: [440, 360], c7r5: [510, 360], c8r5: [575, 360],
  // coastal bends
  me1: [618, 12], me2: [632, 48], me3: [600, 62],
  nj1: [610, 80], nj2: [614, 122],
  va1: [618, 152], va2: [606, 196],
  nc1: [622, 224], nc2: [610, 262],
  sc1: [598, 296],
  ga1: [592, 318], ga2: [556, 352],
  fl1: [576, 384], fl2: [586, 398], fl3: [566, 399], fl4: [538, 378], fl5: [518, 366],
  ca1: [60, 348], ca2: [20, 306],
  tx1: [322, 396], tx2: [258, 372], tx3: [224, 330],
};
export const poly = (...ids: (keyof typeof V)[]) => ids.map((id) => V[id].join(" ")).join(" ");

export const countryRegions = [
  // West
  {name: "Washington", points: poly("c0r0", "c1r0", "c1r1", "c0r1"), value: 68},
  {name: "Idaho", points: poly("c1r0", "c2r0", "c2r2", "c1r2"), value: 22},
  {name: "Oregon", points: poly("c0r1", "c1r1", "c1r2", "c0r2"), value: 42},
  {name: "California", points: poly("c0r2", "c1r2", "c1r4", "ca1", "ca2"), value: 94},
  {name: "Nevada", points: poly("c1r2", "c2r2", "c2r3", "c1r3"), value: 36},
  // Mountain West
  {name: "Montana", points: poly("c2r0", "c4r0", "c4r1", "c2r1"), value: 18},
  {name: "Wyoming", points: poly("c2r1", "c4r1", "c4r2", "c2r2"), value: 14},
  {name: "Utah", points: poly("c2r2", "c3r2", "c3r3", "c2r3"), value: 28},
  {name: "Colorado", points: poly("c3r2", "c4r2", "c4r3", "c3r3"), value: 52},
  {name: "Arizona", points: poly("c1r3", "c2r3", "c2r4", "c1r4"), value: 46},
  {name: "New Mexico", points: poly("c2r3", "c3r3", "c3r4", "c2r4"), value: 24},
  // Plains
  {name: "North Dakota", points: poly("c4r0", "c5r0", "c5r1", "c4r1"), value: 12},
  {name: "South Dakota", points: poly("c4r1", "c5r1", "c5r2", "c4r2"), value: 16},
  {name: "Nebraska", points: poly("c4r2", "c5r2", "c5r3", "c4r3"), value: 20},
  {name: "Kansas", points: poly("c3r3", "c5r3", "c5r4", "c3r4"), value: 26},
  {name: "Texas", points: poly("c3r4", "c5r4", "c5r5", "tx1", "tx2", "tx3"), value: 84},
  // Midwest
  {name: "Minnesota", points: poly("c5r0", "c6r0", "c6r1", "c5r1"), value: 24},
  {name: "Iowa", points: poly("c5r1", "c6r1", "c6r2", "c5r2"), value: 22},
  {name: "Missouri", points: poly("c5r2", "c6r2", "c6r3", "c5r3"), value: 32},
  {name: "Wisconsin", points: poly("c6r0", "c7r0", "c7r1", "c6r1"), value: 26},
  {name: "Arkansas", points: poly("c5r3", "c6r3", "c6r4", "c5r4"), value: 30},
  {name: "Louisiana", points: poly("c5r4", "c6r4", "c6r5", "c5r5"), value: 28},
  // East
  {name: "Ohio", points: poly("c6r1", "c7r1", "c7r2", "c6r2"), value: 56},
  {name: "Kentucky", points: poly("c6r2", "c7r2", "c7r3", "c6r3"), value: 36},
  {name: "Tennessee", points: poly("c6r3", "c8r3", "c8r4", "c6r4"), value: 34},
  {name: "Mississippi", points: poly("c6r4", "c7r4", "c7r5", "c6r5"), value: 22},
  {name: "Alabama", points: poly("c7r4", "c8r4", "c8r5", "c7r5"), value: 30},
  // Northeast
  {name: "New York", points: poly("c7r0", "c8r0", "c8r1", "c7r1"), value: 74},
  {name: "Maine", points: poly("c8r0", "me1", "me2", "me3", "c8r1"), value: 18},
  {name: "Pennsylvania", points: poly("c7r1", "c8r1", "c8r2", "c7r2"), value: 62},
  {name: "New Jersey", points: poly("c8r1", "nj1", "nj2", "c8r2"), value: 70},
  {name: "West Virginia", points: poly("c7r2", "c8r2", "c8r3", "c7r3"), value: 20},
  {name: "Virginia", points: poly("c8r2", "va1", "va2", "c8r3"), value: 44},
  // Southeast coast
  {name: "North Carolina", points: poly("c8r3", "nc1", "nc2", "c8r4"), value: 46},
  {name: "South Carolina", points: poly("c8r4", "nc2", "sc1", "ga1"), value: 32},
  {name: "Georgia", points: poly("c7r4", "c8r4", "ga1", "ga2", "c7r5"), value: 48},
  {name: "Florida", points: poly("c7r5", "ga2", "fl1", "fl2", "fl3", "fl4", "fl5"), value: 66},
];
