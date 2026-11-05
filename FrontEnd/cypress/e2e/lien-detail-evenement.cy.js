
describe('Navigation vers le détail d’un événement', () => {

  it('Ouvrir la bonne page de détail depuis le carrousel', () => {

    cy.visit('http://localhost:3000');

    // Récupérer le lien de l'événement affiché
    cy.get('a.SlideCard--display')
      .should('be.visible')
      .invoke('attr', 'href')
      .then((lienEvenement) => {

        // Vérifier que le lien mène à un événement
        expect(lienEvenement).to.match(/^\/event\/[^/]+$/);

        // Cliquer sur la carte de l'événement
        cy.get('a.SlideCard--display').click();

        // Vérifier l'URL de destination
        cy.location('pathname')
          .should('eq', lienEvenement);

        // Vérifier la présence des informations de l'événement
        cy.get('.Event__infocontainer')
          .should('be.visible');

      });

  });

});
