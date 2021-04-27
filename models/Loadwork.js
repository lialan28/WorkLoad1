const mongoose = require('mongoose');

const loadworkSchema = new mongoose.Schema({
 data: [mongoose.Schema.Types.Mixed]
});

const Loadwork = mongoose.model('Loadwork', loadworkSchema);
module.exports = Loadwork;