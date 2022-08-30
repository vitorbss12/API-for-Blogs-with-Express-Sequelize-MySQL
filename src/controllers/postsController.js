const postsService = require('../services/postsService');

const findAll = async (req, res, next) => {
  try {
    const posts = await postsService.findAll();

    return res.status(200).json(await posts);
  } catch (err) {
    next(err);
  }
};

const findById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const post = await postsService.findById(id);

    if (!post) res.status(404).json({ message: 'Post does not exist' });

    return res.status(200).json(post);
  } catch (err) {
    next(err);
  }
};

const search = async (req, res, next) => {
  try {
    const { q } = req.query;

    const posts = await postsService.search(q);

    return res.status(200).json(posts);
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

const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;

    const updatedPost = await postsService.update({ id, title, content });

    return res.status(200).json(updatedPost);
  } catch (err) {
    next(err);
  }
};

const remove = async (req, res, next) => {
  try {
    const { id } = req.params;

    await postsService.remove(id);

    return res.status(204).end();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  findAll,
  findById,
  search,
  create,
  update,
  remove,
};
