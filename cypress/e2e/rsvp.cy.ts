import { RSVPFormData } from "../../utils";

describe("The RSVP Page", () => {
  beforeEach(() => {
    cy.intercept("POST", "/api/rsvp").as("postRsvp");
  });

  it("successfully submits with all fields", () => {
    const now = Date.now();
    const mockFormData = {
      name: `Test ${now}`,
      guestCount: 1,
      email: `test+${now}@test.com`,
      notes: `${now} notes`,
    } as RSVPFormData;
    cy.submitRsvpForm(mockFormData);
    cy.get("form").findByRole("button").should("be.disabled");
    cy.wait("@postRsvp");
    cy.findByRole("heading", {
      name: /See you at the wedding!/i,
    });
    cy.findByText(/September 9, 2022/i);
    cy.visit("/");
    cy.findByRole("heading", {
      name: /We\'re Getting Married!/i,
    });
  });

  it("successfully submits with required fields only", () => {
    const now = Date.now();
    const mockFormData = {
      name: `Test ${now}`,
      guestCount: 1,
    } as RSVPFormData;
    cy.submitRsvpForm(mockFormData);
    cy.get("form").findByRole("button").should("be.disabled");
    cy.wait("@postRsvp");
    cy.findByRole("heading", {
      name: /See you at the wedding!/i,
    });
    cy.findByText(/September 9, 2022/i);
    cy.visit("/");
    cy.findByRole("heading", {
      name: /We\'re Getting Married!/i,
    });
  });

  it("shows required validation message for name", () => {
    const now = Date.now();
    const mockFormData = {
      guestCount: 1,
      email: `test+${now}@test.com`,
      notes: `${now} notes`,
    } as RSVPFormData;
    cy.submitRsvpForm(mockFormData);
    cy.get("form")
      .findByRole("alert")
      .findByText(/Name is required/i);
  });

  it("shows max length validation message for name", () => {
    const now = Date.now();
    const mockFormData = {
      name: "this is a very very very very very very very very very very very very very very very very very very long name",
      guestCount: 1,
      email: `test+${now}@test.com`,
      notes: `${now} notes`,
    } as RSVPFormData;
    cy.submitRsvpForm(mockFormData);
    cy.get("form")
      .findByRole("alert")
      .findByText(/Is your name really that long/i);
  });

  it("shows required validation message for guest count", () => {
    const now = Date.now();
    const mockFormData = {
      name: `Test ${now}`,
      email: `test+${now}@test.com`,
      notes: `${now} notes`,
    } as RSVPFormData;
    cy.submitRsvpForm(mockFormData);
    cy.get("form")
      .findByRole("alert")
      .findByText(/Number of guests is required/i);
  });

  it("shows max validation message for guest count", () => {
    const now = Date.now();
    const mockFormData = {
      name: `Test ${now}`,
      guestCount: 50,
      email: `test+${now}@test.com`,
      notes: `${now} notes`,
    } as RSVPFormData;
    cy.submitRsvpForm(mockFormData);
    cy.get("form")
      .findByRole("alert")
      .findByText(/Please don't bring that many people/i);
  });

  it("shows positive integer validation message for guest count", () => {
    const now = Date.now();
    const mockFormData = {
      name: `Test ${now}`,
      guestCount: -1,
      email: `test+${now}@test.com`,
      notes: `${now} notes`,
    } as RSVPFormData;
    cy.submitRsvpForm(mockFormData);
    cy.get("form")
      .findByRole("alert")
      .findByText(/That's.* not possible/i);
  });

  it("shows invalid validation message for email", () => {
    const now = Date.now();
    const mockFormData = {
      name: `Test ${now}`,
      guestCount: 1,
      email: `invalid email`,
      notes: `${now} notes`,
    } as RSVPFormData;
    cy.submitRsvpForm(mockFormData);
    cy.get("form")
      .findByRole("alert")
      .findByText(/Email must be a valid email/i);
  });
});
