describe('Page accueil 724 Events', () => {
  it("Vérifier le chargement de la page d'accueil", () => {
    cy.visit('http://localhost:3000')
    cy.contains('Nos réalisations').should('be.visible');
    cy.get('[data-testid="card-testid"]').first().should('be.visible');
  })
})