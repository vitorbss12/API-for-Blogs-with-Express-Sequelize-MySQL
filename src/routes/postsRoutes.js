const express = require('express');

const postsController = require('../controllers/postsController');

const postsRoute = express.Router();
const createPostValidation = require('../middlewares/createPostValidation');
const validateJWT = require('../middlewares/validateJWT');
const updatePostAuth = require('../middlewares/updatePostAuth');
const updatePostValidation = require('../middlewares/updatePostValidation');

postsRoute.get('/', validateJWT, postsController.findAll);
postsRoute.get('/search', validateJWT, postsController.search);
postsRoute.get('/:id', validateJWT, postsController.findById);
postsRoute.post('/', validateJWT, createPostValidation, postsController.create);
postsRoute.put('/:id', validateJWT, updatePostAuth, updatePostValidation, postsController.update);
postsRoute.delete('/:id', validateJWT, updatePostAuth, postsController.remove);

module.exports = postsRoute;
