var express = require('express');
var router = express.Router();
const Lesson = require("../models/Lesson");

//these endpoints do not require auth yet, but I will add it if I get there

// Return a list of all licenses in the DB
router.get('/listlesson', function (req, res, next) {
  Lesson.find({}, "lessonName lessonTitle lessonDesc").then((lessons) => {
    res.send(lessons);
  })
});

//takes name as query param
router.get('/', function(req, res) {
  Lesson.findOne({lessonName: req.query.lessonName}).then((lesson)=>{
    res.send(lesson.pages);
  })
});

module.exports = router;