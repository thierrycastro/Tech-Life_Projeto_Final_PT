import LoginPage from "../page-object/loginPage"
import RegisterPage from "../page-object/registerPage"
const registerPage = new RegisterPage
const loginPage = new LoginPage

describe("Cenário: 007 - Login", () => {

    beforeEach(() => {
    cy.visit(Cypress.env('url'))      
    })
    
    it("TC007.001 - Login com credenciais válidas", () => {
            //Dado que o usuário esteja na Tela de Login
            //E insere suas credenciais válidas
            loginPage.getEmail().type('rrrr@gmail.com')
            loginPage.getPassword().type('12345')
            //Quando clica no botão "Entrar"
            loginPage.getLoginButton().click()
            //Então o usuário deve ser autenticado e redirecionado para sua área respectiva
            cy.get('h4.mt-5').should('have.text', 'Painel do Professor')     
    })

    it("TC007.002 - Logout com sucesso", () => {
            //Dado que o usuário esteja na Tela de Login
            //E insere suas credenciais
            loginPage.getEmail().type('rrrr@gmail.com')
            loginPage.getPassword().type('12345')
            //Quando clica no botão "Entrar"
            loginPage.getLoginButton().click()
            //E é redirecionado para sua área respectiva
            cy.get('h4.mt-5').should('have.text', 'Painel do Professor')  
            //E clica no botão "Logout"
            registerPage.getLogout().click()
            //Então o usuário deve ser desconectado do sistema
            cy.get('.btn').should('have.text', 'Entrar')
    })

    it("TC007.003 - Login sem credenciais", () => {
            //Dado que o usuário esteja na Tela de Login
            //E não insere suas credenciais
            //Quando clica no botão "Entrar"
            loginPage.getLoginButton().click()
            //Então o usuário não acessa sua área respectiva
            loginPage.getErrorMsg().should('have.text', 'Login ou senha invalidos, tente novamente')       
    })

    it("TC007.004 - Login inválido com password vazia", () => {
            //Dado que o usuário esteja na Tela de Login
            //E insere seu e-mail
            loginPage.getEmail().type('rrrr@gmail.com')
            //E não insere sua senha
            //Quando clica no botão "Entrar"
            loginPage.getLoginButton().click()
            //Então o usuário não acessa sua área respectiva
            loginPage.getErrorMsg().should('have.text', 'Login ou senha invalidos, tente novamente')    
    })

    it("TC007.005 - Login inválido com e-mail vazio", () => {
            //Dado que o usuário esteja na Tela de Login
            //E não insere seu e-mail
            //E insere sua senha
            loginPage.getPassword().type('12345')
            //Quando clica no botão "Entrar"
            loginPage.getLoginButton().click()
            //Então o usuário não acessa sua área respectiva
            loginPage.getErrorMsg().should('have.text', 'Login ou senha invalidos, tente novamente')    
    })

    it("TC007.006 - Login com e-mail inválido", () => {
            //Dado que o usuário esteja na Tela de Login
            //E insere seu e-mail inválido
            loginPage.getEmail().type('rrssss@gmail.com')
            //E insere sua senha
            loginPage.getPassword().type('12345')
            //Quando clica no botão "Entrar"
            loginPage.getLoginButton().click()
            //Então o usuário não acessa sua área respectiva
            loginPage.getErrorMsg().should('have.text', 'Login ou senha invalidos, tente novamente')    
    })

    it("TC007.007 - Login com password inválida (Emoji)", () => {
            //Dado que o usuário esteja na Tela de Login
            //E insere seu e-mail inválido
            loginPage.getEmail().type('rrrr@gmail.com')
            //E insere sua senha
            loginPage.getPassword().type('🤘🏻🤘🏻🤘🏻🤘🏻🤘🏻🤘🏻🤘🏻🤘🏻')
            //Quando clica no botão "Entrar"
            loginPage.getLoginButton().click()
            //Então o usuário não acessa sua área respectiva
            loginPage.getErrorMsg().should('have.text', 'Login ou senha invalidos, tente novamente')    
    })

    it("TC007.008 - Login com password inválida (Caracteres Especiais)", () => {
            //Dado que o usuário esteja na Tela de Login
            //E insere seu e-mail inválido
            loginPage.getEmail().type('rrrr@gmail.com')
            //E insere sua senha
            loginPage.getPassword().type('!!!!!!!!')
            //Quando clica no botão "Entrar"
            loginPage.getLoginButton().click()
            //Então o usuário não acessa sua área respectiva
            loginPage.getErrorMsg().should('have.text', 'Login ou senha invalidos, tente novamente')    
    })

    it("TC007.009 - Login com password inválida (com espaçamento)", () => {
            //Dado que o usuário esteja na Tela de Login
            //E insere seu e-mail
            loginPage.getEmail().type('rrrr@gmail.com')
            //E insere sua senha válida com espaço no final
            loginPage.getPassword().type('12345 ')
            //Quando clica no botão "Entrar"
            loginPage.getLoginButton().click()
            //Então o usuário não acessa sua área respectiva
            loginPage.getErrorMsg().should('have.text', 'Login ou senha invalidos, tente novamente')    
    })

    it("TC007.010 - Atualizar a Página", () => {
            //Dado que o usuário esteja na Tela de Login
            //E insere seu e-mail
            loginPage.getEmail().type('rrrr@gmail.com')
            //E insere sua senha
            loginPage.getPassword().type('12345')
            //E clica no botão "Entrar"
            loginPage.getLoginButton().click()
            //E acessa sua área respectiva
            cy.get('h4.mt-5').should('have.text', 'Painel do Professor')
            //Quando clica no botão "atualizar" do navegador
            cy.reload()
            //Então o usuário deve permanecer na sua área respectiva atualizada
            cy.get('h4.mt-5').should('have.text', 'Painel do Professor')
    })

})