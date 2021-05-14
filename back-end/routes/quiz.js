var express = require("express");
var router = express.Router();
const auth = require("../middleware/auth");
const Quiz = require("../models/Quiz");
const User = require("../models/User");

//takes name as query param
router.get("/", auth, function (req, res) {
  Quiz.findOne({ name: req.query.name }).then((quiz) => {
    res.send(quiz.pages);
  });
});

//takes the quiz you want to grade as query parameter
router.post("/grade", auth, function (req, res) {
  Quiz.findOne({ name: req.query.name }).then((quiz) => {
    let score = 0;
    let i = 0;

    //Please fix the issue with empty quizzes
    //I need to loop through the answers in req, not the answers in the quiz
    for (answer of quiz.answers) {
      if (answer.correct === req.body.answers[i].answer) score += 1;

      i += 1;
    }
    score = score / i;

    recordName = "appData." + req.query.name;

    User.findOneAndUpdate(
      { email: req.body.user },
      { $set: { [recordName]: score } },
      { new: true, useFindAndModify: true },
      (err, doc) => {
        if (err) {
          console.log(err);
          //this would be where to return errors
        }

        res.status(200).json({
          user: doc,
        });
      }
    );
  });
});

module.exports = router;
