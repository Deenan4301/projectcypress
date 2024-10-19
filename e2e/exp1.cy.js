describe('amazon iphone15pro add to card page',()=>{
    it ('validate login amazon site using mobile iphone 15pro',()=>{
        cy.visit('https://www.amazon.in/')
        cy.wait(2000)
        cy.get('input#twotabsearchtextbox').type("iphone15pro");
        cy.get('#nav-search-submit-button').click();
        cy.url().should('include','k=iphone15pro');
        cy.contains('iphone15pro').should('be.visible');
        cy.get('#a-autoid-1-announce').click();
        cy.wait(1000);
        cy.get('a#nav-cart').click();
        cy.url().should('include','https://www.amazon.in/gp/cart/view.html?ref_=nav_cart')
    })
})

