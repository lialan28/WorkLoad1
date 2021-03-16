/**
 * GET /loadworks
 * .
 */
const Loadwork = require('../models/Loadwork.js');

exports.getLoadworks = (req, res) => {
  Loadwork.find((err, docs) => {
     res.render('loadworks', { loadworks: docs });
  });
};