describe('login validation', () =>{

    it('multiple credentails', () =>{

        cy.visit('https://www.instagram.com/accounts/login/')
        cy.contains('Log In').click()

        cy.fixture('insta').then((data) =>{

            data.forEach(element => {
                cy.get('input[name="username"]').type(element.usrname)
                cy.get('input[name="password"]').type(element.pass)
                cy.screenshot('cypress\screenshots')
                cy.wait(2000)
                cy.get('input[name="username"]').clear()
                cy.get('input[name="password"]').clear()
            })


        })
    })
})