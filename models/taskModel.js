const db = require('../config/db');

const Task = {
  getAll: (callback) => {
    const query = 'SELECT * FROM tasks';
    db.query(query, callback);
  },
  getById: (id, callback) => {
    const query = 'SELECT * FROM tasks WHERE id = ?';
    db.query(query, [id], callback);
  },
  create: (task, callback) => {
    const { name, description, category_id, user_id } = task;
    const query = 'INSERT INTO tasks (title, description, category_id, user_id) VALUES (?, ?, ?, ?)';
    db.query(query, [name, description, category_id, user_id], callback);
  },
  update: (id, task, callback) => {
    const { name, description, category_id, user_id } = task;
    const query = 'UPDATE tasks SET title = ?, description = ?, category_id = ?, user_id = ? WHERE id = ?';
    db.query(query, [name, description, category_id, user_id, id], callback);
  },
  partialUpdate: (id, name, callback) => {
    const query = 'UPDATE tasks SET name = COALESCE(?, name) WHERE id = ?';
    db.query(query, [name, id], callback);
  },
  delete: (id, callback) => {
    const query = 'DELETE FROM tasks WHERE id = ?';
    db.query(query, [id], callback);
  }
};

module.exports = Task;
