const Category = require('../models/categoryModel');

const getAllCategories = (req, res) => {
  Category.getAll((err, results) => {
    if (err) return res.status(500).send('Error retrieving categories');
    res.send(results);
  });
};

const createCategory = (req, res) => {
  const { name } = req.body;

  Category.create(name, (err, result) => {
    if (err) return res.status(500).send('Error creating category');
    res.send(result);
  });
};

const updateCategory = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  Category.update(id, name, (err, result) => {
    if (err) return res.status(500).send('Error updating category');
    res.send(result);
  });
};

const deleteCategory = (req, res) => {
  const { id } = req.params;

  Category.delete(id, (err, result) => {
    if (err) return res.status(500).send('Error deleting category');
    res.send(result);
  });
};

module.exports = {
  getAllCategories,
  createCategory,
  updateCategory,
  deleteCategory
};