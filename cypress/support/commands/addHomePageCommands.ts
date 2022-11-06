import { engagementImagePaths } from "../../../utils";

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
    name: /^We Got Married!$/i,
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
  cy.findAllByAltText(/Weddings rings on a box in front of flowers/i)
    .should("be.visible")
    .and(($img) => {
      // "naturalWidth" and "naturalHeight" are set when the image loads
      expect(
        ($img[0] as HTMLImageElement).naturalWidth,
        "image has natural width"
      ).to.be.greaterThan(0);
    });
  // cy.findByRole("heading", { name: /^Our Story$/i }).should("be.visible");
  // cy.findByRole("heading", { name: /^About Us$/i }).should("be.visible");
  cy.findByRole("heading", { name: /^The Proposal$/i }).should("be.visible");
  cy.findByRole("heading", { name: /^Photos$/i }).should("be.visible");
  cy.findAllByAltText(/^Engagement picture$/i).should(
    "have.length",
    engagementImagePaths.length
  );
  cy.findAllByAltText(/^Engagement picture thumbnail$/i).should(
    "have.length",
    engagementImagePaths.length
  );
  cy.findByRole("heading", { name: /^Registry$/i }).should("be.visible");
});
