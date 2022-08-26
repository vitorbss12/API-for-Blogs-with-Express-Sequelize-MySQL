const { User } = require('../database/models');

const loginValidation = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user || user.password !== password) {
      return res.status(400).json({ message: 'Invalid fields' });
    }

    req.user = user.dataValues;
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = loginValidation;
