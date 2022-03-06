import { Builder } from "selenium-webdriver";
import { Browser, PageLoadStrategy } from "selenium-webdriver/lib/capabilities";
import chrome from "selenium-webdriver/chrome";
import "chromedriver";

const getChromeOptions = () => {
  let options = new chrome.Options();
  
  //options.headless();
  options.addArguments([
    // "--headless",
    "--ignore-certificate-errors"
    ,"--disable-extensions"
    ,"--disable-popup-blocking"
    ,"--enable-automation"
    // ,"--log-level=1"
    ,"--disable-gpu"
    // ,"--disable-dev-shm-usage"
    // ,"--window-size=1920,1080"
  ]);
  options.setPageLoadStrategy(PageLoadStrategy.NORMAL);
  options.setAcceptInsecureCerts(true);
  return options;
};

const getChromeDriver = () => {
  return new Builder()
    .forBrowser(Browser.CHROME)
    .setChromeOptions(getChromeOptions())
    .build();
};

export const driver = getChromeDriver();