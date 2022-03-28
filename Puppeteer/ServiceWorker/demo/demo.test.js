describe('assets are served correctly by network', () => {
    // We navigate to our mock site before each test:
    beforeAll(async () => {
        await page.goto('http://127.0.0.1:5500/demo/demo.html', { waitUntil: 'networkidle0' });
    });

    // Using Puppeteer's page.evaluate() method, we can check whether our Service Worker was registered:
    it('service worker is registered', async () => {
        const sw = await page.evaluate(() => {
            if (navigator.serviceWorker) {
                return navigator.serviceWorker.getRegistrations().then(registrations =>{
                    return registrations.length;
                });
            }
        });
        expect(sw).toEqual(1);
    });

    // A sanity check to see whether our demo.js file is loaded and
    // changes the <p> tag with id=description accordingly:
    it('shows the correct description on first load', async () => {
        const description = await page.$('#description');
        await expect(description).toMatch('This demo site is designed to serve and test service worker.');
    });

    // Again, a sanity check for testing whether our css file is loaded properly:
    it('has the correct styling on first load', async () => {
        await page.waitForSelector('#invisible', {
            visible: false
        });
    });

    // Here we check whether Service Worker has correctly NOT activated yet. Activation
    // should only happen after reloading the page:
    it('service worker is not activated', async () => {
        const sw = await page.evaluate(() => {
            if (navigator.serviceWorker) {
                return navigator.serviceWorker.controller;
            }
        });
        expect(sw).toBeNull();
    });

    // We check whether demo.js and demo.css were served via the network
    it('js and css are served by network', async () => {
        const [asset1, asset2] = JSON.parse(
            await page.evaluate(() => {
                return JSON.stringify(performance.getEntriesByType('resource'));
            })
        );
        expect(asset1.workerStart).toEqual(0);
        expect(asset2.workerStart).toEqual(0);
    });
});