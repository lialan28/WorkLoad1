/**
 * GET /loadworks
 * .
 */
const Loadwork = require('../models/Loadwork.js');
const User = require('../models/User');

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

  const loadwork = new Loadwork({
    tgi: req.body.tgi,
    data: req.body.data,
  });

  User.findById(req.user.id, (err, user) => {
    if (err) { return next(err); }
    user.loadworkData = req.body.data;
    user.save((err) => {
      if (err) { return next(err); }
      req.flash('success', { msg: 'Data has been uploaded.' });
      res.redirect('/');
    });
  });

  /*
  loadwork.save((err) => {
    if (err) { return next(err); }
    req.logIn(loadwork, (err) => {
      if (err) {
        req.flash('errors', { msg: 'Cannot upload! UPS' });
        return next(err);
      }

      res.redirect('/');
    });

    
  });*/

};