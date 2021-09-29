const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    yearOfBatch: { type: Number,  min: 1900 },
    collegeId: { type: mongoose.Schema.Types.ObjectId, ref: 'College' },
    skills: { type: [{ type: String }] }
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;