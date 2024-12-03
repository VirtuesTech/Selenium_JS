import { By, until } from 'selenium-webdriver';

class BasePage {
  constructor(driver) {
    this.driver = driver;
  }

  // Wait for an element to be located
  async waitForElement(locator, timeout = 5000) {
    await this.driver.wait(until.elementLocated(locator), timeout);
    await this.driver.wait(until.elementIsVisible(this.driver.findElement(locator)), timeout); // Wait for visibility

  }

  // Click on an element
  async clickElement(locator) {
    await this.waitForElement(locator); // Ensure element is present and visible
    const element = await this.driver.findElement(locator);
     await element.click(); 
  }

  // Enter text into an input field
  async enterText(locator, text) {
    await this.waitForElement(locator);
    const element = await this.driver.findElement(locator);
    await element.sendKeys(text);
  }
}

export default BasePage;
