const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const login = async (req, res, next) => {
  try {
    const { user } = req;

    const jwtConfig = {
      expiresIn: '1d',
      algorithm: 'HS256',
    };
    const token = jwt.sign({ data: user }, secret, jwtConfig);
    
    return res.status(200).json({ token });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  login,
};
