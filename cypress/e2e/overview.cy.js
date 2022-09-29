describe("Examine overview content and functionality", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("contains the correct titles", () => {
    cy.get("[data-cy=header]").should("contain", "My Employees");
    cy.get("[data-cy=newEmployeeButton]").should(
      "contain",
      "Add new employees"
    );
    cy.get("[data-cy=viewEmployeesButton]").should(
      "contain",
      "View all employees"
    );
  });

  it("navigates correctly when clicking on the buttons", () => {
    cy.get("[data-cy=newEmployeeButton]").click();
    cy.url().should("eq", "http://localhost:3000/#/create");

    cy.get("[data-cy=backButton]").click();
    cy.url().should("eq", "http://localhost:3000/#/");

    cy.get("[data-cy=viewEmployeesButton]").click();
    cy.url().should("eq", "http://localhost:3000/#/view");

    cy.get("[data-cy=backButton]").click();
    cy.url().should("eq", "http://localhost:3000/#/");
  });
});
