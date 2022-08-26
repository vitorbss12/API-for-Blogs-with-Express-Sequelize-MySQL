const createUserSchema = require('./schemas/createUserSchema');

const loginBodyValidation = (req, res, next) => {
  try {
    const { displayName, email, password } = req.body;

    const { error } = createUserSchema.validate({ displayName, email, password });

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
