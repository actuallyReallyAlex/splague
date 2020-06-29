/* eslint-disable no-undef */
/// <reference types="cypress" />

context("Date", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080");
    cy.onboard();
  });

  it("Should display game date", () => {
    cy.get("#open-menu").click();
    cy.get("#date").should("contain.text", "January, 1345 AD");
  });
});
