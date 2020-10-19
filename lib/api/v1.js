/* eslint-disable no-undef */
'use strict';

const express = require('express');
const categories = require("../models/categories/categories-model")
const products = require('../models/products/products-model.js')


const router = express.Router();

router.param('model', getModel);

function getModel (req, res, next) {
    let model = req.params.model;
    switch(model) {
        case "categories":
            req.model = categories;
            next();
            break;
        case "products":
            req.model = products;
            next();
            break;
        default:
            next("Invalid Model!!! ");
            break;
    }
}

router.post('/api/v1/:model', postCategory)
async function postCategory (req, res, next) {
    // create a new category
    
    req.model.create(req.body).then(data=>{
        res.status(201).json(data);
    }).catch(err=> {
        console.log(err);
        next(err);
    });
}

router.get('/api/v1/:model', getAll)
function getAll (req, res, next)  {

   
    req.model.get().then(data=>{
        let count = data.length
        res.status(200).json({count,data})
    }).catch(err=> {
        console.log(err);
        next(err);
    });
    
}

router.get(`/api/v1/:model/:id`,getbyid)
function getbyid (req, res, next) {
    // return one category by id
    let id = req.params.id
    req.model.get(id).then(data=>{
        res.status(200).json(data)
    }).catch(err=> {
        console.log(err);
        next(err);
    });
 
  
}
router.put('/api/v1/:model/:id',updateCategory)
function updateCategory (req, res, next)  {
    // edit  one category by id
    let id = req.params.id
    req.model.update(id,req.body).then(data=>{
        res.status(200).json(data)
    }).catch(err=> {
        console.log(err);
        next(err);
    });

}

// router.patch('/api/v1/:model/:id',patch)
// function patch (req, res, next)  {
//     // edit  one category by id
//     let id = req.params.id
//     req.model.update(id,req.body).then(data=>{
//         res.status(200).json(data)
//     }).catch(err=> {
//         console.log(err);
//         next(err);
//     });

// }


router.delete(`/api/v1/:model/:id`, deleteCategory)
function deleteCategory(req, res, next)  {
    // deletes one category by id

    let id = req.params.id
    req.model.delete(id).then(data=>{
        res.status(200).json(data)
    }).catch(err=> {
        console.log(err);
        next(err);
    });
}



module.exports = router;