'use strict'
const { server } = require('../lib/server');
const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(server);

describe('Category API', ()=> {
    it('can post() a category item', async ()=> {
        const categoryObj = {name: 'macBook', description : "electronic"};
        const data = await mockRequest.post('/api/v1/categories').send(categoryObj);
        console.log("data.body : ",data.body);
        const record = data.body;
        Object.keys(categoryObj).forEach(key=> {
            expect(record[key]).toEqual(categoryObj[key]);
        });
    });

    it('can get() a category item', async ()=> {
        const categoryObj = {name: 'macBook', description : "electronic"};
        const data = await mockRequest.post('/api/v1/categories').send(categoryObj);
        console.log("data.body : ",data.body);
        const record = data.body;
        const categoryResponse = await mockRequest.get(`/api/v1/categories/${record._id}`);
        const category = categoryResponse.body[0];
        Object.keys(categoryObj).forEach(key=> {
            expect(category[key]).toEqual(categoryObj[key]);
        });

    });

    it('can delete() a category item', async ()=> {
        const categoryObj = {name: 'macBook', description : "electronic"};
        const data = await mockRequest.post('/api/v1/categories').send(categoryObj);
        console.log("data.body : ",data.body);
        const record = data.body;
        const categoryResponse = await mockRequest.delete(`/api/v1/categories/${record._id}`);
        expect(categoryResponse).toBeTruthy();
     

    });
});
