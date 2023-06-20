class cartFlow {
    get backButton() {
        return $('#back-to-products')
    }
    get checkoutButton() {
        return $('#checkout')
    }
    get inputFormName () {
        return $('#first-name ')
    }
    get inputFormLastName () {
        return $('#last-name')
    }
    get inputFormZip () {
        return $('#postal-code')
    }
    get continueButton () {
       return $('#continue')
    }
    get finishButton() {
        return $('#finish')
    }
    get backHomeButton() {
        return $('#back-to-products')
    }

    async backClick() {
        await this.backButton.waitForDisplayed();
        await this.backButton.click();
    }
    async checkoutClick() {
        await this.checkoutButton.click();
    }
    async formData(firstname, lastname, zip) {
        await this.inputFormName.setValue(firstname);
        await this.inputFormLastName.setValue(lastname);
        await this.inputFormZip.setValue(zip);
    };
    async continueButtonClick() {
        await this.continueButton.click();
    }
    async finishButtonClick() {
        await this.finishButton.click();
    }
    async backHomeClick() {
        await this.backHomeButton.click();
    }
}
export default new cartFlow();