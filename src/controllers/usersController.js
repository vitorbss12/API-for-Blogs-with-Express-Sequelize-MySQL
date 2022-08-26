const usersService = require('../services/usersService');
const generateTokenJWT = require('../middlewares/generateTokenJWT');

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
  create,
};