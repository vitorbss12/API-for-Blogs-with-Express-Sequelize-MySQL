const Sequelize = require('sequelize');
const config = require('../database/config/config');
const { Category } = require('../database/models');

const sequelize = new Sequelize(
  process.env.NODE_ENV === 'test' ? config.test : config.development,
);

const findAll = async () => Category.findAll();

const create = async (name) => {
  const result = await sequelize.transaction(async (t) => {
    const newCategory = await Category.create(
      { name },
      { transaction: t },
    );

    return newCategory;
  });

  return result.dataValues;
};

module.exports = {
  findAll,
  create,
};
