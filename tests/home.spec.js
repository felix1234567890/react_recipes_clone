// @ts-check
const { test, expect } = require("@playwright/test");
test.describe("home-page", () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto("http://localhost:3000/");
  });
  test("has title", async ({ page }) => {
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/React App/);
  });

  test("get heading count", async ({ page }) => {
    // Expects page to have a heading with the name of Installation.
    await expect(page.getByRole("heading")).toHaveCount(2);
  });
});
