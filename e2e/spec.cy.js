describe('practicing automation login on demo site', () => {
  it('validate login functionality with positive credentials', () => {
    cy.visit('https://practicetestautomation.com/practice-test-login/')
    cy.get('input#username').type("student");
    cy.get("input[name='password']").type("Password123");
    cy.get('.btn').click()
    cy.wait(4000);
    cy.url().should('include','practicetestautomation.com/logged-in-successfully/')
    cy.get('[href*="/practice-test-login/"]').should('be.visible')
  })
  it('validate negative login with invalid username', () => {
    cy.visit('https://practicetestautomation.com/practice-test-login/')
    cy.get('input#username').type("incorrectuser");
    cy.get("input[name='password']").type("Password123");
    cy.get('.btn').click()
    cy.get('div#error').should('be.visible').and[('have.text','your username is invalide!')]
})
it('validate negative login with invalid Password', () => {
  cy.visit('https://practicetestautomation.com/practice-test-login/')
  cy.get('input#username').type("student");
  cy.get("input[name='password']").type("deena");
  cy.get('.btn').click()
  cy.get('div#error').should('be.visible').and[('have.text','your password is invalide!')]
})
})