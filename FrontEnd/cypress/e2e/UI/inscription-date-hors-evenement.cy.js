
describe('Inscription - Dates hors événement', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/event/6ade74b5d066e870054a34eb');
  });

  it("Vérifier la sélection d'une date avant l'événement", () => {

    cy.get('#date')
      .clear()
      .type('2027-06-09')
      .should('have.value', '2027-06-09');

  });

  it("Vérifier la sélection d'une date après l'événement", () => {

    cy.get('#date')
      .clear()
      .type('2027-06-13')
      .should('have.value', '2027-06-13');

  });

});
