/// <reference types="cypress" />

describe('Searchbox Test',{ testIsolation : false }, function() {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('Should type into searchbox and submit', () => {
        cy.get('#searchTerm').type('online {enter}')
    });

    it('Should display the first result', () => {
        cy.get('a[href*="/online-banking.html"]').should('contain.text', 'Zero - Free Access to Online Banking')
    });

    it('Should display the second result', () => {
        cy.get('a[href*="/bank/online-statements.html"]').should('contain.text', 'Zero - Online Statements')
    });
    
    it('Should display online banking content', () => {
        cy.get('a[href*="/online-banking.html"]').click()
        cy.get('h1').should('be.visible')
        cy.url().should('include', 'online-banking.html')
    });
});

