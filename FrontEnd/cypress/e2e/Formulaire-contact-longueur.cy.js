
describe('Formulaire de contact - Longueur du nom', () => {
  it('Vérifier la saisie de 200 caractères', () => {

    cy.visit('http://localhost:3000');

    // Générer un nom de 200 caractères
    const nomLong = 'A'.repeat(200);

    // Saisir le nom et vérifier sa longueur
    cy.contains('#contact .inputField', 'Nom')
      .find('input')
      .type(nomLong)
      .should('have.value', nomLong);

  });
});
