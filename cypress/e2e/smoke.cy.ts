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
      cy.findByRole("heading", {
        name: /We\'re Getting Married!/i,
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
      cy.findByRole("heading", { name: /The Proposal/i })
        .should("not.be.visible")
        .scrollIntoView()
        .should("be.visible");
    });
  });

  it("has no broken links", () => {
    cy.visit("/");
    cy.get("a:not([href*='mailto:'])").each((page) => {
      cy.request(page.prop("href"));
    });
  });
});

describe("The Registry Page", () => {
  sizes.forEach((size) => {
    it(`successfully loads on ${size} screen`, () => {
      cy.viewport(size[0], size[1]);
      cy.visit("/registry");
      cy.findByText(/Mary Katherine Bryner/i);
      cy.findByText(/Zachary Matthew Young/i);
      cy.findByRole("heading", {
        name: /Registry/i,
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
      cy.findByText(/We are registered at/i);
      cy.findByRole("link", { name: /Crate & Barrel/i });
      cy.findByRole("link", { name: /Target/i });
    });
  });

  it("has no broken links", () => {
    cy.visit("/registry");
    cy.get("a:not([href*='mailto:'])").each((page) => {
      cy.request(page.prop("href"));
    });
  });
});
