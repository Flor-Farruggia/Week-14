import LoginPage from '../pageobjects/loginPage.js';

describe('Check Login application for "performance_glitch_user"', () => {

    let startTime;

    beforeAll('open browser', () => {
        browser.url('https://www.saucedemo.com/');
    });
    it('Display elements', async () => {
        await expect (LoginPage.inputUserName).toBeDisplayed();
        await expect (LoginPage.inputPassword).toBeDisplayed();
        await expect (LoginPage.loginButton).toBeDisplayed();
    });
    it ('Complete with data user', async () => {
        startTime = new Date().getTime();
        await LoginPage.logIn('performance_glitch_user', 'secret_sauce');
        await LoginPage.clickButtonLogin();
    });
    it('Check the time of access', async () => {
        const endTime = new Date().getTime();
        const totalTime = endTime - startTime;
        await expect(totalTime).toBeLessThan(2000);
    })
});
