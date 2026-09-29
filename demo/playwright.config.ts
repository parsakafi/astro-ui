import {defineConfig, devices} from "@playwright/test";

/**
 * E2E scaffold for future interactive components (Dialog, Tabs, …).
 * Enable with:  npm i -D @playwright/test && npx playwright install
 * Then run:     npx playwright test
 * Excluded from `astro check` (see tsconfig.json) until the dep is installed.
 */
export default defineConfig({
    testDir: "./tests/e2e",
    fullyParallel: true,
    use: {baseURL: "http://localhost:4321", trace: "on-first-retry"},
    projects: [
        {name: "chromium", use: {...devices["Desktop Chrome"]}},
        {name: "firefox", use: {...devices["Desktop Firefox"]}},
        {name: "webkit", use: {...devices["Desktop Safari"]}},
    ],
    webServer: {
        command: "npm run preview -- --port 4321",
        port: 4321,
        reuseExistingServer: !process.env.CI,
    },
});
