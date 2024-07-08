import "cypress-real-events/support";

// returning false here prevents Cypress from failing the test on exceptions appearing in browser console
Cypress.on('uncaught:exception', () => false)
