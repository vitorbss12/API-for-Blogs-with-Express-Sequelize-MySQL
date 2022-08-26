const loginSchema = require('./schemas/loginSchema');

const loginBodyValidation = (req, res, next) => {
  try {
    const { email, password } = req.body;

    const { error } = loginSchema.validate({ email, password });

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
