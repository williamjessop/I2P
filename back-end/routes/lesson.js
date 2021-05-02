var express = require('express');
var router = express.Router();
const Lesson = require("../models/Lesson");
const User = require("../models/User")

//these endpoints do not require auth yet, but I will add it if I get there

// Return a list of all licenses in the DB
router.get('/listlesson', function (req, res, next) {
  Lesson.find({}, "lessonName lessonTitle lessonDesc").then((lessons) => {
    res.send(lessons);
  })
});

//in req.body there will be a lessonNumber and a page.
router.post('/updateProgress', async (req, res) => {
  user = await User.findOne({ email: req.body.user });
  user.appData.lessonProgress[req.body.lessonNumber] = {"progress": req.body.page};
  console.log(user);
  user.update().then((savedUser)=>{
    res.send(savedUser);
  });
});

//takes name as query param
router.get('/', function(req, res) {
  Lesson.findOne({lessonName: req.query.lessonName}).then((lesson)=>{
    res.send(lesson.pages);
  })
});

module.exports = router;