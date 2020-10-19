/* eslint-disable no-undef */
const { server }  = require('../lib/server.js');

const supertest = require('supertest');
const mockRequest = supertest(server);


describe('500 bad Request', ()=> {

  it('should respond with 500 for bad', ()=>{
    return mockRequest.get('/bad').then(result=>{
      expect(result.status).toBe(500);
    });
  });
});