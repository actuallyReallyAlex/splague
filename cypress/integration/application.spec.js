/* eslint-disable no-undef */
/// <reference types="cypress" />

context("Application", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080");
  });

  it("Should display correct content", () => {
    cy.get("body").should("contain.text", "splague");
    cy.get("#avatar").should("exist");
    cy.get("#name").should("have.text", "Alex");
    cy.get("#story").should("have.text", "Welcome to Splague!");
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
  });

  it("Should allow the user to toggle between themes", () => {
    cy.get("#app").should("have.class", "light");
    cy.get("#theme-toggle").click();
    cy.get("#app").should("have.class", "dark");
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
});
