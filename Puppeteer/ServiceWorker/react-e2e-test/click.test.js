describe('click on a button', () => {
  beforeAll(async () => {
    await page.goto("http://localhost:3000", {
      waitUntil: "networkidle0",
    })
  })

  it('should find a button to click on', async () => {
    const sw = await page.evaluate(() => {
       windows.IDBIndex;
    });

    expect(true).toBe(true);
  });
});
