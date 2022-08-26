const joi = require('joi');

const RES_MESSAGE_NAME = '"name" is required';

const categoryNameSchema = joi.object({
  name: joi.string().required().messages({
    'any.required': `400|${RES_MESSAGE_NAME}`,
    'string.base': `400|${RES_MESSAGE_NAME}`,
    'string.empty': `400|${RES_MESSAGE_NAME}`,
  }),
});

module.exports = categoryNameSchema;
