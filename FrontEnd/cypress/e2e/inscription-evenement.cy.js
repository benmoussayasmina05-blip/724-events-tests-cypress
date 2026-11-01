
describe("Inscription à un événement 724 Events", () => {
  it("Vérifier l'inscription à un événement à venir", () => {

    cy.visit('http://localhost:3000');

    cy.get('a.SlideCard--display').click();

    cy.get('.Event__infocontainer').should('be.visible');

    cy.get('input[name="field-name"]').first().type('Benmoussa');

    cy.get('input[name="field-name"]').eq(1).type('Yasmina');

    cy.get('input[type="date"]').should('not.have.value', '');

    cy.get('input[name="field-name"]').eq(2).type('ben@gmail.com');

    cy.get('.Event form input[type="submit"]').click();

    cy.contains('Merci pour votre inscription !').should('be.visible');

  });
});
