
describe('Filtrage des réalisations', () => {

  it('Vérifier le filtre Conférence', () => {

    cy.visit('http://localhost:3000/#nos-realisations');

    // Ouvrir la liste des catégories
    cy.get('#nos-realisations [data-testid="collapse-button-testid"]')
      .click();

    // Sélectionner Conférence
    cy.get('#nos-realisations [data-testid="select-testid"] li')
      .contains(/conférence/i)
      .click();

    // Vérifier la catégorie sélectionnée
    cy.get('#nos-realisations input[name="select"]')
      .should('have.value', 'conférence');

    // Vérifier les catégories des cartes affichées
    cy.get('#nos-realisations [data-testid="card-testid"]')
      .should('have.length.greaterThan', 0)
      .each(($carte) => {
        cy.wrap($carte)
          .contains(/conférence/i)
          .should('be.visible');
      });

  });

});
