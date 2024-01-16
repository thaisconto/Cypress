// será da Feature Login

describe ('Login', () => {

    it('Login com sucesso', () => {
        //entrar na URL
        cy.visit('https://automacao.qacoders-academy.com.br/login');

        //pegar os campos e preencher
        cy.get('#email').type('sysadmin@qacoders.com');
        cy.get('#password').type('1234@Teste');

        // clicar no botão
        cy.get('#login').click();
})
})