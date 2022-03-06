import { By } from "selenium-webdriver";
import { findElementBy } from "../../Common/utils";

class AddKeyValuePage {

    get searchButtonLocator() {
        return By.id("button");
      }

    get keyInputLocator() {
        return By.id("key").toString();
    }

    get valueInputLocator() {
        return By.id("value").toString();
    }

    set setValue(value :string) {
        findElementBy(this.valueInputLocator).sendKeys(value);
    }

    ClickButton() : void {
        findElementBy(this.searchButtonLocator).click();
    }

    set setKey(value :string) {
        findElementBy(this.keyInputLocator).sendKeys(value);
    }
}

export default AddKeyValuePage;