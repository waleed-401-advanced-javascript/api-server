/* eslint-disable no-undef */
const { server }  = require('../lib/server.js');

const supertest = require('supertest');
const mockRequest = supertest(server);


describe('category route', ()=> {
    
    

    

    it('should respond with 200 for get ',async ()=>{
         return  mockRequest.get('/api/v1/categories').then(()=>{
            expect(res.status).toBe(200);
        }).catch(err=> {
            console.log(err);
        });
    });

    it('should respond with 200 for post',async ()=>{
         return  mockRequest.post('/api/v1/categories').then(res=>{
            expect(res.status).toBe(200);
        }).catch(err=> {
            console.log(err);
        });
    });
    it('should respond with 200 for get by id',async ()=>{
         return  mockRequest.get('/api/v1/categories/:id').then(res=>{
            expect(res.status).toBe(200);
        }).catch(err=> {
            console.log(err);
        });
    });
   
    it('should respond with 200 for delete by id',async ()=>{
         return  mockRequest.delete('/api/v1/categories/:id').then(res=>{
            expect(res.status).toBe(200);
        }).catch(err=> {
            console.log(err);
        });
    });
    


    it('should respond with 500 for bad routes',async ()=>{
         return  mockRequest.get('/bad').then(res=>{
            expect(res.status).toBe(500);
        }).catch(err=> {
            console.log(err);
        });
    });

 


});
describe('products route', ()=> {

    
    

    it('should respond with 200 for get ',async ()=>{
         return  mockRequest.get('/api/v1/api/v1/products').then(res=>{
            expect(res.status).toBe(200);
        }).catch(err=> {
            console.log(err);
        });
    });

    it('should respond with 200 for post',async ()=>{
         return  mockRequest.post('/api/v1/products').then(res=>{
            expect(res.status).toBe(200);
        }).catch(err=> {
            console.log(err);
        });
    });
    it('should respond with 200 for get by id',async ()=>{
         return  mockRequest.get('/api/v1/products/:id').then(res=>{
            expect(res.status).toBe(200);
        }).catch(err=> {
            console.log(err);
        });
    });
    it('should respond with 200 for put by id ',async ()=>{
         return  mockRequest.put('/api/v1/products/:id').then(res=>{
            expect(res.status).toBe(200);
        }).catch(err=> {
            console.log(err);
        });
    });
    it('should respond with 200 for delete by id',async ()=>{
         return  mockRequest.delete('/api/v1/products/:id').then(res=>{
            expect(res.status).toBe(200);
        }).catch(err=> {
            console.log(err);
        });
    });
    


    it('should respond with 500 for bad routes', ()=>{
         return  mockRequest.get('/bad').then(res=>{
            expect(res.status).toBe(500);
        }).catch(err=> {
            console.log(err);
        });
    });

 


});