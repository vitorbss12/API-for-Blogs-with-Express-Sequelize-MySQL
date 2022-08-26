// const usersService = require('../services/usersService');

const login = async (_req, res, next) => {
  try {
    return res.status(200).json({ message: 'ok' });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  login,
};
