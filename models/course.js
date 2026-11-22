const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema(
{
    courseCode: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    creditUnits: {
        type: Number,
        required: true
    },
    department: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Department',
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('courses', courseSchema)
