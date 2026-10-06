import {expect, test} from "@playwright/test";

/**
 * Dialog spec: native <dialog> behavior driven by the documented
 * app-level trigger recipe — open, labelled, Escape/backdrop/close
 * dismissal, and focus return to the trigger.
 */
test("dialog opens, traps focus, and closes via Escape", async ({page}) => {
    await page.goto("/playground");
    const trigger = page.getByRole("button", {name: "Open preferences"});
    await trigger.click();
    const dialog = page.getByRole("dialog", {name: "Preferences"});
    await expect(dialog).toBeVisible();
    // Focus moved inside the modal (close button is first tabbable).
    await expect(page.getByRole("button", {name: "Close dialog"})).toBeFocused();
    await page.keyboard.press("Escape");
    await expect(dialog).toBeHidden();
    // Focus returns to the trigger that opened it.
    await expect(trigger).toBeFocused();
});

test("dialog closes via close button and backdrop click", async ({page}) => {
    await page.goto("/playground");
    const dialog = page.getByRole("dialog", {name: "Preferences"});

    await page.getByRole("button", {name: "Open preferences"}).click();
    await expect(dialog).toBeVisible();
    await page.getByRole("button", {name: "Close dialog"}).click();
    await expect(dialog).toBeHidden();

    // Backdrop = the dialog element itself outside the panel.
    await page.getByRole("button", {name: "Open preferences"}).click();
    await expect(dialog).toBeVisible();
    await page.locator("#demo-prefs").click({position: {x: 5, y: 5}});
    await expect(dialog).toBeHidden();
});

test("dialog without title slot uses aria-label", async ({page}) => {
    await page.goto("/playground");
    await page.getByRole("button", {name: "Small dialog, no close button"}).click();
    await expect(page.getByRole("dialog", {name: "Compact notice"})).toBeVisible();
    await page.keyboard.press("Escape");
});
