import { expect } from 'chai';
import { getDriver } from '../drivers/browserConfig.js';
import LoginPage from '../pages/loginPage.js';
import LogoutPage from '../pages/logoutPage.js';
import dotenv from 'dotenv';
import ProductPage from '../pages/productPage.js';
import CheckoutPage from '../pages/checkoutPage.js';
import { clearAllureResultsFolder } from '../utils/clearAllureResult.js';
import { takeScreenshot } from '../utils/takeScreenshot.js';
dotenv.config();

describe('End-to-End Flow: Login, Product Selection, Checkout, and Logout', function () {
  let driver, loginPage, productPage, checkoutPage, logoutPage;

  before(async function () {
    driver = await getDriver('chrome'); // Setup driver
    await driver.get(process.env.BASE_URL);
     clearAllureResultsFolder();
  });

  after(async function () {
    await driver.quit(); // Clean up driver
  });

  it('should login successfully', async function () {
    loginPage = new LoginPage(driver);
    await loginPage.login(process.env.USER_NAME, process.env.PASSWORD);
  });

  it('should sort products and navigate to the cart successfully', async function () {
    productPage = new ProductPage(driver);
    await productPage.selectDropDownSortValue();
    await productPage.navigateToCart();
  });

  it('should complete the checkout process successfully', async function () {
    checkoutPage = new CheckoutPage(driver);
    await checkoutPage.proceedCheckout();
    await checkoutPage.validateSuccessMsg();
    await checkoutPage.backToHome();
  });

  it('should logout successfully', async function () {
    logoutPage = new LogoutPage(driver);
    await logoutPage.logout();
  });
  afterEach(async function () {
    if (this.currentTest.state === 'failed') {
        await takeScreenshot(driver, this.currentTest.title);
    }
  });
});
