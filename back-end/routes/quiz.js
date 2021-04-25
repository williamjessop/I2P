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
      let score = 0;
      let i = 0;
      for(answer of quiz.answers){
        if(answer.correct === req.body.answers[i].answer)
            score+=1;

        i+=1;
      }
      score = score/i;
      
      res.status(200).json({
          score: score
      });
    })
});

module.exports = router;