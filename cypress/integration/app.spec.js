/// <reference types="Cypress" />

describe('App searching for movies', function() {
    it('visits App page', function() {
        cy.visit('/');
    });
    
    it('.type() - type into a DOM element', () => {
      cy.get('.input')
        .clear()
        .type('Narnia').should('have.value', 'Narnia');
    });

    it('.click() - click on a DOM element', () => {
        cy.get('[data-searchby="title"]').click();
    });
  
    it('.submit() - submit a form', () => {
      cy.get('.search-form').submit();
      cy.wait(500);
      cy.get('.movie-card');
      cy.get('.movie-details');
    });
  })
  