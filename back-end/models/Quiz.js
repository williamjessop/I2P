var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var QuizSchema = new Schema(
  {
    name: String,
    pages: [{ question: String, answerChoices: [String] }],
    answers: [{ id: String, correct: Number }],
  },
  {
    collection: "quizzes",
  }
);

// Export model
module.exports = mongoose.model("Quiz", QuizSchema, "quizzes");
