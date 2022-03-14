const openModal = () => {
  cy.wait(300);
  cy.get('span').contains('Request an invite').click();
  cy.wait(300);
};

const closeModal = () => {
  cy.wait(300);
  cy.get('.ant-modal-close-x').click();
  cy.wait(300);
};

describe('Request an invite from Home page', () => {
  before(() => {
    cy.visit('http://localhost:8000/');
  });

  beforeEach(() => {
    openModal();
  });

  afterEach(() => {
    closeModal();
  });

  it('Should hide the modal when closing', () => {
    closeModal();
    cy.get('[aria-labelledby="rcDialogTitle0"]').should(
      'have.css',
      'display',
      'none',
    );
    openModal();
  });

  it('Should not be allowed to submit empty forms', () => {
    cy.get('span').contains('Send').click();
    cy.contains('Please enter your full name!');
    cy.contains('Please enter your email!');
    cy.contains('Please confirm your email!');
  });

  it('Should reset fields and errors when closing the modal', () => {
    cy.get('#fullName').type('Some dirty text entered');
    cy.wait(300);
    cy.get('#email').type('Should be clean after re-opening the modal');
    closeModal();
    openModal();
    cy.get('.ant-form-item-explain').should('not.exist');
  });

  it('Should throw error when entered email is not in a right format', () => {
    cy.get('#email').type('not.a.correct.email');
    cy.contains('Please enter a correct email!');
  });

  it('Should throw error when entered two emails are not the same', () => {
    cy.get('#email').type('correct.1@airwallex.com');
    cy.wait(300);
    cy.get('#confirmEmail').type('correct.2@airwallex.com');
    cy.contains('The two emails that you entered do not match!');
  });

  it('Should submit the form if all fields are correctly filled', () => {
    cy.get('#fullName').type('John Doe');
    cy.wait(300);
    cy.get('#email').type('john.doe@airwallex.com');
    cy.wait(300);
    cy.get('#confirmEmail').type('john.doe@airwallex.com');
    cy.get('span').contains('Send').click();
    cy.contains('Sending, please wait...');
    // Listen to the actual POST request
    cy.intercept('POST', '**/prod/fake-auth').as('requestInvite');
    cy.wait('@requestInvite', { timeout: 10000 })
      .its('response.statusCode')
      .should('be.oneOf', [200, 304]);
    cy.contains('All done!');
    cy.contains(
      'You will be one of the first to experience Broccoli & Co. when we launch.',
    );
    cy.get('span').contains('OK').should('exist');
    cy.get('span').contains('OK').click();
    cy.wait(300);
    cy.get('[aria-labelledby="rcDialogTitle0"]').should(
      'have.css',
      'display',
      'none',
    );
    openModal();
  });

  it('Should show error when email is used after submitting the form', () => {
    cy.get('#fullName').type('John Doe');
    cy.wait(300);
    cy.get('#email').type('usedemail@airwallex.com');
    cy.wait(300);
    cy.get('#confirmEmail').type('usedemail@airwallex.com');
    cy.wait(300);
    cy.get('span').contains('Send').click();
    cy.contains('Sending, please wait...');

    cy.intercept('POST', '**/prod/fake-auth').as('requestInvite');
    cy.wait('@requestInvite', { timeout: 10000 })
      .its('response.statusCode')
      .should('be.oneOf', [400]);
    cy.contains('Bad Request: Email is already in use');
  });
});
