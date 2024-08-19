class LoginPage {
  // 要素を定義
  get usernameField() { return $('~usernameField'); } // AccessibilityID
  get passwordField() { return $('~passwordField'); }
  get loginButton() { return $('//XCUIElementTypeButton[@name="loginButton"]'); } // XPath
  get loginMessage() { return $('-ios class chain:**/XCUIElementTypeStaticText[`name == "loginMessage"`]'); } // Class Chain

  // 操作を定義
  async login(username, password) {
      await this.usernameField.setValue(username);
      await this.passwordField.setValue(password);
      await this.loginButton.click();
  }

  // メッセージを取得
  async getLoginMessage() {
      return await this.loginMessage.getText();
  }
}

module.exports = new LoginPage();