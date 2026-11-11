import {expect, test} from "@playwright/test";

/**
 * Mega-menu regression: the Components panel is 34rem wide. Centering it
 * on the trigger pushed its left edge off-screen on laptop widths, so the
 * panel is now aligned to the trigger's inline start (full-bleed below
 * 48rem). These checks assert it never leaves the viewport.
 */
const WIDTHS = [1920, 1440, 1280, 1024, 900] as const;

for (const width of WIDTHS) {
    test(`components mega panel stays inside the viewport at ${width}px`, async ({page}) => {
        await page.setViewportSize({width, height: 900});
        await page.goto("/components/button/");

        const trigger = page.locator('.docs-mega[data-mega="components"] .docs-mega-trigger');
        const box = await trigger.boundingBox();
        if (!box) throw new Error("Components trigger has no layout box");

        await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);

        const grid = page.locator('.docs-mega[data-mega="components"] .docs-mega-grid');
        await expect(grid).toBeVisible();
        const rect = await grid.boundingBox();
        if (!rect) throw new Error("Components panel has no layout box");

        expect(rect.x).toBeGreaterThanOrEqual(0);
        expect(rect.x + rect.width).toBeLessThanOrEqual(width);
    });
}

test("components mega panel stays inside the viewport in RTL", async ({page}) => {
    await page.setViewportSize({width: 1280, height: 900});
    await page.goto("/components/button/");
    await page.evaluate(() => {
        document.documentElement.dir = "rtl";
    });

    const trigger = page.locator('.docs-mega[data-mega="components"] .docs-mega-trigger');
    const box = await trigger.boundingBox();
    if (!box) throw new Error("Components trigger has no layout box");

    await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);

    const grid = page.locator('.docs-mega[data-mega="components"] .docs-mega-grid');
    await expect(grid).toBeVisible();
    const rect = await grid.boundingBox();
    if (!rect) throw new Error("Components panel has no layout box");

    expect(rect.x).toBeGreaterThanOrEqual(0);
    expect(rect.x + rect.width).toBeLessThanOrEqual(1280);
});
