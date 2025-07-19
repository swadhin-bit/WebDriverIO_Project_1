import { browser, $, expect } from "@wdio/globals";

describe('Demo Tests', () => {
    it('Login Test', async () => {
        await browser.url('https://the-internet.herokuapp.com/login');

        await $('#username').setValue('tomsmith');
        await $('#password').setValue('SuperSecretPassword!');
        await $('button[type="submit"]').click();

        const flash = await $('#flash');
        const flashText = await flash.getText();

        console.log('⚡ Flash text:', flashText); // debugging output

        expect(flashText).toContain('You logged into a secure area!');
    });
});
