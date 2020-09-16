// 'use strict';

// const express = require('express');
// const catagories = require('../lib/models/categories/categories-model');
// const router = express.Router();

// let categoryDB = []
// router.post('/categories', postCategory)
// async function postCategory (req, res, next) {
//     // create a new category
//     catagories.create(req.body).then(data=>{
//         res.status(201).json(data);
//     }).catch(err=> {
//         console.log(err);
//         next(err);
//     });
// }

// router.get('/categories', getAll)
// function getAll (req, res, next)  {

   
//     catagories.get().then(data=>{
//         res.status(200).json(data)
//     }).catch(err=> {
//         console.log(err);
//         next(err);
//     });
    
// }

// router.get(`/categories/:id`,getbyid)
// function getbyid (req, res, next) {
//     // return one category by id
//     let id = req.params.id
//     catagories.get(id).then(data=>{
//         res.status(200).json(data)
//     }).catch(err=> {
//         console.log(err);
//         next(err);
//     });
 
  
// };
// router.put('/categories/:id',updateCategory)
// function updateCategory (req, res, next)  {
//     // edit  one category by id
//     let id = req.params.id
//     catagories.update(id,req.body).then(data=>{
//         res.status(200).json(data)
//     }).catch(err=> {
//         console.log(err);
//         next(err);
//     });

// };

// router.delete(`/categories/:id`, deleteCategory)
// function deleteCategory(req, res, next)  {
//     // deletes one category by id

//     let id = req.params.id
//     catagories.delete(id).then(data=>{
//         res.status(200).json(data)
//     }).catch(err=> {
//         console.log(err);
//         next(err);
//     });
// };


// module.exports = router;