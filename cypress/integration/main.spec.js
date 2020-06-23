/// <reference types="cypress" />

context("Splague", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080");
  });

  it("Should display correct content", () => {
    cy.get("body").should("contain.text", "splague");
    for (let i = 1; i < 11; i++) {
      cy.get(`#item-${i}-container`).should("exist");
    }
    cy.get("#avatar").should("exist");
  });

  it("Should be able to buy an item", () => {
    cy.get("#money").should("contain.text", "50");
    cy.get("#item-1-container > button").click();
    cy.get("#money").should("contain.text", "35");
  });

  it("Should be able to reset the state", () => {
    cy.get("#money").should("contain.text", "50");
    cy.get("#item-1-container > button").click();
    cy.get("#money").should("contain.text", "35");
    cy.get("#reset").click();
    cy.get("#money").should("contain.text", "50");
  });

  it("Should show item progres", () => {
    cy.get("#money").should("contain.text", "50");
    cy.get("#item-1-container > #progress").should("contain.text", "0 / 10");
    cy.get("#item-1-container > button").click();
    cy.get("#item-1-container > #progress").should("contain.text", "1 / 10");
  });
});
