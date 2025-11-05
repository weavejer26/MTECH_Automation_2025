import { $ } from '@wdio/globals'
import Page from './page.js';
import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get productsContainer() {
        return $('#inventory_container');
   }

//BurgerMenu
    get allItems() {
        return $('.bm-item-list a');
    }
    get aboutLink() {
        return $('#about_sidebar_link');
    }
    get logoutLink() {
        return $('#logout_sidebar_link');
    }

    async burgerMenuVisible() {
        await this.openBurgerMenu();

        await expect(this.aboutLink).toBeDisplayed();
    
    return this;
    }

    //About link
    async aboutLinkHref() {
        await expect(this.aboutLink).toHaveAttr('href', 'https://saucelabs.com/');
    }

    //logout
    async logout() {
        await this.openBurgerMenu();
        
        await this.logoutLink.click();
    }
};

export default new SecurePage();
