import { By } from "selenium-webdriver";
import { findElementBy } from "../../Common/utils";

class AddKeyValuePage {

    get searchButtonLocator() {
        return By.id("button");
      }

    get keyInputLocator() {
        return By.id("key");
    }

    get valueInputLocator() {
        return By.id("value");
    }

    setValue(value) {
        findElementBy(this.valueInputLocator).setValue(value);
    }

    ClickButton()  {
        findElementBy(this.searchButtonLocator).click();
    }

    setKey(value) {
        findElementBy(this.keyInputLocator).setValue(value);
    }
}

export default AddKeyValuePage;