import puppeteer from "puppeteer";
import { Database } from "../../tests/database";
import Dexie from "dexie";

let browser: puppeteer.Browser | undefined;
let page: puppeteer.Page | undefined;

const sleep = async (ms: number) =>
  await new Promise((res) => setTimeout(res, ms));

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false,
  });
  page = await browser.newPage();

  await page.goto("http://localhost:3000");
}, 30_000);

test("Increments the counter correctly", async () => {
  await sleep(1_000);

  if (!page) {
    throw new Error("Error while loading Puppeteer page");
  }

  const btn = await page.$("button");
  if (!btn) {
    throw new Error("Can't find the increase counter button");
  }

  const CLICK_TIMES = 10;
  for (let i = 0; i < CLICK_TIMES; i++) {
    btn.click();
    await sleep(250);
  }

  const counterSpan = await page.$("#counter");
  if (!counterSpan) {
    throw new Error("Can't find the counter span");
  }

  const counterSpanValue = await counterSpan.evaluate((el) => el.innerHTML);

  expect(counterSpanValue).toBe(CLICK_TIMES.toString());
}, 30_000);

test("Create database", async () => {
  await sleep(1_000);

  if (!page) {
    throw new Error("Error while loading Puppeteer page");
  }

  var something = await page.evaluate(() => {
    const db = new Dexie("MyDatabase");

    // Declare tables, IDs and indexes
    db.version(1).stores({
      friends: "++id, name, age",
    });

    return db;
  });

  expect(something).not.toBeNull();
}, 30_000);

afterAll(async () => await browser?.close?.());
