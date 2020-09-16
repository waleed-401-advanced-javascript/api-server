/* eslint-disable no-undef */
'use strict'
require('dotenv').config();
const serverModule = require('./lib/server.js')

const mongoose = require('mongoose');

// ========================================== conneceting to database
const mongooseOptions = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}
 let MONGOOSE_URL = process.env.MONGOOSE_URL
mongoose.connect(MONGOOSE_URL, mongooseOptions);

serverModule.start();