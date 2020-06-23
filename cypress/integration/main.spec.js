/// <reference types="cypress" />

context("Splague", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080");
  });

  it("Should display correct content", () => {
    cy.get("body").should("contain.text", "splague");
    cy.get("#avatar").should("exist");
    cy.get("#name").should("have.text", "Alex");
    cy.get("#story").should("have.text", "Welcome to Splague!");
  });

  it("Should be able to buy an item", () => {
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
    for (let i = 1; i < 11; i++) {
      cy.get(`#item-${i}-container`).should("exist");
    }
    cy.get("#money").should("contain.text", "50");
    cy.get("#item-1-container > button").click();
    cy.get("#money").should("contain.text", "35");
  });

  it("Should be able to reset the state", () => {
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
    cy.get("#money").should("contain.text", "50");
    cy.get("#item-1-container > button").click();
    cy.get("#money").should("contain.text", "35");
    cy.get("#reset").click();
    cy.get("#money").should("contain.text", "50");
  });

  it("Should display item progres", () => {
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
    cy.get("#money").should("contain.text", "50");
    cy.get("#item-1-container > #progress").should("contain.text", "0 / 10");
    cy.get("#item-1-container > button").click();
    cy.get("#item-1-container > #progress").should("contain.text", "1 / 10");
  });

  it("Should display game date", () => {
    cy.get("#date").should("contain.text", "January, 1345 AD");
  });

  it("Should play a short game", () => {
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
