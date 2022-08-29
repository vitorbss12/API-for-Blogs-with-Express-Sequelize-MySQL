const express = require('express');

const postsController = require('../controllers/postsController');

const postsRoute = express.Router();
const validateJWT = require('../middlewares/validateJWT');

postsRoute.post('/', validateJWT, postsController.create);

module.exports = postsRoute;
