
describe('API Inscription 724 Events', () => {

  // TEST 1 : Inscription avec des données valides
  it('Vérifier que POST inscription accepte un nom en lettres', () => {

    cy.request({
      method: 'POST',
      url: 'http://localhost:8080/api/inscription/',
      failOnStatusCode: false,
      body: {
        eventId: '6ade74b5d066e870054a34ea',
        name: 'John',
        surname: 'Doe',
        email: 'johndoe@test.tld',
        date: '2027-05-14T00:00:00.000Z'
      }
    }).then((response) => {

      expect(
        response.status,
        JSON.stringify(response.body)
      ).to.eq(201);

    });

  });

  // TEST 2 : Inscription sans adresse e-mail
  it('Vérifier que POST inscription refuse une demande sans email', () => {

    cy.request({
      method: 'POST',
      url: 'http://localhost:8080/api/inscription/',
      failOnStatusCode: false,
      body: {
        eventId: '6ade74b5d066e870054a34ea',
        name: 'John',
        surname: 'Doe',
        date: '2027-05-14T00:00:00.000Z'
      }
    }).then((response) => {

      expect(response.status).to.eq(400);

      // Vérifier que le rejet concerne bien l'email manquant
      expect(JSON.stringify(response.body).toLowerCase())
        .to.include('email');

    });

  });

});

