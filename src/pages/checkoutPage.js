import { By, until } from 'selenium-webdriver';
import { faker } from '@faker-js/faker';
import { expect } from 'chai';
import BasePage from '../utils/basePage.js';

class CheckoutPage extends BasePage {
  constructor(driver) {
    super(driver);
    this.btnCheckout = By.css('*[name="checkout"]');
    this.inputFirstName = By.id('first-name');
    this.inputLastName = By.id('last-name');
    this.inputZipCode = By.id('postal-code');
    this.btnContinue = By.id('continue');
    this.btnFinish = By.id('finish');
    this.successMsg = By.className('complete-header');
    this.btnBackHome = By.id('back-to-products');
  }

  async proceedCheckout() {
    await this.clickElement(this.btnCheckout);
    await this.fillForm();
    await this.clickElement(this.btnContinue);
    await this.clickElement(this.btnFinish);
  }

  async fillForm() {
    await this.enterText(this.inputFirstName, faker.person.firstName());
    await this.enterText(this.inputLastName, faker.person.lastName());
    await this.enterText(this.inputZipCode, faker.location.zipCode('#####'));
  }

  async validateSuccessMsg() {
    const successMsgElement = await this.findElement(this.successMsg);
    const isSuccessMessageDisplayed = await successMsgElement.isDisplayed();
    expect(isSuccessMessageDisplayed).to.be.true;
  }

  async backToHome() {
    await this.clickElement(this.btnBackHome);
  }
}

export default CheckoutPage;
