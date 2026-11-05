
describe('Formulaire de contact - Caractères spéciaux', () => {
  it("Vérifier l'envoi avec des caractères spéciaux", () => {

    cy.visit('http://localhost:3000');

    // Surveiller la requête API
    cy.intercept('POST', '**/api/contact*').as('envoiContact');

    // Nom avec caractères spéciaux
    cy.contains('#contact .inputField', 'Nom')
      .find('input')
      .type('Ben@!')
      .should('have.value', 'Ben@!');

    // Prénom
    cy.contains('#contact .inputField', 'Prénom')
      .find('input')
      .type('Yasmina')
      .should('have.value', 'Yasmina');

    // Type de contact
    cy.get('#contact [data-testid="collapse-button-testid"]').click();

    cy.get('#contact [data-testid="select-testid"] li')
      .contains('Personnel')
      .click();

    cy.get('#contact input[name="select"]')
      .should('have.value', 'Personnel');

    // Email
    cy.contains('#contact .inputField', 'mail')
      .find('input')
      .type('ben@gmail.com')
      .should('have.value', 'ben@gmail.com');

    // Message
    cy.get('#contact textarea[name="field-name"]')
      .type('Bonjour Jad')
      .should('have.value', 'Bonjour Jad');

    // Envoyer le formulaire
    cy.get('#contact input[type="submit"][data-testid="button-test-id"]')
      .click();

    // Vérifier les données envoyées et la réponse API
    cy.wait('@envoiContact').then((requete) => {

      expect(requete.request.body.name).to.eq('Ben@!');
      expect(requete.request.body.contactType).to.eq('Personnel');
      expect(requete.request.body.email).to.eq('ben@gmail.com');
      expect(requete.request.body.message).to.eq('Bonjour Jad');

      expect(requete.response.statusCode).to.eq(201);

    });

  });
});
