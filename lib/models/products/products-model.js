'use strict'
const schema = require('./products-schema');
const Model = require('../mongo.js');

class products extends Model {
    constructor() {
        super(schema);
    }
   
}

module.exports = new products();