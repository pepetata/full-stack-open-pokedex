import { test, expect } from "@playwright/test";

test.describe("Pokedex", () => {
  test("front page can be opened", async ({ page }) => {
    await page.goto("");
    await expect(page.getByText("ivysaur")).toBeVisible();
    await expect(
      page.getByText(
        "Pokémon and Pokémon character names are trademarks of Nintendo."
      )
    ).toBeVisible();
  });

  test("can navigate to ivysaur page and see chlorophyll", async ({ page }) => {
    await page.goto("");
    await page.click('a.list-item[href="/pokemon/ivysaur"]');
    await expect(page.getByText("chlorophyll")).toBeVisible();
  });
});
