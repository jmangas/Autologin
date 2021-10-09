const puppeteer = require('puppeteer');
require ('colors');
(async () => {
    console.log("Puppeteer init...".green);
    const browser = await puppeteer.launch({ headless: false })

    const page = await browser.newPage()

    await page.goto('https://intranet.seidor.es/sap/bc/ui2/flp#TimeEntry-manageCorrections')

    await page.setViewport({ width: 4458, height: 1367 })

    await page.waitForSelector('#USERNAME_FIELD-inner')
    await page.click('#USERNAME_FIELD-inner')
    await page.type('#USERNAME_FIELD-inner', '*************')
    await page.type('#PASSWORD_FIELD-inner', '*************')

    await page.waitForSelector('#LOGIN_FORM > .sapUiSraLoginButtonBlock > .sapUiSraBtnBlock > #LOGIN_LINK > .sapUiSraDisplayBeforeLogin')
    await page.click('#LOGIN_FORM > .sapUiSraLoginButtonBlock > .sapUiSraBtnBlock > #LOGIN_LINK > .sapUiSraDisplayBeforeLogin')

    console.log("Delay init...".yellow);
    await delay(4000);
    console.log("Delay end...".yellow);
    await page.waitForSelector('#__xmlview2--CICO_EVENT_TYPES-arrow')
    await page.click('#__xmlview2--CICO_EVENT_TYPES-arrow')

    await page.waitForSelector('#__item0-__xmlview2--CICO_EVENT_TYPES-3')
    await page.click('#__item0-__xmlview2--CICO_EVENT_TYPES-3')

    await page.waitForSelector('#__xmlview2--CICO_INPUT_FORM--Grid')
    await page.click('#__xmlview2--CICO_INPUT_FORM--Grid')

    await page.waitForSelector('#__xmlview2--CICO_SAVE_BTN-content')
    await page.click('#__xmlview2--CICO_SAVE_BTN-content')
    await browser.close()


})();
const delay = ms => new Promise(res => setTimeout(res, ms));
Object.defineProperty(navigator, 'languages', {
    get: function () {
        return ['es-ES'];
    },
});