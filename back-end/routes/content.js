var express = require('express');
var router = express.Router();
const User = require("../models/User");

/* GET home page. */
router.get('/lesson', function(req, res, next) {
  res.send('you made it to this route');
});

module.exports = router;