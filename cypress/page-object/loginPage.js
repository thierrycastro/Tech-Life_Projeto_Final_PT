class LoginPage
{  

    standardLogin()
    {
        cy.visit(Cypress.env('url'))
        cy.get("#email").type("adm@techlife.com")
        cy.get("#password").type("12345678")
        cy.get(".btn").click()
    }


    getEmail() 
    {
        return cy.get("#email")
    }


    getPassword() 
    {
        return cy.get("#password")
    }


    getLoginButton() 
    {
        return cy.get(".btn")
    }

    
    getErrorMsg() 
    {
        return cy.get('.error')
    }  

}

export default LoginPage