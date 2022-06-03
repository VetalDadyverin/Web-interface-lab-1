describe('About.cy.js', () => {

  it('test text', () => {
    cy.visit('http://192.168.1.79:8080/#/about');
    cy.get('.about').find('.text').should('have.css', 'width', '800px');
  })
})
