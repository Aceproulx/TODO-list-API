const Task = require('../models/taskModel');

exports.getAllTasks = (req, res) => {
  Task.getAll((err, tasks) => {
    if (err) return res.status(500).send('Error retrieving tasks');
    res.status(200).json(tasks);
  });
};

exports.getTaskById = (req, res) => {
  const taskId = req.params.id;
  Task.getById(taskId, (err, task) => {
    if (err) return res.status(500).send('Error retrieving task');
    if (!task) return res.status(404).send('Task not found');
    res.status(200).json(task);
  });
};

exports.createTask = (req, res) => {
  const { name, description, category_id, user_id } = req.body;
  if (!name) return res.status(400).send('Task name is required');

  const newTask = { name, description, category_id, user_id };
  Task.create(newTask, (err, result) => {
    if (err) return res.status(500).send('Error creating task');
    res.status(201).json({ id: result.insertId, ...newTask });
  });
};

exports.updateTask = (req, res) => {
  const taskId = req.params.id;
  const { name, description, category_id, user_id } = req.body;

  const updatedTask = { name, description, category_id, user_id };
  Task.update(taskId, updatedTask, (err, result) => {
    if (err) return res.status(500).send('Error updating task');
    if (result.affectedRows === 0) return res.status(404).send('Task not found');
    res.status(200).json({ id: taskId, ...updatedTask });
  });
};

exports.partialUpdateTask = (req, res) => {
  const taskId = req.params.id;
  const { name } = req.body;

  Task.partialUpdate(taskId, name, (err) => {
    if (err) return res.status(500).send('Error partially updating task');
    res.status(200).send('Task partially updated successfully');
  });
};

exports.deleteTask = (req, res) => {
  const taskId = req.params.id;

  Task.delete(taskId, (err) => {
    if (err) return res.status(500).send('Error deleting task');
    res.status(200).send('Task deleted successfully');
  });
};
