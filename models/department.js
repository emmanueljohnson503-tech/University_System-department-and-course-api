const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema(
{
    departmentName: {
        type: String,
        required: true
    },
    faculty: {
        type: String,
        required: true
    },
    courses: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Course'
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('departments', departmentSchema);