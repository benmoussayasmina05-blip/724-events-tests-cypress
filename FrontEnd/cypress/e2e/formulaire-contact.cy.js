describe('Formulaire de contact 724 Events', () => {
  it("Vérifier l'envoi du formulaire", () => {
    cy.visit('http://localhost:3000');

    // On surveille la requête envoyée à l'API
    cy.intercept('POST', '**/api/contact').as('envoiContact');

    // Nom
    cy.contains('#contact .inputField', 'Nom')
      .find('input').type('Ben')
      .should('have.value', 'Ben');

    // Prénom
    cy.contains('#contact .inputField', 'Prénom')
      .find('input').type('Yasmina')
      .should('have.value', 'Yasmina');

    // Type de contact : ouvrir la liste, cliquer sur l'option Personnel
    cy.get('#contact [data-testid="collapse-button-testid"]').click();
    cy.get('#contact [data-testid="select-testid"] li')
      .contains('Personnel')
      .click();

    // Vérifier que le choix est bien enregistré dans la case cachée
    cy.get('#contact input[name="select"]')
      .should('have.value', 'Personnel');

    // E-mail
    cy.contains('#contact .inputField', 'mail')
      .find('input').type('ben@gmail.com')
      .should('have.value', 'ben@gmail.com');

    // Message
    cy.get('#contact textarea[name="field-name"]')
      .type('Bonjour Jad')
      .should('have.value', 'Bonjour Jad');

    // Envoyer
    cy.get('#contact input[type="submit"][data-testid="button-test-id"]')
      .click();

    // Vérifier ce qui part vers l'API
    cy.wait('@envoiContact').then((requete) => {
      expect(requete.request.body.contactType, 'type de contact').to.eq('Personnel');
      expect(requete.request.body.email, 'email envoyé').to.eq('ben@gmail.com');
      expect(requete.request.body.message, 'message envoyé').to.eq('Bonjour Jad');
      expect(requete.response.statusCode, 'réponse API').to.eq(201);
    });

    // Vérifier l'écran
    cy.contains('Message envoyé !').should('be.visible');
  });
});