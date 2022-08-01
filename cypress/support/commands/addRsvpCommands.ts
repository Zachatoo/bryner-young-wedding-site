Cypress.Commands.add(
  "submitRsvpForm",
  ({ name, rsvpStatus, guestCount, email, notes }) => {
    cy.visit("/rsvp");
    cy.findByText(/^RSVP for the wedding of$/i).should("be.visible");
    cy.findByText(/^Mary Katherine Bryner$/i).should("be.visible");
    cy.findByText(/^Zachary Matthew Young$/i).should("be.visible");
    cy.get("form").findByPlaceholderText(/Name/i).should("be.visible");
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
