const Joi = require('joi');

exports.validateDepartment = (req, res, next) => {
    const schema = Joi.object({
      departmentName: Joi.string().min(2).max(50).trim().required().messages({
        'string.base': 'Department name must be text',
        'string.empty': 'Department name cannot be empty',
        'string.min': 'Department name must be at least  2 characters long',
        'any.required': 'Department name is required'
      }),
      faculty: Joi.string().min(3).max(50).trim().required().messages({
        'string.base': 'Faculty must be text',
        'string.empty': 'Faculty cannot be empty',
        'string.min': 'Faculty must be at least 3 characters long',
        'any.required': 'Faculty is required'
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