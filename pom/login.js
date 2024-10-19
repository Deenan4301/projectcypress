class loginpage{
    
    enteringusername(){
        cy.get('#user-name').type("standard_user");

    }
    enteringpassword(){
        cy.get('#password').type('secret_sauce');

    }
    enteringonsubmitbutton(){
        cy.get ('#login-button').click()
    }

}
export default loginpage;
