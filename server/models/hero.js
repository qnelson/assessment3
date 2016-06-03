var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HeroSchema = new Schema({
  alias: { type: String, required: true },
  first_name: { type: String, required: false },
  last_name: {type: String, required: false },
  city: { type: String, required: false},
  power_name: { type: String, required: false},
});

var Hero = mongoose.model('Hero', HeroSchema);

module.exports = Hero;
