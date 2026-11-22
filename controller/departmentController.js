const departmentModel = require('../models/department.js')

exports.createDepartment = async (req, res) => {
    try {
        const { departmentName, faculty } = req.body;
        const department = await departmentModel.findOne({ departmentName })
        if (!department) {
            return res.status(400).json({
                message: `Department with the name: ${departmentName} already exist`
            })
        }

        const data = {
            departmentName,
            faculty
        }

        const newDepartment = await departmentModel.create(data)

        res.status(201).json({
            message: 'Department created successfully',
            data: newDepartment
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

exports.getallDepartment = async (req,res) => {
    try {
        const departments = await departmentModel.find()
        res.status(200).json({
            message: `all departments found and the total is: ${departments.length}`,
            data: departments
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

exports.getoneDepartment = async (req, res) => {
    try {
        const { id } = req.params
        const department = await departmentModel.findById(id).populate('courses');

        if (!department) {
            return res.status(404).json({
                message: 'department not found'
            })
        }

        res.status(200).json({
            message: 'department found',
            data: department
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

exports.updateDepartment = async (req, res) => {
    try {
        const { id } = req.params
        const { departmentName, faculty } = req.body
        const department = await departmentModel.findById(id);

        if(!department) {
            return res.status(404).json({
                message: 'department not found'
            })
        }

        const data = {
            departmentName,
            faculty
        }

        const updatedDepartment = await departmentModel.findByIdAndUpdate(id, data, { new: true})
        res.status(200).json({
            message: 'Department updated successfully',
            data: updatedDepartment
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

exports.deleteDepartment = async (req, res) => {
    try {
        const { id } = req.params
        const department = await departmentModel.findByIdAndDelete(id)

        if(!department) {
            return res.status(404).json({
                message: 'department not found'
            })
        }

        res.status(200).json({
            message: 'department deleted successfully'
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}