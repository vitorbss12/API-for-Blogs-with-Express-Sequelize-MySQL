const express = require('express');

const { login } = require('../controllers/loginController');

const loginRoute = express.Router();
const loginBodyValidation = require('../middlewares/loginBodyValidation');
const loginValidation = require('../middlewares/loginValidation');

loginRoute.post('/', loginBodyValidation, loginValidation, login);

module.exports = loginRoute;
