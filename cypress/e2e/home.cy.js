describe('About.cy.js', () => {

    it('should visit', () => {
      cy.visit('http://192.168.1.79:8080/#/');
      cy.get('.home').should('have.css', 'align-items', 'center');
    })
  })
  