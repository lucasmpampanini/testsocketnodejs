const controller = require("./controller");

function spider(urlBase, socket) {
    const puppeteer = require("puppeteer");

    (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(urlBase);

    const img = await page.evaluate(() => {
        const urlImgAll = Array.prototype.slice.call(document.querySelectorAll("img"));
        var urlImg = urlImgAll.map(res=> res.src)

            return urlImg
        });
    
    console.log(controller(img, urlBase, socket))

    await browser.close();
    })();
}

module.exports = spider