

describe('api tests', () =>{
    it('get method', () =>{
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users?page=2'
        })
        .then((res)=>{
            expect(res.status).to.eq(200); 
            expect(res.body.page).to.eq(2);
            expect(res.body.total).to.eq(12);
            expect(res.body.data[1].id).to.eq((8));
            expect(res.body.data[1].first_name).to.eq('Lindsay');
            expect(res.body.support.url).to.eq('https://reqres.in/#support-heading');
        })
    })


    it('post method', () =>{
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/users',
            body: {
                name: 'Sherry',
                job: 'Cypress tester'
            }
        })
        .then((res)=>{
            expect(res.status).to.eq(201);
            expect(res.body.name).to.eq('Sherry');
            expect(res.body.job).to.eq('Cypress tester');
        })
    })

    it('PUT method', ()=>{
        cy.request({
            method: 'PUT',
            url: 'https://reqres.in/api/users/2',
            body:{
                name: 'She',
                job: 'test'
            }
        })
        .then((res)=>{
            expect(res.status).to.eq(200);
            expect(res.body.name).to.eq('She');
            expect(res.body.job).to.eq('test');
        })
    })

    it('DELETE method', ()=>{
        cy.request({
            method: 'DELETE',
            url: 'https://reqres.in/api/users/2'
        })
        .then((res)=>{
            expect(res.status).to.eq(204);
        })
    })


})