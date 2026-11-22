const courseModel = require('../models/course.js')
const departmentModel = require('../models/department.js')

exports.createCourse = async (req, res) => {
    try {
        const { department } = req.params;
        const { courseCode, title, creditUnits } = req.body;

        const dept = await departmentModel.findById(department);

        if (!dept) {
            return res.status(404).json({
                message: "department not found"
            });
        }

        const newcourse = new courseModel({
            courseCode,
            title,
            creditUnits,
            department
        });

        dept.courses.push(newcourse._id);

        await newcourse.save();
        await dept.save();

        return res.status(201).json({
            message: 'Course created successfully',
            data: newcourse
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
};


exports.getallCourses = async (req,res) => {
    try {
        const course = await courseModel.find()

        res.status(200).json({
            message: `All courses found and the total is: ${course.length}`,
            data: course
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

exports.getoneCourse = async (req, res) => {
    try {
        const { id } = req.params
        const course = await courseModel.findById(id).populate('department');

        if(!course) {
            return res.status(404).json({
                message: 'course not found'
            })
        }

        res.status(200).json({
            message: 'course found',
            data: course
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

exports.updateCourse = async (req, res) => {
    try {
        const { id } = req.params
        const { courseCode, title, creditUnits } = req.body
        const course = await courseModel.findById(id);

        if(!course) {
            return res.status(404).json({
                message: 'course not found'
            })
        }

        const data = {
            courseCode,
            title,
            creditUnits
        }

        const updatedCourse = await courseModel.findByIdAndUpdate(id, data, { new: true})
        res.status(200).json({
            message: 'Course updated successfully',
            data: updatedCourse
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

exports.deleteCourse = async (req, res) => {
    try {
        const { id } = req.params
        const course = await courseModel.findByIdAndDelete(id)

        if(!course) {
            return res.status(404).json({
                message: 'course not found'
            })
        }

        res.status(200).json({
            message: 'course deleted successfully'
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}