import {defineConfig} from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  // The old release-notes page merged into the changelog; keep inbound
  // links working instead of 404ing them.
  redirects: {
    "/docs/releases/": "/docs/changelog/",
  },
});
