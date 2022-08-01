const sizes = [
  [375, 667],
  [768, 1024],
  [1024, 768],
];

describe("The Home Page", () => {
  sizes.forEach((size) => {
    it(`works on ${size} screen`, () => {
      cy.viewport(size[0], size[1]);
      cy.visit("/");
      cy.isHomePageValid();
    });
  });
});

describe("The 404 Page", () => {
  sizes.forEach((size) => {
    it(`works on ${size} screen`, () => {
      cy.viewport(size[0], size[1]);
      cy.visit("/random-bad-url", { failOnStatusCode: false });
      cy.findByText(/Not found/i);
      cy.findByRole("link", { name: /Take me home/i }).click();
      cy.isHomePageValid();
    });
  });
});
