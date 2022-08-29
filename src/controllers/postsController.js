const postsService = require('../services/postsService');

const create = async (req, res, next) => {
  try {
    const { title, content, categoryId } = req.body;
    const newPost = { title, content };

    const post = await postsService.create(newPost, categoryId);

    return res.status(201).json(post);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  create,
};
