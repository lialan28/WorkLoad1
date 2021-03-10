/**
 * GET /workloads
 * List all workloads.
 */
const Workload = require('../models/Workload.js');

exports.getWorkloads = (req, res) => {
  Workload.find((err, docs) => {
    res.render('workloads', { workloads: docs });
  });
};