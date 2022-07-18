describe("The 404 Page", () => {
  it(`works`, () => {
    cy.visit("/random-bad-url", { failOnStatusCode: false });
    cy.findByText(/Not found/i);
    cy.findByRole("link", { name: /Take me home/i }).click();
    cy.findByText(/We\'re Getting Married!/i, {
      ignore: "script, style, .hidden",
    });
    cy.findByText(/Mary Katherine Bryner/i);
    cy.findByText(/Zachary Matthew Young/i);
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
