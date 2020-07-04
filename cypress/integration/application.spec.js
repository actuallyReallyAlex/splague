/* eslint-disable no-undef */
/// <reference types="cypress" />

context("Application", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
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

    cy.get("#story").should("contain.text", "Welcome to Splague!");
    cy.get("#story-0").should("exist");
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
