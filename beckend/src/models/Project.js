const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema ({
    name:String,
    student:[String],
    pdf:String,
});

module.exports = mongoose.model("Project",ProjectSchema);