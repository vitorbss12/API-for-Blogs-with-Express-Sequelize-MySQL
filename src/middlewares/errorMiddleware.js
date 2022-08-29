const errorMiddleware = (err, _req, res, _next) => {
  if (err.name === 'JsonWebTokenError') {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }

  if (err.name === 'SequelizeUniqueConstraintError') {
    const field = err.sql.includes('Users') ? 'User' : 'Field';
    return res.status(409).json({ message: `${field} already registered` });
  }

  if (err.name === 'SequelizeForeignKeyConstraintError') {
    return res.status(400).json({ message: '"categoryIds" not found' });
  }

  res.status(500).json({ message: err.message });
};

module.exports = errorMiddleware;
