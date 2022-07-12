describe("The Home Page", () => {
  it("successfully loads", () => {
    cy.visit("/");
    cy.findByText(/Mary Katherine Bryner/i);
    cy.findByText(/Zachary Matthew Young/i);
    cy.findByText(/We\'re Getting Married!/i);
    cy.findByText(/September 9, 2022/i);
    cy.findByTestId("countdown-days");
    cy.findByTestId("countdown-hours");
    cy.findByTestId("countdown-minutes");
    cy.findByTestId("countdown-seconds");
    cy.findByText(/days/i);
    cy.findByText(/hours/i);
    cy.findByText(/minutes/i);
    cy.findByText(/seconds/i);
  });
});
