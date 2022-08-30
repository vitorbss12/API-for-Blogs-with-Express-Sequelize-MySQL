const express = require('express');

const usersController = require('../controllers/usersController');

const userRoute = express.Router();
const createUserValidation = require('../middlewares/createUserValidation');
const validateJWT = require('../middlewares/validateJWT');

userRoute.get('/', validateJWT, usersController.findAll);
userRoute.get('/:id', validateJWT, usersController.findById);
userRoute.post('/', createUserValidation, usersController.create);
userRoute.delete('/me', validateJWT, usersController.remove);

module.exports = userRoute;
