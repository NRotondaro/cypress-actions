declare namespace Cypress {
  interface Chainable {
    /**
     * Navigate to the homepage of our application
     */
    visitHomepage(): Chainable<Element>;

    /**
     * Navigates to the login page of our application
     */
    visitLoginpage(): Chainable<Element>;

    /**
     * Navigates to the feedback page of our application
     */
    visitFeedbackpage(): Chainable<Element>;
  }
}

Cypress.Commands.add('visitHomepage', () => {
  cy.visit('http://zero.webappsecurity.com/');
});

Cypress.Commands.add('visitLoginpage', () => {
  cy.visit('http://zero.webappsecurity.com/login.html');
});

Cypress.Commands.add('visitFeedbackpage', () => {
  cy.visit('http://zero.webappsecurity.com/feedback.html');
});