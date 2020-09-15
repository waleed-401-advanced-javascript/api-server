
'use strict';

const express = require('express');
const product = require('../lib/models/products/products-model');
const router = express.Router();

router.post('/products', postproduct)

function postproduct(req, res, next) {
    // create a new product
    product.create(req.body).then(data => {
        res.status(201).json(data);
    }).catch(err => {
        console.log(err);
        next(err);
    });

    router.get('/products', getAlll)
    function getAlll(req, res, next) {


        product.get().then(data => {
            res.status(200).json(data)
        }).catch(err => {
            console.log(err);
            next(err);
        });

    }

    router.get('/products/:id', postproduct)
    let id = req.params.id
    product.get(id).then(data => {
        res.status(200).json(data)
    }).catch(err => {
        console.log(err);
        next(err);
    });

}




router.put('/products/:id', (req, res, next) => {
    // replace one products by id
    let id = req.params.id
    product.update(id, req.body).then(data => {
        res.status(200).json(data)
    }).catch(err => {
        console.log(err);
        next(err);
    });


});

router.delete('/products/:id', (req, res, next) => {
    // deletes one products by id
    let id = req.params.id
    product.delete(id).then(data => {
        res.status(200).json(data)
    }).catch(err => {
        console.log(err);
        next(err);
    });
});

module.exports = router;