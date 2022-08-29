const postsService = require('../services/postsService');

const findAll = async (req, res, next) => {
  try {
    const posts = await postsService.findAll();

    return res.status(200).json(await posts);
  } catch (err) {
    next(err);
  }
};

const create = async (req, res, next) => {
  try {
    const { title, content, categoryIds } = req.body;
    const { id: userId } = req.user;
    const newPost = { userId, title, content };

    const post = await postsService.create(newPost, categoryIds);

    return res.status(201).json(post);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  findAll,
  create,
};
