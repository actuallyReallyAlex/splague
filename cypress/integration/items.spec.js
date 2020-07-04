/* eslint-disable no-undef */
/// <reference types="cypress" />

context.skip("Items", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
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

  it("Should be able to buy an item", () => {
    for (let i = 1; i < 11; i++) {
      cy.get(`#item-${i}-container`).should("exist");
    }
    cy.get("#money").should("contain.text", "50");
    cy.get("#item-1-container > button").click();
    cy.get("#money").should("contain.text", "35");
  });

  it("Should display item progres", () => {
    cy.get("#money").should("contain.text", "50");
    cy.get("#item-1-container > #progress").should("contain.text", "0 / 10");
    cy.get("#item-1-container > button").click();
    cy.get("#item-1-container > #progress").should("contain.text", "1 / 10");
  });
});
