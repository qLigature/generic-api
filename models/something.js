const mongoose = require('mongoose');

const somethingSchema = mongoose.Schema({
  name: String
});

module.exports = mongoose.model('Something', somethingSchema);
