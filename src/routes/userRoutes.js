const express = require('express');

const usersController = require('../controllers/usersController');

const userRoute = express.Router();

userRoute.post('/', usersController.create);

module.exports = userRoute;
