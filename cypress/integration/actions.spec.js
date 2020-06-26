/* eslint-disable no-undef */
/// <reference types="cypress" />

context("Actions", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080");
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

  it("Should treat patient", () => {
    cy.get("#location-office").click();
    cy.get("#action-treat-patient").click();
    cy.get("#treatment-remedy").click();
    cy.get("#alert").should("contain.text", "PRESCRIBE REMEDY");
    cy.get("#alert-primary").click();
    cy.get("#alert").should("not.be.visible");
    cy.get("#treatment-operation").click();
    cy.get("#alert").should("contain.text", "PERFORM OPERATION");
    cy.get("#alert-primary").click();
    cy.get("#alert").should("not.be.visible");
    cy.get("#treatment-chat").click();
    cy.get("#alert").should("contain.text", "CHAT");
    cy.get("#alert-primary").click();
    cy.get("#alert").should("not.be.visible");
  });
});
