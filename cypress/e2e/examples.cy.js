describe("test examples", () => {
  beforeEach(() => {
    cy.visit("/examples");
  });

  it("tests our subscribe form", () => {
    //

    const links = [
      {
        id: "nav-why",
        route: "/",
      },
      {
        id: "nav-overview",
        route: "/overview",
      },
      {
        id: "nav-fundamentals",
        route: "/fundamentals",
      },
      {
        id: "nav-forms",
        route: "/forms",
      },
      {
        id: "nav-examples",
        route: "/examples",
      },
      {
        id: "nav-component",
        route: "/component",
      },
      {
        id: "nav-practices",
        route: "/best-practices",
      },
    ];

    links.forEach(({ id, route }) => {
      cy.checkUrl(id, route);
    });

    // cy.getDataTest("nav-why").click();
    // cy.location("pathname").should("equal", "/");

    // cy.getDataTest("nav-overview").click();
    // cy.location("pathname").should("equal", "/overview");

    // cy.getDataTest("nav-fundamentals").click();
    // cy.location("pathname").should("equal", "/fundamentals");

    // cy.getDataTest("nav-forms").click();
    // cy.location("pathname").should("equal", "/forms");

    // cy.getDataTest("nav-examples").click();
    // cy.location("pathname").should("equal", "/examples");

    // cy.getDataTest("nav-component").click();
    // cy.location("pathname").should("equal", "/component");

    // cy.getDataTest("nav-practices").click();
    // cy.location("pathname").should("equal", "/best-practices");
  });
});
