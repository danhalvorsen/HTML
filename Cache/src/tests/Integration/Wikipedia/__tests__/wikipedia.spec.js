import { afterAll, beforeAll, describe, expect, test } from "@jest/globals";
import { driver } from "../../Common/driver-factory"
import HomePage from "../__pageobjects__/homePage";
import SeleniumPage from "../__pageobjects__/seleniumpage";

let homePage = new HomePage();
let seleniumPage = new SeleniumPage();

beforeAll(async () => {
  await driver.navigate().to("https://wikipedia.org");
});

afterAll(async () => {
  await driver.quit();
});

describe("Selenium wiki page", () => {
  test("should be opened as successfully", async () => {
    await homePage.wikiSearch("Selenium (software)");
    await homePage.searchButton();
    expect(await seleniumPage.getHeadingText()).toEqual("Selenium (software)");
  });

  test("contains the correct repository URL", async () => {
    expect(await seleniumPage.getRepositoryUrlText()).toEqual(
      "github.com/SeleniumHQ/"
    );
  });
});