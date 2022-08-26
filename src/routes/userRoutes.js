const express = require('express');

const usersController = require('../controllers/usersController');

const userRoute = express.Router();
const createUserValidation = require('../middlewares/createUserValidation');

userRoute.post('/', createUserValidation, usersController.create);

module.exports = userRoute;
