/**
 * GET /loadworks
 * .
 */
const Project = require('../models/Project.js');

exports.getProjects = (req, res) => {
  res.render('catalog/project', {
    title: 'Projects'
  });
};
