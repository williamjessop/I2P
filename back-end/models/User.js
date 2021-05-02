var mongoose = require("mongoose")

var Schema = mongoose.Schema

var UserSchema = new Schema(
    {
        email: { type: String, required: true, max: 100 },
        password: { type: String, required: true, max: 100 },
        firstName: { type: String, required: false, max: 30 },
        lastName: { type: String, required: false, max: 30 },
        appData: {
            lessonProgress: [{progress: Number}],
            Quiz1: Number,
            Quiz2: Number
        }
    },
    {
        timestamps: true,
        collection: 'users',
        strict: false
     }
);

// Export model
module.exports = mongoose.model("User", UserSchema, "users")