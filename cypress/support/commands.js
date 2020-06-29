/* eslint-disable no-undef */
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

Cypress.Commands.add("onboard", () => {
  cy.get("#story").should("have.text", "Welcome to Splague!");
  cy.get("#story-0").click();
  cy.get("#story").should(
    "have.text",
    "You are a level headed doctor of medicine living in Western Europe. Above all else, you desire to help others. The year is 1345."
  );
  cy.get("#story-1").click();
  cy.get("#story").should(
    "have.text",
    "... the Black Plague starts in 1346. Good luck."
  );
  cy.get("#story-2").click();
  cy.get("#story").should("have.text", "12 months before death...");
});
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
