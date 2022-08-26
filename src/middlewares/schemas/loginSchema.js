const joi = require('joi');

const emailSchema = joi.object({
  email: joi.string().email().required().message({
    'any.required': '400 | Email is required',
    'any.email': '400 | Email is invalid',
    'any.empty': '400 | Email is empty',
    'any.string': '400 | Email is invalid',
  }),
  password: joi.string().required().message({
    'any.required': '400 | Password is required',
    'any.empty': '400 | Password is empty',
  }),
});

module.exports = emailSchema;
