'use strict'

function notFound(req, res, next){
    res.status(404);
    res.statusMessage = '404 Not Found';
    res.json({ error: 'Not Found' });
  }
  
  module.exports = notFound;