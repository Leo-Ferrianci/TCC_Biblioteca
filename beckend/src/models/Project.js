const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema ({
    name:String,
    student:[String],
    pdf:String,
    year: String,
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
      }
});

module.exports = mongoose.model("Project",ProjectSchema);