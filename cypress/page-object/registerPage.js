class RegisterPage
{  

    getListarButton() 
    {
        return cy.get(".active")
    }


    getAdicionarButton() 
    {
        return cy.get(".d-grid > :nth-child(2)")
    }


    getName() 
    {
        return cy.get("#name") 
    }


    getEmail() 
    {
        return cy.get("#email")
    }


    getPassword() 
    {
        return cy.get("#password")
    }


    getProfileButton() 
    {
        return cy.get("#role")
    }


    getSelectAdministrator() 
    {
        return cy.get('select').select('Administrador')
    }


    getSelectProfessor() 
    {
        return cy.get('select').select('Professor')
    }


    getSelectAluno() 
    {
        return cy.get('select').select('Aluno')
    }


    getConfirPass() 
    {
        return cy.get("#confirmpass")
    }


    getAtivoButton() 
    {
        return cy.get("#ativo")
    }


    getDesativadoButton() 
    {
        return cy.get("#desativado")
    }


    getEnviarButton() 
    {
        return cy.get(".btn-primary")
    }


    getLimparButton() 
    {
        return cy.get(".btn-secondary")
    }


    getConfirmMsg() 
    {
        return cy.get('h3[data-test="error"]')
    }  


    getErrorMsg() 
    {
        return cy.get('h3[data-test="error"]')
    }  


    getPencilButton() 
    {
        return cy.get(':nth-child(8) > :nth-child(4) > .btn-list > .bi-pencil')
    }  


    getBinButton() 
    {
        return cy.get(':nth-child(8) > :nth-child(4) > .btn-list > .bi-trash')
    }


    getListEmailUser() 
    {
        return cy.get('thead > tr > :nth-child(2)')
    }  


    getListNameUser() 
    {
        return cy.get('thead > tr > :nth-child(1)')
    }  

    
    getLogout() 
    {
        return cy.get('.d-flex > .btn')
    }  

   
}

export default RegisterPage