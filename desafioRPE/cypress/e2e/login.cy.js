describe ('Login', () => {
    beforeEach(() => {
        cy.visit('http://54.166.20.145:9080/desafioqa/');
    });
    it('Login com sucesso', () => {
        const usuario = Cypress.env('USUARIO');
        const password = Cypress.env('PASSOWORD');
        cy.Login(usuario, password);
        cy.contains('Bem vindo ao Desafio', {timeout: 1000});
        cy.Logout();
    });

    it('Login com usuário válido e password inválido', () => {
        const usuario = Cypress.env('USUARIO');
        const password = Cypress.env('PASSOWORD_INVALIDO');
        cy.Login(usuario, password);
        cy.MsgLoginFalho('Credenciais inválidas');
        
    });

    it('Login com usuário inválido e password válido', () => {
        const usuario = Cypress.env('USUARIO_INVALIDO');
        const password = Cypress.env('PASSOWORD');
        cy.Login(usuario, password);
        cy.MsgLoginFalho('Credenciais inválidas');
    });  
});

