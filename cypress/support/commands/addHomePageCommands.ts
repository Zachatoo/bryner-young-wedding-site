Cypress.Commands.add("isHomePageValid", () => {
  cy.findByRole("link", { name: /Home/i }).should("be.visible");
  cy.findByRole("link", { name: /Proposal/i }).should("be.visible");
  cy.findByRole("link", { name: /Photos/i }).should("be.visible");
  cy.findByRole("link", { name: /Registry/i }).should("be.visible");
  cy.findAllByText(/^Mary Katherine Bryner$/i, {
    ignore: "script, style, .hidden",
  }).should("be.visible");
  cy.findAllByText(/^Zachary Matthew Young$/i, {
    ignore: "script, style, .hidden",
  }).should("be.visible");
  cy.findByRole("heading", {
    name: /^We\'re Getting Married!$/i,
  }).should("be.visible");
  cy.findByText(/^September 9, 2022$/i).should("be.visible");
  cy.findByTestId("countdown-days").should("be.visible");
  cy.findByTestId("countdown-hours").should("be.visible");
  cy.findByTestId("countdown-minutes").should("be.visible");
  cy.findByTestId("countdown-seconds").should("be.visible");
  cy.findByText(/^days$/i).should("be.visible");
  cy.findByText(/^hours$/i).should("be.visible");
  cy.findByText(/^minutes$/i).should("be.visible");
  cy.findByText(/^seconds$/i).should("be.visible");
  cy.findByRole("heading", { name: /^The Proposal$/i })
    .scrollIntoView({ duration: 300 })
    .should("be.visible");
  cy.findByRole("heading", { name: /^Photos$/i }).should("be.visible");
  cy.findByRole("heading", { name: /^Registry$/i }).should("be.visible");
});
