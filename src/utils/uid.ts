let n = 0;

/**
 * Unique-per-render id base for components that generate internal ids
 * (tab/panel wiring, trigger/panel aria references). Module-level counter
 * so every component instance on a page gets distinct ids even without an
 * explicit `id` prop — duplicate fallback ids would make aria-controls /
 * label-for resolve to the first instance in the DOM.
 */
export const uid = (prefix: string): string => `${prefix}-${++n}`;
