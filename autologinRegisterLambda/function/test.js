require ('colors');
const puppeteer = require('puppeteer');

(async () => {
    console.log("Puppeteer init...".green);
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://example.com');
    page.on('console', (msg) => console.log('PAGE LOG:', msg.text()));

    await page.evaluate(() => console.log(`url is ${location.href}`));
    await page.screenshot({ path: 'example.png' });

    await browser.close();
})();