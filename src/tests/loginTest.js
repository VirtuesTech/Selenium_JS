import { expect } from 'chai';
import LoginPage from '../pages/loginPage.js'; 
import { getDriver } from '../drivers/browserConfig.js';
import dotenv from 'dotenv';

dotenv.config();

const baseUrl = process.env.BASE_URL;

describe('Login Test', function () {
  let driver;
  let loginPage;

  before(async () => {
    this.timeout(10000);
    driver = await getDriver('chrome');
    await driver.get(baseUrl);
    loginPage = new LoginPage(driver);
  });

  it('should login successfully with valid credentials', async () => {
    await loginPage.login(process.env.USER_NAME, process.env.PASSWORD);
    const title = await driver.getTitle();
    expect(title).to.equal('Swag Labs');
  });

  after(async () => {
    this.timeout(10000);
    await driver.quit();
  });
});
