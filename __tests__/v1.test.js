/* eslint-disable no-undef */
"use strict"

require('@code-fellows/supergoose');
// let req = {"param" : {id: '5f60eabe512b250399bc715c' }};
// let res = {};
// let next = jest.fn();

const products = require('../lib/models/products/products-model');
const category = require('../lib/models/categories/categories-model')
// const proudectRout = require('../routes/product')


describe('The product Crud operation when the api is called', () => {
    it('it can create()', async () => {
        const obj = { name: 'light', category: "electronic", description: 'glows', price: 420, inStock: 69 };
        const result = await products.create(obj);
        Object.keys(obj).forEach(key => {
            expect(result[key]).toEqual(obj[key]);
        });
    });

    it('it can get() by id', async () => {
        const productsObj = { name: 'brake', category: "brake", description: 'brakes', price: 69, inStock: 420 };
        const result = await products.create(productsObj);
        const records = await products.get(result._id); // []
        Object.keys(productsObj).forEach(key => {
            expect(records[0][key]).toEqual(productsObj[key]);
        });
    });


    it('it can delete()', async () => {

        const productsObj = { name: 'brake', category: "brake", description: 'brakes', price: 69, inStock: 420 };

        const result = await products.create(productsObj);


        const deleted = await products.delete(result.id)
        Object.keys(productsObj).forEach(key => {
            expect(deleted[key]).toEqual(productsObj[key]);
        });


    })

    it('check if it is updating ', async () => {


        const productsObj = { name: 'brake', category: "brake", description: 'brakes', price: 69, inStock: 420 };
        const record = await products.create(productsObj);
        const productsObj2 = { name: 'brakeS', category: "brake", description: 'brakes', price: 69, inStock: 420 };
        const Item = await products.update(record._id, productsObj2);
        Object.keys(productsObj2).forEach(key => {
            expect(Item[key]).toEqual(productsObj[key]);
        });


    })



});

describe('Category API', () => {
    it('can post() a category item', async () => {
        const categoryObj = { name: 'macBook', description: "electronic" };
        const result = await category.create(categoryObj);
        Object.keys(categoryObj).forEach(key => {
            expect(result[key]).toEqual(categoryObj[key]);
        });
    });

    it('can get() a category item', async () => {
        const categoryObj = { name: 'macBook', description: "electronic" };
        const result = await category.create(categoryObj);
        const records = await category.get(result._id); // []
    Object.keys(categoryObj).forEach(key => {
        expect(records[0][key]).toEqual(categoryObj[key]);
    });
        

    });

 
});
