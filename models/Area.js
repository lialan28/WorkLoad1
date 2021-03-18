const mongoose = require('mongoose');

const areaSchema = new mongoose.Schema({
  name: String,
  manager: String
}, { timestamps: true });

const Area = mongoose.model('Areas', areaSchema);
module.exports = Area;