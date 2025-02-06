// filepath: /TODO-LIST-API/config/db.js
const mysql = require('mysql2');
require('dotenv').config();

let connection;

function connectToDatabase() {
  if (!connection) {
    connection = mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    });

    connection.connect((err) => {
      if (err) throw err;
      console.log('Connected to the database.');
    });
  }
  return connection;
}

module.exports = connectToDatabase();
