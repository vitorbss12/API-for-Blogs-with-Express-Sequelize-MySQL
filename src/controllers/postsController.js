const postsService = require('../services/postsService');

const create = async (req, res, next) => {
  try {
    const { title, content, categoryIds } = req.body;
    console.log(categoryIds);
    const { id: userId } = req.user;
    const newPost = { userId, title, content };

    const post = await postsService.create(newPost, categoryIds);

    return res.status(201).json(post);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  create,
};
