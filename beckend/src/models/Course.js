const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema ({
    name:String,
    image:String,
});

module.exports = mongoose.model("Course",CourseSchema);