const puppeteer = require("puppeteer");
// const iPhone = puppeteer.devices["iPhone XR"];

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
  });
  const page = await browser.newPage();
  // await page.emulate(iPhone);
  await page.setViewport({width: 420, height: 1440});
  await page.goto("https://m.weibo.cn/u/2167365780");
  await page.waitForTimeout(5000);
  await page.screenshot({
    path: "./download/test.jpg",
  });
  await browser.close();
})();
