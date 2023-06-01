// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('loginn', (username, password) =>{
  cy.clearCookies()
  cy.clearAllLocalStorage
  cy.get('#user-name').clear()
  cy.get('#user-name').type('standard_user')

  cy.get('input[name="password"]').clear()
  cy.get('input[name="password"]').type('secret_sauce')

  cy.get('input[name="login-button"]').click()
})