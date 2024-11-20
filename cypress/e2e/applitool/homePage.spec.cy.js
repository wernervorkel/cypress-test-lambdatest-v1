beforeEach(() => {
    cy.eyesOpen({
        appName: 'formy test'
    })
});

it('', () => {

    cy.visit('/');
    cy.get('h1')
      .invoke('text')
      .should('equal', 'Welcome to Formy');
    cy.eyesCheckWindow()

})

afterEach(() => {
    cy.eyesClose()
})