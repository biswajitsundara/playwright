const { test, expect } = require("@playwright/test");

test("Bank Of Braavos Test", async ({ browser }) => {
  //we can inject proxy settings, cookies etc
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://bankofbraavos.github.io/");
  const title = await page.title();
  await expect(page).toHaveTitle("Bank Of Braavos");
});

test("Google Search Test", async ({ page }) => {
  //If we simply need a browser, then directly we can use page.
  await page.goto("https://www.google.com/");
  const title = await page.title();
  await expect(page).toHaveTitle("Google");
});
