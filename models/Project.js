const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: String,
}, { timestamps: true });

const Project = mongoose.model('Projects', projectSchema);
module.exports = Project;