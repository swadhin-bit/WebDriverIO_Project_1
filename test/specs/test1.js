////<reference types="@wdio/globals/types" />

//const { browser } = require("@wdio/globals");

import { browser } from "@wdio/globals";


describe('Demo Tests', function () {



    it('My First Test', async () => {

        await browser.url('https://google.com');

        await $('//textarea[@name="q"]').setValue('WebDriverIO');

    })


})

//npx allure generate allure-results --clean -o allure-report
//npx allure open allure-report

//or 

//npx allure serve allure-results

