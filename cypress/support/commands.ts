/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

import { RSVPFormData } from "../../utils";
import "@testing-library/cypress/add-commands";

Cypress.Commands.add(
  "submitRsvpForm",
  ({ name, rsvpStatus, guestCount, email, notes }) => {
    cy.visit("/rsvp");
    cy.findByText(/RSVP for the wedding of/i).should("exist");
    cy.findByText(/Mary Katherine Bryner/i).should("exist");
    cy.findByText(/Zachary Matthew Young/i).should("exist");
    cy.get("form").findByPlaceholderText(/Name/i).should("exist");
    if (name) {
      cy.get("form").findByPlaceholderText(/Name/i).type(name);
    }
    if (rsvpStatus) {
      const labelTextRegex =
        rsvpStatus === "Accepted" ? /I can make it/i : /I can\'t make it/i;
      cy.get("form")
        .findByLabelText(labelTextRegex)
        .trigger("mouseover")
        .click();
    }
    if (guestCount) {
      cy.get("form")
        .findByPlaceholderText(/Number of guests/i)
        .type(guestCount.toString());
    }
    if (email) {
      cy.get("form").findByPlaceholderText(/Email/i).type(email);
    }
    if (notes) {
      cy.get("form")
        .findByPlaceholderText(/Additional notes/i)
        .type(notes);
    }
    cy.get("form").submit();
  }
);

declare global {
  namespace Cypress {
    interface Chainable {
      submitRsvpForm(formData: RSVPFormData): Chainable<void>;
    }
  }
}
