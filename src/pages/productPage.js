import BasePage from '../utils/basePage.js';
import {  Select } from 'selenium-webdriver';
import { By,until } from 'selenium-webdriver';

class ProductPage extends BasePage {
  constructor(driver) {
    super(driver);
    this.sortContainer = By.className('product_sort_container');
    this.btnAddToCart = By.xpath("(//button[text()='Add to cart'])[1]");
    this.iconCart = By.className('shopping_cart_link');
  }


async selectDropDownSortValue() {
    const dropdown = await this.driver.wait(until.elementLocated(this.sortContainer), 10000);
    const select = new Select(dropdown);
    await select.selectByVisibleText('Price (low to high)');

}
  async navigateToCart() {
    await this.clickElement(this.btnAddToCart);
    await this.clickElement(this.iconCart);
  }
}

export default ProductPage;
