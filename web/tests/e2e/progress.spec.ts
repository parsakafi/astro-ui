import {expect, test} from "@playwright/test";

/**
 * Progress color="dynamic": the demo writes --aui-progress-percent from a
 * slider and from clicks on the track. The CSS progress() function turns
 * that single variable into the fill width and its error → success hue,
 * so both controls must move the bar and repaint it.
 */
test("dynamic progress follows the slider and track clicks", async ({page}) => {
    await page.goto("/components/progress/");

    const bar = page.locator("#dm-progress-dynamic-bar");
    const track = bar.locator(".aui-progress__track");
    const fill = bar.locator(".aui-progress__fill");
    const range = page.locator("#dm-progress-dynamic-range");

    await expect(bar).toBeVisible();
    await expect(bar).toHaveAttribute("aria-valuenow", "65");

    const fillRatio = async () => {
        const f = await fill.boundingBox();
        const t = await track.boundingBox();
        if (!f || !t) return 0;
        return f.width / t.width;
    };

    expect(await fillRatio()).toBeGreaterThan(0.6);
    expect(await fillRatio()).toBeLessThan(0.7);

    // Slider → custom property → width.
    await range.evaluate((el: HTMLInputElement) => {
        el.value = "20";
        el.dispatchEvent(new Event("input", {bubbles: true}));
    });
    await expect(bar).toHaveAttribute("aria-valuenow", "20");
    await expect.poll(fillRatio).toBeLessThan(0.3);
    const colorAt20 = await fill.evaluate((el) => getComputedStyle(el).backgroundColor);

    // Click near the end of the track → value from the pointer position.
    // mouse.click does not auto-scroll, so bring the demo into view first.
    await track.scrollIntoViewIfNeeded();
    const box = await track.boundingBox();
    if (!box) throw new Error("track has no box");
    await page.mouse.click(box.x + box.width * 0.9, box.y + box.height / 2);

    const clicked = Number(await bar.getAttribute("aria-valuenow"));
    expect(clicked).toBeGreaterThanOrEqual(85);
    expect(clicked).toBeLessThanOrEqual(95);
    await expect.poll(fillRatio).toBeGreaterThan(0.85);

    // The hue ramp needs progress(); elsewhere the fill stays on the token.
    const supportsProgress = await page.evaluate(() =>
        CSS.supports("width", "calc(progress(0, 0, 100) * 100%)"),
    );
    if (supportsProgress) {
        const colorAt90 = await fill.evaluate((el) => getComputedStyle(el).backgroundColor);
        expect(colorAt90).not.toBe(colorAt20);
    }
});
