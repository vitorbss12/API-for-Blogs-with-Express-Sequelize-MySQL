const updatePostSchema = require('./schemas/updatePostSchema');

const updatePostValidation = (req, res, next) => {
  try {
    const { title, content } = req.body;

    const { error } = updatePostSchema.validate({ title, content });

    if (error) {
      const [code, message] = error.message.split('|');
      return res.status(Number(code)).json({ message });
    }

    next();
  } catch (err) {
    next(err);
  }
};

module.exports = updatePostValidation;
