const { User } = require('../database/models');

const findByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user;
};

const create = async (user) => {
  const { displayName, email, password, image } = user;
  const newUser = await User.create({ displayName, email, password, image });
  return newUser;
};

module.exports = {
  findByEmail,
  create,
};
