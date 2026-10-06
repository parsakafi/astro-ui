/**
 * Seeded demo-data helper for Chart demos.
 *
 * Demo numbers must not be hand-tuned copies of each other, and they
 * must not change between builds. A tiny deterministic PRNG (mulberry32)
 * gives both: the same seed always yields the same series, while
 * different seeds/parameters keep every demo visually distinct.
 *
 * All functions are pure and run at build time only (astro-ui itself
 * ships no demo code and stays zero-JS).
 */

/** mulberry32 — small, fast, deterministic PRNG. */
function prng(seed: number): () => number {
    let a = seed >>> 0;
    return () => {
        a |= 0;
        a = (a + 0x6d2b79f5) | 0;
        let t = Math.imul(a ^ (a >>> 15), 1 | a);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

/** Hash a string to a 32-bit seed so call sites can use readable names. */
export function seedOf(name: string): number {
    let h = 2166136261 >>> 0;
    for (let i = 0; i < name.length; i++) {
        h ^= name.charCodeAt(i);
        h = Math.imul(h, 16777619);
    }
    return h >>> 0;
}

export interface SeriesOptions {
    /** Deterministic seed — same seed + params ⇒ identical series. */
    seed: string;
    /** Number of values. */
    n: number;
    /** Typical magnitude (values stay roughly within [min, max]). */
    min?: number;
    max?: number;
    /** Round to integers (default) or keep one decimal. */
    decimals?: 0 | 1;
    /** Correlation with the previous value, 0–1. 0 = independent noise,
     *  0.7 = smooth wandering (nice for lines), 1 = flat line. */
    smooth?: number;
    /** Bias the walk upward or downward over the series (-1..1). */
    trend?: number;
}

/**
 * Generate one reproducible random series.
 *
 * A mean-reverting random walk with optional trend — produces
 * realistic wiggly data instead of sawtooth noise. `smooth` controls
 * how tightly values hug the center (higher = gentler hills); `trend`
 * adds a per-step drift toward the min/max.
 */
export function series(opts: SeriesOptions): number[] {
    const {seed, n, min = 0, max = 100, decimals = 0, smooth = 0.35, trend = 0} = opts;
    const rand = prng(seedOf(seed));
    const span = max - min;
    const center = min + span / 2;
    const reversion = 0.04 + smooth * 0.16;
    const out: number[] = [];
    let v = min + rand() * span;
    for (let i = 0; i < n; i++) {
        const noise = (rand() - 0.5) * span * 0.55 * (1 - smooth * 0.5) + (rand() < 0.25 ? (rand() - 0.5) * span * 0.3 : 0);
        v += noise + trend * span * 0.05;
        v += (center - v) * reversion;
        v = Math.max(min, Math.min(max, v));
        out.push(decimals ? Math.round(v * 10) / 10 : Math.round(v));
    }
    return out;
}
