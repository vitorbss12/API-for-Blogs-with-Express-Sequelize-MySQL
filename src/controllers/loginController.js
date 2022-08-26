const usersService = require('../services/usersService');

const login = async (req, res, next) => {
  try {
    const { email } = req.body;

    // loginBodyValidator

    // loginValidation

    const user = await usersService.findByEmail(email);

    if (!user) {
      return res.status(400).json({ message: 'Usuário não encontrado' });
    }

    // jwtTokenGenerate
  } catch (err) {
    next(err);
  }
};

module.exports = {
  login,
};
