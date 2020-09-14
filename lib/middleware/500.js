function serverError(req, res, next){
    res.status(500);
    res.statusMessage = '500 server error';
    res.json({ error: 'server error' });
  }
  
  module.exports = serverError;