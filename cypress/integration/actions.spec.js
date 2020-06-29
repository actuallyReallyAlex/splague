/* eslint-disable no-undef */
/// <reference types="cypress" />

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
    cy.get("#treatment-dialog-primary").click();
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

  it("Should not display Treat Patient Screen when not at the office", () => {
    cy.get("#location-office").click();
    cy.get("#action-treat-patient").click();
    cy.get("#treat-patient-screen").should("exist");

    cy.get("#location-home").click();
    cy.get("#treat-patient-screen").should("not.exist");
  });
});
