describe('Main page', () => {

  beforeEach(() => {
    cy.fixture("mockData.json").as("mockData")
      .intercept('GET', 'http://localhost:3001/api/v1/reservations', {
        statusCode: 200,
        fixture: "mockData"
      })
      .visit('http://localhost:3000');
  });

  it('should display a title', () => {
    cy.contains('h1', 'Turing Cafe Reservations');
  });

  it('should see 3 reservations', () => {
    cy.get('.reservations-container')
      .get('.card').should("have.length", 3);
  });
  
  it('should have a form searchbar that takes in a Name', () => {
    cy.get('form')
      .get(".name")
      .type("Mark")
      .should('have.value', 'Mark')
  });

  it('should have a form searchbar that takes in a Date', () => {
    cy.get('form')
      .find(".date")
      .type("2023-05-31")
      .should('have.value', '2023-05-31')
  });

  it('should have a form searchbar that takes in a Time', () => {
    cy.get('form')
      .find(".time")
      .type("17:30")
      .should('have.value', '17:30')
  });

  it('should have a form searchbar that takes in a Number of Guests', () => {
    cy.get('form')
      .find(".number")
      .type("7")
      .should('have.value', '07')
  });

  it('should make a reservation', () => {
    cy.get('form')
      .get("button").click()
  });

  it('should show an error message', () => {
    {
      cy.intercept({
        method: 'GET',
        url: 'http://localhost:3001/api/v1/reservatio'
      },
        {
          statusCode: 500,
          body: {
            message: `Error`
          }
        })
        .visit('http://localhost:3000');
    }
});


})