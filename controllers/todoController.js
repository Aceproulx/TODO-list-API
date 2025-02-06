const Task = require('../models/taskModel');

const getAllTodos = (req, res) => {
  Task.getAll((err, results) => {
    if (err) return res.status(500).send('Error retrieving todos');
    res.send(results);
  });
};

const createTodo = (req, res) => {
  const { title, description, category_id } = req.body;
  const user_id = req.user._id; // Assuming user ID is stored in the token

  Task.create(title, description, category_id, user_id, (err, result) => {
    if (err) return res.status(500).send('Error creating todo');
    res.send(result);
  });
};

const updateTodo = (req, res) => {
  const { id } = req.params;
  const { title, description, category_id } = req.body;

  Task.update(id, title, description, category_id, (err, result) => {
    if (err) return res.status(500).send('Error updating todo');
    res.send(result);
  });
};

const deleteTodo = (req, res) => {
  const { id } = req.params;

  Task.delete(id, (err, result) => {
    if (err) return res.status(500).send('Error deleting todo');
    res.send(result);
  });
};

module.exports = {
  getAllTodos,
  createTodo,
  updateTodo,
  deleteTodo
};