const router = require('express').Router()

const { createDepartment, getoneDepartment, getallDepartment, updateDepartment, deleteDepartment } = require('../controller/departmentController.js')

const { validateDepartment } = require('../middleware/departmentValidation')

router.post('/newdepartment', validateDepartment, createDepartment)

router.get('/alldepartment', getallDepartment)

router.get('/onedepartment/:id', getoneDepartment)

router.patch('/updatedepartment/:id', updateDepartment)

router.delete('/deletedepartment/:id', deleteDepartment)

module.exports = router