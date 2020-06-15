describe("Testing our form inputs", function(){
  beforeEach(function(){
    cy.visit("http://localhost:3000/pizza");
  });
  it("tests name input", function() {
    cy.get("[data-cy=name]").type("Testing name out")
  });
  it('Test checkbox input', function() {
    cy.get("[data-cy=checkbox1]").check().should('be.checked')
  });
  it('Test checkbox input', function() {
    cy.get("[data-cy=checkbox2]").check().should('be.checked')
  });
  it('Test checkbox input', function() {
    cy.get("[data-cy=checkbox3]").check().should('be.checked')
  });
  it('Test checkbox input', function() {
    cy.get("[data-cy=checkbox4]").check().should('be.checked')
  });
  it('Test checkbox input', function() {
    cy.get("[data-cy=checkbox5]").check().should('be.checked')
  });
  it("Tests for submit", function() {
    cy.get('[data-cy=submit]').submit()
  });
});