import {expect, test} from "@playwright/test";

/**
 * Smoke spec: static MVP pages must render with no console errors and
 * the theme toggle must flip `data-theme` (app-level JS recipe).
 */
test("playground renders without console errors", async ({page}) => {
    const errors: string[] = [];
    page.on("pageerror", (e) => errors.push(String(e)));
    await page.goto("/playground");
    await expect(page.getByRole("heading", {name: "Button"})).toBeVisible();
    await expect(page.getByRole("alert")).toBeVisible();
    expect(errors).toEqual([]);
});

test("theme toggle switches data-theme", async ({page}) => {
    await page.goto("/playground");
    await page.getByRole("button", {name: "Toggle theme"}).click();
    await expect(page.locator("html")).toHaveAttribute("data-theme", /light|dark/);
});
