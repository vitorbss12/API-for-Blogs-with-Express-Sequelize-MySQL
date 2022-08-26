const express = require('express');

const { login } = require('../controllers/loginController');

const loginRoute = express.Router();
const loginBodyValidation = require('../middlewares/loginBodyValidation');

loginRoute.post('/', loginBodyValidation, login);

module.exports = loginRoute;
