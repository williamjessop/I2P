var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var LessonSchema = new Schema(
  {
    lessonName: String,
    lessonTitle: String,
    lessonDesc: String,
    pages: [[{ contentType: String, content: String }]],
  },
  {
    collection: "lessons",
  }
);

// Export model
module.exports = mongoose.model("Lesson", LessonSchema, "lessons");
