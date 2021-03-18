const mongoose = require('mongoose');

const costcenterSchema = new mongoose.Schema({
  name: String,
}, { timestamps: true });

const Costcenter = mongoose.model('Costcenters', costcenterSchema);
module.exports = Costcenter;