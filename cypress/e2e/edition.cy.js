import LoginPage from "../page-object/loginPage"
import RegisterPage from "../page-object/registerPage"
const registerPage = new RegisterPage
const loginPage = new LoginPage

describe('Cenário: 002 - Edição das informações de um usuário existente', () => {

    beforeEach(() => {
       loginPage.standardLogin()
    })

    
    it("TC002.001 - Editar Nome de um usuário com sucesso", () => {
          //Dado que o usuário esteja na página "Painel do Administrador"
          //E clica no botão "Listar Usuários"
          registerPage.getListarButton().click()
          //E clica no ícone "Lápis" referente ao nome do aluno existente
          registerPage.getPencilButton().click()
          //Quando altera o Nome dele na Tela de Cadastro
          registerPage.getName().clear().type("Josué Antônio Raimundo Pereirão Domingues")
          //E clica em "Enviar"
          registerPage.getEnviarButton().click()
          //Então as alterações devem ser salvas e refletidas imediatamente no perfil do usuário        
          cy.get(":nth-child(8) > th").should('have.text', 'Josué Antônio Raimundo Pereirão Domingues')   
    }) 

    it("TC002.002 - Editar E-mail de um usuário com sucesso", () => {
          //Dado que o usuário esteja na página "Painel do Administrador"
          //E clica no botão "Listar Usuários"
          registerPage.getListarButton().click()
          //E clica no ícone "Lápis" referente ao nome do aluno existente
          registerPage.getPencilButton().click()
          //Quando altera o E-mail dele na Tela de Cadastro
          registerPage.getEmail().clear().type("worktests999@gmail.com")
          //E clica em "Enviar"
          registerPage.getEnviarButton().click()
          //Então as alterações devem ser salvas e refletidas imediatamente no perfil do usuário        
          cy.get(":nth-child(8) > :nth-child(2)").should('have.text', 'worktests999@gmail.com')   
    }) 

    it("TC002.003 - Identificar o Status do usuário", () => {
          //Dado que o usuário esteja na página "Painel do Administrador"
          //E clica no botão "Listar Usuários"
          registerPage.getListarButton().click()
          //Quando clica no ícone "Lápis" referente ao nome do aluno existente
          registerPage.getPencilButton().click()
          //Então verifica se o Status do Aluno está Ativo
          registerPage.getAtivoButton().should('be.visible')
          .and('be.enabled')
    })    

    it("TC002.004 - Excluir Usuário", () => {
          //Dado que o usuário esteja na página "Painel do Administrador"
          //E clica no botão "Listar Usuários"
          registerPage.getListarButton().click()
          //E clica no ícone "Lixeira" referente ao nome do aluno existente
          registerPage.getBinButton().click()
          //Então o sistema deve excluir o usuário e continuar na página Painel do Administrador"
          cy.get('h4.mt-5').should('have.text', 'Painel do Administrador')  
    })
})