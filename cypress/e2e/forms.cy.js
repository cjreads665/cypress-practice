describe("test forms", () => {
  beforeEach(() => {
    cy.visit("/forms");
  });

  it("tests our subscribe form", () => {
    cy.getDataTest("subscribe-form").find("input").type("email@gmail.com");
    cy.contains(/Your tests will exist in a describe block./i).should(
      "not.be.visible"
    );
    cy.getDataTest("subscribe-btn").click();
    cy.contains(/Your tests will exist in a describe block./i).should(
      "not.be.visible"
    );
  });
});
