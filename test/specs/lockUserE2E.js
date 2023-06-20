import LoginPage from '../pageobjects/loginPage.js';

describe('Check Login application for "locked_user_out"', () => {
    beforeAll('open browser', () => {
        browser.url('https://www.saucedemo.com/');
    });

    it('Display elements', async () => {
        await LoginPage.logIn('locked_out_user', 'secret_sauce');
        await LoginPage.clickButtonLogin();
        await expect(LoginPage.errorUserName).toBeDisplayed();
        await expect(LoginPage.errorPassword).toBeDisplayed();
        await expect(LoginPage.errorTool).toBeDisplayed();
        await expect(LoginPage.errorButton).toBeDisplayed();
    });

    it ('Check the message text', async ()=> {
        await expect (LoginPage.errorMessage).toHaveTextContaining('Epic sadface: Sorry, this user has been locked out.');
    });
});


