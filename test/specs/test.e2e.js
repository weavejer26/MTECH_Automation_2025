import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'

//POSITIVE

//standard_user
describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('standard_user', 'secret_sauce')
        await expect(SecurePage.productsContainer).toBeDisplayed()
    })
})

//problem_user
describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('problem_user', 'secret_sauce')
        await expect(SecurePage.productsContainer).toBeDisplayed()
    })
}) 

//performance_glitch_user
describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('performance_glitch_user', 'secret_sauce')
        await expect(SecurePage.productsContainer).toBeDisplayed()
    })
})

//error_user
describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('error_user', 'secret_sauce')
        await expect(SecurePage.productsContainer).toBeDisplayed()
    })
})

//visual_user
describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('visual_user', 'secret_sauce')
        await expect(SecurePage.productsContainer).toBeDisplayed()
    })
})



//NEGATIVE

//locked_out_user

describe('My Login application', () => {
    it('should display error message for locked out user', async () => {
        await LoginPage.open()

        await LoginPage.login('locked_out_user', 'secret_sauce')
        await expect(SecurePage.errorMessage).toBeDisplayed()
        await expect(SecurePage.errorMessage).toHaveText("Epic sadface: Sorry, this user has been locked out.")
    })
})