/* eslint-disable no-undef */
'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

/**
 * middleware section
 */
// const timestamp = require('./middleware/timestamp.js');
// const logger = require('./middleware/logger.js');
const notFound = require('./middleware/404.js');
const serverError = require('./middleware/500.js');
const bigRouter = require('../lib/api/v1');

// Global Middleware

app.use(express.json());

app.use(cors());
app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//================Shared routes======================== 
// let categoryDB = [];
// let productDB = [];
// app.use(getModel,bigRouter);
app.use(bigRouter)
// ============================ Category routes ==============
// app.use('/api/v1', categoryRoutes);

// =========================== products routes ========
// app.use('/api/v1', productRoutes);

// ============================= 500 error testing route============
app.get('/bad', ()=> {
    throw new Error("bad Request .... ");
});

app.get('notfound',(req,res)=>{
    res.status(404).json("this route doesn't exist bro")
})

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
    start: ()=> {
        let PORT =  process.env.PORT  || 3000;
        app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
    }
};