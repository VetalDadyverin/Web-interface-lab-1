describe('UserView.cy.js', () => {

    it('checking work', () => {
        cy.visit('http://192.168.1.79:8080/#/user');
        cy.get('button').contains('Sign Up').click();
        cy.get('input[name="userName"]').type('user');
        cy.get('input[name="password"]').type('pass');
        cy.get('input[name="repeat"]').type('pass');
        cy.get('input[type="button"]').click();
        cy.get('h4[name="name"]').should('contain', 'user');
        cy.get('input[name="username"]').type('user1');
        cy.get('input[name="password"]').type('user');
        cy.get('button').contains('Update').click();
        cy.get('h4[name="pass"]').should('contain', 'user');
        cy.get('button').contains('Logout').click();
        cy.get('button').contains('Login').click();
        cy.get('input[name="userName"]').type('user1');
        cy.get('input[type="button"]').click();
        cy.get('p[name="msg"]').should('contain', 'Please fill whole inputs');
        cy.get('input[name="password"]').type('pass');
        cy.get('input[type="button"]').click();
        cy.get('p[name="msg"]').should('contain', 'Uncorrect username or password');
        cy.get('input[name="password"]').clear();
        cy.get('input[name="password"]').type('user');
        cy.get('input[type="button"]').click();
        cy.get('h4[name="pass"]').should('contain', 'user');
        cy.get('button').contains('Delete').click();
        cy.get('h3[name="userv"]').should('contain', 'Login or Sign Up');
        cy.get('button').contains('Login').click();
        cy.get('input[name="userName"]').type('user1');
        cy.get('input[name="password"]').type('user');
        cy.get('input[type="button"]').click();
        cy.get('p[name="msg"]').should('contain', 'Uncorrect username or password');
    })
})