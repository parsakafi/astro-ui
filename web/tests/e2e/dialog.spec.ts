import {expect, test} from "@playwright/test";

/**
 * Dialog spec: native <dialog> behavior driven by the documented
 * app-level trigger recipe — open, labelled, Escape/close-button
 * dismissal, and focus return to the trigger.
 */
const PAGE = "/components/dialog/";
const TRIGGER = "#dm-dialog-open";
const DIALOG = "#dm-dialog-prefs";

test("dialog opens, traps focus, and closes via Escape", async ({page}) => {
    await page.goto(PAGE);

    const trigger = page.locator(TRIGGER);
    await trigger.click();

    const dialog = page.locator(DIALOG);
    await expect(dialog).toBeVisible();
    await expect(dialog).toHaveRole("dialog");
    await expect(dialog).toHaveAccessibleName("Preferences");

    // Focus moved inside the modal (close button is first tabbable).
    await expect(page.getByRole("button", {name: "Close dialog"})).toBeFocused();

    await page.keyboard.press("Escape");
    await expect(dialog).toBeHidden();

    // Focus returns to the trigger that opened it.
    await expect(trigger).toBeFocused();
});

test("dialog closes via its close button", async ({page}) => {
    await page.goto(PAGE);

    const dialog = page.locator(DIALOG);
    await page.locator(TRIGGER).click();
    await expect(dialog).toBeVisible();

    await page.getByRole("button", {name: "Close dialog"}).click();
    await expect(dialog).toBeHidden();
});

test("dialog is labelled and described by its slots", async ({page}) => {
    await page.goto(PAGE);

    const dialog = page.locator(DIALOG);
    await page.locator(TRIGGER).click();
    await expect(dialog).toBeVisible();

    await expect(dialog).toHaveAccessibleName("Preferences");
    await expect(dialog).toHaveAccessibleDescription(
        "These settings apply to this device only.",
    );

    await page.keyboard.press("Escape");
});
