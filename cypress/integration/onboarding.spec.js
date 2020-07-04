/* eslint-disable no-undef */
/// <reference types="cypress" />

context("Onboarding", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Should onboard user", () => {
    cy.get("body").should("contain.text", "Welcome to Splague!");
    cy.get("#story-0").click();
    cy.get("body").should(
      "contain.text",
      "You are a level headed doctor of medicine living in Western Europe. Above all else, you desire to help others. The year is 1345."
    );
    cy.get("#story-1").click();
    cy.get("body").should(
      "contain.text",
      "... the Black Plague starts in 1346. Good luck."
    );
    cy.get("#story-2").click();

    cy.get("#current-location").should("contain.text", "home");
  });
});
