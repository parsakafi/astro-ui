import {expect, test} from "@playwright/test";

/**
 * Visual regression: the component gallery must render identically in
 * both themes. Baselines are Chromium-only — font rasterization differs
 * across engines, so the other projects skip.
 */
const THEMES = ["light", "dark"] as const;

for (const theme of THEMES) {
    test(`component gallery — ${theme}`, async ({page, browserName}) => {
        test.skip(browserName !== "chromium", "visual baselines are chromium-only");

        await page.addInitScript((value) => {
            localStorage.setItem("astroui-theme", value);
        }, theme);

        await page.goto("/components/button/");
        await expect(page.getByRole("heading", {level: 1})).toBeVisible();
        await expect(page.locator("html")).toHaveAttribute("data-theme", theme);
        // Guard: baselines must be captured from `astro preview`. A dev server
        // injects Astro's dev toolbar, which would get baked into the snapshot.
        await expect(page.locator("astro-dev-toolbar")).toHaveCount(0);

        await expect(page).toHaveScreenshot(`component-gallery-${theme}.png`, {
            fullPage: true,
            animations: "disabled",
        });
    });
}
