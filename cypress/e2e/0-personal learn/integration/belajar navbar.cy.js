/// <reference types="cypress" />

describe('Login/ Logout Test',{ testIsolation : false }, () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    });

    it('Should display online banking content', () => {
        cy.get('#onlineBankingMenu').click()
        cy.url().should('include', 'online-banking.html')
        cy.get('h1').should('be.visible')
    });

    it('Should display feedback content', () => {
        cy.get('#feedback').click()
        cy.url().should('include', 'feedback.html')
        cy.get('.signin-controls.form-inputs').should('be.visible')
    });

    it('Should display homepage content', () => {
        cy.contains('Zero Bank').click()
        cy.url().should('include', 'index.html')
        cy.get('h4').should('be.visible')
    });
});


