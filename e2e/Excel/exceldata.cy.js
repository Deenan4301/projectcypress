describe('Read data from Excel file', () => {
    it('should read data from Excel', () => {
      cy.visit('https://practicetestautomation.com/practice-test-login/')
  
      cy.task('readExcel', {
        filePath: 'C:/cyprees/cypress/fixtures/login.xlsx',  // Update with actual file path
        sheetName: 'loginreg'  // Specify the sheet name
      }).then((data) => {
        cy.log(JSON.stringify(data));
        // expect(data[0].Name).to.equal('John Doe'); // Example validation
        cy.get('input#username').type(data[0].username)
        cy.get('input#password').type(data[0].password)
        cy.get('.btn').click()
      });
    });
  });