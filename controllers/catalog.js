/**
 * GET /catalogs
 * .
 */
const Project = require('../models/Project.js');
const Costcenter = require('../models/Costcenter.js');
const Manager = require('../models/Manager.js');
const Area = require('../models/Area.js');

exports.getCatalogs = async (req, res) => {

  let allProjects = {};
  let allCostcenters = {};
  let allManagers = {};
  let allAreas = {};

  await Project.find({}, function(err, projects) {
    allProjects = projects;
  });

  await Costcenter.find({}, function(err, costcenters){
    allCostcenters = costcenters;
  });

  await Manager.find({}, function(err, managers){
    allManagers = managers;
  });

  await Area.find({}, function(err, areas){
    allAreas = areas;
  });

  res.render('catalog/catalogs', {
    title: 'Catalogs',
    projects: allProjects,
    costcenters: allCostcenters,
    managers: allManagers,
    areas: allAreas
  });
};