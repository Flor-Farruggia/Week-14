class LoginPage {
    get inputUserName() {
        return $('#user-name')
    };
    get inputPassword() {
        return $('#password')
    };
    get loginButton() {
        return $('#login-button')
    };
    get errorUserName() {
        return $('#login_button_container > div > form > div:nth-child(1) > svg')
    };
    get errorPassword() {
        return $('#login_button_container > div > form > div:nth-child(2) > svg')
    };
    get errorButton() {
        return $('.error-button')
    };
    get errorTool() {
        return $('.error-message-container.error')
    };
    get errorText() { return $('.error-message-container.error h3')};
    async logIn(username, password) {
        await this.inputUserName.setValue(username);
        await this.inputPassword.setValue(password);
    };
    async clickButtonLogin() {
        await this.loginButton.click();
    };
    open() {
        const url = 'http://www.saucedemo.com/';
        return browser.url(url);
    }
};
export default new LoginPage();