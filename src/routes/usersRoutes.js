const express = require('express');

const usersController = require('../controllers/usersController');

const usersRoutes = express.Router();
const createUserValidation = require('../middlewares/createUserValidation');
const validateJWT = require('../middlewares/validateJWT');

usersRoutes.get('/', validateJWT, usersController.findAll);
usersRoutes.get('/:id', validateJWT, usersController.findById);
usersRoutes.post('/', createUserValidation, usersController.create);
usersRoutes.delete('/me', validateJWT, usersController.remove);

module.exports = usersRoutes;
