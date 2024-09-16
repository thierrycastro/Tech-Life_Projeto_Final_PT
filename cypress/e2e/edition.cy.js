import LoginPage from "../page-object/loginPage"
import RegisterPage from "../page-object/registerPage"
const registerPage = new RegisterPage
const loginPage = new LoginPage

describe("Scenario: 002 - Editing an existing user's information", () => {

    beforeEach(() => {
       loginPage.standardLogin()
    })

    
    it("TC002.001 - Edit a user's name successfully", () => {
          //Given that the user is on the "Administrator Panel" page
          //And click on the "List Users" button
          registerPage.getListarButton().click()
          //And click on the "Pencil" icon corresponding to the existing student's name
          registerPage.getPencilButton().click()
          //When you change his Name on the Registration Screen
          registerPage.getName().clear().type("Josué Antônio Raimundo Pereirão Domingues")
          //And click "Send"
          registerPage.getEnviarButton().click()
          //Then the changes should be saved and reflected immediately in the user profile        
          cy.get(":nth-child(8) > th").should('have.text', 'Josué Antônio Raimundo Pereirão Domingues')   
    }) 

    it("TC002.002 - Edit a user's email successfully", () => {
          //Given that the user is on the "Administrator Panel" page
          //And click on the "List Users" button
          registerPage.getListarButton().click()
          //And click on the "Pencil" icon corresponding to the existing student's name
          registerPage.getPencilButton().click()
          //When you change your email address on the Registration Screen
          registerPage.getEmail().clear().type("worktests999@gmail.com")
          //And click "Send"
          registerPage.getEnviarButton().click()
          //Then the changes should be saved and reflected immediately in the user profile        
          cy.get(":nth-child(8) > :nth-child(2)").should('have.text', 'worktests999@gmail.com')   
    }) 

    it("TC002.003 - Identify user Status", () => {
          //Given that the user is on the "Administrator Panel" page
          //And click on the "List Users" button
          registerPage.getListarButton().click()
          //When you click on the "Pencil" icon for the existing student's name
          registerPage.getPencilButton().click()
          //Then check if the Student Status is Active
          registerPage.getAtivoButton().should('be.visible')
          .and('be.enabled')
    })    

    it("TC002.004 - Delete User", () => {
          //Given that the user is on the "Administrator Panel" page
          //And click on the "List Users" button
          registerPage.getListarButton().click()
          //And click on the "Trash" icon corresponding to the existing student's name
          registerPage.getBinButton().click()
          //Then the system should delete the user and continue to the Administrator Panel page"
          cy.get('h4.mt-5').should('have.text', 'Painel do Administrador')  
    })
})