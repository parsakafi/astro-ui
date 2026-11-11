import {defineConfig, devices} from "@playwright/test";

/**
 * E2E + visual regression for interactive components and the docs site.
 * Setup:  npx playwright install chromium
 * Run:    npm run test:e2e
 * Visual: npm run test:visual (update baselines with test:visual:update)
 * Excluded from `astro check` (see tsconfig.json).
 */
export default defineConfig({
    testDir: "./tests/e2e",
    fullyParallel: true,
    use: {baseURL: "http://localhost:4325", trace: "on-first-retry"},
    projects: [
        {name: "chromium", use: {...devices["Desktop Chrome"]}},
        {name: "firefox", use: {...devices["Desktop Firefox"]}},
        {name: "webkit", use: {...devices["Desktop Safari"]}},
    ],
    webServer: {
        // Dedicated port: a developer dev server on 4321 (which injects
        // Astro's dev toolbar) must never be reused for these runs.
        command: "npm run preview -- --port 4325",
        port: 4325,
        reuseExistingServer: !process.env.CI,
    },
});
