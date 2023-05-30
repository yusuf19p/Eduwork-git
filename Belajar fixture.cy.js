/// <reference types="cypress" />

describe('Working with input',{ testIsolation: false },() => {
  it('Visit the website', () => {
      cy.visit('https://www.saucedemo.com/')
  });

  it('Login test', () => {
      cy.fixture("user").then(credentials => {
          const username = credentials.username
          const password = credentials.password

          cy.loginn(username, password)
      });
  });
  it('Checkout Test', () => {
    cy.url().should('include', '/inventory.html')
    cy.get('.inventory_item').first().find('.btn_inventory').click()
    cy.get('.shopping_cart_link').click()
    cy.get('.cart_list').should('be.visible')
    cy.get('.checkout_button').click()
    cy.url().should('include', '/checkout-step-one.html')
  })
});

// Ini costum command nya
// Cypress.Commands.add('loginn', (username, password) =>{
  // cy.clearCookies()
  // cy.clearAllLocalStorage
  // cy.get('#user-name').clear()
  // cy.get('#user-name').type('standard_user')

  // cy.get('input[name="password"]').clear()
  // cy.get('input[name="password"]').type('secret_sauce')

  // cy.get('input[name="login-button"]').click()
// })