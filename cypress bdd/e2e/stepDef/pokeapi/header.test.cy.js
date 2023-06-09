///<reference types="cypress" />
describe('Validate Header and Response Body', () => {

  it('Successfully validate content-type', () => {
    cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
    cy.get('@pokemon').its('headers').its('content-type')
      .should('include', 'application/json; charset=utf-8')
  });

  it('Successfully validate response body', () => {
    cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')  
    cy.get('@pokemon').its('body').then((responseBody) => {
      expect(responseBody).to.have.property('name', 'ditto')
      expect(responseBody).to.have.property('height').that.is.a('number')
      expect(responseBody).to.have.property('weight').that.is.a('number')
      });
  });
});
