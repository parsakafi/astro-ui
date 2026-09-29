import {expect, test} from "@playwright/test";

/**
 * Tabs spec: WAI-ARIA tabs behavior from the component's scoped inline
 * script — click selection, arrow-key navigation with automatic
 * activation (disabled tabs skipped), and Home/End.
 */
test("tabs select panels on click", async ({page}) => {
    await page.goto("/playground");
    const group = page.locator("#demo-tabs");

    // SSR pre-selects billing via defaultValue.
    await expect(group.getByRole("tab", {name: "Billing"})).toHaveAttribute(
        "aria-selected",
        "true",
    );
    await expect(
        group.getByRole("tabpanel", {name: "Billing"}),
    ).toBeVisible();
    await expect(
        group.getByRole("tabpanel", {name: "Account"}),
    ).toBeHidden();

    await group.getByRole("tab", {name: "Account"}).click();
    await expect(group.getByRole("tab", {name: "Account"})).toHaveAttribute(
        "aria-selected",
        "true",
    );
    await expect(
        group.getByRole("tabpanel", {name: "Account"}),
    ).toBeVisible();
    await expect(
        group.getByRole("tabpanel", {name: "Billing"}),
    ).toBeHidden();
});

test("tabs navigate with arrow keys and skip disabled tabs", async ({
                                                                        page,
                                                                    }) => {
    await page.goto("/playground");
    const group = page.locator("#demo-tabs");
    const billing = group.getByRole("tab", {name: "Billing"});
    const account = group.getByRole("tab", {name: "Account"});

    await billing.focus();
    // ArrowRight from Billing wraps past disabled Team to Account.
    await page.keyboard.press("ArrowRight");
    await expect(account).toBeFocused();
    await expect(account).toHaveAttribute("aria-selected", "true");
    await expect(
        group.getByRole("tabpanel", {name: "Account"}),
    ).toBeVisible();

    // ArrowLeft wraps back to Billing (Team still skipped).
    await page.keyboard.press("ArrowLeft");
    await expect(billing).toBeFocused();
    await expect(billing).toHaveAttribute("aria-selected", "true");
});

test("tabs jump with Home and End", async ({page}) => {
    await page.goto("/playground");
    const group = page.locator("#demo-tabs");

    await group.getByRole("tab", {name: "Billing"}).focus();
    await page.keyboard.press("Home");
    await expect(group.getByRole("tab", {name: "Account"})).toBeFocused();

    await page.keyboard.press("End");
    // End lands on Billing: Team is disabled and skipped.
    await expect(group.getByRole("tab", {name: "Billing"})).toBeFocused();
    await expect(group.getByRole("tab", {name: "Billing"})).toHaveAttribute(
        "aria-selected",
        "true",
    );
});
