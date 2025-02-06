const db = require('../config/db');

const Category = {
  getAll: (callback) => {
    const query = 'SELECT * FROM categories';
    db.query(query, callback);
  },
  getById: (id, callback) => {
    const query = 'SELECT * FROM categories WHERE id = ?';
    db.query(query, [id], callback);
  },
  create: (name, callback) => {
    const query = 'INSERT INTO categories (name) VALUES (?)';
    db.query(query, [name], callback);
  },
  update: (id, name, callback) => {
    const query = 'UPDATE categories SET name = ? WHERE id = ?';
    db.query(query, [name, id], callback);
  },
  partialUpdate: (id, name, callback) => {
    const query = 'UPDATE categories SET name = COALESCE(?, name) WHERE id = ?';
    db.query(query, [name, id], callback);
  },
  delete: (id, callback) => {
    const query = 'DELETE FROM categories WHERE id = ?';
    db.query(query, [id], callback);
  }
};

module.exports = Category;