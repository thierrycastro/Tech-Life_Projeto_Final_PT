import LoginPage from "../page-object/loginPage"
import RegisterPage from "../page-object/registerPage"
const registerPage = new RegisterPage
const loginPage = new LoginPage

describe('Scenario: 004 - Blocking a user', () => {

    beforeEach(() => {
       loginPage.standardLogin()
    })

    it("TC004.001 - Block a User Successfully", () => {
          //Given that the user is on the "Administrator Panel" page
          //And click on the "List Users" button
          registerPage.getListarButton().click()
          //And click on the "Pencil" icon for the existing user
          registerPage.getPencilButton().click()
          //When you click on the "Deactivate" button on the Registration Form
          registerPage.getDesativadoButton().click()
          //And click "Send"
          registerPage.getEnviarButton().click()
          //Then the system should show a confirmation message (e.g. "User Deactivated Successfully")      
          cy.get('app-users-list > .navbar > .container-fluid').should('have.text', ' Lista de Usuários ')  
    })

    it("TC004.002 - Attempt to Block an Already Blocked User", () => {
          //Given that the user is on the "Administrator Panel" page
          //And click on the "List Users" button
          registerPage.getListarButton().click()
          //And click on the "Pencil" icon for the existing user
          registerPage.getPencilButton().click()
          //When you click on the "Deactivate" button on the Registration Form
          registerPage.getDesativadoButton().click()
          //And click "Send"
          registerPage.getEnviarButton().click()
          //And returns to the User List      
          cy.get('app-users-list > .navbar > .container-fluid').should('have.text', ' Lista de Usuários ')  
          //And click again on the "Pencil" icon for the existing user
          registerPage.getPencilButton().click()
          //Then the "Deactivate" button must be clicked
          registerPage.getDesativadoButton().should('be.visible').and('be.enabled')
    }) 

})