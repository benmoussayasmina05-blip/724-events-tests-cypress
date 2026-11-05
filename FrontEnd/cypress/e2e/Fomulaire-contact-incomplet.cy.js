describe('Formulaire de contact - Champs manquants', () => {
  it('Vérifier le refus du formulaire incomplet', () => {

    cy.visit('http://localhost:3000');

    // Renseigner uniquement le nom
    cy.contains('#contact .inputField', 'Nom')
      .find('input')
      .type('Ben');

    // Vérifier que le bouton d'envoi est présent
    cy.get('#contact input[type="submit"][data-testid="button-test-id"]')
      .should('exist');

    // Cliquer sur Envoyer
    cy.get('#contact input[type="submit"][data-testid="button-test-id"]')
      .click();

    // Vérifier que le formulaire n'affiche pas de confirmation
    cy.contains('Message envoyé !').should('not.exist');

  });
});