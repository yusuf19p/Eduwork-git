/// <reference types="cypress" />

describe('Saucedemo All Process',{ testIsolation : false }, () => {
    before(() => {
        cy.visit('https://www.saucedemo.com/')
    });
  
    it('Should try to login', () => {
        cy.fixture("user").then(credentials => {
            const username = credentials.username
            const password = credentials.password
  
            cy.get('#user-name').clear()
            cy.get('#user-name').type('standard_user')

            cy.get('input[name="password"]').clear()
            cy.get('input[name="password"]').type('secret_sauce')

            cy.get('input[name="login-button"]').click()
            cy.url().should('include', '/inventory.html')
        });
    });
    it('Should try to browse and add products to cart', () => {
        cy.get('.inventory_item').eq(0).find('.btn_inventory').click()
        cy.get('.inventory_item').eq(1).find('.btn_inventory').click()
        cy.get('.inventory_item').eq(2).find('.btn_inventory').click()
    
        cy.get('.shopping_cart_badge').should('contain.text', '3')
        cy.get('.shopping_cart_link').click()
    
        cy.url().should('include', '/cart.html')
        cy.get('.cart_item').should('have.length', 3)
      });

    it('Should try to checkout', () => {
      cy.get('.checkout_button').click()
      cy.url().should('include', '/checkout-step-one.html')
      cy.get('#first-name').type('Muhammad')
      cy.get('#last-name').type('Yusuf')
      cy.get('#postal-code').type('17510')
  
      cy.get('.cart_button').click()
  
      cy.url().should('include', '/checkout-step-two.html')
      cy.get('.summary_info').should('be.visible')
  
      cy.get('.cart_button').click()
  
      cy.url().should('include', '/checkout-complete.html')
      cy.get('.complete-header').should('contain.text', 'Thank you for your order!')
    })
  });