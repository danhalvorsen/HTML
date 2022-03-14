import { afterAll, beforeAll, describe, expect, test } from "@jest/globals";
import { driver } from "../../Common/driver-factory"
import AddKeyValuePage from "../../IndexDb/__pageobjects__/AddKeyValuePage";

let addKeyValuePage = new AddKeyValuePage();

beforeAll(async () => {
    await driver.navigate().to("http://127.0.0.1:5500/index.html");
  });

  afterAll(async () => {
    await driver.quit();
  });

  describe("Add KeyValue pair to indexDb", () => {
    test("should be opened as successfully", async () => {
      await addKeyValuePage.setKey("100"); 
      await addKeyValuePage.setValue("300"); 
      await addKeyValuePage.ClickButton();
    })}
  );