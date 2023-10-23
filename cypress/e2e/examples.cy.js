describe("test examples", () => {
  beforeEach(() => {
    cy.visit("/examples");
  });

  it("tests our subscribe form", () => {
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

  it("intercepts", () => {
    cy.intercept("POST", "http://localhost:3000/examples", {
      fixture: "example.json",
    });
    cy.getDataTest("post-btn").click();
  });

  it.only("grudges", () => {
    cy.contains(/Add Some Grudges/i);

    cy.getDataTest('clear-btn').should('not.exist')

    cy.getDataTest("grudge-list").within(() => {
      cy.get("li").should("have.length", 0);
    });

    cy.addGrudge('some grudge 1')

    cy.getDataTest("grudge-list").within(() => {
      cy.get("li").should("have.length", 1);
    });

    cy.addGrudge('some grudge 2')

    cy.getDataTest("grudge-list").within(() => {
      cy.get("li").should("have.length", 2);
      cy.get('li').its(0).should('contain.text', 'some grudge 1')
    });

    cy.getDataTest('grudge-list').within(()=>{
      cy.get('li').its(0).within(()=>{
        cy.get('button').click()
      })
      cy.get('li').should('have.length',1)
    })

    cy.getDataTest('clear-btn').should('exist')

    cy.get('h3').contains(/grudges/i)
    cy.getDataTest('clear-btn').click()

    cy.getDataTest('grudge-list').within(()=>{
      cy.get('li').should('have.length',0)
    })

  });

 
  
});
