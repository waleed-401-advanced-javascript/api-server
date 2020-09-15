'use strict';



require('@code-fellows/supergoose');


const products = require('../lib/models/products/products-model');

describe ('The product Crud operation when the api is called',()=>{
    it('it can create()', async ()=> {
        const obj = {name: 'light', category : "electronic", description: 'glows', price:420,inStock:69};
        const result = await products.create(obj);
        Object.keys(obj).forEach(key=> {
            expect(result[key]).toEqual(obj[key]);
        });
});

it('it can get()', async ()=> {
    const productsObj = {name: 'brake', category : "brake", description: 'brakes', price:69,inStock:420};
    const result = await products.create(productsObj);
    const records = await products.get(result._id); // []
    Object.keys(productsObj).forEach(key=> {
        expect(records[0][key]).toEqual(productsObj[key]);
    });
});


it('it can delete()', async ()=>{

    const productsObj = {name: 'brake', category : "brake", description: 'brakes', price:69,inStock:420};

    const result = await products.create(productsObj);

    const records = await products.get(result._id); 

    const deleted= await products.delete(records.id)
    
  expect(deleted).toBeFalsy();
 })



});

