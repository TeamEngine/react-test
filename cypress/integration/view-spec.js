describe("Examine employees list content and functionality", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/#/view");
  });
  it("contains correct information", () => {
    cy.get("[data-cy=header]").should("contain", "View Employees");
  });
});
