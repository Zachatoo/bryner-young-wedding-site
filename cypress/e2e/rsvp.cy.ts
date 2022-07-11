describe("The RSVP Page", () => {
  beforeEach(() => {
    const now = Date.now();
    cy.intercept("POST", "/api/rsvp").as("postRsvp");
    cy.visit("/rsvp");
    cy.findByText(/RSVP for the wedding of/i);
    cy.findByText(/Mary Katherine Bryner/i);
    cy.findByText(/Zachary Matthew Young/i);
    cy.get("form").findByPlaceholderText(/Name/i);
    cy.get("form").findByPlaceholderText(/Number of guests/i);
    cy.get("form").findByPlaceholderText(/Email/i);
    cy.get("form").findByRole("button", { name: /RSVP/i });
    cy.get("form").findByPlaceholderText(/Name/i).type(`Test ${now}`);
    cy.get("form")
      .findByPlaceholderText(/Number of guests/i)
      .type("1");
    cy.get("form").findByPlaceholderText(/Email/i).type(`Test+${now}@test.com`);
  });

  it("successfully submits", () => {
    cy.get("form").submit();
    cy.get("form").findByRole("button").should("be.disabled");
    cy.wait("@postRsvp");
    cy.get("form").findByRole("button").should("not.be.disabled");
  });

  it("successfully submits without email", () => {
    cy.get("form").findByPlaceholderText(/Email/i).clear();
    cy.get("form").submit();
    cy.get("form").findByRole("button").should("be.disabled");
    cy.wait("@postRsvp");
    cy.get("form").findByRole("button").should("not.be.disabled");
  });

  it("shows required validation message for name", () => {
    cy.get("form").findByPlaceholderText(/Name/i).clear();
    cy.get("form").submit();
    cy.get("form")
      .findByRole("alert")
      .findByText(/Name is required/i);
  });

  it("shows required validation message for guest count", () => {
    cy.get("form")
      .findByPlaceholderText(/Number of guests/i)
      .clear();
    cy.get("form").submit();
    cy.get("form")
      .findByRole("alert")
      .findByText(/Number of guests is required/i);
  });

  it("shows max validation message for guest count", () => {
    cy.get("form")
      .findByPlaceholderText(/Number of guests/i)
      .clear()
      .type("50");
    cy.get("form").submit();
    cy.get("form")
      .findByRole("alert")
      .findByText(/Number of guests must not exceed 20/i);
  });

  it("shows invalid validation message for email", () => {
    cy.get("form")
      .findByPlaceholderText(/Email/i)
      .clear()
      .type("invalid email");
    cy.get("form").submit();
    cy.get("form")
      .findByRole("alert")
      .findByText(/Email must be a valid email/i);
  });
});
