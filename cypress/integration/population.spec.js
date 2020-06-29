/* eslint-disable no-undef */
/// <reference types="cypress" />

context.skip("Population", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080");
  });

  it("Should display world population", () => {
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
