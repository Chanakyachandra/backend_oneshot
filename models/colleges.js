const mongoose = require('mongoose');

const collegeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    yearFounded: {
        type: Number, 
        min: 1900
    },
    city: {
        type: String
    }, 
    state: {
        type: String
    }, 
    country: {
        type: String
    },
    noOfStudents: {
        type: Number
    },
    courses: {
        type: [{ type: String }]
    }
});

const College = mongoose.model('College', collegeSchema);

module.exports = College;