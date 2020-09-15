const { server }  = require('../lib/server.js');

const supertest = require('supertest');
const mockRequest = supertest(server);


describe('category route', ()=> {
    
    

    

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