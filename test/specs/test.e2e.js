import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'

//LOGIN

//standard_user
describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        
        await expect(SecurePage.productsContainer).toBeDisplayed();
    });

//Burger Menu
    it('Should open the burger menu from inventory page', async () => {
        //Login
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');

        await expect(SecurePage.productsContainer).toBeDisplayed();
        
        //Open Menu
        await SecurePage.openBurgerMenu();
    });

//About URL

    it('Should have About URL work without navigating to it', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');

        await SecurePage.burgerMenuVisible();

        await SecurePage.aboutLinkHref();
    }); 
//Logout
    it('Should successfully logout from burger menu', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');

        await SecurePage.logout();
    })
    
});