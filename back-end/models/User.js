var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = new Schema(
  {
    email: { type: String, required: true, max: 100 },
    password: { type: String, required: true, max: 100 },
    firstName: { type: String, required: false, max: 30 },
    lastName: { type: String, required: false, max: 30 },
    appData: {
      Lesson1: Boolean,
      Lesson2: Boolean,
      Lesson3: Boolean,
      Lesson4: Boolean,
      Lesson5: Boolean,
      Lesson6: Boolean,

      Quiz1: Number,
      Quiz2: Number,
    },
  },
  {
    timestamps: true,
    collection: "users",
    strict: false,
  }
);

// Export model
module.exports = mongoose.model("User", UserSchema, "users");
