/**
 * `cn` — tiny class-name merger (zero dependencies).
 *
 * Joins truthy class names and `{ [className]: condition }` maps.
 * Unlike `tailwind-merge`, it does not resolve conflicting Tailwind
 * utilities — the component's own variant classes always come first,
 * so a consumer's `class` prop can override them with normal CSS
 * specificity / source order in their own stylesheet or Tailwind layer.
 *
 * Keep this dependency-free: it ships to every consumer.
 */

type ClassValue =
  | string
  | false
  | null
  | undefined
  | Record<string, boolean | undefined>;

export function cn(...inputs: ClassValue[]): string {
  const out: string[] = [];
  for (const input of inputs) {
    if (!input) continue;
    if (typeof input === "string") {
      if (input) out.push(input);
    } else {
      for (const key of Object.keys(input)) {
        if (input[key]) out.push(key);
      }
    }
  }
  return out.join(" ");
}
