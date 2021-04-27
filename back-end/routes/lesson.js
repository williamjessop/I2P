var express = require('express');
var router = express.Router();
const Lesson = require("../models/Lesson");

/* GET home page. */
router.get('/listlesson', function (req, res, next) {
  Lesson.find({}, "lessonName lessonTitle lessonDesc").then((lessons) => {

    res.send(lessons);
  })
});

module.exports = router;