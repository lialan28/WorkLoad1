const mongoose = require('mongoose');

const loadworkSchema = new mongoose.Schema({
  user: String,
  month: String
});

const Loadwork = mongoose.model('Loadwork', loadworkSchema);
module.exports = Loadwork;