const usersService = require('../services/usersService');

const create = async (req, res, next) => {
  try {
    const { displayName, email, password, image } = req.body;
    const newInfoUser = { displayName, email, password, image };

    const newUser = await usersService.create(newInfoUser);
    console.log(newUser);

    res.status(200).json({ message: 'ok' });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  create,
};