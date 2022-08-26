const joi = require('joi');

const RES_MESSAGE_NAME = '"displayName" length must be at least 8 characters long';
const RES_MESSAGE_EMAIL = '"email" must be a valid email';
const RES_MESSAGE_PASSWORD = '"password" length must be at least 6 characters long';

const createUserSchema = joi.object({
  displayName: joi.string().min(8).required().messages({
    'any.required': `400|${RES_MESSAGE_NAME}`,
    'string.base': `400|${RES_MESSAGE_NAME}`,
    'string.empty': `400|${RES_MESSAGE_NAME}`,
    'string.min': `400|${RES_MESSAGE_NAME}`,
  }),
  email: joi.string().email().required().messages({
    'any.required': `400|${RES_MESSAGE_EMAIL}`,
    'string.base': `400|${RES_MESSAGE_EMAIL}`,
    'string.empty': `400|${RES_MESSAGE_EMAIL}`,
    'string.email': `400|${RES_MESSAGE_EMAIL}`,
  }),
  password: joi.string().min(6).required().messages({
    'any.required': `400|${RES_MESSAGE_PASSWORD}`,
    'string.base': `400|${RES_MESSAGE_PASSWORD}`,
    'string.empty': `400|${RES_MESSAGE_PASSWORD}`,
    'string.min': `400|${RES_MESSAGE_PASSWORD}`,
  }),
});

module.exports = createUserSchema;

// Se a requisição não tiver o campo displayName devidamente preenchido com 8 caracteres ou mais, o resultado retornado deverá ser
// conforme exibido abaixo, com um status http 400:
// {
//   "message": "\"displayName\" length must be at least 8 characters long"
// }