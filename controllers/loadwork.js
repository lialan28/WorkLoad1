/**
 * GET /loadworks
 * .
 */
const Loadwork = require('../models/Loadwork.js');

exports.getLoadworks = (req, res) => {
  Loadwork.find((err, docs) => {
     res.render('loadworks', { 
       loadworks: docs
    });
  });
};


/**
 * POST /loadworks
 * 
 */
exports.postLoadworks = (req, res, next) => {
  console.log(req.body);
  res.status(200);
};