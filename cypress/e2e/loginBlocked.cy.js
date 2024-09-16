import LoginPage from "../page-object/loginPage"
import RegisterPage from "../page-object/registerPage"
const registerPage = new RegisterPage
const loginPage = new LoginPage

describe('Scenario: 006 - Login by a blocked user', () => {

    it("TC006.001 - Login Attempt with Blocked User", () => {
          //(Precondition)
          loginPage.standardLogin()       
        
          //(User blocking)
          //Given that the user is on the "Administrator Panel" page
          //And click on the "List Users" button
          registerPage.getListarButton().click()          
          //And click on the "Pencil" icon for the existing user
          registerPage.getPencilButton().click()
          //And click on the "Deactivate" button on the Registration Form
          registerPage.getDesativadoButton().click()
          //And click "Send"
          registerPage.getEnviarButton().click()
          //And the system returns to the User List      
          cy.get('app-users-list > .navbar > .container-fluid').should('have.text', ' Lista de Usuários ') 
          //And click on the "Pencil" icon for the existing user que foi bloqueado
          registerPage.getPencilButton().click()
          //And confirm if it is deactivated
          registerPage.getDesativadoButton().should('be.visible').and('be.enabled') 

          //(Log in disabled user)
          //When you log out
          registerPage.getLogout().click()
          //And enter the blocked user's email
          loginPage.getEmail().type("rrrr@gmail.com")
          //And enter the password of the blocked user
          loginPage.getPassword().type("12345")
          //And click on the "Enter" button
          loginPage.getLoginButton().click()
          //Then the user accesses their account
          cy.get('h4.mt-5').should('have.text', 'Painel do Professor')  
    })

    it("TC006.002 - Login Attempt with Blocked User (Incorrect Password)", () => {
          //Given that the user is on the login page
          cy.visit(Cypress.env('url'))
          //When entering the blocked user's email
          loginPage.getEmail().type("rrrr@gmail.com")
          //And enter the wrong password of the blocked user
          loginPage.getPassword().type("45678")
          //And click on the "Enter" button
          loginPage.getLoginButton().click()
          //Then the user does not access their account
          loginPage.getErrorMsg().should('have.text', 'Login ou senha invalidos, tente novamente')
    })

})