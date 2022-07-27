// Any pages that have external links should be added to
// this list to check if the links are still valid.
const pages = ["/"];

describe("Test broken links", () => {
  pages.forEach((page) => {
    it(`${page} has no broken links`, () => {
      cy.visit(page);
      cy.get("a:not([href*='mailto:'])")?.each((page) => {
        cy.request(page.prop("href"));
      });
    });
  });
});
