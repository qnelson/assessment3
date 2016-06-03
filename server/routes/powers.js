var express = require('express');
var router = express.Router();
var SuperPowers = require('../models/superpower');


router.get('/', function (req, res) {
  console.log('getting powers');
  SuperPowers.find({}, function (err, powers) {
    console.log(powers);
    if (err) {
      console.log(err);
      res.sendStatus(500);
      return;
    }

    res.send(powers);
  });
});


module.exports = router;
