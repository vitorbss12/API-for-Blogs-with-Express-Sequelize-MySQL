const joi = require('joi');

const RES_MESSAGE = 'Some required fields are missing';

const createPostSchema = joi.object({
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
  categoryIds: joi.array().items(joi.number().required().messages({
    'items.required': `400|${RES_MESSAGE}`,
    'number.base': `400|${RES_MESSAGE}`,
    })).required().messages({
    'any.required': `400|${RES_MESSAGE}`,
    'array.base': `400|${RES_MESSAGE}`,
  }),
});

module.exports = createPostSchema;
