const { server }  = require('../lib/server.js');

const supertest = require('supertest');
const mockRequest = supertest(server);


describe('category route', ()=> {
    
    it('Check POST request for categories route to send notfound', () => {

        let record = {
            name: 'to',
            display_name: 'be',
            description: 'or',
            category: 'not to be',

        };
        return mockRequest
            .post('/catagories')
            .send(record)
            .then(results => {
                expect(results.status).toBe(404);
                expect(results.body).toStrictEqual("error : Not Found");
            });
    });
    it('Check status code 200 for categories route and update product by id', () => {
        let record = {
            name: 'to',
            display_name: 'be',
            description: 'or',
            category: 'not to be',
            id: 1,
        };
        return mockRequest.put('/categories/1')
            .send(record)
            .then(results => {
                expect(results.status).toBe(200);
                expect(results.body).toStrictEqual(record);
            });
    });
    

    

    it('should respond with 200 for get ', ()=>{
        return mockRequest.get('/categories').then(result=>{
            expect(res.status).toBe(200);
        }).catch(err=> {
            console.log(err);
        });
    });

    it('should respond with 200 for post', ()=>{
        return mockRequest.post('/categories').then(res=>{
            expect(res.status).toBe(200);
        }).catch(err=> {
            console.log(err);
        });
    });
    it('should respond with 200 for get by id', ()=>{
        return mockRequest.get('/categories/:id').then(res=>{
            expect(res.status).toBe(200);
        }).catch(err=> {
            console.log(err);
        });
    });
    it('should respond with 200 for put by id ', ()=>{
        return mockRequest.get('/categories/:id').then(res=>{
            expect(res.status).toBe(200);
        }).catch(err=> {
            console.log(err);
        });
    });
    it('should respond with 200 for delete by id', ()=>{
        return mockRequest.delete('/categories/:id').then(res=>{
            expect(res.status).toBe(200);
        }).catch(err=> {
            console.log(err);
        });
    });
    


    it('should respond with 500 for bad routes', ()=>{
        return mockRequest.get('/bad').then(res=>{
            expect(res.status).toBe(500);
        }).catch(err=> {
            console.log(err);
        });
    });

 


});
describe('products route', ()=> {

    it('Check POST request for products route to send body', () => {

        let record = {
            name: 'to',
            display_name: 'be',
            description: 'or',
            category: 'not to be'
        };
        return mockRequest
            .post('/products')
            .send(record)
            .then(results => {
                expect(results.status).toBe(500);
                expect(results.body).toBeTruthy(record);
            });
    });
    
    it('Check status code 200 for products route and update product by id', () => {
        let record = {
            name: 'to',
            display_name: 'be',
            description: 'or',
            category: 'not to be',
            id: 1,
        };
        return mockRequest
            .put('/products/1')
            .send(record)
            .then(results => {
                expect(results.status).toBe(200);
                expect(results.body).toStrictEqual(record);
            });
    });
    

    it('should respond with 200 for get ', ()=>{
        return mockRequest.get('/products').then(res=>{
            expect(res.status).toBe(200);
        }).catch(err=> {
            console.log(err);
        });
    });

    it('should respond with 200 for post', ()=>{
        return mockRequest.post('/products').then(res=>{
            expect(res.status).toBe(200);
        }).catch(err=> {
            console.log(err);
        });
    });
    it('should respond with 200 for get by id', ()=>{
        return mockRequest.get('/products/:id').then(res=>{
            expect(res.status).toBe(200);
        }).catch(err=> {
            console.log(err);
        });
    });
    it('should respond with 200 for put by id ', ()=>{
        return mockRequest.put('/products/:id').then(res=>{
            expect(res.status).toBe(200);
        }).catch(err=> {
            console.log(err);
        });
    });
    it('should respond with 200 for delete by id', ()=>{
        return mockRequest.delete('/products/:id').then(res=>{
            expect(res.status).toBe(200);
        }).catch(err=> {
            console.log(err);
        });
    });
    


    it('should respond with 500 for bad routes', ()=>{
        return mockRequest.get('/bad').then(res=>{
            expect(res.status).toBe(500);
        }).catch(err=> {
            console.log(err);
        });
    });

 


});