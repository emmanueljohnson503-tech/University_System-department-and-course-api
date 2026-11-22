const router = require('express').Router()

const { createCourse, getallCourses, getoneCourse, updateCourse, deleteCourse } = require('../controller/courseController.js')

const { validateCourse } = require('../middleware/courseValidation')

router.post('/newcourse/:department', validateCourse, createCourse)

router.get('/allcourse', getallCourses)

router.get('/onecourse/:id', getoneCourse)

router.patch('/updatecourse/:id', updateCourse)

router.delete('/deletecourse/:id', deleteCourse)

module.exports = router