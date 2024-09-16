import LoginPage from "../page-object/loginPage"
import RegisterPage from "../page-object/registerPage"
const registerPage = new RegisterPage
const loginPage = new LoginPage

describe('Scenario: 001 - Registering a new user', () => {

    beforeEach(() => {
            loginPage.standardLogin()
    })
    
     it("TC001.001 - Registering a new user", () => {
          //Given that the user is on the "Administrator Panel" page
          //When you click on the "Add Users" button
          registerPage.getAdicionarButton().click()
          //And fill in the "Name" field
          registerPage.getName().type("Josué Antônio Raimundo")
          //And fill in the "Email" field
          registerPage.getEmail().type("worktests345@gmail.com")
          //And fill in the "Password" field
          registerPage.getPassword().type("^tqhQFc6")
          //And select the user profile
          registerPage.getSelectAluno().select('Aluno')
          //And in Status leave the option "Active"
          registerPage.getAtivoButton().click()
          //And click on the "Send" button
          registerPage.getEnviarButton().click()
          //Then the system shows the Administrator Panel with the registered user name
          cy.get('h4.mt-5').should('have.text', 'Painel do Administrador')   
    })  
    
    it("TC001.002 - Registration without filling out", () => {
          //Given that the user is on the "Administrator Panel" page
          //When you click on the "Add Users" button
          registerPage.getAdicionarButton().click()
          //And don't fill in the "Name" field
          //And don't fill in the "E-mail" field 
          //And don't fill in the "Password" field
          //And I don't select the user profile
          //And it doesn't fill in the "Active" field
          //And click on the "Send" button
          registerPage.getEnviarButton().should('be.visible').and('be.disabled')
          //Then the registration is not carried out and the user remains on the Registration Form page 
          cy.get('h2').should('have.text', 'Formulário de Cadastro')   
    })

    it("TC001.003 - Email registration without @", () => {
          //Given that the user is on the "Administrator Panel" page
          //When you click on the "Add Users" button
          registerPage.getAdicionarButton().click()
          //And fill in the "Name" field
          registerPage.getName().type("Josué Antônio Raimundo")
          //And fill in the "Email" field
          registerPage.getEmail().type("worktests345gmail.com")
          //And fill in the "Password" field
          registerPage.getPassword().type("^tqhQFc6")
          //And select the user profile
          registerPage.getSelectAluno().select('Aluno')
          //And in Status leave the option "Active"
          registerPage.getAtivoButton().click()
          //And click on the "Send" button
          registerPage.getEnviarButton().click()
          //Then the system generates an error message
          registerPage.getErrorMsg().should('have.text', 'Preencher e-mail corretamente')   
    })

    it("TC001.004 - Nameless registration", () => {
          //Given that the user is on the "Administrator Panel" page
          //When you click on the "Add Users" button
          registerPage.getAdicionarButton().click()
          //And don't fill in the "Name" field
          //And fill in the "Email" field
          registerPage.getEmail().type("worktests345@gmail.com")
          //And fill in the "Password" field
          registerPage.getPassword().type("^tqhQFc6")
          //And select the user profile
          registerPage.getSelectAluno().select('Aluno')
          //And in Status leave the option "Active"
          registerPage.getAtivoButton().click()
          //And click on the "Send" button
          registerPage.getEnviarButton().should('be.visible').and('be.disabled')
          //Then the registration is not carried out and the user remains on the Registration Form page 
          cy.get('h2').should('have.text', 'Formulário de Cadastro')  
    }) 

    it("TC001.005 - Registration without email", () => {
          //Given that the user is on the "Administrator Panel" page
          //When you click on the "Add Users" button
          registerPage.getAdicionarButton().click()
          //And fill in the "Name" field
          registerPage.getName().type("Josué Antônio Raimundo")
          //And don't fill in the "E-mail" field
          //And fill in the "Password" field
          registerPage.getPassword().type("^tqhQFc6")
          //And select the user profile
          registerPage.getSelectAluno().select('Aluno')
          //And in Status leave the option "Active"
          registerPage.getAtivoButton().click()
          //And click on the "Send" button
          registerPage.getEnviarButton().should('be.visible').and('be.disabled')
          //Then the registration is not carried out and the user remains on the Registration Form page 
          cy.get('h2').should('have.text', 'Formulário de Cadastro')
    }) 

    it("TC001.006 - Register name with Emoji", () => {
          //Given that the user is on the "Administrator Panel" page
          //When you click on the "Add Users" button
          registerPage.getAdicionarButton().click()
          //And fill in the "Name" field
          registerPage.getName().type("🤘🏻🤘🏻🤘🏻🤘🏻🤘🏻🤘🏻🤘🏻🤘🏻")
          //And fill in the "Email" field
          registerPage.getEmail().type("worktests345@gmail.com")
          //And fill in the "Password" field
          registerPage.getPassword().type("^tqhQFc6")
          //And select the user profile
          registerPage.getSelectAluno().select('Aluno')
          //And in Status leave the option "Active"
          registerPage.getAtivoButton().click()
          //And click on the "Send" button
          registerPage.getEnviarButton().click()
          //Then the system generates an error message
          registerPage.getErrorMsg().should('have.text', 'Preencher o campo Nome apenas com letras')   
    })

    it("TC001.007 - Register name with Special Characters", () => {
          //Given that the user is on the "Administrator Panel" page
          //When you click on the "Add Users" button
          registerPage.getAdicionarButton().click()
          //And fill in the "Name" field
          registerPage.getName().type("!!!!!!!!")
          //And fill in the "Email" field
          registerPage.getEmail().type("worktests345@gmail.com")
          //And fill in the "Password" field
          registerPage.getPassword().type("^tqhQFc6")
          //And select the user profile
          registerPage.getSelectAluno().select('Aluno')
          //And in Status leave the option "Active"
          registerPage.getAtivoButton().click()
          //And click on the "Send" button
          registerPage.getEnviarButton().click()
          //Then the system generates an error message
          registerPage.getErrorMsg().should('have.text', 'Preencher o campo Nome apenas com letras') 
    })

    it("TC001.008 - Register name with numbers", () => {
          //Given that the user is on the "Administrator Panel" page
          //When you click on the "Add Users" button
          registerPage.getAdicionarButton().click()
          //And fill in the "Name" field
          registerPage.getName().type("23456789")
          //And fill in the "Email" field
          registerPage.getEmail().type("worktests345@gmail.com")
          //And fill in the "Password" field
          registerPage.getPassword().type("^tqhQFc6")
          //And select the user profile
          registerPage.getSelectAluno().select('Aluno')
          //And in Status leave the option "Active"
          registerPage.getAtivoButton().click()
          //And click on the "Send" button
          registerPage.getEnviarButton().click()
          //Then the system generates an error message
          registerPage.getErrorMsg().should('have.text', 'Preencher o campo Nome apenas com letras')   
    }) 

      it("TC001.009 - Trying to duplicate a registration", () => {
            //Given that the user is on the "Administrator Panel" page
            //When you click on the "Add Users" button
            registerPage.getAdicionarButton().click()
            //And fill in the "Name" field
            registerPage.getName().type("Josué Antônio Raimundo")
            //And fill in the "Email" field
            registerPage.getEmail().type("worktests345@gmail.com")
            //And fill in the "Password" field
            registerPage.getPassword().type("^tqhQFc6")
            //And select the user profile
            registerPage.getSelectAluno().select('Aluno')
            //And in Status leave the option "Active"
            registerPage.getAtivoButton().click()
            //And click on the "Send" button
            registerPage.getEnviarButton().click()
            //Then the system generates an error message
            registerPage.getErrorMsg().should('have.text', 'Este usuário ou e-mail já está em uso.')  
      })  

    it("TC001.010 - Clear Form", () => {
          //Given that the user is on the "Administrator Panel" page
          //When you click on the "Add Users" button
          registerPage.getAdicionarButton().click()
          //And fill in the "Name" field
          registerPage.getName().type("Josué Antônio Raimundo")
          //And fill in the "Email" field
          registerPage.getEmail().type("worktests345@gmail.com")
          //And fill in the "Password" field
          registerPage.getPassword().type("^tqhQFc6")
          //And select the Student profile
          registerPage.getSelectAluno().select('Aluno')
          //And in Status leave the option "Active"
          registerPage.getAtivoButton().click()
          //And click on the "Clear" button
          registerPage.getLimparButton().click()
          //Then the system stays on the registration page and deletes the entire form for the user to fill in again
          cy.url().should('eq', 'http://13.37.224.17:4200/')
    })

})