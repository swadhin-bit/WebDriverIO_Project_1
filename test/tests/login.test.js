const { browser } = require('@wdio/globals');
const LoginPage = require('../pages/login.page');


describe('Demo Tests', () => {
  it('Login Test', async () => {
    await browser.url('https://the-internet.herokuapp.com/login');
    await browser.maximizeWindow();
    await LoginPage.login('tomsmith', 'SuperSecretPassword!', 'You logged into a secure area!');

    await browser.pause(2000);

    
  });
});
