'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();

/**
 * middleware section
 */
const timestamp = require('./middleware/timestamp.js');
const logger = require('./middleware/logger.js');
const notFound = require('./middleware/404.js');
const serverError = require('./middleware/500.js');

// Global Middleware

app.use(express.json());

app.use(timestamp);

app.use(logger);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//======================================== 
let categoryDB = [];
let productDB = [];

// ============================ Category routes ==============

app.post('/categories', (req, res, next) => {
    // create a new category
    let record = req.body
    record[0].id = categoryDB.length + 1;
    categoryDB.push(record);
    res.json(record);
});

app.get('/categories', (req, res, next) => {

    let count = categoryDB.length;
    let results = categoryDB;
    res.json({ count, results });
});

app.get('/categories/:id', (req, res, next) => {
    // return one category by id
    // it doesn't search on the id but rather with the index of the array it stored in so far
    let ident = req.params.id - 1;
    let results = categoryDB;
    let record =results[ident]
    
    if(!record){
        res.json(404,"no such id")
    }
    console.log("this is record",record)
    res.status(200).json(record);
    console.log(record)
});
app.put('/categories/:id', (req, res, next) => {
    // edit  one category by id
  
});

app.delete('/categories/:id', (req, res, next) => {
    // deletes one category by id

    let ident = req.params.id - 1;
    let results = categoryDB
    let deleted =results[ident]
    const index = results.indexOf(results[ident]);
     results.splice(index, 1);
    res.status(200).json({deleted});
});

// =========================== products routes ========
app.post('/products', (req, res, next) => {
    // create a new product
    let record = req.body
    record[0].id = productDB.length + 1;
    productDB.push(record);
    res.json(record);

});
app.get('/products', (req, res, next) => {
    // return all products
    let count = productDB.length;
    let results = productDB;
    res.json({ count, results });

});

app.get('/products/:id', (req, res, next) => {
    // return one products by id
    let ident = req.params.id - 1;
    let results = productDB;
    let record =results[ident]
    
    if(!record){
        res.json(404,"no such id")
    }
    console.log("this is record",record)
    res.status(200).json(record);
    console.log(record)

});
app.put('/products/:id', (req, res, next) => {
    // replace one products by id
  
});

app.delete('/products/:id', (req, res, next) => {
    // deletes one products by id
    let ident = req.params.id - 1;
    let results = productDB
    let deleted =results[ident]
    const index = results.indexOf(results[ident]);
     results.splice(index, 1);
    res.status(200).json({deleted});
});

//============================================================================

// Error Routes

// 404 Errors
app.use('*', notFound);

// 500 Errors/Failsafe
app.use(serverError);


// =============================================================================

//
module.exports = {
    server: app,
    start: port => {
        let PORT = port || process.env.PORT || 3000;
        app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
    }
};