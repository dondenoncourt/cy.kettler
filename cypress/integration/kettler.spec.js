/// <reference types="Cypress" />

context('Window', () => {
  beforeEach(() => {
    cy.visit('https://www.kettlerusa.com')

    // likely want to do this in a support file
    // so it's applied to all spec files
    // cypress/support/index.js
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })
  })

  it('use menu to traverse to wicker patio furniture', () => {
    // https://on.cypress.io/window
    cy.window().should('have.property', 'top')
    cy.get('#header > div.navTop > ul > li:nth-child(3) > a > div')
      .should('have.class', 'divHeaderMenuDivisionsUSA')
      .trigger('mouseover')
    cy.get('#wicker').should('be.visible')
      .trigger('mouseover', {force: true})
      .click({force: true})
    cy.get('#catDesc p').contains('Our high quality P.E. material is all-weather')
  })

  //it('cy.document() - get the document object', () => {
    //// https://on.cypress.io/document
    //cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
  //})

  //it('cy.title() - get the title', () => {
    //// https://on.cypress.io/title
    //cy.title().should('include', 'Kitchen Sink')
  //})
})
