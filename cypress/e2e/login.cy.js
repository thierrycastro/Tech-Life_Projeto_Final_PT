import LoginPage from "../page-object/loginPage"
import RegisterPage from "../page-object/registerPage"
const registerPage = new RegisterPage
const loginPage = new LoginPage

describe("Scenario: 007 - Login", () => {

    beforeEach(() => {
    cy.visit(Cypress.env('url'))      
    })
    
    it("TC007.001 - Login with valid credentials", () => {
            //Given that the user is on the login screen
            //And enter your credentials
            loginPage.getEmail().type('rrrr@gmail.com')
            loginPage.getPassword().type('12345')
            //When you click on the "Enter" button
            loginPage.getLoginButton().click()
            //Then the user must be authenticated and redirected to their respective area
            cy.get('h4.mt-5').should('have.text', 'Painel do Professor')     
    })

    it("TC007.002 - Logout successfully", () => {
            //Given that the user is on the login screen
            //And enter your credentials
            loginPage.getEmail().type('rrrr@gmail.com')
            loginPage.getPassword().type('12345')
            //When you click on the "Enter" button
            loginPage.getLoginButton().click()
            //And it is redirected to its respective area
            cy.get('h4.mt-5').should('have.text', 'Painel do Professor')  
            //And click on the "Logout" button
            registerPage.getLogout().click()
            //Then the user must be disconnected from the system
            cy.get('.btn').should('have.text', 'Entrar')
    })

    it("TC007.003 - Login without credentials", () => {
            //Given that the user is on the login screen
            //And does not enter your credentials
            //When you click on the "Enter" button
            loginPage.getLoginButton().click()
            //Then the user does not access their respective area
            loginPage.getErrorMsg().should('have.text', 'Login ou senha invalidos, tente novamente')       
    })

    it("TC007.004 - Invalid login with empty password", () => {
            //Given that the user is on the login screen
            //And enter your email
            loginPage.getEmail().type('rrrr@gmail.com')
            //And don't enter your password
            //When you click on the "Enter" button
            loginPage.getLoginButton().click()
            //Then the user does not access their respective area
            loginPage.getErrorMsg().should('have.text', 'Login ou senha invalidos, tente novamente')    
    })

    it("TC007.005 - Invalid login with empty email", () => {
            //Given that the user is on the login screen
            //And don't enter your email
            //And enter your password
            loginPage.getPassword().type('12345')
            //When you click on the "Enter" button
            loginPage.getLoginButton().click()
            //Then the user does not access their respective area
            loginPage.getErrorMsg().should('have.text', 'Login ou senha invalidos, tente novamente')    
    })

    it("TC007.006 - Login with invalid email", () => {
            //Given that the user is on the login screen
            //And enter your invalid email
            loginPage.getEmail().type('rrssss@gmail.com')
            //And enter your password
            loginPage.getPassword().type('12345')
            //When you click on the "Enter" button
            loginPage.getLoginButton().click()
            //Then the user does not access their respective area
            loginPage.getErrorMsg().should('have.text', 'Login ou senha invalidos, tente novamente')    
    })

    it("TC007.007 - Login with invalid password (Emoji)", () => {
            //Given that the user is on the login screen
            //And enter your invalid email
            loginPage.getEmail().type('rrrr@gmail.com')
            //And enter your password
            loginPage.getPassword().type('🤘🏻🤘🏻🤘🏻🤘🏻🤘🏻🤘🏻🤘🏻🤘🏻')
            //When you click on the "Enter" button
            loginPage.getLoginButton().click()
            //Then the user does not access their respective area
            loginPage.getErrorMsg().should('have.text', 'Login ou senha invalidos, tente novamente')    
    })

    it("TC007.008 - Login with invalid password (Special Characters)", () => {
            //Given that the user is on the login screen
            //And enter your invalid email
            loginPage.getEmail().type('rrrr@gmail.com')
            //And enter your password
            loginPage.getPassword().type('!!!!!!!!')
            //When you click on the "Enter" button
            loginPage.getLoginButton().click()
            //Then the user does not access their respective area
            loginPage.getErrorMsg().should('have.text', 'Login ou senha invalidos, tente novamente')    
    })

    it("TC007.009 - Login with invalid password (with spacing)", () => {
            //Given that the user is on the login screen
            //And enter your e-mail
            loginPage.getEmail().type('rrrr@gmail.com')
            //And enter your password válida com espaço no final
            loginPage.getPassword().type('12345 ')
            //When you click on the "Enter" button
            loginPage.getLoginButton().click()
            //Then the user does not access their respective area
            loginPage.getErrorMsg().should('have.text', 'Login ou senha invalidos, tente novamente')    
    })

    it("TC007.010 - Refresh the Page", () => {
            //Given that the user is on the login screen
            //And enter your e-mail
            loginPage.getEmail().type('rrrr@gmail.com')
            //And enter your password
            loginPage.getPassword().type('12345')
            //And click on the "Enter" button
            loginPage.getLoginButton().click()
            //And access its respective area
            cy.get('h4.mt-5').should('have.text', 'Painel do Professor')
            //When you click the "refresh" button on your browser
            cy.reload()
            //Then the user must remain in their respective updated area
            cy.get('h4.mt-5').should('have.text', 'Painel do Professor')
    })

})