// ESLint handles what Biome cannot: .astro template markup.
// Biome remains the authority for formatting and frontmatter TS/JS
// (see biome.json) — so no typescript-eslint rule presets here.
import astro from "eslint-plugin-astro";
import tsPlugin from "@typescript-eslint/eslint-plugin";

export default [
  {
    ignores: ["dist/**", "node_modules/**", ".astro/**"],
  },
  // Astro parser + astro/* template rules for **/*.astro
  ...astro.configs["flat/recommended"],
  // jsx-a11y rules applied to Astro template markup (a11y is the point)
  ...astro.configs["flat/jsx-a11y-recommended"],
  {
    // TS-aware unused-var check for frontmatter. The astro parser resolves
    // references inside the template, so unlike Biome's frontmatter-only
    // view this has no false positives — which is why Biome's equivalent
    // rule is disabled for .astro files.
    files: ["**/*.astro", "**/*.astro/*.ts"],
    plugins: {"@typescript-eslint": tsPlugin},
    rules: {
      "@typescript-eslint/no-unused-vars": "error",
      // Focusable scroll/composite containers (scroll areas, carousel
      // stages, hover-card surfaces) are legitimately tabbable even
      // though their roles are not "interactive".
      "astro/jsx-a11y/no-noninteractive-tabindex": [
        "error",
        {roles: ["region", "group", "note"]},
      ],
    },
  },
];
