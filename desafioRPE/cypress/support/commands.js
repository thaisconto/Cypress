/// <reference types="cypress" />

Cypress.Commands.add('Login', (usuario, password) => {
    cy.get('input[name="username"]').type(usuario);
    cy.get('input[name="password"]').type(password);
    cy.get('.btn-primary').click();
    
});

Cypress.Commands.add('MsgLoginFalho', (msg) => {
    cy.contains(msg);
});

Cypress.Commands.add('Logout', () => {
    cy.get('input[value="SAIR"]').click();
    cy.contains('Sign in');
});