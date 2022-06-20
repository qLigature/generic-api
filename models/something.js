const mongoose = require('mongoose');

const somethingSchema = mongoose.Schema({
  data: String
});

module.exports = mongoose.model('Something', somethingSchema);
