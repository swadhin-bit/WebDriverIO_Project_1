const { $ } = require('@wdio/globals');
const { expect } = require('expect-webdriverio');


class LoginPage {
  get usernameTextBox() {
    return $('#username');
  }

  get passwordTextBox() {
    return $('#password');
  }

  get loginButton() {
    return $('button[type="submit"]');
  }

  get loginMessage() {
    return $('#flash');
  }

 async login(username, password, msg) {
  //const { expect } = require('expect');  // <-- plain expect, not expect-webdriverio
  await this.usernameTextBox.setValue(username);
  await this.passwordTextBox.setValue(password);
  await this.loginButton.click();

  await this.loginMessage.waitForDisplayed();

  const text = await this.loginMessage.getText();
  expect(text).toContain(msg);
}

}

module.exports = new LoginPage();
