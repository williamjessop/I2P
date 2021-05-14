var express = require("express");
var router = express.Router();
const Lesson = require("../models/Lesson");
const User = require("../models/User");

//these endpoints do not require auth yet, but I will add it if I get there

// Return a list of all licenses in the DB
router.get("/listlesson", function (req, res, next) {
  Lesson.find({}, "lessonName lessonTitle lessonDesc").then((lessons) => {
    res.send(lessons);
  });
});

//in req.body there will be a lessonNumber and a page.
router.post("/updateProgress", (req, res) => {
  recordName = `appData.Lesson${req.body.lessonNumber}`;

  User.findOneAndUpdate(
    { email: req.body.user },
    { $set: { [recordName]: req.body.done } },
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

//takes name as query param
router.get("/", function (req, res) {
  Lesson.findOne({ lessonName: req.query.lessonName }).then((lesson) => {
    res.send(lesson.pages);
  });
});

module.exports = router;
