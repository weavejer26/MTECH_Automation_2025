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
   };

//Shopping Cart, This test will use the Sauce Labs Backpack

   get cartBadge() {
    return $('//span[@class="shopping_cart_badge"]');
   }

   get addToCartButton () { 
    return $('button[data-test^="add-to-cart-sauce-labs-backpack"]');
   }

   get cartIcon() {
    return $('a.shopping_cart_link');
   }

   get removeButton() {
    return $('button[data-test^="remove-sauce-labs-backpack"]');
   }

   get cartitemContainer() {
    return $('#item_4_title_link');
   }

   async addProductBackpack() {
        await this.addToCartButton.click();
        
        await expect(this.cartBadge).toHaveText('1');
    }
    
    async viewCart() {
        await this.cartIcon.click();
        
        await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html');
    }

    async removeProductBackpack() {
        await this.removeButton.click();
        await expect(this.cartitemContainer).not.toBeDisplayed();
        await expect(this.cartBadge).not.toBeDisplayed();
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
