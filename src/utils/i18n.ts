/**
 * Merge user-supplied UI strings over a component's English defaults.
 *
 * `labels` props are partial by design: a consumer translating a single
 * control should not have to restate every string. Explicit `undefined`
 * values are ignored so JSX/Astro spreads cannot blank a default.
 */
export function resolveLabels<T extends Record<string, string>>(
  defaults: T,
  overrides?: Partial<Record<keyof T, string | undefined>>,
): T {
  const resolved = { ...defaults };
  if (overrides) {
    for (const key of Object.keys(defaults) as (keyof T)[]) {
      const value = overrides[key];
      if (typeof value === "string" && value.length > 0)
        resolved[key] = value as T[keyof T];
    }
  }
  return resolved;
}
