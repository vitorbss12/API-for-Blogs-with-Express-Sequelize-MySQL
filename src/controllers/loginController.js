const generateTokenJWT = require('../middlewares/generateTokenJWT');

const login = async (req, res, next) => {
  try {
    const { user } = req;

    const token = await generateTokenJWT(user);
    
    return res.status(200).json({ token });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  login,
};
