department & course api

features:
two way relationships
Department "hasMany" Courses (array of Course ObjectIds)
Course "belongsTo" Department (single Department ObjectId)
Joi validation 