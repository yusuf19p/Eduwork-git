/// <reference types="cypress" />

describe('Saucedemo Automation Test', () => {
    beforeEach(() => {
      cy.visit('https://www.saucedemo.com/')
    })
  
    it('should login successfully', () => {
      cy.get('#user-name').type('standard_user')
      cy.get('#password').type('secret_sauce')
      cy.get('#login-button').click()
  
      cy.url().should('include', '/inventory.html')
      cy.get('.product_label').should('be.visible')
    })
  
    it('should browse and add products to cart', () => {
      cy.get('.inventory_item')
        .eq(0)
        .find('.btn_inventory')
        .click()
      cy.get('.inventory_item')
        .eq(1)
        .find('.btn_inventory')
        .click()
      cy.get('.inventory_item')
        .eq(2)
        .find('.btn_inventory')
        .click()
  
      cy.get('.shopping_cart_badge').should('have.text', '3')
      cy.get('.shopping_cart_link').click()
  
      cy.url().should('include', '/cart.html')
      cy.get('.cart_item').should('have.length', 3)
    })
  
    it('should checkout successfully', () => {
      cy.get('.checkout_button').click()
  
      cy.url().should('include', '/checkout-step-one.html')
      cy.get('#first-name').type('John')
      cy.get('#last-name').type('Doe')
      cy.get('#postal-code').type('12345')
  
      cy.get('.cart_button').click()
  
      cy.url().should('include', '/checkout-step-two.html')
      cy.get('.summary_info').should('be.visible')
  
      cy.get('.cart_button').click()
  
      cy.url().should('include', '/checkout-complete.html')
      cy.get('.complete-header').should('have.text', 'THANK YOU FOR YOUR ORDER')
    })
  
    it('should logout successfully', () => {
      cy.get('#react-burger-menu-btn').click()
      cy.get('#logout_sidebar_link').click()
  
      cy.url().should('include', '/index.html')
      cy.get('#user-name').should('be.visible')
    })
  })
  