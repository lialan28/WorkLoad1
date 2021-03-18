const mongoose = require('mongoose');

const managerSchema = new mongoose.Schema({
  name: String,
}, { timestamps: true });

const Manager = mongoose.model('Managers', managerSchema);
module.exports = Manager;