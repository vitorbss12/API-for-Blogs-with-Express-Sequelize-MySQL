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

    if (!user) res.status(404).json({ message: 'User not found' });

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
    
    const token = await generateTokenJWT(newUser.dataValues);

    return res.status(201).json({ token });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  findAll,
  findById,
  create,
};