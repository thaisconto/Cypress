// será da Feature Login

beforeEach(() => {
    //entrar na URL
    cy.visit('https://automacao.qacoders-academy.com.br/login');
});

describe ('Login', () => {

    it('Login com sucesso', () => {
        //vou chamar o nome do método que coloquei em Command e as variáveis
        const email = Cypress.env('EMAIL');
        const password = Cypress.env('PASSOWORD');

        cy.Login(email, password);
    });

    it('Login com email válido e senha inválida', () => {
        cy.get('#email').type(Cypress.env('EMAIL'));
        cy.get('#password').type(Cypress.env('PASSOWORD_INVALIDO'));
        cy.get('#login').click();
        cy.MsgLoginFalho();
    });

    it('Login com email inválido e senha válida', () => {
        cy.get('#email').type(Cypress.env('EMAIL_INVALIDO'));
        cy.get('#password').type(Cypress.env('PASSOWORD'));
        cy.get('#login').click();
        cy.MsgLoginFalho();
    });
});



// ------------------------------------------------------------------------
// Código antigo, antes de reestruturar
/*
// será da Feature Login

beforeEach(() => {
    //entrar na URL
    cy.visit('https://automacao.qacoders-academy.com.br/login');
});

describe ('Login', () => {

    it('Login com sucesso', () => {
      
         //pegar os campos e preencher
        cy.get('#email').type('sysadmin@qacoders.com');
        cy.get('#password').type('1234@Test');

        // clicar no botão
        cy.get('#login').click();

        //validar se realmente estou na URL home pelo botão de logout
        cy.location().should((loc) => {
            //verifica se a URL base contem "login"
            expect(loc.pathname).to.eql('/login');
        })
        cy.get('body > nav > button').should('be.visible');

    })


    it('Login com email válido e senha inválida', () => {
        
        //pegar os campos e preencher
        cy.get('#email').type('sysadmin@qacoders.com');
        cy.get('#password').type('1234');

        // clicar no botão
        cy.get('#login').click();

        // verifica se tem o elmento alerta e o texto
        cy.get('[class="MuiAlert-message css-1xsto0d"]').should('be.visible');
        cy.get('[class="MuiAlert-message css-1xsto0d"]').should('have.text','E-mail e/ou senha inválidos'); 

    })

    it('Login com email inválido e senha válida', () => {
        //pegar os campos e preencher
        cy.get('#email').type('testeinvalido@qacoders.com');
        cy.get('#password').type('1234@Test');

        // clicar no botão
        cy.get('#login').click();

        // verifica se tem o elmento alerta e o texto
        cy.get('[class="MuiAlert-message css-1xsto0d"]').should('be.visible');
        cy.get('[class="MuiAlert-message css-1xsto0d"]').should('have.text','E-mail e/ou senha inválidos'); 

    })
})

*/