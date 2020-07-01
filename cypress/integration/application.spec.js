/* eslint-disable no-undef */
/// <reference types="cypress" />

context("Application", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080");
    cy.onboard();
  });

  it("Shouldn't be able to scroll page vertically", () => {
    // * Ability to Test scroll position of window :)
    cy.window().then((win) => {
      win.scrollTo(0, 1000);
    });

    cy.window()
      .its("scrollY")
      .should(($scrollY) => {
        expect($scrollY).to.be.closeTo(0, 0);
      });
  });

  it("Should be able to reset the state", () => {
    cy.get("#reset").click();

    cy.get("#date").should("contain.text", "January, 1345 AD");
    cy.get("#story").should("contain.text", "Welcome to Splague!");
    cy.get("#doctor-reputation").should(
      "contain.text",
      "Doctor Reputation - 0"
    );
    cy.get("#morality").should("contain.text", "Morality - 0");
    cy.get("#time-played").should(
      "contain.text",
      "Time Played - less than 5 seconds"
    );
    cy.get("#money").should("contain.text", "50");
    cy.get("#earnings").should("contain.text", "Earnings - $0/second");
    cy.get("#alive-population").should(
      "have.text",
      "Alive Population - 443,000,000"
    );
    cy.get("#dead-population").should("have.text", "Dead Population - 0");
    cy.get("#infected-population").should(
      "have.text",
      "Infected Population - 0"
    );
    cy.get("#story-0").should("exist");
    cy.get("#theme-toggle").should("exist");

    // * Inventory should have 0 items
    cy.get("#open-inventory").click();
    cy.get(".inventory-slot").then(($inventoryItems) => {
      Array.from($inventoryItems).forEach((inventoryItem) => {
        expect(inventoryItem.children.length).to.equal(0);
      });
    });
  });

  it("Should allow the user to toggle between themes", () => {
    cy.get("#app").should("have.class", "light");
    cy.get("#theme-toggle").click();
    cy.get("#app").should("have.class", "dark");
  });

  it("Should play a short game", () => {
    cy.get("#doctor-reputation").should("have.text", "Doctor Reputation - 0");
    cy.get("#morality").should("have.text", "Morality - 0");

    cy.wait(61000);
    cy.get("#date").should("contain.text", "February, 1345 AD");
    cy.get("#story").should("contain.text", "11 months before death...");
    cy.wait(15000);
    cy.get("#time-played").should("contain.text", "1 minute");

    cy.get("#location-church").click();
    cy.wait(11000);
    cy.reload();
    cy.get("#location-church").should("be.disabled");
  });

  it("Shouldn't crash the game if the user refreshes the page in the 1st 10 seconds", () => {
    cy.reload();
    cy.get("#story-0").should("not.exist");
  });
});
