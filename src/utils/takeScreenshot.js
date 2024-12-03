import fs from 'fs';
import path from 'path';
 
export async function takeScreenshot(driver, testName) {
    const screenshotDir = path.resolve('screenshots');
    if (!fs.existsSync(screenshotDir)) {
        fs.mkdirSync(screenshotDir);
    }
    const screenshot = await driver.takeScreenshot();
    const screenshotPath = path.join(screenshotDir, `${testName}-${new Date().getTime()}.png`);
    fs.writeFileSync(screenshotPath, screenshot, 'base64');
    console.log(`Screenshot saved to ${screenshotPath}`);
}