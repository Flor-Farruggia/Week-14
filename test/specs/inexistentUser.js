import LoginPage from '../pageobjects/loginPage.js';

describe('Check Login application for "inexistent"', () => {
    beforeAll('open browser', () => {
        browser.url('https://www.saucedemo.com/');
    });
    it('Verify the displayed of form', async () => {
        await expect(LoginPage.inputUserName).toBeDisplayed();
        await expect(LoginPage.inputPassword).toBeDisplayed();
        await expect(LoginPage.loginButton).toBeDisplayed();
    })
    it('Complete with inexistent user', async () => {
        await LoginPage.logIn('Flor', 'Flor1234');
        await LoginPage.clickButtonLogin();
    })
    it ('Check the message text', async ()=> {
        await expect (LoginPage.errorText).toHaveTextContaining('Epic sadface: Username and password do not match any user in this service');
    });
});