const express = require('express');

const postsController = require('../controllers/postsController');

const postsRoute = express.Router();
const createPostValidation = require('../middlewares/createPostValidation');
const validateJWT = require('../middlewares/validateJWT');
const updatePostAuth = require('../middlewares/updatePostAuth');
const updatePostValidation = require('../middlewares/updatePostValidation');

postsRoute.get('/', validateJWT, postsController.findAll);
postsRoute.get('/:id', validateJWT, postsController.findById);
postsRoute.post('/', validateJWT, createPostValidation, postsController.create);
postsRoute.put('/:id', validateJWT, updatePostAuth, updatePostValidation, postsController.update);

module.exports = postsRoute;
