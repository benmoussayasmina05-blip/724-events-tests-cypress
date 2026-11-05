
describe('Inscription - Présence des éléments', () => {

  it('Vérifier les informations et le formulaire', () => {

    cy.visit('http://localhost:3000/event/6ade74b5d066e870054a34eb');

    // 1. Titre de l'événement
    cy.contains('Sneakercraze market')
      .should('be.visible');

    // 2. Dates de l'événement
    cy.contains('10-11-12 juin')
      .should('be.visible');

    // 3. Description
    cy.contains('Rencontres de spécialistes des Sneakers Européens.')
      .should('be.visible');

    // 4. Nombre de participants
    cy.contains('2000 participants')
      .should('be.visible');

    // 5. Prestations
    cy.contains('Prestations')
      .should('be.visible');

    // 6. Champs Nom, Prénom et E-mail
    cy.get('.Event form input[name="field-name"]')
      .should('have.length', 3)
      .each(($champ) => {
        cy.wrap($champ).should('be.visible');
      });

    // 7. Champ Date
    cy.get('#date')
      .should('be.visible');

    // 8. Bouton Envoyer
    cy.get('.Event form input[type="submit"]')
      .should('be.visible');

  });

});

