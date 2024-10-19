describe('login parcitice test automation',()=>{
    let cred;
    before(()=>{
        cy.fixture('exp3').then((tdata)=>{
            cred=tdata
        })
    })
    
it('validate login test automation',()=>{
    
    cy.visit('https://practicetestautomation.com/practice-test-login/')
    // if(data.condition=="tdata"){
        cy.get('#username').type("student");
        cy.get('#password').type("Password123");
        cy.get('.btn').click();
        cy.get('[]')
    // }
})
})

// Cypress.session.clearAllSavedSessions()
// Cypress.session.clearCurrentSessionData()
// Cypress.session.getCurrentSessionData()
// Cypress.session.getSession(id)
// cy.session(id, setup)
// cy.session(id, setup, options)


    









// elseif(data.condition=="passwordEmpty")
    // cy.get('input#username').type( "student");
    // cy.get("input[name='password']").type( "Password123");
    // cy.get('.btn').click();



