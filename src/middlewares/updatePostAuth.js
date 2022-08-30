const postsService = require('../services/postsService');

const updatePostAuth = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { id: userId } = req.user;

    const post = await postsService.findById(id);

    if (!post) res.status(404).json({ message: 'Post does not exist' });

    if (post.userId !== userId) return res.status(403).json({ message: 'Unauthorized user' });

    next();
  } catch (err) {
    next(err);
  }
};

module.exports = updatePostAuth;