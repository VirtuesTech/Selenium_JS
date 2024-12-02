class BasePage {
    constructor(driver) {
      this.driver = driver;
    }
  
    async open(url) {
      await this.driver.get(url);
    }
  
    async quit() {
      await this.driver.quit();
    }
  }
  
  module.exports = BasePage;
  