class homepage{
    visitinghomepage(){
        cy.visit('https://www.saucedemo.com/v1/inventory.html');
  }
    firstproduct(){
        cy.get('button[class="btn_primary btn_inventory"]').eq(2).click();
    }
secondproduct(){
    cy.get('button[class="btn_primary btn_inventory"]').eq(3).click();
    }
clickaddtocard(){
    cy.get('svg[role="img"]').click()
   }
checkoutprocess(){
    cy.get('[href="./checkout-step-one.html"]').click()
    }

    }
    export default homepage;

    //  }
    // verifyingcarticonvisibleandclicking (){
    //     cy.get('[href="./cart.html"]').should('be.visible').click()
    // }
    // }
