
describe('3.EXPL-FORM - Validation du format des e-mails', () => {

  it('Refuser une adresse e-mail invalide', () => {

    // 1. Ouvrir le site
    cy.visit('http://localhost:3000');

    // 2. Intercepter la requête API Contact
    cy.intercept('POST', '**/api/contact*').as('envoiContact');

    // 3. Remplir le nom
    cy.contains('#contact .inputField', 'Nom')
      .find('input')
      .type('Benmoussa');

    // 4. Remplir le prénom
    cy.contains('#contact .inputField', 'Prénom')
      .find('input')
      .type('Yasmina');

    // 5. Sélectionner le type de contact
    cy.get('#contact [data-testid="collapse-button-testid"]')
      .click();

    cy.get('#contact [data-testid="select-testid"] li')
      .contains('Personnel')
      .click();

    // 6. Saisir une adresse e-mail invalide
    cy.contains('#contact .inputField', 'mail')
      .find('input')
      .type('test@')
      .should('have.value', 'test@');

    // 7. Remplir le message
    cy.get('#contact textarea[name="field-name"]')
      .type('Demande de renseignements');

    // 8. Envoyer le formulaire
    cy.get('#contact input[type="submit"]')
      .click();

    // 9. Vérifier la réponse de l'API
    cy.wait('@envoiContact').then(({ request, response }) => {

      // Vérifier la valeur envoyée
      expect(request.body.email).to.eq('test@');

      // L'API devrait refuser l'adresse invalide
      expect(response.statusCode).to.eq(400);

    });

  });

});

