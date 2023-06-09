///<reference types="cypress" />
describe('Validate Response Body', () => {
    it('Successfully validate response body', () => {
      cy.request('https://pokeapi.co/api/v2/pokemon/ditto').then((response) => {
        expect(response.body.abilities[0].ability.name).to.eq('limber');
        expect(response.body.abilities[0].ability.url).to.eq('https://pokeapi.co/api/v2/ability/7/');
      });
    });
  });
  