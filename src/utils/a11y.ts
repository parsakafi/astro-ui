/**
 * Accessible-name resolution shared by components that expose the
 * camelCase `ariaLabel` convenience prop.
 *
 * Native HTML attributes must win: `<Button aria-label="Close">` should
 * behave exactly like `<Button ariaLabel="Close">`, and when both are
 * present the native spelling is the source of truth. Components that
 * render an explicit `aria-label` after `{...rest}` would otherwise
 * blank the native attribute, so they resolve it here instead.
 */
export function resolveAriaLabel(
  // `object` rather than `Record<string, unknown>`: Astro's generated
  // `Props` interfaces have known keys but no string index signature, so
  // a Record parameter rejects every `Astro.props` argument.
  props: object,
  fallback?: string,
): string | undefined {
  const values = props as Record<string, unknown>;
  const native = values["aria-label"];
  if (typeof native === "string" && native.length > 0) return native;
  const alias = values.ariaLabel;
  if (typeof alias === "string" && alias.length > 0) return alias;
  return fallback;
}
