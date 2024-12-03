import { By, until } from 'selenium-webdriver';
import { expect } from 'chai';  

class BasePage {
  constructor(driver) {
    this.driver = driver;
  }

  async waitForElement(locator, timeout = 5000) {
    await this.driver.wait(until.elementLocated(locator), timeout);
    await this.driver.wait(until.elementIsVisible(this.driver.findElement(locator)), timeout);

  }

 
  async clickElement(locator) {
    await this.waitForElement(locator); 
    const element = await this.driver.findElement(locator);
     await element.click(); 
  }

  async enterText(locator, text) {
    await this.waitForElement(locator);
    const element = await this.driver.findElement(locator);
    await element.sendKeys(text);
  }

    // Check if an element is displayed and assert using Chai
    async isDisplayed(locator) {
      await this.waitForElement(locator);
      const element = await this.driver.findElement(locator);
      const isDisplayed = await element.isDisplayed();
      expect(isDisplayed).to.be.true;  
      return isDisplayed;
    }
}

export default BasePage;
