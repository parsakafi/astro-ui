import {expect, test} from "@playwright/test";

/**
 * Tabs spec: WAI-ARIA tabs behavior from the component's scoped inline
 * script — click selection, arrow-key navigation with automatic
 * activation, and Home/End.
 */
const PAGE = "/components/tabs/";
const GROUP = "#dm-tabs-line-inner";

test("tabs select panels on click", async ({page}) => {
    await page.goto(PAGE);
    const group = page.locator(GROUP);

    // SSR pre-selects billing via defaultValue.
    await expect(group.getByRole("tab", {name: "Billing"})).toHaveAttribute(
        "aria-selected",
        "true",
    );
    await expect(group.getByRole("tabpanel", {name: "Billing"})).toBeVisible();
    await expect(group.getByRole("tabpanel", {name: "Account"})).toBeHidden();

    await group.getByRole("tab", {name: "Account"}).click();
    await expect(group.getByRole("tab", {name: "Account"})).toHaveAttribute(
        "aria-selected",
        "true",
    );
    await expect(group.getByRole("tabpanel", {name: "Account"})).toBeVisible();
    await expect(group.getByRole("tabpanel", {name: "Billing"})).toBeHidden();
});

test("tabs navigate with arrow keys", async ({page}) => {
    await page.goto(PAGE);
    const group = page.locator(GROUP);
    const billing = group.getByRole("tab", {name: "Billing"});
    const account = group.getByRole("tab", {name: "Account"});

    await billing.focus();

    // ArrowRight wraps from Billing to Account.
    await page.keyboard.press("ArrowRight");
    await expect(account).toBeFocused();
    await expect(account).toHaveAttribute("aria-selected", "true");
    await expect(group.getByRole("tabpanel", {name: "Account"})).toBeVisible();

    // ArrowLeft wraps back to Billing.
    await page.keyboard.press("ArrowLeft");
    await expect(billing).toBeFocused();
    await expect(billing).toHaveAttribute("aria-selected", "true");
});

test("tabs jump with Home and End", async ({page}) => {
    await page.goto(PAGE);
    const group = page.locator(GROUP);

    await group.getByRole("tab", {name: "Billing"}).focus();

    await page.keyboard.press("Home");
    await expect(group.getByRole("tab", {name: "Account"})).toBeFocused();

    await page.keyboard.press("End");
    await expect(group.getByRole("tab", {name: "Billing"})).toBeFocused();
    await expect(group.getByRole("tab", {name: "Billing"})).toHaveAttribute(
        "aria-selected",
        "true",
    );
});
