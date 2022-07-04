describe("The Home Page", () => {
  it("successfully loads", () => {
    cy.visit("/");
    cy.findByText(/Mary Katherine Bryner/i).should("exist");
    cy.findByText(/Zachary Matthew Young/i).should("exist");
    cy.findByText(/We\'re Getting Married!/i).should("exist");
    cy.findByText(/September 9, 2022/i).should("exist");
    cy.findByTestId("countdown-days").should("exist");
    cy.findByTestId("countdown-hours").should("exist");
    cy.findByTestId("countdown-minutes").should("exist");
    cy.findByTestId("countdown-seconds").should("exist");
    cy.findByText(/days/i).should("exist");
    cy.findByText(/hours/i).should("exist");
    cy.findByText(/minutes/i).should("exist");
    cy.findByText(/seconds/i).should("exist");
  });
});
