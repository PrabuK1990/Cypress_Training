import Yahoo from "../utils/Yahoo"
require('cypress-xpath')

describe('template spec', () => {

  let yahoodata
  const createpage = new Yahoo()

  //Hooks
  before(() =>{
    cy.fixture('example').then((data) =>{
      yahoodata=data
    })
  })

  //Testcase 1
  it('passes', () => {
    createpage.navigateToUrl(yahoodata.yahoourl)
    cy.xpath('//button[text()="Continue"]').click()
  })

})