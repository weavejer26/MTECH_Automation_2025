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

//standard_user, missing letter in username
describe('My Login application', () => {
    it('should display error message for locked out user', async () => {
        await LoginPage.open()

        await LoginPage.login('standar_user', 'secret_sauce')
        await expect(SecurePage.errorMessage).toBeDisplayed()
        await expect(SecurePage.errorMessage).toHaveText("Epic sadface: Username and password do not match any user in this service")
    })
})

//problem_user, wrong password
describe('My Login application', () => {
    it('should display error message for wrong credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('problem_user', 'known_sauce')
        await expect(SecurePage.errorMessage).toBeDisplayed()
        await expect(SecurePage.errorMessage).toHaveText("Epic sadface: Username and password do not match any user in this service")
    })
})

//performance_glitch_user, "-" used instead of "_" in username
describe('My Login application', () => {
    it('should display error message for wrong credentials', async () => {
        await LoginPage.open()

        await LoginPage.login( 'performance_glitch-user', 'secret_sauce')
        await expect(SecurePage.errorMessage).toBeDisplayed()
        await expect(SecurePage.errorMessage).toHaveText("Epic sadface: Username and password do not match any user in this service")
    })
})

//error_user, no "_" in username
describe('My Login application', () => {
    it('should display error message for wrong credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('erroruser', 'secret_sauce')
        await expect(SecurePage.errorMessage).toBeDisplayed()
        await expect(SecurePage.errorMessage).toHaveText("Epic sadface: Username and password do not match any user in this service")
    })
})

//visual user, username misspelled
describe('My Login application', () => {
    it('should display error message for wrong credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('viusal_user', 'secret_sauce')
        await expect(SecurePage.errorMessage).toBeDisplayed()
        await expect(SecurePage.errorMessage).toHaveText("Epic sadface: Username and password do not match any user in this service")
    })
})