
describe('Carrousel - Navigation entre les événements', () => {

  it('Changer de diapositive sans ouvrir un événement', () => {

    cy.visit('http://localhost:3000');

    // Vérifier que le carrousel est affiché
    cy.get('.SlideCard--display')
      .should('be.visible');

    // Mémoriser le lien de l'événement affiché
    cy.get('.SlideCard--display')
      .invoke('attr', 'href')
      .then((lienInitial) => {

        // Cliquer sur la pagination de la diapositive visible
        cy.get('.SlideCard--display .SlideCard__paginationContainer')
          .should('be.visible')
          .click();

        // Vérifier que nous restons sur l'accueil
        cy.location('pathname')
          .should('eq', '/');

        // Vérifier que l'événement affiché a changé
        cy.get('.SlideCard--display')
          .invoke('attr', 'href')
          .should('not.eq', lienInitial);

      });

  });

});

