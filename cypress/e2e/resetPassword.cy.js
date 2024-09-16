import LoginPage from "../page-object/loginPage"
import RegisterPage from "../page-object/registerPage"
const registerPage = new RegisterPage
const loginPage = new LoginPage

describe("Scenario: 003 - Resetting a user's password", () => {

    beforeEach(() => {
       loginPage.standardLogin()
    })

    it("TC003.001 - Reset password successfully", () => {
          //Given that the user is on the "Administrator Panel" page
          //And click on the "List Users" button
          registerPage.getListarButton().click()
          //And click on the "Pencil" icon corresponding to the existing student's name
          registerPage.getPencilButton().click()
          //When you change his Password field on the Registration Screen
          registerPage.getPassword().clear().type("zezito")
          //And click "Send"
          registerPage.getEnviarButton().click()
          //Then the system should change the password immediately and it should be displayed on the registration screen     
          cy.get(":nth-child(8) > :nth-child(3)").should('have.text', 'Professor')    
    })

    it("TC003.002 - Reset Password with Special Characters", () => {
          //Given that the user is on the "Administrator Panel" page
          //And click on the "List Users" button
          registerPage.getListarButton().click()
          //And click on the "Pencil" icon corresponding to the existing student's name
          registerPage.getPencilButton().click()
          //When you change his Password field on the Registration Screen
          registerPage.getPassword().clear().type("!!!!!!")
          //And click "Send"
          registerPage.getEnviarButton().click()
          //Then the system should change the password immediately and it should be displayed on the registration screen     
          cy.get(":nth-child(8) > :nth-child(3)").should('have.text', 'Professor')     
    })

    it("TC003.003 - Reset Password with Emoji", () => {
          //Given that the user is on the "Administrator Panel" page
          //And click on the "List Users" button
          registerPage.getListarButton().click()
          //And click on the "Pencil" icon corresponding to the existing student's name
          registerPage.getPencilButton().click()
          //When you change his Password field on the Registration Screen
          registerPage.getPassword().clear().type("🤘🏻🤘🏻🤘🏻🤘🏻🤘🏻🤘🏻🤘🏻🤘🏻")
          //And click "Send"
          registerPage.getEnviarButton().click()
          //Then the system should change the password immediately and it should be displayed on the registration screen     
          cy.get(":nth-child(8) > :nth-child(3)").should('have.text', 'Professor')     
    })

})