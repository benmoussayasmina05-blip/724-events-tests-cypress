
describe('Navigation du menu depuis un événement', () => {

  it('Rediriger vers Nos réalisations sur l’accueil', () => {

    cy.visit('http://localhost:3000/event/6ade74b5d066e870054a34eb');

    // Cliquer sur le lien du menu
    cy.contains('header a', 'Nos réalisations').click();

    // Vérifier que nous sommes sur la page d'accueil
    cy.location('pathname')
      .should('eq', '/');

    // Vérifier la bonne rubrique
    cy.location('hash')
      .should('eq', '#nos-realisations');

  });

});
