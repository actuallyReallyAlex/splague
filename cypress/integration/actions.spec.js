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

const remedies = [
  "ancient charm",
  "healing elixir",
  "healing ointment",
  "intelligence potion",
  "magic stone",
  "strength potion",
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
    cy.visit("http://localhost:3000");
    cy.onboard();
  });

  it("Should treat patient", () => {
    cy.get("#location-office").click();
    cy.get("#action-treat-patient").click();

    cy.get("#treatment-remedy").click();
    cy.get("#treatment-dialog").should("be.visible");
    cy.get("#treatment-dialog-title").should("have.text", "Prescribe Remedy");
    cy.get("#cancel-remedy").click();
    cy.get("#treatment-dialog").should("not.be.visible");

    cy.get("#treatment-operation").click();
    cy.get("#treatment-dialog").should("be.visible");
    cy.get("#treatment-dialog-title").should("have.text", "Perform Operation");
    cy.get("#cancel-operation").click();
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

    cy.get("#start-operation").click();
    cy.get("#start-operation").should("not.exist");
    cy.get("#cancel-operation").should("not.exist");
    cy.get("#operation-select").should("not.exist");
    cy.get("#operation-progress").should("have.value", 0);
    cy.wait(3000);
    cy.get("#operation-progress").should("have.value", 30);
  });

  it("Should perform an unsuccessful operation on the patient", () => {
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
      const incorrectOperation = operations.filter(
        (operation) => operation !== correctOperation
      )[0];
      // * Select the incorrect operation
      const replacedValue = incorrectOperation.replace(/ /gm, "-");
      cy.get("#operation-select").select(replacedValue);
      cy.get("#operation-select").should("have.value", replacedValue);
      // * Start the Operation
      cy.get("#start-operation").click();
      // * wait 10 seconds
      cy.wait(10000);
      // * Verify that the operation was not successful
      cy.get("#operation-outcome").should("have.text", "FAILURE");
      cy.get("#operation-select").should("not.exist");
      cy.get("#start-operation").should("not.exist");
      cy.get("#cancel-operation").should("not.exist");
      cy.get("#ok").click();
      cy.get("#treatment-dialog").should("not.be.visible");
    });
  });

  it("Should create an unsuccessful remedy for the patient", () => {
    cy.get("#location-office").click();
    cy.get("#action-treat-patient").click();
    cy.get("#treatment-remedy").click();

    // * Get Patient and Know what the correct remedy should be
    cy.get("#patient-name").then(($patientName) => {
      const patientName = $patientName[0].textContent;
      const patientScenario = patientScenarios.find(
        (scenario) => scenario.name === patientName
      );
      const correctRemedy = patientScenario.remedy;
      const incorrectRemedy = remedies.filter(
        (remedy) => remedy !== correctRemedy
      )[0];
      // * Select the incorrect remedy
      const replacedValue = incorrectRemedy.replace(/ /gm, "-");
      cy.get("#remedy-select").select(replacedValue);
      cy.get("#remedy-select").should("have.value", replacedValue);
      // * Start the Remedy
      cy.get("#start-remedy").click();
      // * wait 10 seconds
      cy.wait(10000);
      // * Verify that the remedy was not successful
      cy.get("#remedy-outcome").should("have.text", "FAILURE");
      cy.get("#remedy-select").should("not.exist");
      cy.get("#start-remedy").should("not.exist");
      cy.get("#cancel-remedy").should("not.exist");
      cy.get("#ok").click();
      cy.get("#treatment-dialog").should("not.be.visible");
    });
  });

  it("Should disable Operation button after an operation takes place", () => {
    cy.get("#location-office").click();
    cy.get("#action-treat-patient").click();
    cy.get("#treatment-operation").click();
    cy.get("#operation-select").select(operations[0].replace(/ /gm, "-"));
    cy.get("#start-operation").click();
    cy.wait(11000);
    cy.get("#treatment-operation").should("be.disabled");
  });

  it("Should disable Remedy button after a remedy takes place", () => {
    cy.get("#location-office").click();
    cy.get("#action-treat-patient").click();
    cy.get("#treatment-remedy").click();
    cy.get("#remedy-select").select(remedies[0].replace(/ /gm, "-"));
    cy.get("#start-remedy").click();
    cy.wait(11000);
    cy.get("#treatment-remedy").should("be.disabled");
  });

  it("Should reset buttons after clicking 'Treat Patient' and getting a new patient", () => {
    cy.get("#location-office").click();
    cy.get("#action-treat-patient").click();
    cy.get("#treatment-remedy").click();
    cy.get("#remedy-select").select(remedies[0].replace(/ /gm, "-"));
    cy.get("#start-remedy").click();
    cy.wait(11000);
    cy.get("#treatment-remedy").should("be.disabled");
    cy.get("#ok").click();

    cy.get("#action-treat-patient").click();
    cy.get("#treatment-remedy").should("be.enabled");
  });

  it("Should not display Treat Patient Screen when not at the office", () => {
    cy.get("#location-office").click();
    cy.get("#action-treat-patient").click();
    cy.get("#treat-patient-screen").should("exist");

    cy.get("#location-home").click();
    cy.get("#treat-patient-screen").should("not.exist");
  });
});
