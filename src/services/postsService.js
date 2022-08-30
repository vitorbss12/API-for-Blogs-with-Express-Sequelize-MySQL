const Sequelize = require('sequelize');
const config = require('../database/config/config');
const { User, Category, BlogPost, PostCategory } = require('../database/models');

const sequelize = new Sequelize(
  process.env.NODE_ENV === 'test' ? config.test : config.development,
);

const findAll = async () => BlogPost.findAll({
  include: [{
    model: User,
    as: 'user',
    attributes: { exclude: ['password'] },
  }, {
    model: Category,
    as: 'categories',
    through: { attributes: [] },
  }],
});

const findById = async (id) => BlogPost.findByPk(id, {
  include: [{
    model: User,
    as: 'user',
    attributes: { exclude: ['password'] },
  }, {
    model: Category,
    as: 'categories',
    through: { attributes: [] },
  }],
});

const create = async (post, categoryIds) => {
  const { userId, title, content } = post;

  const result = await sequelize.transaction(async (t) => {
    const newPost = await BlogPost.create(
      { title, content, userId },
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

const update = async (post) => {
  const { id, title, content } = post;

  await sequelize.transaction(async (t) => {
    await BlogPost.update(
      { title, content },
      { where: { id }, transaction: t },
    );
  });

  const updatedPost = await findById(id);

  return updatedPost;
};

const remove = async (id) => {
  const result = await sequelize.transaction(async (t) => {
    await BlogPost.destroy({ where: { id }, transaction: t });
  });

  return result;
};

module.exports = {
  findAll,
  findById,
  create,
  update,
  remove,
};
