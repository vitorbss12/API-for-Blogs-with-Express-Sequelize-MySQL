const errorMiddleware = (err, _req, res, _next) => {
  res.status(err.statusCode || 500).json({
    message: err.message,
    status: err.statusCode || 500,
  });
};

module.exports = errorMiddleware;
