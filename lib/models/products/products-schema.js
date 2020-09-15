const mongoose = require('mongoose');


const products = mongoose.Schema({

    name:{type: String,required:true},
    category:{type: String, required:true},
    description:{type: String, required:true},
    price:{type:Number, required:true},
    inStock:{type:Number, required:true}

});

module.exports = mongoose.model('products', products);