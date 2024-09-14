import LoginPage from "../page-object/loginPage"
import RegisterPage from "../page-object/registerPage"
const registerPage = new RegisterPage
const loginPage = new LoginPage

describe('Cenário: 004 - Bloqueio de um usuário', () => {

    beforeEach(() => {
       loginPage.standardLogin()
    })

    it("TC004.001 - Bloquear um Usuário com Sucesso", () => {
          //Dado que o usuário esteja na página "Painel do Administrador"
          //E clica no botão "Listar Usuários"
          registerPage.getListarButton().click()
          //E clica no ícone "Lápis" referente ao usuário existente
          registerPage.getPencilButton().click()
          //Quando clica no botão "Desativar" do Formulário de Cadastro
          registerPage.getDesativadoButton().click()
          //E clica em "Enviar"
          registerPage.getEnviarButton().click()
          //Então o sistema deve mostrar uma mensagem de confirmação (por exemplo, "Usuário Desativado com sucesso")      
          cy.get('app-users-list > .navbar > .container-fluid').should('have.text', ' Lista de Usuários ')  
    })

    it("TC004.002 - Tentativa de Bloquear um Usuário Já Bloqueado", () => {
          //Dado que o usuário esteja na página "Painel do Administrador"
          //E clica no botão "Listar Usuários"
          registerPage.getListarButton().click()
          //E clica no ícone "Lápis" referente ao usuário existente
          registerPage.getPencilButton().click()
          //Quando clica no botão "Desativar" do Formulário de Cadastro
          registerPage.getDesativadoButton().click()
          //E clica em "Enviar"
          registerPage.getEnviarButton().click()
          //E retorna para a Lista de Usuários      
          cy.get('app-users-list > .navbar > .container-fluid').should('have.text', ' Lista de Usuários ')  
          //E clica novamente no ícone "Lápis" referente ao usuário existente
          registerPage.getPencilButton().click()
          //Então o botão "Desativar" deve estar clicado
          registerPage.getDesativadoButton().should('be.visible').and('be.enabled')
    }) 

})