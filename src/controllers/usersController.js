const usersService = require('../services/usersService');
const generateTokenJWT = require('../middlewares/generateTokenJWT');

const findAll = async (_req, res, next) => {
  try {
    const users = await usersService.findAll();

    return res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};

const findById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await usersService.findById(id);

    if (!user) return res.status(404).json({ message: 'User does not exist' });

    return res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

const create = async (req, res, next) => {
  try {
    const { displayName, email, password, image } = req.body;
    const newInfoUser = { displayName, email, password, image };

    const newUser = await usersService.create(newInfoUser);

    const token = await generateTokenJWT(newUser);

    return res.status(201).json({ token });
  } catch (err) {
    next(err);
  }
};

const remove = async (req, res, next) => {
  try {
    const { id: userId } = req.user;

    await usersService.remove(userId);

    return res.status(204).end();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  findAll,
  findById,
  create,
  remove,
};