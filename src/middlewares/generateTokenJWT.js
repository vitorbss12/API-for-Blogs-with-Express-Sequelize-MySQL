const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const generateTokenJWT = (user) => {
  const jwtConfig = {
    expiresIn: '1d',
    algorithm: 'HS256',
  };
  const token = jwt.sign({ data: user }, secret, jwtConfig);

  return token;
};

module.exports = generateTokenJWT;
