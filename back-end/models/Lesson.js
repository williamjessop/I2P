var mongoose = require("mongoose")

var Schema = mongoose.Schema

var LessonSchema = new Schema(
    {
        name: String,
        pages: [
            {content: String},
        ],
    },
    {
        timestamps: true,
        collection: 'lessons',
     }
);

// Export model
module.exports = mongoose.model("Lesson", LessonSchema, "lessons")