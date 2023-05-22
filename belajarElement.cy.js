/// <reference types="cypress" />

describe('Working with input',{ testIsolation: false },() => {
    it('Visit the website', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include', 'login.html')
    });
    it('Should fill checkbox', () => {                       
        cy.get('#user_remember_me').check()
    });
});
