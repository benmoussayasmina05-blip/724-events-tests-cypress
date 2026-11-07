
describe('2.EXPL-FORM - Champs contenant uniquement des espaces', () => {

  it('Refuser un nom composé uniquement d’espaces', () => {

    cy.visit('http://localhost:3000');

    cy.intercept('POST', '**/api/contact*').as('envoiContact');

    // Nom composé uniquement d'espaces
    cy.contains('#contact .inputField', 'Nom')
      .find('input')
      .type('     ');

    // Prénom valide
    cy.contains('#contact .inputField', 'Prénom')
      .find('input')
      .type('Yasmina');

    // Type de contact
    cy.get('#contact [data-testid="collapse-button-testid"]')
      .click();

    cy.get('#contact [data-testid="select-testid"] li')
      .contains('Personnel')
      .click();

    // E-mail valide
    cy.contains('#contact .inputField', 'mail')
      .find('input')
      .type('test@example.com');

    // Message valide
    cy.get('#contact textarea[name="field-name"]')
      .type('Demande de renseignements');

    // Soumission
    cy.get('#contact input[type="submit"]')
      .click();

    // Vérifier la réponse réelle de l'API
    cy.wait('@envoiContact').then(({ request, response }) => {

      expect(request.body.name.trim()).to.eq('');

      // Un nom composé uniquement d'espaces doit être refusé
      expect(response.statusCode).to.eq(400);

    });

  });

});
