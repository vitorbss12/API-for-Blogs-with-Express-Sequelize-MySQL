const categoryNameSchema = require('./schemas/categoryNameSchema');

const loginBodyValidation = (req, res, next) => {
  try {
    const { name } = req.body;

    const { error } = categoryNameSchema.validate(name);

    if (error) {
      const [code, message] = error.message.split('|');
      return res.status(Number(code)).json({ message });
    }

    next();
  } catch (err) {
    next(err);
  }
};

module.exports = loginBodyValidation;
