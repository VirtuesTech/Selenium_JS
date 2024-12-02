import { By } from 'selenium-webdriver'; 

export default class LoginPage {
  constructor(driver) {
    this.driver = driver;
    this.usernameField = driver.findElement(By.id('user-name'));
    this.passwordField = driver.findElement(By.id('password'));
    this.loginButton = driver.findElement(By.id('login-button'));
  }

  async login(username, password) {
    await this.usernameField.sendKeys(username);
    await this.passwordField.sendKeys(password);
    await this.loginButton.click();
  }
}
