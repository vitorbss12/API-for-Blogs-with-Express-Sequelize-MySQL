const joi = require('joi');

const RES_MESSAGE = 'Some required fields are missing';

const updatePostSchema = joi.object({
  title: joi.string().required().messages({
    'any.required': `400|${RES_MESSAGE}`,
    'string.base': `400|${RES_MESSAGE}`,
    'string.empty': `400|${RES_MESSAGE}`,
  }),
  content: joi.string().required().messages({
    'any.required': `400|${RES_MESSAGE}`,
    'string.base': `400|${RES_MESSAGE}`,
    'string.empty': `400|${RES_MESSAGE}`,
  }),
});

module.exports = updatePostSchema;
