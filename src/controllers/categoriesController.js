const categoriesService = require('../services/categoriesService');

const create = async (req, res, next) => {
  try {
    const { name } = req.body;

    const newCategory = await categoriesService.create(name);
    
    return res.status(201).json(newCategory);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  create,
};
