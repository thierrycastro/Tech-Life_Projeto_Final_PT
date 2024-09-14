import LoginPage from "../page-object/loginPage"
import RegisterPage from "../page-object/registerPage"
const registerPage = new RegisterPage
const loginPage = new LoginPage

describe('Cenário: 001 - Cadastro de um novo usuário', () => {

    beforeEach(() => {
            loginPage.standardLogin()
    })
    
     it("TC001.001 - Cadastro de um novo usuário (Aluno) Happy Path", () => {
          //Dado que o usuário esteja na página "Painel do Administrador"
          //Quando clica no botão "Adicionar Usuários"
          registerPage.getAdicionarButton().click()
          //E preenche o campo "Nome"
          registerPage.getName().type("Josué Antônio Raimundo")
          //E preenche o campo "E-mail"
          registerPage.getEmail().type("worktests345@gmail.com")
          //E preenche o campo "Senha"
          registerPage.getPassword().type("^tqhQFc6")
          //E seleciona o perfil de usuário
          registerPage.getSelectAluno().select('Aluno')
          //E em Status deixa na opção "Ativo"
          registerPage.getAtivoButton().click()
          //E clicar no botão "Enviar"
          registerPage.getEnviarButton().click()
          //Então o sistema mostra o Painel do Administrador com o nome do usuário cadastrado
          cy.get('h4.mt-5').should('have.text', 'Painel do Administrador')   
    })  
    
    it("TC001.002 - Cadastro sem preenchimentos", () => {
          //Dado que o usuário esteja na página "Painel do Administrador"
          //Quando clica no botão "Adicionar Usuários"
          registerPage.getAdicionarButton().click()
          //E não preenche o campo "Nome"
          //E não preenche o campo "E-mail" 
          //E não preenche o campo "Senha"
          //E não seleciono o o perfil de usuário
          //E não preenche o campo "Ativo"
          //E clicar no botão "Enviar"
          registerPage.getEnviarButton().should('be.visible').and('be.disabled')
          //Então o cadastro não é realizado e o usuário permanece na página de Formulário de Cadastro 
          cy.get('h2').should('have.text', 'Formulário de Cadastro')   
    })

    it("TC001.003 - Cadastro e-mail sem @", () => {
          //Dado que o usuário esteja na página "Painel do Administrador"
          //Quando clica no botão "Adicionar Usuários"
          registerPage.getAdicionarButton().click()
          //E preenche o campo "Nome"
          registerPage.getName().type("Josué Antônio Raimundo")
          //E preenche o campo "E-mail"
          registerPage.getEmail().type("worktests345gmail.com")
          //E preenche o campo "Senha"
          registerPage.getPassword().type("^tqhQFc6")
          //E seleciona o perfil de usuário
          registerPage.getSelectAluno().select('Aluno')
          //E em Status deixa na opção "Ativo"
          registerPage.getAtivoButton().click()
          //E clicar no botão "Enviar"
          registerPage.getEnviarButton().click()
          //Então o sistema gera uma mensagem de erro
          registerPage.getErrorMsg().should('have.text', 'Preencher e-mail corretamente')   
    })

    it("TC001.004 - Cadastro sem nome", () => {
          //Dado que o usuário esteja na página "Painel do Administrador"
          //Quando clica no botão "Adicionar Usuários"
          registerPage.getAdicionarButton().click()
          //E não preenche o campo "Nome"
          //E preenche o campo "E-mail"
          registerPage.getEmail().type("worktests345@gmail.com")
          //E preenche o campo "Senha"
          registerPage.getPassword().type("^tqhQFc6")
          //E seleciona o perfil de usuário
          registerPage.getSelectAluno().select('Aluno')
          //E em Status deixa na opção "Ativo"
          registerPage.getAtivoButton().click()
          //E clicar no botão "Enviar"
          registerPage.getEnviarButton().should('be.visible').and('be.disabled')
          //Então o cadastro não é realizado e o usuário permanece na página de Formulário de Cadastro 
          cy.get('h2').should('have.text', 'Formulário de Cadastro')  
    }) 

    it("TC001.005 - Cadastro sem e-mail", () => {
          //Dado que o usuário esteja na página "Painel do Administrador"
          //Quando clica no botão "Adicionar Usuários"
          registerPage.getAdicionarButton().click()
          //E preenche o campo "Nome"
          registerPage.getName().type("Josué Antônio Raimundo")
          //E não preenche o campo "E-mail"
          //E preenche o campo "Senha"
          registerPage.getPassword().type("^tqhQFc6")
          //E seleciona o perfil de usuário
          registerPage.getSelectAluno().select('Aluno')
          //E em Status deixa na opção "Ativo"
          registerPage.getAtivoButton().click()
          //E clicar no botão "Enviar"
          //registerPage.getEnviarButton().click()
          registerPage.getEnviarButton().should('be.visible').and('be.disabled')
          //Então o cadastro não é realizado e o usuário permanece na página de Formulário de Cadastro 
          cy.get('h2').should('have.text', 'Formulário de Cadastro')
    }) 

    it("TC001.006 - Cadastro nome com Emoji", () => {
          //Dado que o usuário esteja na página "Painel do Administrador"
          //Quando clica no botão "Adicionar Usuários"
          registerPage.getAdicionarButton().click()
          //E preenche o campo "Nome"
          registerPage.getName().type("🤘🏻🤘🏻🤘🏻🤘🏻🤘🏻🤘🏻🤘🏻🤘🏻")
          //E preenche o campo "E-mail"
          registerPage.getEmail().type("worktests345@gmail.com")
          //E preenche o campo "Senha"
          registerPage.getPassword().type("^tqhQFc6")
          //E seleciona o perfil de usuário
          registerPage.getSelectAluno().select('Aluno')
          //E em Status deixa na opção "Ativo"
          registerPage.getAtivoButton().click()
          //E clicar no botão "Enviar"
          registerPage.getEnviarButton().click()
          //Então o sistema gera uma mensagem de erro
          registerPage.getErrorMsg().should('have.text', 'Preencher o campo Nome apenas com letras')   
    })

    it("TC001.007 - Cadastro nome com Caracteres Especiais", () => {
          //Dado que o usuário esteja na página "Painel do Administrador"
          //Quando clica no botão "Adicionar Usuários"
          registerPage.getAdicionarButton().click()
          //E preenche o campo "Nome"
          registerPage.getName().type("!!!!!!!!")
          //E preenche o campo "E-mail"
          registerPage.getEmail().type("worktests345@gmail.com")
          //E preenche o campo "Senha"
          registerPage.getPassword().type("^tqhQFc6")
          //E seleciona o perfil de usuário
          registerPage.getSelectAluno().select('Aluno')
          //E em Status deixa na opção "Ativo"
          registerPage.getAtivoButton().click()
          //E clicar no botão "Enviar"
          registerPage.getEnviarButton().click()
          //Então o sistema gera uma mensagem de erro
          registerPage.getErrorMsg().should('have.text', 'Preencher o campo Nome apenas com letras') 
    })

    it("TC001.008 - Cadastro nome com números", () => {
          //Dado que o usuário esteja na página "Painel do Administrador"
          //Quando clica no botão "Adicionar Usuários"
          registerPage.getAdicionarButton().click()
          //E preenche o campo "Nome"
          registerPage.getName().type("23456789")
          //E preenche o campo "E-mail"
          registerPage.getEmail().type("worktests345@gmail.com")
          //E preenche o campo "Senha"
          registerPage.getPassword().type("^tqhQFc6")
          //E seleciona o perfil de usuário
          registerPage.getSelectAluno().select('Aluno')
          //E em Status deixa na opção "Ativo"
          registerPage.getAtivoButton().click()
          //E clicar no botão "Enviar"
          registerPage.getEnviarButton().click()
          //Então o sistema gera uma mensagem de erro
          registerPage.getErrorMsg().should('have.text', 'Preencher o campo Nome apenas com letras')   
    }) 

      it("TC001.009 - Tentar realizar a duplicidade de um cadastro", () => {
            //Dado que o usuário esteja na página "Painel do Administrador"
            //Quando clica no botão "Adicionar Usuários"
            registerPage.getAdicionarButton().click()
            //E preenche o campo "Nome"
            registerPage.getName().type("Josué Antônio Raimundo")
            //E preenche o campo "E-mail"
            registerPage.getEmail().type("worktests345@gmail.com")
            //E preenche o campo "Senha"
            registerPage.getPassword().type("^tqhQFc6")
            //E seleciona o perfil de usuário
            registerPage.getSelectAluno().select('Aluno')
            //E em Status deixa na opção "Ativo"
            registerPage.getAtivoButton().click()
            //E clicar no botão "Enviar"
            registerPage.getEnviarButton().click()
            //Então o sistema gera uma mensagem de erro
            registerPage.getErrorMsg().should('have.text', 'Este usuário ou e-mail já está em uso.')  
      })  

    it("TC001.010 - Limpar Formulário", () => {
          //Dado que o usuário esteja na página "Painel do Administrador"
          //Quando clica no botão "Adicionar Usuários"
          registerPage.getAdicionarButton().click()
          //E preenche o campo "Nome"
          registerPage.getName().type("Josué Antônio Raimundo")
          //E preenche o campo "E-mail"
          registerPage.getEmail().type("worktests345@gmail.com")
          //E preenche o campo "Senha"
          registerPage.getPassword().type("^tqhQFc6")
          //E seleciona o perfil de Aluno
          registerPage.getSelectAluno().select('Aluno')
          //E em Status deixa na opção "Ativo"
          registerPage.getAtivoButton().click()
          //E clicar no botão "Limpar"
          registerPage.getLimparButton().click()
          //Então o sistema se mantém na página de registro e apaga todo o formulário para o usuário preencher novamente
          cy.url().should('eq', 'http://13.37.224.17:4200/')
    })

})