/// <reference types="cypress" />

describe('Working with input',{ testIsolation: false },() => {
    it('Visit the website', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
    });
  
    it('Login', () => {
        cy.fixture("user").then(user => {
            const username = user.username
            const password = user.password
            
            cy.login(username, password)

            // cy.makePayment('sprint', 'Savings', '100')
        });
    });
    it('Payment Test', () => {
        cy.makePayment()
     })
  });

  // Ini format costum command nya
//   Cypress.Commands.add('login', (username, password) =>{
    // cy.clearCookies()
    // cy.clearAllLocalStorage
    // cy.get('#user_login').clear()
    // cy.get('#user_login').type('username')

    // cy.get('input[name="user_password"]').clear()
    // cy.get('input[name="user_password"]').type('password')

    // cy.get('input[name="submit"]').click()
    // cy.get('#pay_bills_tab').click()
// })

// Cypress.Commands.add('makePayment', (payee, account, amount) => {
    // cy.get('#sp_payee').select('Sprint')
    // cy.get('#sp_account').select('Checking')
    // cy.get('#sp_amount').type('100')
    // cy.get('#sp_date').type('2023-05-30')
    // cy.get('#pay_saved_payees').click()
//   });