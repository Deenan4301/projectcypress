describe("swag lab page automation",()=>{
    it('to check nagative username',()=>{
        cy.visit("https://www.saucedemo.com/v1/")
        cy.get('#user-name').type("deena")
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.contains('Username and password do not match any user in this service').should('be.visible').and('have.text','Epic sadface: Username and password do not match any user in this service')
          
    })

    it('positive validate information',()=>{
        cy.visit("https://www.saucedemo.com/v1/")
        cy.get('#user-name').type("standard_user")
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('div button[class="btn_primary btn_inventory"]').eq(2).click()
        cy.get('div button[class="btn_primary btn_inventory"]').eq(4).click()
        cy.get('svg[role="img"]').click()
        cy.get('[href="./checkout-step-one.html"]').click()
        cy.get('#first-name').type('deena')
        cy.get('#last-name').type('siva')
        cy.get('#postal-code').type('175048')
        cy.get('input[type="submit"]').click()
        cy.url().should('include','https://www.saucedemo.com/v1/checkout-step-two.html')
        cy.wait(2000)
        cy.get('[href="./checkout-complete.html"]').click()
        cy.get('.complete-header').should('contain.text','THANK YOU FOR YOUR ORDER')
        
    })
})