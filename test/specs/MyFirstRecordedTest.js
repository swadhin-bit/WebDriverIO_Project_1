const { browser } = require('@wdio/globals');


describe("MyFirstRecordedTest", () => {
  it("tests MyFirstRecordedTest", async () => {
    await browser.maximizeWindow();
    const size = await browser.getWindowSize(); //Maximized size: 1440 x 791
    await console.log(`Maximized size: ${size.width} x ${size.height}`);
    await browser.url("https://the-internet.herokuapp.com/login")
    await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/login")
    await browser.$("#username").click()
    await browser.$("#username").setValue("tomsmith")
    await browser.$("#content").click()
    await browser.$("#password").click()
    await browser.$("#password").setValue("SuperSecretPassword!")
    await browser.$("button[type='submit']").click()
    await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/secure")
    await browser.$("//*[@id=\"content\"]/div/a/i").click()
    await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/login")
  });
});
