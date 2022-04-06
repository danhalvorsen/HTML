
import puppeteer from 'puppeteer'
import fileUrl from 'file-url';


visit();

async function visit() {
    const browser = await puppeteer.launch({
        args: [
            '--disable-setuid-sandbox',
            '--no-sandbox',
            '--ignore-certificate-errors',
            '--disable-web-security',
        ],
        headless: false,
        ignoreHTTPSErrors: true,
        
    });

    var file = fileUrl('sw.html', {resolve: false});

    const page = await browser.newPage();
    await page.setViewport({width: 1300, height: 1000});
    await page.goto('file:///C:/Appl/Source/HTML/Puppeteer/ServiceWorker/serviceworkers/sw.html'); 
    
    // // intercept requests; at this point we've already bypassed the certificate errors,
    // // so the subsequent page visit will load.
    // await page.setRequestInterception(true);
    // await page.on('request', interceptedRequest => {
    //     console.log(interceptedRequest.url());
    //     interceptedRequest.continue();
    // });

    // // visit the actual page you want to do stuff on.
    // var actualURL = "SOME_URL_ON_THE_SAME_DOMAIN.com/ACTUAL_PAGE"
    // await page.goto(actualURL, {waitUntil: 'networkidle0'});
    await browser.close();
}