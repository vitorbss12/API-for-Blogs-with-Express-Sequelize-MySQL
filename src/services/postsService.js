const Sequelize = require('sequelize');
const config = require('../database/config/config');
const { BlogPost, PostCategory } = require('../database/models');

const sequelize = new Sequelize(
  process.env.NODE_ENV === 'test' ? config.test : config.development,
);

const create = async (post, categoryIds) => {
  const { title, content } = post;

  const result = await sequelize.transaction(async (t) => {
    const newPost = await BlogPost.create(
      { title, content },
      { transaction: t },
    );

    await PostCategory.bulkCreate(
      categoryIds.map((categoryId) => ({
        postId: newPost.id,
        categoryId,
      })),
      { transaction: t },
    );

    return newPost;
  });

  return result.dataValues;
};

module.exports = {
  create,
};
