/* eslint-disable no-undef */
/// <reference types="cypress" />

context("Population", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080");
    cy.onboard();
  });

  it("Should display world population", () => {
    cy.get("#alive-population").should(
      "have.text",
      "Alive Population - 443,000,000"
    );
    cy.get("#dead-population").should("have.text", "Dead Population - 0");
    cy.get("#infected-population").should(
      "have.text",
      "Infected Population - 0"
    );
    // * Death / Growth Rate
    cy.wait(10000);
    cy.get("#alive-population").should(
      "have.text",
      "Alive Population - 443,001,772"
    );
    cy.get("#dead-population").should("have.text", "Dead Population - 443");
  });
});
