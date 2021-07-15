const mongoose = require('mongoose');

const loadworkSchema = new mongoose.Schema({
  tgi: String,
  data: [mongoose.Schema.Types.Mixed]
});

const Loadwork = mongoose.model('Loadwork', loadworkSchema);
module.exports = Loadwork;