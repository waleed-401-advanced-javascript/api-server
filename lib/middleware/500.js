/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
function serverError(err, req, res, next){
    res.status(500);
    res.statusMessage = '500 server error';
    res.json({ error: err });
  }
  
  module.exports = serverError;