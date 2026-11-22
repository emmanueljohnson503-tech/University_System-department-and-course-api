const Joi = require('joi');

exports.validateCourse = (req, res, next) => {
  const schema = Joi.object({
    courseCode: Joi.string().min(3).max(10).trim().required().messages({
      'string.base': 'Course code must be text',
      'string.empty': 'Course code cannot be empty',
      'string.min': 'Course code must be at least 3 characters',
      'any.required': 'Course code is required'
    }),
    title: Joi.string().min(3).max(100).trim().required().messages({
      'string.base': 'Course title must be text',
      'string.empty': 'Course title cannot be empty',
      'string.min': 'Course title must be at least 3 characters long',
      'any.required': 'Course title is required'
    }),
    creditUnits: Joi.number().min(1).max(10).required().messages({
      'number.base': 'Credit units must be a number',
      'number.min': 'Credit units must be at least 1',
      'number.max': 'Credit units cannot exceed 10',
      'any.required': 'Credit units are required'
    })
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({
      message: error.details[0].message
    });
  }
  next();
};