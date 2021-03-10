const mongoose = require('mongoose');

const workloadSchema = new mongoose.Schema({
  user: String,
  month: String
});

const Workload = mongoose.model('Workload', workloadSchema);
module.exports = Workload;