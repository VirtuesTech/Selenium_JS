import { Builder } from 'selenium-webdriver'; 
import chrome from 'selenium-webdriver/chrome.js';  
import firefox from 'selenium-webdriver/firefox.js';
import edge from 'selenium-webdriver/edge.js';  

// Automatically fetch drivers using require
import 'chromedriver'; 
import 'geckodriver'; 
//import 'msedgedriver';

const getDriver = (browser) => {
  let driver;

  switch(browser) {
    case 'chrome':
      driver = new Builder()
        .forBrowser('chrome')
        .setChromeOptions(new chrome.Options())
        .build();
      break;
    case 'firefox':
      driver = new Builder()
        .forBrowser('firefox')
        .setFirefoxOptions(new firefox.Options())
        .build();
      break;
    case 'edge':
      driver = new Builder()
        .forBrowser('MicrosoftEdge')
        .setEdgeOptions(new edge.Options())
        .build();
      break;
    default:
      throw new Error('Browser not supported');
  }

  return driver;
};

export { getDriver };
