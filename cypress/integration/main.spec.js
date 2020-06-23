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
    cy.get("#name").should("have.text", "Alex");
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

  it("Should display item progres", () => {
    cy.get("#money").should("contain.text", "50");
    cy.get("#item-1-container > #progress").should("contain.text", "0 / 10");
    cy.get("#item-1-container > button").click();
    cy.get("#item-1-container > #progress").should("contain.text", "1 / 10");
  });

  it("Should display game date", () => {
    cy.get("#date").should("contain.text", "January, 1345 AD");
  });

  it("Should play a short game", () => {
    cy.get("#item-1-container > button").click();
    cy.get("#item-1-container > button").click();
    cy.get("#item-1-container > button").click();
    cy.get("#item-1-container > button").should("be.disabled");
    cy.wait(61000);
    cy.get("#date").should("contain.text", "February, 1345 AD");
    cy.wait(15000);
    cy.get("#item-1-container > button").should("be.enabled");
    cy.get("#time-played").should("contain.text", "1 minute");
  });
});
