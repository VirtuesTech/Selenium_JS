import BasePage from '../utils/basePage.js';
import { By } from 'selenium-webdriver';

class LoginPage extends BasePage {
  constructor(driver) {
    super(driver);
    this.usernameField = By.id('user-name');
    this.passwordField = By.id('password');
    this.loginButton = By.id('login-button');
  }

  async login(username, password) {
    await this.enterText(this.usernameField, username); 
    await this.enterText(this.passwordField, password); 
    await this.clickElement(this.loginButton); 
  }
}

export default LoginPage;
