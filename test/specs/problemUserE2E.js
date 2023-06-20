import LoginPage from '../pageobjects/loginPage.js';
import firstItem from '../pageobjects/productPage.js';
import homeHeader from '../pageobjects/homePage.js';

describe('Check Login application for "problem_user"', () => {
    beforeAll('open browser', () => {
        browser.url('https://www.saucedemo.com/');
    });

    it('Display elements', async () => {
        await expect (LoginPage.inputUserName).toBeDisplayed();
        await expect (LoginPage.inputPassword).toBeDisplayed();
        await expect (LoginPage.loginButton).toBeDisplayed();
        await LoginPage.logIn('problem_user', 'secret_sauce');
        await LoginPage.clickButtonLogin();
        await expect(homeHeader.logoTitle).toBeDisplayed();
        await expect(homeHeader.logoTitle).toHaveTextContaining('Swag Labs');
        const currentUrl = await browser.getUrl();
        expect(currentUrl).toEqual('https://www.saucedemo.com/inventory.html');
    });

    it('Verify the load of the products', async () => {
        await expect(firstItem.firstItemTitle).toHaveTextContaining('Sauce Labs Backpack')
        await expect(firstItem.firstItemImg).toBeDisplayed();
        await expect(firstItem.firstItemImg).toHaveAttribute('alt', 'Sauce Labs Backpack')
        await expect(firstItem.firstItemImg).toHaveAttribute('src', '/static/media/sauce-backpack-1200x1500.0a0b85a3.jpg')
        await expect(firstItem.firstItemPrice).toBeDisplayed();
    })

    it('Verify one product url', async () => {
        await firstItem.firstItemClick();
        const currentUrl = await browser.getUrl();
        expect(currentUrl).toEqual('https://www.saucedemo.com/inventory-item.html?id=4');
    })
});
