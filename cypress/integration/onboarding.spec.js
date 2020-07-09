/* eslint-disable no-undef */
/// <reference types="cypress" />

context("Onboarding", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Should onboard user", () => {
    cy.onboard();
  });

  it("Should not progress date while onboarding", () => {
    cy.get("body").should("contain.text", "Welcome to Splague!");
    cy.wait(61000);
    cy.get("body").should("contain.text", "Welcome to Splague!");
  });
});
