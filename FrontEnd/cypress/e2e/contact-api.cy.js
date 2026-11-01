
describe('API Contact 724 Events', () => {

  // TEST 1 : Requête avec des données valides
  it('Vérifier que POST contact retourne le statut 201', () => {

    cy.request({
      method: 'POST',
      url: 'http://localhost:8080/api/contact/',
      body: {
        name: 'Doe',
        surname: 'Jhon',
        contactType: 'Personnel',
        email: 'johndoe@test.tld',
        message: 'Exemple de message'
      }
    }).then((response) => {

      expect(response.status).to.eq(201);

      expect(response.body.message).to.eq(
        'Merci de nous avoir contacté !'
      );

    });

  });

  // TEST 2 : Requête avec des champs obligatoires manquants
  it('Vérifier que POST contact retourne 400 si des champs sont manquants', () => {

    cy.request({
      method: 'POST',
      url: 'http://localhost:8080/api/contact/',
      body: {
        email: 'johndoe@test.tld'
      },
      failOnStatusCode: false
    }).then((response) => {

      expect(response.status).to.eq(400);

    });

  });

});

