const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();
const User = require('../models/userModel');

exports.register = async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) return res.status(400).send('All fields are required');

  const hashedPassword = await bcrypt.hash(password, 10);
  User.create(username, email, hashedPassword, (err, result) => {
    if (err) return res.status(500).send('Error creating user');
    res.status(201).send('User registered successfully');
  });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).send('Email and password are required');

  User.findOne(email, (err, user) => {
    if (err) return res.status(500).send('Error finding user');
    if (!user) return res.status(400).send('Invalid email or password');

    bcrypt.compare(password, user.password, (err, validPassword) => {
      if (err) return res.status(500).send('Error comparing passwords');
      if (!validPassword) return res.status(400).send('Invalid email or password');

      const token = jwt.sign({ _id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.send({ token });
    });
  });
};

exports.logout = (req, res) => {
  res.status(200).send('Logged out successfully.');
};
