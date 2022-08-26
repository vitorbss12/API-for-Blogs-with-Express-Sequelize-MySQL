const express = require('express');

const categoriesController = require('../controllers/categoriesController');
const categoryNameValidation = require('../middlewares/categoryNameValidation');
const validateJWT = require('../middlewares/validateJWT');

const categoriesRoute = express.Router();

categoriesRoute.post('/', validateJWT, categoryNameValidation, categoriesController.create);

module.exports = categoriesRoute;
