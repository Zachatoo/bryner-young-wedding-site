const sizes = [
  [375, 667],
  [768, 1024],
  [1024, 768],
];

describe("The Home Page", () => {
  sizes.forEach((size) => {
    it(`successfully loads on ${size} screen`, () => {
      cy.viewport(size[0], size[1]);
      cy.visit("/");
      cy.findByText(/Mary Katherine Bryner/i);
      cy.findByText(/Zachary Matthew Young/i);
      cy.findByText(/We\'re Getting Married!/i, {
        ignore: "script, style, .hidden",
      });
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
});
