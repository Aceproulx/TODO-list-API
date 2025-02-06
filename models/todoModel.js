const db = require('../config/db');

const Todo = {
  getAll: (callback) => {
    const query = 'SELECT * FROM todos';
    db.query(query, callback);
  },
  getById: (id, callback) => {
    const query = 'SELECT * FROM todos WHERE id = ?';
    db.query(query, [id], callback);
  },
  create: (name, callback) => {
    const query = 'INSERT INTO todos (name) VALUES (?)';
    db.query(query, [name], callback);
  },
  update: (id, name, callback) => {
    const query = 'UPDATE todos SET name = ? WHERE id = ?';
    db.query(query, [name, id], callback);
  },
  partialUpdate: (id, name, callback) => {
    const query = 'UPDATE todos SET name = COALESCE(?, name) WHERE id = ?';
    db.query(query, [name, id], callback);
  },
  delete: (id, callback) => {
    const query = 'DELETE FROM todos WHERE id = ?';
    db.query(query, [id], callback);
  }
};

module.exports = Todo;