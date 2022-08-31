const notFound = (_req, res, next) => {
  try {
    return res.status(404).json({ message: 'Not Found' });
  } catch (error) {
    next(error);
  }
};

module.exports = notFound;