const errorMiddleware = (err, _req, res, _next) => {
  if (err.name === 'JsonWebTokenError') {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }

  if (err.name === 'SequelizeUniqueConstraintError') {
    return res.status(409).json({ message: 'User already registered' });
  }

  res.status(500).json({ message: err.message });
};

module.exports = errorMiddleware;
