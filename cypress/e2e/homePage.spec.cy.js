describe('home page', () => {
  it('load home page', () => {
      cy.visit('/');
      cy.get('h1')
      .invoke('text')
      .should('equal', 'Welcome to Formy');
  })
})