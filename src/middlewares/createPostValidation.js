const createPostSchema = require('./schemas/createPostSchema');

const createPostValidation = (req, res, next) => {
  try {
    const { title, content, categoryIds } = req.body;
    const backupMessage = 'Some required fields are missing';

    const { error } = createPostSchema.validate({ title, content, categoryIds });

    if (error) {
      const [code, message] = error.message.split('|');
      return res.status(Number(code) || 400).json({ message: message || backupMessage });
    }

    next();
  } catch (err) {
    next(err);
  }
};

module.exports = createPostValidation;
