import LoginPage from "../page-object/loginPage"
import RegisterPage from "../page-object/registerPage"
const registerPage = new RegisterPage
const loginPage = new LoginPage

describe('Cenário: 006 - Login por um usuário bloqueado', () => {

    it("TC006.001 - Tentativa de Login com Usuário Bloqueado", () => {
          //(Pre-condição)
          loginPage.standardLogin()       
        
          //(Bloqueio do usuário)
          //Dado que o usuário esteja na página "Painel do Administrador"
          //E clica no botão "Listar Usuários"
          registerPage.getListarButton().click()          
          //E clica no ícone "Lápis" referente ao usuário existente
          registerPage.getPencilButton().click()
          //E clica no botão "Desativar" do Formulário de Cadastro
          registerPage.getDesativadoButton().click()
          //E clica em "Enviar"
          registerPage.getEnviarButton().click()
          //E o sistema volta a Lista de Usuários      
          cy.get('app-users-list > .navbar > .container-fluid').should('have.text', ' Lista de Usuários ') 
          //E clica no ícone "Lápis" referente ao usuário existente que foi bloqueado
          registerPage.getPencilButton().click()
          //E confirma se o mesmo está desativado
          registerPage.getDesativadoButton().should('be.visible').and('be.enabled') 

          //(Realizar login do usuário desativado)
          //Quando faz o logout
          registerPage.getLogout().click()
          //E insere o e-mail do usuário bloqueado
          loginPage.getEmail().type("rrrr@gmail.com")
          //E insere a senha do usuário bloqueado
          loginPage.getPassword().type("12345")
          //E clica no botão "Entrar"
          loginPage.getLoginButton().click()
          //Então o usuário acessa sua conta
          cy.get('h4.mt-5').should('have.text', 'Painel do Professor')  
    })

    it("TC006.002 - Tentativa de Login com Usuário Bloqueado (Senha Incorreta)", () => {
          //Dado que o usuário esteja na página de login
          cy.visit(Cypress.env('url'))
          //Quando insere o e-mail do usuário bloqueado
          loginPage.getEmail().type("rrrr@gmail.com")
          //E insere a senha errada do usuário bloqueado
          loginPage.getPassword().type("45678")
          //E clica no botão "Entrar"
          loginPage.getLoginButton().click()
          //Então o usuário mão acessa sua conta
          loginPage.getErrorMsg().should('have.text', 'Login ou senha invalidos, tente novamente')
    })

})