
describe('Formulaire de contact - Présence des éléments', () => {
  it('Vérifier la visibilité des champs et du bouton Envoyer', () => {

    cy.visit('http://localhost:3000');

    // 1. Champ Nom
    cy.contains('#contact .inputField', 'Nom')
      .find('input')
      .should('be.visible');

    // 2. Champ Prénom
    cy.contains('#contact .inputField', 'Prénom')
      .find('input')
      .should('be.visible');

    // 3. Type de contact
    cy.get('#contact [data-testid="select-testid"]')
      .should('be.visible');

    // 4. Champ E-mail
    cy.contains('#contact .inputField', 'mail')
      .find('input')
      .should('be.visible');

    // 5. Champ Message
    cy.get('#contact textarea[name="field-name"]')
      .should('be.visible');

    // 6. Bouton Envoyer
    cy.get('#contact input[type="submit"][data-testid="button-test-id"]')
      .should('be.visible');

  });
});
