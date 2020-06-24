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

  it("Should allow the user to toggle between themes", () => {
    cy.get("#app").should("have.class", "light");
    cy.get("#theme-toggle").click();
    cy.get("#app").should("have.class", "dark");
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

  it("Should show current location", () => {
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

    cy.get("#current-location").should("have.text", "Current Location - home");
  });

  it("Should allow for travel", () => {
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

    // * Home
    cy.get("#current-location").should("have.text", "Current Location - home");
    cy.get("#location-home").should("be.disabled");
    // * Office
    cy.get("#location-office").click();
    cy.get("#current-location").should(
      "have.text",
      "Current Location - office"
    );
    cy.get("#location-office").should("be.disabled");
    // * Tavern Square
    cy.get("#location-tavern").click();
    cy.get("#current-location").should(
      "have.text",
      "Current Location - tavern"
    );
    cy.get("#location-tavern").should("be.disabled");
    // * Town Square
    cy.get("#location-town-square").click();
    cy.get("#current-location").should(
      "have.text",
      "Current Location - town square"
    );
    cy.get("#location-town-square").should("be.disabled");
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
