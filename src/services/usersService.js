const Sequelize = require('sequelize');
const config = require('../database/config/config');
const { User } = require('../database/models');

const sequelize = new Sequelize(
  process.env.NODE_ENV === 'test' ? config.test : config.development,
);

const findAll = async () => User.findAll();

const findByEmail = async (email) => User.findOne({ where: { email } });

const findById = async (id) => User.findOne({ where: { id } });

const create = async (user) => {
  const { displayName, email, password, image } = user;

  const result = await sequelize.transaction(async (t) => {
    const newUser = await User.create(
      { displayName, email, password, image },
      { transaction: t },
    );

    return newUser;
  });

  return result.dataValues;
};

module.exports = {
  findAll,
  findByEmail,
  findById,
  create,
};
