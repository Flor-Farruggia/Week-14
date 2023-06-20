import LoginPage from '../pageobjects/loginPage.js';
import firstItem from '../pageobjects/productPage.js';
import homeHeader from '../pageobjects/homePage.js';
import logOutPage from '../pageobjects/logOutPage.js';
import cartPage from '../pageobjects/cartPage.js';

describe('Check flow application for "standard_user"', () => {
    beforeAll('open browser', () => {
        browser.url('https://www.saucedemo.com/');
    });

    it('Display elements and login', async () => {
        await expect (LoginPage.inputUserName).toBeDisplayed();
        await expect (LoginPage.inputPassword).toBeDisplayed();
        await expect (LoginPage.loginButton).toBeDisplayed();
        await LoginPage.logIn('standard_user', 'secret_sauce');
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
    it('Verify add and remove of products', async () => {
        await firstItem.firstItemClick();
        const currentUrl = await browser.getUrl();
        expect(currentUrl).toEqual('https://www.saucedemo.com/inventory-item.html?id=4');
        await expect(firstItem.firstItemAddButton).toBeDisplayed();
        await firstItem.firstItemButtonClick();
        await expect(firstItem.firstItemRemoveButton).toBeDisplayed();
        await firstItem.firstItemRemoveButtonClick();
        await expect(cartPage.backButton).toBeDisplayed();
        await cartPage.backClick();
    })
    it('Verify add and check of products', async () => {
        const currentUrl = await browser.getUrl();
        expect(currentUrl).toEqual('https://www.saucedemo.com/inventory.html');
        await expect(firstItem.firstItemAddButton).toBeDisplayed();
        await firstItem.firstItemButtonClick();
        await expect(homeHeader.cartIcon).toBeDisplayed();
        await homeHeader.cartIconClick();
        await expect(cartPage.checkoutButton).toBeDisplayed();
        await cartPage.checkoutClick();
        await expect(cartPage.inputFormName).toBeDisplayed();
        await expect(cartPage.inputFormLastName).toBeDisplayed();
        await expect(cartPage.inputFormZip).toBeDisplayed();
        await expect(cartPage.continueButton).toBeDisplayed();
        await cartPage.formData('Flor', 'Farru', '1234');
        await cartPage.continueButtonClick();
        await expect(cartPage.finishButton).toBeDisplayed();
        await cartPage.finishButtonClick();
        await expect(cartPage.backHomeButton).toBeDisplayed();
        await cartPage.backHomeClick();
    })
    it('Verify add and check of products', async () => {
        await expect(logOutPage.menuButton).toBeDisplayed();
        await logOutPage.menuClick();
        await expect(logOutPage.logOutButton).toBeDisplayed();
        await logOutPage.logOutClick();
    });
});
