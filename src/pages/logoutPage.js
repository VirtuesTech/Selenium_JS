import BasePage from '../utils/basePage.js';
import { By } from 'selenium-webdriver';

class LogoutPage extends BasePage {
  constructor(driver) {
    super(driver); // Call the parent constructor
    this.menuButton = By.id('react-burger-menu-bt');
    this.logoutLink = By.id('logout_sidebar_link');
  }

  async logout() {
    await this.clickElement(this.menuButton); 
    await this.clickElement(this.logoutLink); 
  }
}

export default LogoutPage;
