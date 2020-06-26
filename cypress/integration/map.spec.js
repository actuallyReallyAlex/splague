/* eslint-disable no-undef */
/// <reference types="cypress" />

context("Map", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080");
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

  it("Should show current location", () => {
    cy.get("#current-location").should("have.text", "Current Location - home");
  });

  it("Should allow for travel", () => {
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
    cy.get("#current-location").should("have.text", "Current Location - home");

    // * Treat Patient
    cy.get("#location-office").click();
    cy.get("#current-location").should(
      "have.text",
      "Current Location - office"
    );
    cy.get("#action-treat-patient").click();
    cy.get("#treat-patient-screen").should("exist");

    const patientScenarios = [
      {
        age: 19,
        chat: ["Chat 1", "Chat2", "Chat 3"],
        complaint: "Back pain",
        name: "Billy Bob",
        operation: "leeching",
        remedy: "magic stone",
      },
      {
        age: 30,
        chat: ["Chat 1", "Chat2", "Chat 3"],
        complaint: "Headache",
        name: "Jane Jill",
        operation: "hole in head",
        remedy: "intelligence potion",
      },
      {
        age: 10,
        chat: ["Chat 1", "Chat2", "Chat 3"],
        complaint: "Broken foot",
        name: "Mark Man",
        operation: "set bone",
        remedy: "healing elixir",
      },
    ];
    cy.get("#patient-age").then((age) => {
      const ageValue = Number(age[0].textContent.replace("AGE: ", ""));
      const currentPatientScenario = patientScenarios.find(
        (patientStats) => patientStats.age === ageValue
      );
      cy.get("#patient-name").should("have.text", currentPatientScenario.name);
      cy.get("#patient-age").should(
        "have.text",
        `AGE: ${currentPatientScenario.age}`
      );
      cy.get("#patient-complaint").should(
        "have.text",
        `COMPLAINT: ${currentPatientScenario.complaint}`
      );
    });
  });
});
