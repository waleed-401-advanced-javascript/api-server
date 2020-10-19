/* eslint-disable no-undef */
'use strict'
function addTimestamp (req, res, next) {
    let requestTime =  new Date();
    req.requestTime = requestTime;
    next();
    console.log("running")
  }
  
  module.exports = addTimestamp;