'use strict'
function addTimestamp (req, res, next) {
    let requestTime =  new Date();
    req.requestTime = requestTime;
    next();
  }
  
  module.exports = addTimestamp;