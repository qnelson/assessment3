var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SuperPowerSchema = new Schema({

  power_name: { type: String, required: true, index: { unique: true } },

});

var SuperPowers = mongoose.model('SuperPowers', SuperPowerSchema);

module.exports = SuperPowers;
