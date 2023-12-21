import { test, expect } from "@playwright/test";

function generateRandomEmail() {
  const randomString = Math.random().toString(36).substring(2, 10);
  const domain = "test.com"; 
  const email = `${randomString}@${domain}`;
  return email;
}

// go to localhost and login
test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.getByRole("button", { name: "Sign in with email" }).click();
  await page.getByLabel("Email").click();
  const randomEmail = generateRandomEmail();
  await page.getByLabel("Email").fill(randomEmail);
  await page.getByRole("button", { name: "Next" }).click();
  await page.getByLabel("Choose password").fill("asdfghjkl");
  await page.getByRole("button", { name: "Save" }).click();
});

test("test that all regions are on main page", async ({ page }) => {
  await expect(page.getByText("Welcome! Please select a region")).toBeVisible();
  await expect(page.getByText("Asia")).toBeVisible();
  await expect(page.getByText("Africa and Caribbean")).toBeVisible();
  await expect(page.getByText("Europe")).toBeVisible();
  await expect(page.getByText("North America")).toBeVisible();
});

test("test Asia pages and level up", async ({ page }) => {
  await page.getByText("Go Here!").first().click();
  await expect(page.getByText("ASIA")).toBeVisible();
  await page.locator("#bubbles-container a").click();
  await expect(page.getByText("RECIPES")).toBeVisible();
  await expect(page.getByText("Honey Teriyaki Salmon").nth(0)).toBeVisible();
  await page.getByRole("button", { name: "Completed" }).click();
  await page.locator("a").nth(2).click();
  await expect(page.getByText("RECIPES")).toBeVisible();
  await expect(page.getByText("Beef Lo Mein").nth(0)).toBeVisible();
  await expect(page.getByText("LEVEL 2")).toBeVisible();
});

test("test AfriCarib pages and level up", async ({ page }) => {
  await page.getByText("Go Here!").nth(1).click();
  await expect(page.getByText("AFRICA")).toBeVisible();
  await expect(page.getByText("CARIBBEAN")).toBeVisible();
  await page.locator("#bubbles-container a").click();
  await expect(page.getByText("RECIPES")).toBeVisible();
  await expect(page.getByText("LEVEL 1")).toBeVisible();
  await expect(page.getByText("Oxtail").nth(0)).toBeVisible();
  await page.getByText("MulukhiyahIngredients:").click();
  await expect(page.getByText("Mulukhiyah").nth(0)).toBeVisible();
  await page.getByRole("button", { name: "Completed" }).click();
  await page.locator("a").nth(2).click();
  await expect(page.getByText("LEVEL 2")).toBeVisible();
  await expect(page.getByText("Chicken Couscous").nth(0)).toBeVisible();
  await page.getByRole("button", { name: "Completed" }).click();
  await page.locator("a").nth(3).click();
  await expect(page.getByText("LEVEL 3")).toBeVisible();
});

test("test Europe pages and level up", async ({ page }) => {
  await page.getByText("Go Here!").nth(2).click();
  await expect(page.getByText("EUROPE")).toBeVisible();
  await page.locator("#bubbles-container a").click();
  await expect(page.getByText("RECIPES")).toBeVisible();
  await expect(page.getByText("LEVEL 1")).toBeVisible();
  await expect(page.getByText("Potatoes").nth(0)).toBeVisible();
  await page.getByRole("button", { name: "Completed" }).click();
  await page.locator("a").nth(2).click();
  await expect(page.getByText("LEVEL 2")).toBeVisible();
  await expect(page.getByText("Lentils").nth(0)).toBeVisible();
});

test("test North America pages, level up, back button", async ({ page }) => {
  await page.getByText("Go Here!").nth(3).click();
  await expect(page.getByText("NORTH AMERICA")).toBeVisible();
  await page.locator("#bubbles-container a").click();
  await expect(page.getByText("RECIPES")).toBeVisible();
  await expect(page.getByText("LEVEL 1")).toBeVisible();
  await expect(page.getByText("Poutine").nth(0)).toBeVisible();
  await page.getByRole("button", { name: "Completed" }).click();
  await page.locator("a").nth(2).click();
  await expect(page.getByText("LEVEL 2")).toBeVisible();
  await expect(page.getByText("Banana").nth(0)).toBeVisible();
  await page.locator("#bluerec a").click();
  await expect(page.getByText("NORTH AMERICA")).toBeVisible();
  await page.locator("a").first().click();
  await expect(page.getByText("Please select a region")).toBeVisible();
});
