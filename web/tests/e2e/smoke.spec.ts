import {expect, test} from "@playwright/test";

/**
 * Smoke spec: the marketing home and a component page must render with
 * no page errors, and the theme toggle must flip `data-theme`
 * (app-level JS recipe, not library code).
 */
test("home page renders without page errors", async ({page}) => {
    const errors: string[] = [];
    page.on("pageerror", (e) => errors.push(String(e)));

    await page.goto("/");
    await expect(page.getByRole("heading", {level: 1})).toBeVisible();
    expect(errors).toEqual([]);
});

test("component page renders its demo without page errors", async ({page}) => {
    const errors: string[] = [];
    page.on("pageerror", (e) => errors.push(String(e)));

    await page.goto("/components/button/");
    await expect(page.getByRole("heading", {level: 1})).toBeVisible();
    await expect(page.locator(".docs-demo-block").first()).toBeVisible();
    expect(errors).toEqual([]);
});

test("theme toggle switches data-theme", async ({page}) => {
    await page.goto("/");

    const html = page.locator("html");
    const before = await html.getAttribute("data-theme");

    await page.getByRole("button", {name: "Toggle theme"}).click();

    const expected = before === "dark" ? "light" : "dark";
    await expect(html).toHaveAttribute("data-theme", expected);
});
