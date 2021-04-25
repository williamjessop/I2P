var express = require('express');
var router = express.Router();
const Quiz = require("../models/Quiz");

//takes name as query param
router.get('/', function(req, res) {
  Quiz.findOne({name: req.query.name}).then((quiz)=>{
    res.send(quiz.pages);
  })
});

//takes the quiz you want to grade as query parameter
router.post('/grade', function(req, res) {
    Quiz.findOne({name: req.query.name}).then((quiz)=>{
      let score = "this would be your score";
      //grading logic
      res.send(score);
    })
});

module.exports = router;