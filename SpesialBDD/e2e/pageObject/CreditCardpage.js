/// <reference types ="cypress" />

const URL = 'https://demo.midtrans.com/';
const BUY_NOW = '.btn.buy';
const CHECKOUT = '.cart-checkout';
const CREDIT_BUTTON = '.list';
const CARD_NUMBER = '.card-number-input-container';
const EXPIRATION_DATE = '#card-expiry-cvv';
const CARD_CVV = '#card-cvv';
const PAY_NOW = '.btn.full.primary.btn-theme';
const PASSWORD = '#otp';
const OK = '.btn.btn-sm.btn-success';

class CreditCard {
    static visit() {
        cy.visit(URL);
    }

    static clickBuyNow() {
        cy.contains(BUY_NOW).click();
    }

    static clickCheckout() {
        cy.contains(CHECKOUT).click();
    }  

    static clickCreditButton() {
        cy.contains(CREDIT_BUTTON).click();
    }

    static fillCardNumber(number) {
        cy.get(CARD_NUMBER).type(number);
    }

    static fillExpirationDate(date) {
        cy.get(EXPIRATION_DATE).type(date);
    }

    static fillCvvNumber(cvv) {
        cy.get(CARD_CVV).type(cvv);
    }

    static clickPayNow() {
        cy.contains(PAY_NOW).click();
    }

    static fillPassword(password) {
        cy.get(PASSWORD).type(password);
    }

    static clickOk() {
        cy.contains(OK).click();
    }
}

export default CreditCard
