
describe('Footer - Lien vers la dernière prestation', () => {

  it('Ouvrir la page de détail depuis le footer', () => {

    // 1. Ouvrir la page d'accueil
    cy.visit('http://localhost:3000');

    // 2. Vérifier la présence de la carte du footer
    cy.get('footer .presta [data-testid="card-testid"]')
      .should('be.visible');

    // 3. Cliquer sur la carte
    cy.get('footer .presta [data-testid="card-testid"]')
      .click();

    // 4. Vérifier que la page de détail s'ouvre
    cy.location('pathname')
      .should('match', /^\/event\/[^/]+$/);

    // 5. Vérifier que les informations de l'événement sont visibles
    cy.get('.Event__infocontainer')
      .should('be.visible');

  });

});

