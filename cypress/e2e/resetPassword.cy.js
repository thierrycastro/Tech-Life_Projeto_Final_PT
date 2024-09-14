import LoginPage from "../page-object/loginPage"
import RegisterPage from "../page-object/registerPage"
const registerPage = new RegisterPage
const loginPage = new LoginPage

describe('Cenário: 003 - Redefinição de senha de um usuário', () => {

    beforeEach(() => {
       loginPage.standardLogin()
    })

    it("TC003.001 - Redefinir Senha com sucesso", () => {
          //Dado que o usuário esteja na página "Painel do Administrador"
          //E clica no botão "Listar Usuários"
          registerPage.getListarButton().click()
          //E clica no ícone "Lápis" referente ao nome do aluno existente
          registerPage.getPencilButton().click()
          //Quando altera o campo Senha dele na Tela de Cadastro
          registerPage.getPassword().clear().type("zezito")
          //E clica em "Enviar"
          registerPage.getEnviarButton().click()
          //Então o sistema deve alterar a senha imediatamente e deve ser exibida na tela de cadastro      
          cy.get(":nth-child(8) > :nth-child(3)").should('have.text', 'Professor')    
    })

    it("TC003.002 - Redefinir Senha com Caracteres Especiais", () => {
           //Dado que o usuário esteja na página "Painel do Administrador"
          //E clica no botão "Listar Usuários"
          registerPage.getListarButton().click()
          //E clica no ícone "Lápis" referente ao nome do aluno existente
          registerPage.getPencilButton().click()
          //Quando altera o campo Senha dele na Tela de Cadastro
          registerPage.getPassword().clear().type("!!!!!!")
          //E clica em "Enviar"
          registerPage.getEnviarButton().click()
          //Então o sistema deve alterar a senha imediatamente e deve ser exibida na tela de cadastro      
          cy.get(":nth-child(8) > :nth-child(3)").should('have.text', 'Professor')     
    })

    it("TC003.003 - Redefinir Senha com Emoji", () => {
          //Dado que o usuário esteja na página "Painel do Administrador"
          //E clica no botão "Listar Usuários"
          registerPage.getListarButton().click()
          //E clica no ícone "Lápis" referente ao nome do aluno existente
          registerPage.getPencilButton().click()
          //Quando altera o campo Senha dele na Tela de Cadastro
          registerPage.getPassword().clear().type("🤘🏻🤘🏻🤘🏻🤘🏻🤘🏻🤘🏻🤘🏻🤘🏻")
          //E clica em "Enviar"
          registerPage.getEnviarButton().click()
          //Então o sistema deve alterar a senha imediatamente e deve ser exibida na tela de cadastro      
          cy.get(":nth-child(8) > :nth-child(3)").should('have.text', 'Professor')     
    })

})