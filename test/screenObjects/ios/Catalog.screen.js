class CatalogScreen {
  get productsHeader() {
    return $(
      // NOTE: xpath指定だと何故か参照できずにエラーになる
      // '//XCUIElementTypeStaticText[@name="Products"]'
      '-ios class chain:**/XCUIElementTypeStaticText[`name == "Products"`]'
    );
  }
}

module.exports = new CatalogScreen();
