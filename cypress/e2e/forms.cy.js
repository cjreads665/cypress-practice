describe("test forms", () => {
  beforeEach(() => {
    cy.visit("/forms");
  });

  it("tests our subscribe form", () => {
    cy.contains(/testing forms/i)
    cy.getDataTest("subscribe-form").find('input').as('subscribe-input')
    cy.contains(/Successfully subbed: email@gmail.com!/i).should('not.exist')
    cy.get('@subscribe-input').type('email@gmail.com')
    cy.getDataTest('subscribe-btn').click()
    cy.contains(/Successfully subbed: email@gmail.com!/i).should('exist')
    cy.wait(3000)
    cy.contains(/Successfully subbed: email@gmail.com!/i).should('not.exist')

    cy.get('@subscribe-input').type('email@gmail.cm')
    cy.contains(/Invalid email: email@gmail.cm!/i).should('not.exist')
    cy.getDataTest('subscribe-btn').click()
    cy.contains(/Invalid email: email@gmail.cm!/i).should('exist')
    cy.wait(3000)
    cy.contains(/Invalid email: email@gmail.cm!/i).should('not.exist')

    
    cy.contains(/fail!/i).should('not.exist')
    cy.getDataTest('subscribe-btn').click()
    cy.contains(/fail!/i).should('exist')

  });
});
