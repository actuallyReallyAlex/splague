/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
/// <reference types="cypress" />

const operations = [
  "amputation",
  "deliver baby",
  "hole in head",
  "lance wound",
  "leeching",
  "remove tooth",
  "set bone",
];

const patientScenarios = [
  {
    age: 19,
    avatar: "/assets/patientAvatar.png",
    chat: ["Chat 1", "Chat 2", "Chat 3"],
    complaint: "Back pain",
    name: "Billy Bob",
    operation: "leeching",
    remedy: "magic stone",
  },
  {
    age: 30,
    avatar: "/assets/patientAvatar.png",
    chat: ["Chat 1", "Chat 2", "Chat 3"],
    complaint: "Headache",
    name: "Jane Jill",
    operation: "hole in head",
    remedy: "intelligence potion",
  },
  {
    age: 10,
    avatar: "/assets/patientAvatar.png",
    chat: ["Chat 1", "Chat 2", "Chat 3"],
    complaint: "Broken foot",
    name: "Mark Man",
    operation: "set bone",
    remedy: "healing elixir",
  },
];

context("Actions", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080");
    cy.onboard();
  });

  it("Should treat patient", () => {
    cy.get("#location-office").click();
    cy.get("#action-treat-patient").click();

    cy.get("#treatment-remedy").click();
    cy.get("#treatment-dialog").should("be.visible");
    cy.get("#treatment-dialog-title").should("have.text", "Prescribe Remedy");
    cy.get("#treatment-dialog-primary").click();
    cy.get("#treatment-dialog").should("not.be.visible");

    cy.get("#treatment-operation").click();
    cy.get("#treatment-dialog").should("be.visible");
    cy.get("#treatment-dialog-title").should("have.text", "Perform Operation");
    cy.get("#treatment-dialog-secondary").click();
    cy.get("#treatment-dialog").should("not.be.visible");

    cy.get("#treatment-chat").click();
    cy.get("#treatment-dialog").should("be.visible");
    cy.get("#treatment-dialog-title").should("have.text", "Chat");
    cy.get("#chat-messages").should("contain.text", "Chat 1Next");
    cy.get("#treatment-dialog-primary").click();
    cy.get("#treatment-dialog").should("not.be.visible");
  });

  it("Should chat with the patient", () => {
    cy.get("#location-office").click();
    cy.get("#action-treat-patient").click();

    cy.get("#treatment-chat").click();
    cy.get("#chat-messages").should("contain.text", "Next");
    cy.get("#chat-messages").should("contain.text", "Chat 1Next");
    cy.get("#chat-advance").click();
    cy.get("#chat-messages").should("contain.text", "Chat 1Chat 2Next");
    cy.get("#chat-advance").click();
    cy.get("#chat-messages").should("contain.text", "Chat 1Chat 2Chat 3");
    cy.get("#chat-advance").should("not.exist");
  });

  it("Should perform operation on patient", () => {
    cy.get("#location-office").click();
    cy.get("#action-treat-patient").click();
    cy.get("#treatment-operation").click();

    cy.get("#start-operation").should("be.disabled");

    operations.forEach((operation) => {
      const replacedValue = operation.replace(/ /gm, "-");
      cy.get("#operation-select").select(replacedValue);
      cy.get("#operation-select").should("have.value", replacedValue);
    });

    cy.get("#start-operation").should("be.enabled");

    cy.get("#operation-in-progress").should(
      "have.text",
      "Operation In Progress - false"
    );
    cy.get("#start-operation").click();
    cy.get("#operation-progress").should("have.value", 0);
    cy.get("#operation-in-progress").should(
      "have.text",
      "Operation In Progress - true"
    );
    cy.wait(3000);
    cy.get("#operation-progress").should("have.value", 30);
    cy.wait(7000);
    cy.get("#operation-in-progress").should(
      "have.text",
      "Operation In Progress - false"
    );
  });

  it("Should perform a successful operation on the patient", () => {
    cy.get("#location-office").click();
    cy.get("#action-treat-patient").click();
    cy.get("#treatment-operation").click();

    // * Get Patient and Know what the correct operation should be
    cy.get("#patient-name").then(($patientName) => {
      const patientName = $patientName[0].textContent;
      const patientScenario = patientScenarios.find(
        (scenario) => scenario.name === patientName
      );
      const correctOperation = patientScenario.operation;
      // * Select the correct operation
      const replacedValue = correctOperation.replace(/ /gm, "-");
      cy.get("#operation-select").select(replacedValue);
      cy.get("#operation-select").should("have.value", replacedValue);
      // * Start the Operation
      cy.get("#start-operation").click();
      // * wait 10 seconds
      cy.wait(10000);
      // * Verify that the operation was successful
      cy.get("#operation-outcome").should("have.text", "SUCCESS");
    });
  });

  it("Should not display Treat Patient Screen when not at the office", () => {
    cy.get("#location-office").click();
    cy.get("#action-treat-patient").click();
    cy.get("#treat-patient-screen").should("exist");

    cy.get("#location-home").click();
    cy.get("#treat-patient-screen").should("not.exist");
  });
});
