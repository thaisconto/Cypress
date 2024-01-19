/// <reference types="cypress" />

Cypress.Commands.add('Login', (usuario, password) => {
    
    // não vou passar o usuario e senha, vou chamar a variável
    cy.get('#username').type(usuario);
    cy.get('#password').type(password);
    cy.get('[type="submit"]').click();

});

