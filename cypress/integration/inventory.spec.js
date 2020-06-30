/* eslint-disable no-undef */
/// <reference types="cypress" />

context("Inventory", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080");
    cy.onboard();
    cy.get("#inventory").should("not.be.visible");
    cy.get("#open-inventory").click();
  });

  it("Should open inventory", () => {
    cy.get("#inventory").should("be.visible");
  });

  it("Should close inventory", () => {
    cy.get("#inventory").should("be.visible");
    cy.get("#close-inventory").click();
    cy.get("#inventory").should("not.be.visible");
  });

  it("Should contain 25 inventory spots", () => {
    cy.get(".inventory-slot").its("length").should("be", "25");
  });

  it("Should contain 3 starter items", () => {
    cy.get(".inventory-slot").then(($inventoryItems) => {
      Array.from($inventoryItems).forEach((inventoryItem, i) => {
        if (i < 3) {
          expect(inventoryItem.children.length).to.equal(1);
        } else {
          expect(inventoryItem.children.length).to.equal(0);
        }
      });
    });
  });
});
