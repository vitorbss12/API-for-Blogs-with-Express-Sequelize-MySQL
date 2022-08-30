const express = require('express');

const postsController = require('../controllers/postsController');

const postsRoutes = express.Router();
const createPostValidation = require('../middlewares/createPostValidation');
const validateJWT = require('../middlewares/validateJWT');
const updatePostAuth = require('../middlewares/updatePostAuth');
const updatePostValidation = require('../middlewares/updatePostValidation');

postsRoutes.get('/', validateJWT, postsController.findAll);
postsRoutes.get('/search', validateJWT, postsController.search);
postsRoutes.get('/:id', validateJWT, postsController.findById);
postsRoutes.post('/', validateJWT, createPostValidation, postsController.create);
postsRoutes.put('/:id', validateJWT, updatePostAuth, updatePostValidation, postsController.update);
postsRoutes.delete('/:id', validateJWT, updatePostAuth, postsController.remove);

module.exports = postsRoutes;
