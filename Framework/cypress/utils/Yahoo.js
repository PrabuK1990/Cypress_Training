const yahooLocator = require("../fixtures/yahoolocators.json")

class Yahoo{
   
    //overriding
    navigateToUrl(yahoourl){
        cy.visit(yahoourl)
    }

    enterFirstname(){
        return cy.get(yahooLocator.firstname)
    }

    enterEmail(){
        return cy. get(yahooLocator.Email)
    }
}

export default Yahoo