beforeEach(() => {
    //entrar na URL
    cy.visit('http://54.166.20.145:9080/desafioqa/login');
});

describe ('Login', () => {

    it('Login com sucesso', () => {
        //vou chamar o nome do método que coloquei em Command e as variáveis
        const usuario = Cypress.env('USUARIO');
        const password = Cypress.env('PASSOWORD');

        cy.Login(usuario, password);
    });

    
});

