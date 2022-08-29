const categoriesService = require('../services/categoriesService');

const findAll = async (_req, res, next) => {
  try {
    const categories = await categoriesService.findAll();

    return res.status(200).json(categories);
  } catch (err) {
    next(err);
  }
};

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
  findAll,
  create,
};
