import LoginPage from "../page-object/loginPage"
import RegisterPage from "../page-object/registerPage"
const registerPage = new RegisterPage
const loginPage = new LoginPage

describe('Scenario: 005 - Unblocking a user', () => {

    beforeEach(() => {
       loginPage.standardLogin()
    })

    it("TC005.001 - Unblock a User Successfully", () => {
          //Given that the user is on the "Administrator Panel" page
          //And click on the "List Users" button
          registerPage.getListarButton().click()
          //And click on the "Pencil" icon for the existing user
          registerPage.getPencilButton().click()
          //When you click on the "Active" button on the Registration Form
          registerPage.getAtivoButton().click()
          //And click "Send"
          registerPage.getEnviarButton().click()
          //Then the system should show a confirmation message (e.g. "User Deactivated Successfully")      
          cy.get('app-users-list > .navbar > .container-fluid').should('have.text', ' Lista de Usuários ')  
    })

    it("TC005.002 - Attempt to Unblock an Already Unblocked User", () => {
          //Given that the user is on the "Administrator Panel" page
          //And click on the "List Users" button
          registerPage.getListarButton().click()
          //And click on the "Pencil" icon for the existing user
          registerPage.getPencilButton().click()
          //When you click on the "Deactivate" button on the Registration Form
          registerPage.getAtivoButton().click()
          //And click "Send"
          registerPage.getEnviarButton().click()
          //And returns to the User List      
          cy.get('app-users-list > .navbar > .container-fluid').should('have.text', ' Lista de Usuários ')  
          //And click again on the "Pencil" icon for the existing user
          registerPage.getPencilButton().click()
          //Then the "Deactivate" button must be clicked
          registerPage.getAtivoButton().click().should('be.visible').and('be.enabled')
    }) 

})