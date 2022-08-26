const express = require('express');

const categoriesController = require('../controllers/categoriesController');

const categoriesRoute = express.Router();

categoriesRoute.post('/', categoriesController.create);

module.exports = categoriesRoute;
