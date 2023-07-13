import CreditCardSuccess from './CreditCardSuccess.page'
const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor')

Given('I am on the homepage', () => {
    CreditCardSuccess.visit()
})

When('I click on buy now', () => {
    CreditCardSuccess.clickBuyNow()
})

When('I click on checkout', () => {
    CreditCardSuccess.clickCheckout()
})

When('I click on credit card payment option', () => {
    CreditCardSuccess.clickCreditButton()
})

When('I fill card number with {integer}', cardNumber => {
    CreditCardSuccess.fillCardNumber(cardNumber)
})

When(' fill expiration date with {integer}', date => {
    CreditCardSuccess.fillExpirationDate(date)
})

When('I fill cvv with {integer}', cvv => {
    CreditCardSuccess.fillCvvNumber(cvv)
})

When('I click on pay now', () => {
    CreditCardSuccess.clickPayNow()
})

When('I fill password with {integer}', password => {
    CreditCardSuccess.fillPassword(password)
})

When('I click on ok', () => {
    CreditCardSuccess.clickOk()
})

Then('I should see successfull payment message', () => {
    cy.get('.text-headline.medium').should('be.visible')
})

Then('I should see error message', () => {
    cy.get('.card-warning.text-failed').should('be.visible')
});