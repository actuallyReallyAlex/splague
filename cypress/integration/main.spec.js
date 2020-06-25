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
    // * Church
    cy.get("#location-church").click();
    cy.get("#current-location").should(
      "have.text",
      "Current Location - church"
    );
    cy.get("#location-church").should("be.disabled");
    // * Graveyard
    cy.get("#location-graveyard").click();
    cy.get("#current-location").should(
      "have.text",
      "Current Location - graveyard"
    );
    cy.get("#location-graveyard").should("be.disabled");
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

  it("Should be able to perform actions based on location", () => {
    // const stub = cy.stub();
    // cy.on("window:alert", stub);

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

    // * Treat Patient
    cy.get("#location-office").click();
    cy.get("#current-location").should(
      "have.text",
      "Current Location - office"
    );
    cy.get("#action-treat-patient").click();
    cy.get("#treat-patient-screen").should("exist");
    cy.get("#patient-name").should("have.text", "Billy Bob");

    // // * Home Actions
    // cy.get("#action-cook")
    //   .click()
    //   .then(() => {
    //     expect(stub.getCall(0)).to.be.calledWith("PERFORMING ACTION - cook");
    //   });
    // cy.get("#action-sleep")
    //   .click()
    //   .then(() => {
    //     expect(stub.getCall(1)).to.be.calledWith("PERFORMING ACTION - sleep");
    //   });
    // cy.get("#location-town-square").click();
    // cy.get("#action-cook").should("not.exist");

    // // * Church Actions
    // cy.get("#location-church").click();
    // cy.get("#current-location").should(
    //   "have.text",
    //   "Current Location - church"
    // );
    // cy.get("#action-attend-mass")
    //   .click()
    //   .then(() => {
    //     expect(stub.getCall(2)).to.be.calledWith(
    //       "PERFORMING ACTION - attend mass"
    //     );
    //   });
    // cy.get("#action-confess")
    //   .click()
    //   .then(() => {
    //     expect(stub.getCall(3)).to.be.calledWith("PERFORMING ACTION - confess");
    //   });
    // cy.get("#action-pray")
    //   .click()
    //   .then(() => {
    //     expect(stub.getCall(4)).to.be.calledWith("PERFORMING ACTION - pray");
    //   });

    // // * Graveyard Actions
    // cy.get("#location-graveyard").click();
    // cy.get("#current-location").should(
    //   "have.text",
    //   "Current Location - graveyard"
    // );
    // cy.get("#action-mourn")
    //   .click()
    //   .then(() => {
    //     expect(stub.getCall(5)).to.be.calledWith("PERFORMING ACTION - mourn");
    //   });

    // // * Office Actions
    // cy.get("#location-office").click();
    // cy.get("#current-location").should(
    //   "have.text",
    //   "Current Location - office"
    // );
    // cy.get("#action-research-cure")
    //   .click()
    //   .then(() => {
    //     expect(stub.getCall(6)).to.be.calledWith(
    //       "PERFORMING ACTION - research cure"
    //     );
    //   });
    // cy.get("#action-treat-patient")
    //   .click()
    //   .then(() => {
    //     expect(stub.getCall(7)).to.be.calledWith(
    //       "PERFORMING ACTION - treat patient"
    //     );
    //   });

    // // * Tavern Actions
    // cy.get("#location-tavern").click();
    // cy.get("#current-location").should(
    //   "have.text",
    //   "Current Location - tavern"
    // );
    // cy.get("#action-order-drink")
    //   .click()
    //   .then(() => {
    //     expect(stub.getCall(8)).to.be.calledWith(
    //       "PERFORMING ACTION - order drink"
    //     );
    //   });
    // cy.get("#action-order-food")
    //   .click()
    //   .then(() => {
    //     expect(stub.getCall(9)).to.be.calledWith(
    //       "PERFORMING ACTION - order food"
    //     );
    //   });

    // // * Town Square Actions
    // cy.get("#location-town-square").click();
    // cy.get("#current-location").should(
    //   "have.text",
    //   "Current Location - town square"
    // );
    // cy.get("#action-barter")
    //   .click()
    //   .then(() => {
    //     expect(stub.getCall(10)).to.be.calledWith("PERFORMING ACTION - barter");
    //   });
    // cy.get("#action-hear-town-crier")
    //   .click()
    //   .then(() => {
    //     expect(stub.getCall(11)).to.be.calledWith(
    //       "PERFORMING ACTION - hear town crier"
    //     );
    //   });
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
