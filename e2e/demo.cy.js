import loginpage from "../pom/login";
import homepage from "../pom/home";
describe('sauce lab demo automation',()=>{
    
it('validata login',()=>{
    cy.visit('/')
    let loginPage=new loginpage();
    loginPage.enteringusername();
    loginPage.enteringpassword();
    loginPage.enteringonsubmitbutton()
})
it('validate add product to the card functionality',()=>{
    let Homepage=new homepage();
    Homepage.firstproduct();
    Homepage.secondproduct()
    Homepage.clickaddtocard()
    Homepage.checkoutprocess()

    // cy.get('[href="./cart.html"]').should('be.visible').click()
    // cy.get('.card_item').should('have.length:3')

})
it('')
})
































// describe('sauce lab demo automation',()=>{
//     let loginpage=new loginpage();
//     let homepage=new Homepage();
//     let cred;
//     BeforeUnloadEvent{()=>{
//         CSSSkewY.fixture ('sauce').then((tdata))=>{
//             cred=tdata;
//         })
//     })
//     beforeEach{()=>{
//         cy.visit('/')
//     })
//     it('Validate add product to the card functionality',()=>{
//         cy.visit()

//     })
//}