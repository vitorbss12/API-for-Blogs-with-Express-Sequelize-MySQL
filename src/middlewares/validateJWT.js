const jwt = require('jsonwebtoken');
const usersService = require('../services/usersService');

const secret = process.env.JWT_SECRET;

const validateTokenJWT = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const decoded = jwt.verify(token, secret);
    const user = await usersService.findByEmail(decoded.data.email);

    if (!user) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }

    req.user = user;

    next();
  } catch (err) {
    next(err);
  }
};

module.exports = validateTokenJWT;